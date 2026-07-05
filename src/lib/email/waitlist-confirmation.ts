/** Subject / preview text + HTML for the Early Access waitlist confirmation (Resend). */

import { getSupportEmail } from "@/lib/support-email";

export const WAITLIST_CONFIRMATION_SUBJECT =
  "MA UI Kit — You're on the Early Access waitlist";

export const WAITLIST_CONFIRMATION_PREHEADER =
  "You'll be the first to know when Early Access goes live at the lowest price.";

const bodyMuted = "#4B5563";
const footerMuted = "#6B7280";
const linkBlue = "#0043C0";


export function getWaitlistConfirmationHtml(opts: {
  unsubscribeHref: string;
  linkedInHref?: string;
}): string {
  const DOMAIN_URL = "https://madigitize.com/";
  const supportEmail = getSupportEmail();
  
  const { unsubscribeHref, linkedInHref = "https://www.linkedin.com/in/mher-avagyan-a649b7219/" } = opts;

  const preheader = `
<!-- Preheader (inbox preview) -->
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
  ${WAITLIST_CONFIRMATION_PREHEADER}
</div>
<div style="display:none;max-height:0;overflow:hidden;">
  &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
</div>`;

  return `${preheader}
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F4F4F5;margin:0;padding:24px 16px;font-family:Inter,system-ui,-apple-system,sans-serif;">
  <tr>
    <td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;background:#FFFFFF;border-radius:12px;border:1px solid #E5E7EB;">
        <tr>
          <td style="padding:28px 28px 20px;">
            <img src="${DOMAIN_URL}/logo.png" alt="MA" width="105" height="32" style="display:block; border:0; border-radius:8px;" />
            <div style="height:1px;background:#E5E7EB;margin:20px 0 24px;"></div>
            <h1 style="margin:0 0 16px;font-size:22px;line-height:1.25;color:#111827;font-weight:700;">
              MA UI Kit — You're on the Early Access waitlist
            </h1>
            <p style="margin:0;font-size:15px;line-height:1.6;color:${bodyMuted};">Hi there,</p>
            <p style="margin:0;font-size:15px;line-height:1.6;color:${bodyMuted};">
              Thanks for joining the Early Access waitlist for <strong style="color:#111827;">MA UI Kit — a modern design system for web apps.</strong>
            </p>
            <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:${bodyMuted};">
              You're now on the list to be notified first when <strong style="color:#111827;">version 0.9 (Early Access)</strong> launches.
              Early Access includes <strong style="color:#111827;">early pricing</strong> while the system is still actively being built and refined.
            </p>
            <p style="margin:0 0 10px;font-size:15px;line-height:1.6;color:#111827;font-weight:700;">What you can expect:</p>
            <ul style="margin:0 0 18px;padding:0 0 0 20px;color:${bodyMuted};font-size:15px;line-height:1.65;">
              <li style="margin-bottom:8px;">Access to MA UI Kit before the public release</li>
              <li style="margin-bottom:8px;">A significantly lower launch price</li>
              <li style="margin-bottom:0;">Ongoing updates as the system grows and evolves</li>
            </ul>
            <p style="margin:0;font-size:15px;line-height:1.6;color:${bodyMuted};">
              We'll email you as soon as Early Access is available. Thanks for supporting <strong style="color:#111827;">MA Digitize</strong> from the very beginning — it truly means a lot.
            </p>
            <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:#111827;">
              —<br />
              <strong>MA Digitize</strong><br />
              <span style="color:${footerMuted};font-size:14px;">Design Smarter</span>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px;">
            <div style="height:1px;background:#E5E7EB;margin:0 0 20px;"></div>
            <p style="margin:0 0 12px;font-size:13px;line-height:1.6;color:${footerMuted};">
              You're receiving this email because you joined the MA UI Kit Early Access waitlist on the MA Digitize website.
              Want to stop receiving these emails?
              <a href="${unsubscribeHref}" style="color:${linkBlue};text-decoration:underline;">Unsubscribe</a>.
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="vertical-align:middle;">
                  <p style="margin:0;font-size:13px;line-height:1.6;color:${footerMuted};">
                    Have questions? We're here →
                    <a href="mailto:${supportEmail}" style="color:${linkBlue};text-decoration:underline;">${supportEmail}</a>.
                  </p>
                  <p style="margin:12px 0 0;font-size:12px;color:${footerMuted};">© 2026 MA Digitize. All Rights Reserved.</p>
                </td>
                <td align="right" style="vertical-align:bottom;padding-left:12px;">
                  <a href="${linkedInHref}" style="display:inline-block;text-decoration:none;color:${footerMuted};" aria-label="LinkedIn">
                    <img src="${DOMAIN_URL}/linkedin.png" alt="LinkedIn" width="22" height="22" style="display:block; border:0;" />  
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
