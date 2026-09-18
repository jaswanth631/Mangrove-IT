import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mangrove IT | AV, IT, Interior, Acoustics & Electrical Solutions",
    template: "%s | Mangrove IT",
  },
  description:
    "Mangrove Integrated Solutions — professional AV integration, IT infrastructure, interior & acoustic engineering, and electrical projects for commercial, corporate and industrial spaces in Bangalore.",
  keywords: [
    "AV Integration",
    "IT Integration",
    "Interior Acoustics",
    "Electrical Projects",
    "Systems Integration",
    "Bangalore",
    "Mangrove IT",
    "Audio Visual",
    "Smart Workspace",
    "Enterprise Technology",
  ],
  authors: [{ name: "Mangrove IT Team" }],
  creator: "Mangrove Integrated Solutions Pvt. Ltd.",
  publisher: "Mangrove IT",
  metadataBase: new URL("https://mangroveit.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mangrove IT | AV, IT, Interior, Acoustics & Electrical Solutions",
    description:
      "Engineering smarter environments through AV, IT Infrastructure, mart Building olutions and Turnkey Technology Projects.",
    url: "https://mangroveit.com",
    siteName: "Mangrove IT",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050a14" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
