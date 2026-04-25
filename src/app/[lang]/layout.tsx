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

  return {
    alternates: {
      canonical: `https://www.lasnisistem.com/${lang}`,
      languages: {
        'x-default': 'https://www.lasnisistem.com/sl',
        'sl-SI': 'https://www.lasnisistem.com/sl',
        'en-US': 'https://www.lasnisistem.com/en',
        'de-DE': 'https://www.lasnisistem.com/de',
        'ru-RU': 'https://www.lasnisistem.com/ru',
      },
    },
    openGraph: {
      locale: langLabels[lang] || 'sl_SI',
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
