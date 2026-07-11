import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HybridPageContent from '@/components/HybridPageContent'
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
    sl: 'Hibridni lasni sistemi za moške in ženske',
    en: 'Hybrid Hair Systems for Men and Women',
    de: 'Hybrid-Haarsysteme für Männer und Frauen',
    ru: 'Гибридные системы волос',
  }
  const descriptions: Record<string, string> = {
    sl: 'Hibridni sistemi za moške in ženske iz najkvalitetnejših evropskih las. Cenovno ugodnejši od Hollywood Lasnega sistema®.',
    en: 'Hybrid systems for men and women made from the finest European hair. More affordable than the Hollywood Hair System®.',
    de: 'Hybridsysteme für Männer und Frauen aus hochwertigstem europäischem Haar. Günstiger als das Hollywood Haarsystem®.',
    ru: 'Гибридные системы для мужчин и женщин из высококачественных европейских волос. Доступнее Голливудской Системы Волос®.',
  }
  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, '/hibridni-sistemi'),
  }
}

export default async function HybridPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'
  const t = translations[lang]

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <HybridPageContent lang={lang} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
