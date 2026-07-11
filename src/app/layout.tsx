import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lasnisistem.com'),
  title: {
    default: 'Lasni Sistem® | Ekskluzivna rešitev za izpadanje las v Sloveniji',
    template: '%s | Lasni Sistem®',
  },
  description:
    'Ekskluzivna evropska franšiza ameriškega HairArt lasnega sistema. Že 25 let zagotavljamo diskretne in tehnološko najnaprednejše rešitve za izpadanje las v Sloveniji.',
  keywords: [
    'lasni sistem',
    'izpadanje las',
    'alopecia',
    'HairArt',
    'Hollywood lasni hybrid',
    'lasni nadomestek',
    'Slovenija',
  ],
  authors: [{ name: 'Lasni Sistem®' }],
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    alternateLocale: ['en_US', 'de_DE', 'ru_RU'],
    url: 'https://www.lasnisistem.com',
    siteName: 'Lasni Sistem®',
    title: 'Lasni Sistem® | Ekskluzivna rešitev za izpadanje las v Sloveniji',
    description:
      'Ekskluzivna evropska franšiza ameriškega HairArt lasnega sistema. Že 25 let zagotavljamo diskretne in tehnološko najnaprednejše rešitve za izpadanje las.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lasni Sistem®',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lasni Sistem® | Ekskluzivna rešitev za izpadanje las v Sloveniji',
    description:
      'Ekskluzivna evropska franšiza ameriškega HairArt lasnega sistema.',
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
  // alternates (canonical + hreflang) are set per-page via src/lib/seo.ts —
  // a layout-level canonical would be inherited by every page and mark them
  // all as duplicates of the homepage.
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
