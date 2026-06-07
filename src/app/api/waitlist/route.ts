import { NextResponse } from "next/server";
import { getWaitlistPool } from "@/lib/db";
import {
  getWaitlistConfirmationHtml,
  WAITLIST_CONFIRMATION_SUBJECT,
} from "@/lib/email/waitlist-confirmation";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function isPgUniqueViolation(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code?: string }).code === "23505"
  );
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
    const result = await pool.query<{
      id: string;
      email: string;
      created_at: Date;
    }>(
      `INSERT INTO waitlist (email)
       VALUES ($1)
       RETURNING id, email, created_at`,
      [email],
    );

    const row = result.rows[0];

    try {
      const from =
        process.env.RESEND_FROM ?? "MA Digitize <onboarding@resend.dev>";
      const unsubscribeHref =
        process.env.WAITLIST_UNSUBSCRIBE_URL ?? "https://example.com";
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
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json(
      { message: "Joined successfully", data: row },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (isPgUniqueViolation(error)) {
      return NextResponse.json(
        { error: "You are already on the list!" },
        { status: 409 },
      );
    }

    console.error(error);
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
