import { getWaitlistPool } from "@/lib/db";

export function getSiteUrl(): string {
  const url =
    process.env.SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://madigitize.com";
  return url.replace(/\/$/, "");
}

export function getWaitlistUnsubscribeUrl(token: string): string {
  return `${getSiteUrl()}/unsubscribe?token=${encodeURIComponent(token)}`;
}

export type UnsubscribeResult =
  | { ok: true; email: string }
  | { ok: false; reason: "invalid_token" | "already_unsubscribed" };

export async function unsubscribeFromWaitlist(
  token: string,
): Promise<UnsubscribeResult> {
  const trimmed = token.trim();
  if (!trimmed) {
    return { ok: false, reason: "invalid_token" };
  }

  const pool = getWaitlistPool();

  const updated = await pool.query<{ email: string }>(
    `UPDATE waitlist
     SET unsubscribed_at = NOW()
     WHERE unsubscribe_token = $1 AND unsubscribed_at IS NULL
     RETURNING email`,
    [trimmed],
  );

  if ((updated.rowCount ?? 0) > 0) {
    return { ok: true, email: updated.rows[0].email };
  }

  const existing = await pool.query<{ email: string }>(
    `SELECT email FROM waitlist WHERE unsubscribe_token = $1 AND unsubscribed_at IS NOT NULL`,
    [trimmed],
  );

  if ((existing.rowCount ?? 0) > 0) {
    return { ok: false, reason: "already_unsubscribed" };
  }

  return { ok: false, reason: "invalid_token" };
}
