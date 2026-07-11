'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { LangCode, Translation } from '@/lib/i18n/translations'
import type { BlogArticle } from '@/lib/blog/articles'

type Props = {
  lang: LangCode
  t: Translation
  article: BlogArticle
  related?: BlogArticle[]
}

const categoryLabels: Record<string, Record<LangCode, string>> = {
  'lasni-sistem': { sl: 'Lasni sistem', en: 'Hair System', de: 'Haarsystem', ru: 'Система волос' },
  'izpadanje-las': { sl: 'Izpadanje las', en: 'Hair Loss', de: 'Haarausfall', ru: 'Выпадение волос' },
  'produkti': { sl: 'Produkti', en: 'Products', de: 'Produkte', ru: 'Продукты' },
  'skupnost': { sl: 'Skupnost', en: 'Community', de: 'Gemeinschaft', ru: 'Сообщество' },
}

const pageLabels: Record<LangCode, {
  backToBlog: string
  minRead: string
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  relatedTitle: string
}> = {
  sl: {
    backToBlog: 'Vsi članki',
    minRead: 'min branja',
    ctaTitle: 'Želite izvedeti več?',
    ctaBody: 'Naročite se na diskretno in strokovno individualno konzultacijo.',
    ctaButton: 'Rezervirajte posvet',
    relatedTitle: 'Preberite tudi',
  },
  en: {
    backToBlog: 'All articles',
    minRead: 'min read',
    ctaTitle: 'Want to learn more?',
    ctaBody: 'Book a discreet and professional individual consultation.',
    ctaButton: 'Book a consultation',
    relatedTitle: 'Related articles',
  },
  de: {
    backToBlog: 'Alle Artikel',
    minRead: 'Min. Lesezeit',
    ctaTitle: 'Möchten Sie mehr erfahren?',
    ctaBody: 'Buchen Sie eine diskrete und professionelle individuelle Beratung.',
    ctaButton: 'Beratung buchen',
    relatedTitle: 'Das könnte Sie auch interessieren',
  },
  ru: {
    backToBlog: 'Все статьи',
    minRead: 'мин чтения',
    ctaTitle: 'Хотите узнать больше?',
    ctaBody: 'Запишитесь на конфиденциальную и профессиональную индивидуальную консультацию.',
    ctaButton: 'Записаться на консультацию',
    relatedTitle: 'Читайте также',
  },
}

