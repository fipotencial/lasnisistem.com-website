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

const STATIC_LAST_MODIFIED: Record<string, string> = {
  '': '2026-07-13',
  '/hibridni-sistemi': '2026-07-13',
  '/lasulje': '2026-07-16',
  '/plesavost': '2026-07-16',
  '/kontakt': '2026-07-13',
  '/poslanstvo': '2026-07-16',
  '/mnenja-strank': '2026-07-13',
  '/mediji': '2026-07-13',
  '/svetovalni-studio': '2026-07-16',
  '/pravno-obvestilo': '2026-07-16',
  '/blog': '2026-07-16',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const lang of LANGUAGES) {
    for (const page of STATIC_PAGES) {
      const languages: Record<string, string> = {
        'x-default': `${BASE_URL}/sl${page}`,
      }
      for (const l of LANGUAGES) {
        languages[HREFLANG[l]] = `${BASE_URL}/${l}${page}`
      }
      entries.push({
        url: `${BASE_URL}/${lang}${page}`,
        lastModified: new Date(STATIC_LAST_MODIFIED[page]),
        alternates: { languages },
      })
    }
  }

  // Dynamic blog articles — slugs are translated per language and map across
  // languages by array index (same convention as Navigation and lib/seo.ts)
  for (const lang of LANGUAGES) {
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
        lastModified: new Date(article.updatedDate || article.publishDate),
        // Single-language articles get no hreflang group
        ...(count > 1 ? { alternates: { languages } } : {}),
      })
    })
  }

  return entries
}
