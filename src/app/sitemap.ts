import type { MetadataRoute } from 'next'
import { getArticlesByLang } from '@/lib/blog/articles'

const BASE_URL = 'https://www.lasnisistem.com'
const LANGUAGES = ['sl', 'en', 'de', 'ru']

const HREFLANG: Record<string, string> = {
  sl: 'sl-SI',
  en: 'en-US',
  de: 'de-DE',
  ru: 'ru-RU',
}

const STATIC_PAGES = [
  '',
  '/hibridni-sistemi',
  '/lasulje',
  '/plesavost',
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
      const languages: Record<string, string> = {
        'x-default': `${BASE_URL}/sl${page}`,
      }
      for (const l of LANGUAGES) {
        languages[HREFLANG[l]] = `${BASE_URL}/${l}${page}`
      }
      entries.push({
        url: `${BASE_URL}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? (isSl ? 1.0 : 0.3) : (isSl ? 0.8 : 0.3),
        alternates: { languages },
      })
    }
  }

  // Dynamic blog articles — slugs are translated per language and map across
  // languages by array index (same convention as Navigation and lib/seo.ts)
  for (const lang of LANGUAGES) {
    const isSl = lang === 'sl'
    const articles = getArticlesByLang(lang)
    articles.forEach((article, idx) => {
      const languages: Record<string, string> = {}
      let count = 0
      for (const l of LANGUAGES) {
        const counterpart = getArticlesByLang(l)[idx]
        if (counterpart) {
          languages[HREFLANG[l]] = `${BASE_URL}/${l}/blog/${counterpart.slug}`
          count++
        }
      }
      const slCounterpart = getArticlesByLang('sl')[idx]
      if (slCounterpart) {
        languages['x-default'] = `${BASE_URL}/sl/blog/${slCounterpart.slug}`
      }
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${article.slug}`,
        lastModified: article.publishDate ? new Date(article.publishDate) : new Date(),
        changeFrequency: 'yearly',
        priority: isSl ? 0.6 : 0.2,
        // Single-language articles get no hreflang group
        ...(count > 1 ? { alternates: { languages } } : {}),
      })
    })
  }

  return entries
}
