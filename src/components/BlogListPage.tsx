'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LangCode, Translation } from '@/lib/i18n/translations'
import { getArticlesByLang, type BlogArticle } from '@/lib/blog/articles'

type Props = {
  lang: LangCode
  t: Translation
}

const categoryLabels: Record<string, Record<LangCode, string>> = {
  'lasni-sistem': { sl: 'Lasni sistem', en: 'Hair System', de: 'Haarsystem', ru: 'Система волос' },
  'izpadanje-las': { sl: 'Izpadanje las', en: 'Hair Loss', de: 'Haarausfall', ru: 'Выпадение волос' },
  'produkti': { sl: 'Produkti', en: 'Products', de: 'Produkte', ru: 'Продукты' },
  'skupnost': { sl: 'Skupnost', en: 'Community', de: 'Gemeinschaft', ru: 'Сообщество' },
}

const pageLabels: Record<LangCode, { title: string; subtitle: string; readMore: string; minRead: string; featured: string }> = {
  sl: {
    title: 'Blog',
    subtitle: 'Strokovni članki o izpadanju las, Lasnem sistemu® in negi',
    readMore: 'Preberi članek',
    minRead: 'min',
    featured: 'Izpostavljeno',
  },
  en: {
    title: 'Articles',
    subtitle: 'Expert articles on hair loss, Hair System® and care',
    readMore: 'Read article',
    minRead: 'min',
    featured: 'Featured',
  },
  de: {
    title: 'Artikel',
    subtitle: 'Fachartikel über Haarausfall, Haarsystem® und Pflege',
    readMore: 'Artikel lesen',
    minRead: 'Min',
    featured: 'Empfohlen',
  },
  ru: {
    title: 'Статьи',
    subtitle: 'Экспертные статьи о выпадении волос, системе волос и уходе',
    readMore: 'Читать статью',
    minRead: 'мин',
    featured: 'Рекомендуемое',
  },
}

/* ── Featured hero card (first article) ─────────────────────────── */
function FeaturedCard({ article, lang, labels }: { article: BlogArticle; lang: LangCode; labels: typeof pageLabels['sl'] }) {
  const catLabel = categoryLabels[article.category]?.[lang] || article.category

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/${lang}/blog/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            background: '#FFFFFF',
            borderRadius: '4px',
            overflow: 'hidden',
            transition: 'box-shadow 0.5s ease',
            cursor: 'pointer',
          }}
          className="featured-card"
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 24px 80px rgba(0,0,0,0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* Left: Gold accent panel */}
          <div
            style={{
              background: 'linear-gradient(160deg, #1A1A1A 0%, #2A2520 100%)',
              padding: 'clamp(2.5rem, 4vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle pattern */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              opacity: 0.03,
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(193,164,82,1) 20px, rgba(193,164,82,1) 21px)',
            }} />

            <span style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C1A452',
              marginBottom: '1.5rem',
              position: 'relative',
            }}>
              — {labels.featured}
            </span>

            <h2 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#F5F2ED',
              margin: '0 0 1.2rem 0',
              position: 'relative',
            }}>
              {article.title}
            </h2>

            <div style={{
              width: '40px', height: '1px',
              background: 'linear-gradient(90deg, #C1A452, transparent)',
              marginBottom: '1.2rem',
            }} />

            <p style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.88rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(245,242,237,0.55)',
              margin: 0,
              position: 'relative',
            }}>
              {article.excerpt}
            </p>
          </div>

          {/* Right: Metadata + CTA */}
          <div
            style={{
              padding: 'clamp(2.5rem, 4vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#FAFAF7',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '4.5rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: 'rgba(193,164,82,0.3)',
                }}>
                  01
                </span>
                <span style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#5A5248',
                }}>
                  {catLabel}
                </span>
              </div>

              <p style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#5A5248',
                margin: '0 0 2rem 0',
              }}>
                {article.excerpt}
              </p>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              borderTop: '1px solid rgba(26,26,26,0.06)',
              paddingTop: '1.2rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: '#6B6155',
              }}>
                {article.readTime} {labels.minRead}
              </span>
              <span style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: '#1A1A1A',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                {labels.readMore}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ── Standard editorial row card ────────────────────────────────── */
function EditorialRow({ article, lang, labels, index }: { article: BlogArticle; lang: LangCode; labels: typeof pageLabels['sl']; index: number }) {
  const catLabel = categoryLabels[article.category]?.[lang] || article.category
  const num = String(index + 2).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/${lang}/blog/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <article
          style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr auto',
            gap: 'clamp(1.2rem, 2vw, 2rem)',
            alignItems: 'start',
            padding: 'clamp(1.5rem, 2.5vw, 2.2rem) 0',
            borderBottom: '1px solid rgba(26,26,26,0.07)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.paddingLeft = '1rem'
            e.currentTarget.style.background = 'rgba(255,255,255,0.7)'
            e.currentTarget.style.borderRadius = '4px'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.paddingLeft = '0'
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderRadius = '0'
          }}
        >
          {/* Number */}
          <span style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '2.2rem',
            fontWeight: 300,
            lineHeight: 1,
            color: 'rgba(193,164,82,0.4)',
            paddingTop: '0.15rem',
          }}>
            {num}
          </span>

          {/* Content */}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6B6155',
              }}>
                {catLabel}
              </span>
              <span style={{
                width: '3px', height: '3px', borderRadius: '50%',
                background: 'rgba(26,26,26,0.15)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 400,
                color: '#8A8070',
              }}>
                {article.readTime} {labels.minRead}
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)',
              fontWeight: 500,
              lineHeight: 1.3,
              color: '#1A1A1A',
              margin: '0 0 0.4rem 0',
            }}>
              {article.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: 1.65,
              color: '#5A5248',
              margin: 0,
              maxWidth: '640px',
            }}>
              {article.excerpt}
            </p>
          </div>

          {/* Arrow */}
          <div style={{
            paddingTop: '1.2rem',
            color: '#C1A452',
            opacity: 0.4,
            transition: 'all 0.3s ease',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default function BlogListPage({ lang }: Props) {
  const labels = pageLabels[lang]
  const articlesForLang = getArticlesByLang(lang)
  const [featured, ...rest] = articlesForLang

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#F5F2ED',
        paddingTop: 'clamp(8rem, 14vw, 12rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
      }}
    >
      <div style={{ width: '80%', maxWidth: 1400, margin: '0 auto' }}>
        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(3.2rem, 7vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                color: '#1A1A1A',
                margin: 0,
                letterSpacing: '-0.03em',
              }}>
                {labels.title}
              </h1>
            </div>
            <p style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(0.88rem, 1.1vw, 0.98rem)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#5A5248',
              margin: 0,
              maxWidth: '380px',
              paddingBottom: '0.5rem',
            }}>
              {labels.subtitle}
            </p>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, #1A1A1A, rgba(26,26,26,0.05))',
            marginTop: 'clamp(1.5rem, 2.5vw, 2rem)',
          }} />
        </motion.div>

        {/* ── Featured article ───────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
          <FeaturedCard article={featured} lang={lang} labels={labels} />
        </div>

        {/* ── Article list ───────────────────────────────────────── */}
        <div>
          {rest.map((article, index) => (
            <EditorialRow
              key={article.slug}
              article={article}
              lang={lang}
              labels={labels}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* ── Responsive overrides ─────────────────────────────────── */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
