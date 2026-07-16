import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WigsPageContent from '@/components/WigsPageContent'
import { translations, languages } from '@/lib/i18n/translations'
import { buildAlternates } from '@/lib/seo'
import { lasuljeFaq } from '@/lib/lasuljeFaq'
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
    sl: 'Lasulja po meri iz evropskih las',
    en: 'Wigs – Custom European Hair',
    de: 'Perücken – Europäisches Echthaar',
    ru: 'Парики из европейских волос',
  }
  const descriptions: Record<string, string> = {
    sl: 'Vrhunska lasulja iz 100 % evropskih las – ženske lasulje, lasni vložki in baze po meri. Naraven videz in diskretno svetovanje v Kranju.',
    en: 'European hair wigs, available in various models and bases. Elevate your look with our premium women\'s wigs and hair toppers.',
    de: 'Europäische Echthaarperücken, in verschiedenen Modellen und Basen erhältlich. Werten Sie Ihren Look mit unseren Premium-Perücken für Damen auf.',
    ru: 'Парики из европейских волос, доступны в различных моделях и основах. Подчеркните свой образ нашими премиальными женскими париками.',
  }
  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, '/lasulje'),
  }
}

export default async function WigsPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'
  const t = translations[lang]
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: lasuljeFaq.map((item) => ({
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
      {lang === 'sl' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navigation lang={lang} t={t} variant="light" />
      <WigsPageContent lang={lang} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
