import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { languages } from '@/lib/i18n/translations'
import LangProvider from '@/components/LangProvider'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import CookieConsent from '@/components/CookieConsent'

const GA_ID = 'G-J22495JBKV'

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

  return {
    // alternates (canonical + hreflang) are set per-page via src/lib/seo.ts —
    // setting them here made every sub-page canonicalize to the homepage.
    // openGraph must be a complete object: Next.js replaces (not deep-merges)
    // the root layout's openGraph, so a partial one here would drop the image.
    openGraph: {
      type: 'website',
      siteName: 'Lasni Sistem®',
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
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  const isValid = languages.some((l) => l.code === lang)
  if (!isValid) notFound()

  return (
    <LangProvider lang={lang}>
      <OrganizationSchema lang={lang} />
      {children}
      <CookieConsent gaId={GA_ID} />
    </LangProvider>
  )
}
