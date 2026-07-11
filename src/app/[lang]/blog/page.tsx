import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogListPage from '@/components/BlogListPage'
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
    sl: 'Blog – članki o izpadanju las in plešavosti',
    en: 'Blog – Hair Loss Articles',
    de: 'Blog – Artikel über Haarausfall',
    ru: 'Блог – статьи о выпадении волос',
  }

  const descriptions: Record<string, string> = {
    sl: 'Strokovni članki o izpadanju las, plešavosti, alopeciji, lasuljah in Lasnem sistemu®. Preberite naše vodiče in spoznajte rešitve.',
    en: 'Expert articles on hair loss, Hair System®, alopecia and care. Read our guides and discover solutions.',
    de: 'Fachartikel über Haarausfall, Haarsystem®, Alopezie und Pflege. Lesen Sie unsere Leitfäden und entdecken Sie Lösungen.',
    ru: 'Экспертные статьи о выпадении волос, системе волос, алопеции и уходе. Читайте наши руководства и откройте решения.',
  }

  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, '/blog'),
  }
}

export default async function BlogPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'

  const t = translations[lang]

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <BlogListPage lang={lang} t={t} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
