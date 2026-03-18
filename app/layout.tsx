import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { ModalProvider } from '@/context/ModalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mangrove IT - Professional IT Solutions',
    template: '%s | Mangrove IT'
  },
  description: 'Professional Audio Visual, IT Integration, Security & Surveillance, and Industrial Computing Solutions. Transform your digital vision into reality with our expert IT services.',
  keywords: ['IT Solutions', 'Audio Visual', 'Security Systems', 'Industrial Computing', 'IT Integration', 'Surveillance', 'Professional IT Services'],
  authors: [{ name: 'Mangrove IT Team' }],
  creator: 'Mangrove IT',
  publisher: 'Mangrove IT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mangroveit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mangrove IT - Professional IT Solutions',
    description: 'Professional Audio Visual, IT Integration, Security & Surveillance, and Industrial Computing Solutions',
    url: 'https://mangroveit.com',
    siteName: 'Mangrove IT',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mangrove IT Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mangrove IT - Professional IT Solutions',
    description: 'Professional Audio Visual, IT Integration, Security & Surveillance, and Industrial Computing Solutions',
    images: ['/images/twitter-image.jpg'],
    creator: '@mangroveit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ModalProvider>
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 