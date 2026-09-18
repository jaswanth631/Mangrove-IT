import { siteConfig } from "@/lib/data/site";
import { EMAIL_LOGO_DARK_CID, EMAIL_LOGO_LIGHT_CID } from "@/lib/email/logo";

const LIGHT = {
  primary: "#16a34a",
  accent: "#0891b2",
  bg: "#f8fafc",
  card: "#ffffff",
  header: "#ffffff",
  text: "#1e293b",
  muted: "#64748b",
  border: "#e2e8f0",
  highlight: "#f0fdf4",
};

const DARK = {
  primary: "#4ade80",
  accent: "#22d3ee",
  bg: "#0f172a",
  card: "#1e293b",
  header: "#0f172a",
  text: "#f1f5f9",
  muted: "#94a3b8",
  border: "#334155",
  highlight: "#1a2e1a",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailStyles(): string {
  return `
    :root { color-scheme: light dark; }
    body { margin: 0; padding: 0; }
    .logo-light { display: none !important; max-height: 0; overflow: hidden; }
    .logo-dark { display: block !important; max-height: none; }
    .email-bg { background-color: ${LIGHT.bg}; }
    .email-card { background-color: ${LIGHT.card}; border-color: ${LIGHT.border}; }
    .email-header { background-color: #ffffff; border-bottom: 3px solid ${LIGHT.primary}; padding: 0 !important; }
    .email-header-tagline { background-color: #ffffff; }
    .email-body { background-color: ${LIGHT.card}; }
    .email-footer { background-color: ${LIGHT.highlight}; border-top: 1px solid ${LIGHT.border}; }
    .text-primary { color: ${LIGHT.text}; }
    .text-muted { color: ${LIGHT.muted}; }
    .text-brand { color: ${LIGHT.primary}; }
    .text-link { color: ${LIGHT.accent}; }
    .box-highlight { background-color: ${LIGHT.highlight}; border-color: ${LIGHT.border}; }
    .box-inner { background-color: #ffffff; border-color: ${LIGHT.border}; }
    @media (prefers-color-scheme: dark) {
      .logo-light { display: block !important; max-height: none; }
      .logo-dark { display: none !important; max-height: 0; overflow: hidden; }
      .email-bg { background-color: ${DARK.bg} !important; }
      .email-card { background-color: ${DARK.card} !important; border-color: ${DARK.border} !important; }
      .email-header { background-color: #000000 !important; border-bottom-color: ${DARK.primary} !important; padding: 0 !important; }
      .email-header-tagline { background-color: #000000 !important; }
      .email-body { background-color: ${DARK.card} !important; }
      .email-footer { background-color: ${DARK.highlight} !important; border-top-color: ${DARK.border} !important; }
      .text-primary { color: ${DARK.text} !important; }
      .text-muted { color: ${DARK.muted} !important; }
      .text-brand { color: ${DARK.primary} !important; }
      .text-link { color: ${DARK.accent} !important; }
      .box-highlight { background-color: ${DARK.highlight} !important; border-color: ${DARK.border} !important; }
      .box-inner { background-color: ${DARK.bg} !important; border-color: ${DARK.border} !important; }
    }
  `.trim();
}

function emailLogoBlock(): string {
  return `
    <img
      src="cid:${EMAIL_LOGO_DARK_CID}"
      alt="${siteConfig.legalName}"
      width="600"
      height="76"
      class="logo-dark"
      style="display:block;width:100%;max-width:600px;height:auto;margin:0;border:0;line-height:0;"
    />
    <img
      src="cid:${EMAIL_LOGO_LIGHT_CID}"
      alt="${siteConfig.legalName}"
      width="600"
      height="75"
      class="logo-light"
      style="display:none;width:100%;max-width:600px;height:auto;margin:0;border:0;line-height:0;"
    />
  `;
}

function emailLayout(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>Mangrove Integrated Solutions</title>
  <style>${emailStyles()}</style>
</head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-bg" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" class="email-card" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;border:1px solid ${LIGHT.border};">
          <tr>
            <td class="email-header" style="padding:0;text-align:center;line-height:0;">
              ${emailLogoBlock()}
            </td>
          </tr>
          <tr>
            <td class="email-header-tagline" style="padding:10px 24px 16px;text-align:center;">
              <p class="text-muted" style="margin:0;font-size:12px;letter-spacing:0.3px;line-height:1.4;">
                ${siteConfig.tagline}
              </p>
            </td>
          </tr>
          <tr>
            <td class="email-body" style="padding:32px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td class="email-footer" style="padding:20px 32px;">
              <p class="text-muted" style="margin:0;font-size:12px;line-height:1.6;text-align:center;">
                Mangrove Integrated Solutions Pvt. Ltd.<br />
                Plot No. 23, 3rd Cross, SCR Layout, Anjanapura,<br />
                JP Nagar 9th Phase, Bangalore 560108<br />
                <a href="mailto:suresh@mangroveit.com" class="text-brand" style="text-decoration:none;">suresh@mangroveit.com</a>
                &nbsp;·&nbsp;
                <a href="tel:+919343831500" class="text-brand" style="text-decoration:none;">+91 93438 31500</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

export function contactNotificationTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const content = `
    <h2 class="text-primary" style="margin:0 0 8px;font-size:20px;">New Contact Form Submission</h2>
    <p class="text-muted" style="margin:0 0 24px;font-size:14px;">
      A new enquiry was submitted via the website contact form.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="box-highlight" style="border-radius:8px;border:1px solid ${LIGHT.border};">
      <tr>
        <td style="padding:20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td class="text-muted" style="padding:8px 0;font-size:13px;width:100px;vertical-align:top;">Name</td>
              <td class="text-primary" style="padding:8px 0;font-size:14px;font-weight:600;">${safeName}</td>
            </tr>
            <tr>
              <td class="text-muted" style="padding:8px 0;font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:8px 0;font-size:14px;">
                <a href="mailto:${safeEmail}" class="text-link" style="text-decoration:none;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td class="text-muted" style="padding:8px 0;font-size:13px;vertical-align:top;">Phone</td>
              <td class="text-primary" style="padding:8px 0;font-size:14px;">${safePhone}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-muted" style="padding:16px 0 8px;font-size:13px;">Message</td>
            </tr>
            <tr>
              <td colspan="2" class="text-primary box-inner" style="padding:12px 16px;border-radius:6px;border:1px solid ${LIGHT.border};font-size:14px;line-height:1.6;">
                ${safeMessage}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <p class="text-muted" style="margin:24px 0 0;font-size:12px;">
      Reply directly to this email to respond to ${safeName}.
    </p>
  `;

  return emailLayout(content);
}

export function contactAutoReplyTemplate({ name }: { name: string }): string {
  const safeName = escapeHtml(name);

  const content = `
    <h2 class="text-primary" style="margin:0 0 8px;font-size:20px;">Thank you for contacting us!</h2>
    <p class="text-muted" style="margin:0 0 20px;font-size:14px;">
      Hi ${safeName},
    </p>
    <p class="text-primary" style="margin:0 0 16px;font-size:15px;line-height:1.7;">
      Thanks for reaching out to <strong class="text-brand">Mangrove Integrated Solutions</strong>.
      We have received your message and our team will get back to you shortly.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="box-highlight" style="margin:24px 0;border-radius:8px;border-left:4px solid ${LIGHT.primary};">
      <tr>
        <td style="padding:16px 20px;">
          <p class="text-muted" style="margin:0;font-size:13px;line-height:1.6;">
            <strong class="text-primary">What happens next?</strong><br />
            Our engineering team will review your requirements and respond within 1–2 business days.
          </p>
        </td>
      </tr>
    </table>
    <p class="text-primary" style="margin:0;font-size:14px;line-height:1.7;">
      For urgent enquiries, call us at
      <a href="tel:+919343831500" class="text-link" style="text-decoration:none;font-weight:600;">+91 93438 31500</a>.
    </p>
  `;

  return emailLayout(content);
}
