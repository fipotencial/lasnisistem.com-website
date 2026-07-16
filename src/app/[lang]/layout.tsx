import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { languages } from '@/lib/i18n/translations'
import LangProvider from '@/components/LangProvider'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import CookieConsent from '@/components/CookieConsent'
import '../globals.css'

const GA_ID = 'G-J22495JBKV'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const isValid = languages.some((l) => l.code === lang)
  if (!isValid) return {}

  const langLabels: Record<string, string> = {
    sl: 'sl_SI',
    en: 'en_US',
    de: 'de_DE',
    ru: 'ru_RU',
  }

  const locale = langLabels[lang] || 'sl_SI'
  const titles: Record<string, string> = {
    sl: 'Lasni Sistem® | Ekskluzivna rešitev za izpadanje las v Sloveniji',
    en: 'Hollywood Hair System® | Hair Loss Solutions in Slovenia',
    de: 'Hollywood Haarsystem® | Lösungen bei Haarausfall in Slowenien',
    ru: 'Hollywood Hair System® | Решения при выпадении волос в Словении',
  }
  const descriptions: Record<string, string> = {
    sl: 'Že 25 let zagotavljamo diskretne rešitve za izpadanje las, plešavost in alopecijo: lasni sistemi, lasulje in individualno svetovanje v Kranju.',
    en: 'Discreet solutions for hair loss, baldness and alopecia: custom hair systems, wigs and individual consultations in Kranj, Slovenia.',
    de: 'Diskrete Lösungen bei Haarausfall, Kahlheit und Alopezie: Haarsysteme, Perücken und individuelle Beratung in Kranj, Slowenien.',
    ru: 'Деликатные решения при выпадении волос, облысении и алопеции: системы волос, парики и индивидуальные консультации в Словении.',
  }
  const title = titles[lang] || titles.sl
  const description = descriptions[lang] || descriptions.sl

  return {
    metadataBase: new URL('https://www.lasnisistem.com'),
    title: {
      default: title,
      template: '%s | Lasni Sistem®',
    },
    description,
    keywords: [
      'lasni sistem',
      'izpadanje las',
      'plešavost',
      'alopecija',
      'lasulja',
      'HairArt',
      'Slovenija',
    ],
    authors: [{ name: 'Lasni Sistem®' }],
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
    // setting them here made every sub-page canonicalize to the homepage.
    // openGraph must be a complete object: Next.js replaces (not deep-merges)
    // the root layout's openGraph, so a partial one here would drop the image.
    openGraph: {
      type: 'website',
      siteName: 'Lasni Sistem®',
      title,
      description,
      locale,
      alternateLocale: ['sl_SI', 'en_US', 'de_DE', 'ru_RU'].filter((l) => l !== locale),
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
      title,
      description,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  const isValid = languages.some((l) => l.code === lang)
  if (!isValid) notFound()

  return (
    <html lang={lang} className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <LangProvider lang={lang}>
          <OrganizationSchema lang={lang} />
          {children}
          <CookieConsent gaId={GA_ID} />
        </LangProvider>
      </body>
    </html>
  )
}
