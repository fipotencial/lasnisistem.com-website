import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BaldnessPageContent from '@/components/BaldnessPageContent'
import { translations, languages } from '@/lib/i18n/translations'
import { buildAlternates } from '@/lib/seo'
import { plesavostFaq } from '@/lib/plesavostFaq'
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
    sl: 'Plešavost – vzroki, vrste in rešitve',
    en: 'Baldness – Causes, Types and Solutions',
    de: 'Kahlheit – Ursachen, Formen und Lösungen',
    ru: 'Облысение – причины, виды и решения',
  }
  const descriptions: Record<string, string> = {
    sl: 'Kaj povzroča plešavost pri moških in ženskah? Norwood-Hamiltonova in Ludwigova lestvica, vzroki ter poštena primerjava rešitev: lasni sistem, lasulja ali presaditev las.',
    en: 'What causes baldness in men and women? The Norwood-Hamilton and Ludwig scales, causes and an honest comparison of solutions: hair system, wig or hair transplant.',
    de: 'Was verursacht Kahlheit bei Männern und Frauen? Norwood-Hamilton- und Ludwig-Skala, Ursachen und ein ehrlicher Vergleich der Lösungen: Haarsystem, Perücke oder Haartransplantation.',
    ru: 'Что вызывает облысение у мужчин и женщин? Шкалы Норвуда-Гамильтона и Людвига, причины и честное сравнение решений: система волос, парик или пересадка волос.',
  }
  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, '/plesavost'),
  }
}

export default async function BaldnessPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'
  const t = translations[lang]

  const faq = plesavostFaq[lang] || plesavostFaq.sl
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation lang={lang} t={t} variant="light" />
      <BaldnessPageContent lang={lang} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
