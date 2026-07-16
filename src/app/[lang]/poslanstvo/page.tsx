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
  const descriptions: Record<string, string> = {
    sl: 'Smo lastniki franšize za prodajo Hollywood Lasnih sistemov® za področje celotne Evrope. Spoznajte našo ekipo in poslanstvo.',
    en: 'Meet the team and mission behind Hollywood Hair System® solutions in Europe and our long-standing experience with hair loss.',
    de: 'Lernen Sie das Team, die Mission und die langjährige Erfahrung hinter den Hollywood Haarsystem® Lösungen in Europa kennen.',
    ru: 'Познакомьтесь с нашей командой, миссией и многолетним опытом работы с решениями Hollywood Hair System® в Европе.',
  }

  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
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
