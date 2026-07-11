import type { Metadata } from 'next'
import { getArticlesByLang } from '@/lib/blog/articles'

export const SITE_URL = 'https://www.lasnisistem.com'

const LANG_CODES = ['sl', 'en', 'de', 'ru'] as const

const HREFLANG: Record<string, string> = {
  sl: 'sl-SI',
  en: 'en-US',
  de: 'de-DE',
  ru: 'ru-RU',
}

/**
 * Self-referential canonical + hreflang for a static route that exists in all
 * languages under the same path (path = '' for the homepage, '/lasulje', …).
 */
export function buildAlternates(lang: string, path: string): Metadata['alternates'] {
  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}/sl${path}`,
  }
  for (const code of LANG_CODES) {
    languages[HREFLANG[code]] = `${SITE_URL}/${code}${path}`
  }
  return {
    canonical: `${SITE_URL}/${lang}${path}`,
    languages,
  }
}

/**
 * Canonical + hreflang for a blog article. Slugs are translated per language
 * and articles map across languages by array index (same convention as the
 * language switcher in Navigation). Languages that don't have the article
 * (e.g. SL-only posts) are omitted from hreflang.
 */
export function buildBlogAlternates(lang: string, slug: string): Metadata['alternates'] {
  const index = getArticlesByLang(lang).findIndex((a) => a.slug === slug)
  if (index === -1) {
    return { canonical: `${SITE_URL}/${lang}/blog/${slug}` }
  }

  const languages: Record<string, string> = {}
  let count = 0
  for (const code of LANG_CODES) {
    const counterpart = getArticlesByLang(code)[index]
    if (counterpart) {
      languages[HREFLANG[code]] = `${SITE_URL}/${code}/blog/${counterpart.slug}`
      count++
    }
  }
  // Single-language article (e.g. SL-only) — a one-entry hreflang group is meaningless
  if (count <= 1) {
    return { canonical: `${SITE_URL}/${lang}/blog/${slug}` }
  }
  const slDefault = getArticlesByLang('sl')[index]
  if (slDefault) {
    languages['x-default'] = `${SITE_URL}/sl/blog/${slDefault.slug}`
  }

  return {
    canonical: `${SITE_URL}/${lang}/blog/${slug}`,
    languages,
  }
}
