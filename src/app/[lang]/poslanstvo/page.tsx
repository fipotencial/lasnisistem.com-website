import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutPageContent from '@/components/AboutPageContent'
import { translations, languages } from '@/lib/i18n/translations'
import { buildAlternates } from '@/lib/seo'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const titles: Record<string, string> = {
    sl: 'Kdo smo / Naše poslanstvo',
    en: 'Who We Are / Our Mission',
    de: 'Wer Wir Sind / Unsere Mission',
    ru: 'Кто Мы / Наша миссия',
  }

  return {
    title: titles[lang] || titles.sl,
    description: 'Smo lastniki franšize za prodajo Hollywood Lasnih sistemov® za področje celotne Evrope. Spoznajte našo ekipo in poslanstvo.',
    alternates: buildAlternates(lang, '/poslanstvo'),
  }
}

export default async function AboutPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'

  const t = translations[lang]

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <AboutPageContent lang={lang} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
