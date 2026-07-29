/** Internal alert when someone joins the Early Access waitlist. */

export const WAITLIST_SUPPORT_NOTIFICATION_SUBJECT =
  "New waitlist signup — MA UI Kit";

export function getWaitlistSupportNotificationHtml(opts: {
  email: string;
  createdAt?: Date | string;
}): string {
  const createdAtLabel = opts.createdAt
    ? new Date(opts.createdAt).toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "UTC",
      }) + " UTC"
    : "just now";

  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F4F4F5;margin:0;padding:24px 16px;font-family:Inter,system-ui,-apple-system,sans-serif;">
  <tr>
    <td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;background:#FFFFFF;border-radius:12px;border:1px solid #E5E7EB;">
        <tr>
          <td style="padding:28px;">
            <h1 style="margin:0 0 16px;font-size:20px;line-height:1.25;color:#111827;font-weight:700;">
              New waitlist signup
            </h1>
            <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#4B5563;">
              Someone just joined the MA UI Kit Early Access waitlist.
            </p>
            <p style="margin:0 0 4px;font-size:15px;line-height:1.6;color:#4B5563;">
              <strong style="color:#111827;">Email:</strong>
              <a href="mailto:${opts.email}" style="color:#0043C0;text-decoration:underline;">${opts.email}</a>
            </p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:#4B5563;">
              <strong style="color:#111827;">Joined:</strong> ${createdAtLabel}
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
