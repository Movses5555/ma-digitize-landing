/** Subject / preview text + HTML for the Early Access waitlist confirmation (Resend). */

export const WAITLIST_CONFIRMATION_SUBJECT =
  "MA UI Kit — You're on the Early Access waitlist";

export const WAITLIST_CONFIRMATION_PREHEADER =
  "You'll be the first to know when Early Access goes live at the lowest price.";

const brandBlue = "#0043C0";
const bodyMuted = "#4B5563";
const footerMuted = "#6B7280";
const linkBlue = "#0043C0";

/** Logo row: table + inline styles only (no className). SVG gradient IDs prefixed for uniqueness. */
function emailHeaderLogoBlock(): string {
  const gid0 = "waitlist_logo_g0";
  const gid1 = "waitlist_logo_g1";
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="vertical-align:middle;padding-right:10px;">
      <div style="width:32px;height:32px;padding:4px;box-sizing:border-box;background:${brandBlue};border-radius:8px;box-shadow:inset 0 2px 4px rgba(0,0,0,0.25);text-align:center;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="right" style="height:6px;line-height:6px;padding:0 0 2px 0;">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                <path d="M1.85004 0L1.85004 6M4.14999 0L4.14999 6" stroke="url(#${gid0})" stroke-width="0.3"/>
                <path d="M0 1.84961H6M0 4.14966H6" stroke="url(#${gid1})" stroke-width="0.3"/>
                <defs>
                  <linearGradient id="${gid0}" x1="3.5" y1="0" x2="3.5" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.525" stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="${gid1}" x1="0" y1="4.79968" x2="6" y2="4.79968" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.525" stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </td>
          </tr>
          <tr>
            <td align="center" style="height:12px;line-height:12px;">
              <span style="font-size:12px;font-weight:700;color:#FFFFFF;line-height:20px;">MA</span>
            </td>
          </tr>
        </table>
      </div>
    </td>
    <td style="vertical-align:middle;text-align:left;">
      <p style="margin:4px 0 2px;font-size:11px;font-weight:700;line-height:11px;color:${brandBlue};">DIGITIZE</p>
      <p style="margin:0;font-size:8px;font-weight:400;line-height:8px;color:${brandBlue};">Design Smarter</p>
    </td>
  </tr>
</table>`;
}

export function getWaitlistConfirmationHtml(opts: {
  unsubscribeHref: string;
  linkedInHref?: string;
}): string {
  const { unsubscribeHref, linkedInHref = "https://www.linkedin.com" } = opts;

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
            ${emailHeaderLogoBlock()}
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
                    <a href="mailto:hello@madigitize.com" style="color:${linkBlue};text-decoration:underline;">hello@madigitize.com</a>.
                  </p>
                  <p style="margin:12px 0 0;font-size:12px;color:${footerMuted};">© 2026 MA Digitize. All Rights Reserved.</p>
                </td>
                <td align="right" style="vertical-align:bottom;padding-left:12px;">
                  <a href="${linkedInHref}" style="display:inline-block;text-decoration:none;color:${footerMuted};" aria-label="LinkedIn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#374151" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
