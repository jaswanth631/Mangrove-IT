import fs from "fs";
import path from "path";

export const EMAIL_LOGO_LIGHT_CID = "mangrove-logo-light";
export const EMAIL_LOGO_DARK_CID = "mangrove-logo-dark";

const LOGOS = {
  light: "mangrove_logo_email_light.jpg",
  dark: "mangrove_logo_email_dark.jpg",
} as const;

function getLogoPath(filename: string): string {
  return path.join(process.cwd(), "public", filename);
}

function createLogoAttachment(filename: string, cid: string) {
  const logoPath = getLogoPath(filename);

  if (!fs.existsSync(logoPath)) {
    throw new Error(`Email logo not found at ${logoPath}`);
  }

  return {
    filename,
    path: logoPath,
    cid,
    contentType: "image/jpeg",
    contentDisposition: "inline" as const,
  };
}

export function getEmailLogoAttachments() {
  return [
    createLogoAttachment(LOGOS.light, EMAIL_LOGO_LIGHT_CID),
    createLogoAttachment(LOGOS.dark, EMAIL_LOGO_DARK_CID),
  ];
}