export default function BlogArticlePage({ lang, article, related }: Props) {
  const labels = pageLabels[lang]
  const catLabel = categoryLabels[article.category]?.[lang] || article.category
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <article
      style={{
        minHeight: '100vh',
        background: '#F5F2ED',
        paddingTop: 'clamp(8rem, 14vw, 11rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
      }}
    >
      <div style={{ width: '80%', maxWidth: 1400, margin: '0 auto' }}>

        {/* ── Back link ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 'clamp(2rem, 3vw, 3rem)' }}
        >
          <Link
            href={`/${lang}/blog`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6B6155',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1A1A1A' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B6155' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {labels.backToBlog}
          </Link>
        </motion.div>

        {/* ── Header & Hero Image Flex Container ───────────────── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-[clamp(2.5rem,4vw,3.5rem)]">
          
          {/* ── Article header (Left side) ─────────────────────── */}
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', maxWidth: '740px' }}
          >
            {/* Meta row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.8rem',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#6B6155',
              }}>
                {catLabel}
              </span>
              <span style={{
                width: '3px', height: '3px', borderRadius: '50%',
                background: 'rgba(26,26,26,0.2)',
              }} />
              <span style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 400,
                color: '#8A8070',
              }}>
                {article.readTime} {labels.minRead}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#1A1A1A',
              margin: '0 0 1.5rem 0',
              letterSpacing: '-0.02em',
              maxWidth: '820px',
            }}>
              {article.title}
            </h1>

            {/* Excerpt */}
            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#5A5248',
              margin: 0,
              maxWidth: '680px',
            }}>
              {article.excerpt}
            </p>
          </motion.header>

          {/* ── Hero Image (Right side) ─────────────────────── */}
          {!article.images && article.image && (() => {
            const isLowRes = article.image.includes('alopecia areata');
            const maxWidth = isLowRes ? 170 : 340;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-[45%] flex-shrink-0"
                style={{ maxWidth: `${maxWidth}px` }}
              >
                <div style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '1 / 1',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                }}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={`(max-width: 768px) 100vw, ${maxWidth}px`}
                    priority
                  />
                </div>
                {article.imageCaption && (
                  <p style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#8A8070',
                    fontStyle: 'italic',
                    margin: '0.6rem 0 0 0',
                    maxWidth: '480px',
                    width: 'max-content',
                  }}>
                    {article.imageCaption}
                  </p>
                )}
              </motion.div>
            );
          })()}

        </div>

        {/* ── Divider ────────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, #1A1A1A, rgba(26,26,26,0.04))',
            marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
            transformOrigin: 'left',
          }}
        />

        {/* ── Multi-image row (below subtitle, above body) ──────── */}
        {article.images && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
              maxWidth: '50%',
              alignItems: 'flex-start',
            }}
          >
            {/* Image 1 with its own caption */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div
                onClick={() => setLightboxSrc(article.images![0])}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  boxShadow: '0 8px 24px -6px rgba(0,0,0,0.12)',
                  cursor: 'zoom-in',
                }}
              >
                <Image
                  src={article.images[0]}
                  alt={`${article.title} 1`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              {article.imageCaptions?.[0] && (
                <p style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.72rem',
                  color: '#888',
                  lineHeight: 1.4,
                  margin: 0,
                }}>
                  {article.imageCaptions[0]}
                </p>
              )}
            </div>

            {/* Images 2 & 3 with shared caption underneath */}
            {article.images.length > 1 && (
              <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  {article.images.slice(1).map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxSrc(src)}
                      style={{
                        position: 'relative',
                        flex: 1,
                        borderRadius: '8px',
                        overflow: 'hidden',
                        aspectRatio: '4 / 3',
                        boxShadow: '0 8px 24px -6px rgba(0,0,0,0.12)',
                        cursor: 'zoom-in',
                      }}
                    >
                      <Image
                        src={src}
                        alt={`${article.title} ${i + 2}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
                {article.imageCaptions?.[1] && (
                  <p style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.72rem',
                    color: '#888',
                    lineHeight: 1.4,
                    margin: 0,
                  }}>
                    {article.imageCaptions[1]}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* ── Lightbox ───────────────────────────────────────────── */}
        {lightboxSrc && (
          <div
            onClick={() => setLightboxSrc(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              cursor: 'zoom-out',
            }}
          >
            <div style={{ position: 'relative', maxWidth: '40vw', maxHeight: '50vh' }}>
              <Image
                src={lightboxSrc}
                alt="Enlarged image"
                width={600}
                height={450}
                style={{ objectFit: 'contain', maxWidth: '40vw', maxHeight: '50vh', borderRadius: '4px' }}
              />
            </div>
          </div>
        )}

        {/* ── Article body ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ maxWidth: '780px' }}
        >
          <div
            className="blog-content blog-content--light"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#4A453E',
            }}
          />
        </motion.div>

        {/* ── Related articles ───────────────────────────────────── */}
        {related && related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              marginTop: 'clamp(3.5rem, 6vw, 5rem)',
              maxWidth: '780px',
            }}
          >
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              margin: '0 0 1.5rem 0',
            }}>
              {labels.relatedTitle}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}>
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${lang}/blog/${rel.slug}`}
                  style={{
                    display: 'block',
                    padding: '1.4rem 1.5rem',
                    background: '#FFFFFF',
                    borderRadius: '4px',
                    border: '1px solid rgba(193,164,82,0.18)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#C1A452'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(140,120,60,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(193,164,82,0.18)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <span style={{
                    display: 'block',
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: '#1A1A1A',
                    marginBottom: '0.5rem',
                  }}>
                    {rel.title}
                  </span>
                  <span style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: '#6B6155',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  } as React.CSSProperties}>
                    {rel.excerpt}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── CTA Section ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: 'clamp(3.5rem, 6vw, 5rem)',
            maxWidth: '780px',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2rem',
            alignItems: 'center',
            padding: 'clamp(2rem, 3.5vw, 3rem)',
            background: '#FFFFFF',
            borderRadius: '4px',
            borderLeft: '3px solid #C1A452',
          }}>
            <div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
                fontWeight: 400,
                color: '#1A1A1A',
                margin: '0 0 0.5rem 0',
              }}>
                {labels.ctaTitle}
              </h3>
              <p style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.92rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: '#6B6155',
                margin: 0,
              }}>
                {labels.ctaBody}
              </p>
            </div>

            <Link
              href={`/${lang}/kontakt`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                background: '#1A1A1A',
                textDecoration: 'none',
                padding: '0.85rem 2rem',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#C1A452'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1A1A1A'
              }}
            >
              {labels.ctaButton}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
