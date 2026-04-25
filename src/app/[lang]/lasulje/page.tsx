import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WigsPageContent from '@/components/WigsPageContent'
import { translations, languages } from '@/lib/i18n/translations'
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
    sl: 'Lasulje | Lasni Sistem®',
    en: 'Wigs | Hollywood Hair System®',
    de: 'Perücken | Hollywood Hair System®',
    ru: 'Парики | Hollywood Hair System®',
  }
  const descriptions: Record<string, string> = {
    sl: 'Lasulje iz evropskih las, na voljo v različnih modelih in bazah. Izboljšajte svoj videz z našimi vrhunskimi ženskimi lasuljami in lasnimi vložki.',
    en: 'European hair wigs, available in various models and bases. Elevate your look with our premium women\'s wigs and hair toppers.',
    de: 'Europäische Echthaarperücken, in verschiedenen Modellen und Basen erhältlich. Werten Sie Ihren Look mit unseren Premium-Perücken für Damen auf.',
    ru: 'Парики из европейских волос, доступны в различных моделях и основах. Подчеркните свой образ нашими премиальными женскими париками.',
  }
  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
  }
}

export default async function WigsPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'
  const t = translations[lang]

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <WigsPageContent lang={lang} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
