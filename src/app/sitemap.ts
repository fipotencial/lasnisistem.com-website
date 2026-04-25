import type { MetadataRoute } from 'next'
import { getAllSlugsForLang, getArticleBySlugAndLang } from '@/lib/blog/articles'

const BASE_URL = 'https://www.lasnisistem.com'
const LANGUAGES = ['sl', 'en', 'de', 'ru']

const STATIC_PAGES = [
  '',
  '/hibridni-sistemi',
  '/lasulje',
  '/kontakt',
  '/poslanstvo',
  '/mnenja-strank',
  '/mediji',
  '/svetovalni-studio',
  '/pravno-obvestilo',
  '/blog',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages — sl gets full priority; other languages deprioritised
  for (const lang of LANGUAGES) {
    const isSl = lang === 'sl'
    for (const page of STATIC_PAGES) {
      entries.push({
        url: `${BASE_URL}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? (isSl ? 1.0 : 0.3) : (isSl ? 0.8 : 0.3),
      })
    }
  }

  // Dynamic blog articles — sl gets full priority; other languages deprioritised
  for (const lang of LANGUAGES) {
    const isSl = lang === 'sl'
    const slugs = getAllSlugsForLang(lang)
    for (const slug of slugs) {
      const article = getArticleBySlugAndLang(slug, lang)
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${slug}`,
        lastModified: article?.publishDate ? new Date(article.publishDate) : new Date(),
        changeFrequency: 'yearly',
        priority: isSl ? 0.6 : 0.2,
      })
    }
  }

  return entries
}
