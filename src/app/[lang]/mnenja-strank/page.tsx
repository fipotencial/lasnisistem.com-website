import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TestimonialsPageContent from '@/components/TestimonialsPageContent'
import { translations, languages } from '@/lib/i18n/translations'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ lang: string }>
}

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const titles: Record<string, string> = {
    sl: 'Mnenja strank | Lasni Sistem®',
    en: 'Customer Testimonials | Hollywood Hair System®',
    de: 'Kundenmeinungen | Hollywood Hair System®',
    ru: 'Отзывы клиентов | Hollywood Hair System®',
  }
  const descriptions: Record<string, string> = {
    sl: 'Preberite resnične zgodbe naših strank, ki so z Lasnim sistemom® ponovno zaživele.',
    en: 'Read real stories from our clients whose lives were transformed by the Hair System®.',
    de: 'Lesen Sie wahre Geschichten unserer Kunden, deren Leben durch das Haarsystem® verändert wurde.',
    ru: 'Читайте реальные истории наших клиентов, чью жизнь изменила Система Волос®.',
  }

  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
  }
}

export default async function TestimonialsPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'

  const t = translations[lang]

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <TestimonialsPageContent lang={lang} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
