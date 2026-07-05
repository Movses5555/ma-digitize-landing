import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { getWaitlistPool } from "@/lib/db";
import {
  getWaitlistConfirmationHtml,
  WAITLIST_CONFIRMATION_SUBJECT,
} from "@/lib/email/waitlist-confirmation";
import { getWaitlistUnsubscribeUrl } from "@/lib/waitlist/unsubscribe";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type WaitlistRow = {
  id: string;
  email: string;
  created_at: Date;
  unsubscribe_token: string;
};

async function sendWaitlistConfirmation(email: string, unsubscribeToken: string) {
  const from =
    process.env.RESEND_FROM ?? "MA Digitize <onboarding@resend.dev>";
  const unsubscribeHref = getWaitlistUnsubscribeUrl(unsubscribeToken);
  const linkedInHref = process.env.COMPANY_LINKEDIN_URL;

  await resend.emails.send({
    from,
    to: email,
    subject: WAITLIST_CONFIRMATION_SUBJECT,
    html: getWaitlistConfirmationHtml({
      unsubscribeHref,
      ...(linkedInHref ? { linkedInHref } : {}),
    }),
  });
}

export async function POST(request: Request) {
  try {
    const { email: rawEmail } = await request.json();

    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const email = rawEmail.trim().toLowerCase();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const pool = getWaitlistPool();
    const existing = await pool.query<{
      unsubscribed_at: Date | null;
    }>(`SELECT unsubscribed_at FROM waitlist WHERE email = $1`, [email]);

    let row: WaitlistRow;

    if (existing.rows.length > 0) {
      if (existing.rows[0].unsubscribed_at === null) {
        return NextResponse.json(
          { error: "You are already on the list!" },
          { status: 409 },
        );
      }

      const unsubscribeToken = randomUUID();
      const resubscribed = await pool.query<WaitlistRow>(
        `UPDATE waitlist
         SET unsubscribed_at = NULL, unsubscribe_token = $2
         WHERE email = $1 AND unsubscribed_at IS NOT NULL
         RETURNING id, email, created_at, unsubscribe_token`,
        [email, unsubscribeToken],
      );

      row = resubscribed.rows[0];
    } else {
      const unsubscribeToken = randomUUID();
      const inserted = await pool.query<WaitlistRow>(
        `INSERT INTO waitlist (email, unsubscribe_token)
         VALUES ($1, $2)
         RETURNING id, email, created_at, unsubscribe_token`,
        [email, unsubscribeToken],
      );

      row = inserted.rows[0];
    }

    try {
      await sendWaitlistConfirmation(email, row.unsubscribe_token);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json(
      { message: "Joined successfully", data: row },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
