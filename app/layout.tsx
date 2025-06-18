import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DropdownProvider } from '../context/DropdownContext';
import BlurOverlay from '../components/BlurOverlay';

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <DropdownProvider>
          <BlurOverlay />
          {children}
        </DropdownProvider>
      </body>
    </html>
  )
} 