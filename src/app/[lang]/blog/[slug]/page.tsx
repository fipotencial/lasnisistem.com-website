import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogArticlePage from '@/components/BlogArticlePage'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { translations, languages } from '@/lib/i18n/translations'
import { getArticleBySlugAndLang, getAllSlugsForLang } from '@/lib/blog/articles'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const l of languages) {
    const slugs = getAllSlugsForLang(l.code)
    for (const slug of slugs) {
      params.push({ lang: l.code, slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const article = getArticleBySlugAndLang(slug, lang)
  if (!article) return {}

  return {
    title: `${article.title} | Lasni Sistem®`,
    description: article.excerpt,
  }
}

export default async function BlogArticleRoute({ params }: Props) {
  const { lang: rawLang, slug } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'

  const article = getArticleBySlugAndLang(slug, lang)
  if (!article) {
    notFound()
  }

  const t = translations[lang]

  const BASE_URL = 'https://www.lasnisistem.com'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `${BASE_URL}${article.image}`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    timeRequired: `PT${article.readTime}M`,
    author: {
      '@type': 'Organization',
      name: 'Lasni Sistem®',
      '@id': `${BASE_URL}/#organization`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: lang,
    url: `${BASE_URL}/${lang}/blog/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/${lang}/blog/${article.slug}`,
    },
    keywords: ['lasni sistem', 'izpadanje las', 'alopecia', 'Hollywood Hair System'],
  }

  const breadcrumbLabels: Record<string, { home: string; blog: string }> = {
    sl: { home: 'Domov', blog: 'Blog' },
    en: { home: 'Home', blog: 'Blog' },
    de: { home: 'Startseite', blog: 'Blog' },
    ru: { home: 'Главная', blog: 'Блог' },
  }
  const labels = breadcrumbLabels[lang] ?? breadcrumbLabels.sl

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: labels.home, url: `${BASE_URL}/${lang}` },
          { name: labels.blog, url: `${BASE_URL}/${lang}/blog` },
          { name: article.title, url: `${BASE_URL}/${lang}/blog/${article.slug}` },
        ]}
      />
      <Navigation lang={lang} t={t} variant="light" />
      <BlogArticlePage lang={lang} t={t} article={article} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
