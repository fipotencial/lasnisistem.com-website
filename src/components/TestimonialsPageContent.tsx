'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { testimonialsByLang, testimonialsPageLabels } from '@/lib/testimonials'
import type { LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
}

const expandLabels: Record<LangCode, { expand: string; collapse: string }> = {
  sl: { expand: 'Preberi celotno zgodbo', collapse: 'Zapri' },
  en: { expand: 'Read full story', collapse: 'Close' },
  de: { expand: 'Ganze Geschichte lesen', collapse: 'Schließen' },
  ru: { expand: 'Читать полную историю', collapse: 'Закрыть' },
}

/* How many characters to show in the collapsed preview */
const PREVIEW_CHARS = 220

function TestimonialCard({
  t,
  index,
  isExpanded,
  onToggle,
  onImageClick,
  expandLabel,
  collapseLabel,
}: {
  t: import('@/lib/testimonials').Testimonial
  index: number
  isExpanded: boolean
  onToggle: () => void
  onImageClick: (src: string) => void
  expandLabel: string
  collapseLabel: string
}) {
  const paragraphs = t.quote.split('\n\n')
  const fullText = t.quote
  const needsTruncation = fullText.length > PREVIEW_CHARS
  const previewText = needsTruncation
    ? fullText.slice(0, PREVIEW_CHARS).replace(/\s+\S*$/, '') + '…'
    : fullText

  return (
    <motion.article
      key={t.id}
      id={t.id}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index < 4 ? index * 0.08 : 0 }}
      style={{
        background: '#FFFFFF',
        borderRadius: '1rem',
        border: '1px solid rgba(193,164,82,0.12)',
        overflow: 'hidden',
        boxShadow: '0 2px 20px rgba(140,120,60,0.05)',
        breakInside: 'avoid' as const,
        marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.25s ease',
        cursor: needsTruncation ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(193,164,82,0.10)'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.25)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(140,120,60,0.05)'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.12)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      onClick={() => needsTruncation && onToggle()}
    >
      {/* Gold accent line at top */}
      <div
        style={{
          height: 2,
          background: 'linear-gradient(90deg, rgba(193,164,82,0.15), #C1A452, rgba(193,164,82,0.15))',
        }}
      />

      {/* Name bar */}
      <div
        style={{
          padding: 'clamp(1rem, 1.5vw, 1.3rem) clamp(1.2rem, 2vw, 1.6rem)',
          borderBottom: '1px solid rgba(193,164,82,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
        }}
      >
        {/* Image */}
        {t.image && (
          <div
            onClick={(e) => {
              if (t.image) {
                e.stopPropagation()
                onImageClick(t.image)
              }
            }}
            style={{
              position: 'relative',
              width: 130,
              height: 130,
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              border: '3px solid rgba(193,164,82,0.25)',
              boxShadow: '0 4px 16px rgba(193,164,82,0.10)',
              cursor: 'zoom-in',
            }}
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: t.id === 'eva' ? 'top' : 'center'
              }}
              sizes="130px"
            />
            {/* Subtle fade overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(243,240,235,0.15) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        )}
        <div
          style={{
            width: t.image ? undefined : 3,
            height: 24,
            borderRadius: 2,
            background: 'linear-gradient(180deg, #C1A452, #A0885A)',
            flexShrink: 0,
            display: t.image ? 'none' : 'block',
          }}
        />
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.2rem, 1.6vw, 1.45rem)',
            fontWeight: 600,
            color: '#1C1917',
            margin: 0,
          }}
        >
          {t.name}
        </h2>
      </div>

      {/* Quote text */}
      <div
        style={{
          padding: 'clamp(1rem, 1.5vw, 1.3rem) clamp(1.2rem, 2vw, 1.6rem)',
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {paragraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1rem, 1.1vw, 1.08rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    color: '#44403C',
                    margin: '0 0 0.8rem 0',
                  }}
                >
                  {pIdx === 0 && (
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '2rem',
                        fontWeight: 300,
                        color: '#C1A452',
                        lineHeight: 0,
                        position: 'relative',
                        top: '0.15em',
                        marginRight: '0.1em',
                      }}
                    >
                      &ldquo;
                    </span>
                  )}
                  {paragraph}
                  {pIdx === paragraphs.length - 1 && (
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '2rem',
                        fontWeight: 300,
                        color: '#C1A452',
                        lineHeight: 0,
                        position: 'relative',
                        top: '0.15em',
                        marginLeft: '0.1em',
                      }}
                    >
                      &rdquo;
                    </span>
                  )}
                </p>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1rem, 1.1vw, 1.08rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: '#44403C',
                  margin: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: '#C1A452',
                    lineHeight: 0,
                    position: 'relative',
                    top: '0.15em',
                    marginRight: '0.1em',
                  }}
                >
                  &ldquo;
                </span>
                {previewText}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: '#C1A452',
                    lineHeight: 0,
                    position: 'relative',
                    top: '0.15em',
                    marginLeft: '0.1em',
                  }}
                >
                  &rdquo;
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Before / After images */}
        {(t.beforeImage || t.afterImage) && (
          <div style={{ display: 'flex', gap: 12, marginTop: '1.2rem' }}>
            {[
              { src: t.beforeImage, label: 'Pred' },
              { src: t.afterImage, label: 'Po' },
            ].map(({ src, label }) => src && (
              <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div
                  onClick={e => { e.stopPropagation(); onImageClick(src) }}
                  style={{
                    position: 'relative',
                    aspectRatio: '3 / 4',
                    borderRadius: 6,
                    overflow: 'hidden',
                    cursor: 'zoom-in',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <Image src={src} alt={label} fill style={{ objectFit: 'cover' }} sizes="200px" />
                </div>
                <p style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#A0885A',
                  margin: 0,
                  textAlign: 'center',
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Expand / Collapse button */}
        {needsTruncation && (
          <button
            onClick={e => {
              e.stopPropagation()
              onToggle()
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              marginTop: '0.8rem',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: '#A0885A',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.3rem 0',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#C1A452' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#A0885A' }}
          >
            {isExpanded ? collapseLabel : expandLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
    </motion.article>
  )
}

export default function TestimonialsPageContent({ lang }: Props) {
  const labels = testimonialsPageLabels[lang] || testimonialsPageLabels.sl
  const eLabels = expandLabels[lang] || expandLabels.sl
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  /* Start with first 3 expanded, rest collapsed */
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    const currentTestimonials = testimonialsByLang[lang] || testimonialsByLang.sl
    currentTestimonials.slice(0, 3).forEach(t => initial.add(t.id))
    return initial
  })

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const currentTestimonials = testimonialsByLang[lang] || testimonialsByLang.sl
  console.log("Current Lang:", lang, currentTestimonials[0]?.quote.substring(0, 30))
  const leftCol = currentTestimonials.filter((_, i) => i % 2 === 0)
  const rightCol = currentTestimonials.filter((_, i) => i % 2 === 1)

  return (
    <div style={{ background: '#FAFAF8' }}>
      {/* Hero */}
      <section
        style={{
          background: '#F5F2ED',
          paddingTop: 'clamp(7rem, 12vw, 10rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: 740, margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 3rem)' }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#1C1917',
              letterSpacing: '0.02em',
              margin: '0 0 1rem 0',
            }}
          >
            {labels.title}
          </h1>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              fontWeight: 300,
              lineHeight: 1.6,
              color: '#5C554D',
              margin: 0,
            }}
          >
            {labels.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Testimonials — two-column masonry layout */}
      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
        }}
      >
        {/* Desktop: two columns masonry */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0 clamp(1.2rem, 2vw, 1.8rem)',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div>
            {leftCol.map((t, index) => (
              <TestimonialCard
                key={t.id}
                t={t}
                index={index * 2}
                isExpanded={expandedIds.has(t.id)}
                onToggle={() => toggleExpand(t.id)}
                onImageClick={setZoomedImage}
                expandLabel={eLabels.expand}
                collapseLabel={eLabels.collapse}
              />
            ))}
          </div>
          {/* Right column */}
          <div>
            {rightCol.map((t, index) => (
              <TestimonialCard
                key={t.id}
                t={t}
                index={index * 2 + 1}
                isExpanded={expandedIds.has(t.id)}
                onToggle={() => toggleExpand(t.id)}
                onImageClick={setZoomedImage}
                expandLabel={eLabels.expand}
                collapseLabel={eLabels.collapse}
              />
            ))}
          </div>
        </div>

        {/* Mobile: single column (handled via CSS) */}
        <style>{`
          @media (max-width: 768px) {
            .testimonials-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.85)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out',
            }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <img 
                 src={zoomedImage} 
                 alt="Povečana slika" 
                 style={{ 
                   maxWidth: '100%', 
                   maxHeight: '85vh', 
                   objectFit: 'contain',
                   display: 'block',
                   borderRadius: '8px',
                   boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                 }} 
               />
               <button
                 onClick={(e) => {
                   e.stopPropagation()
                   setZoomedImage(null)
                 }}
                 style={{
                   position: 'absolute',
                   top: '-2.5rem',
                   right: '0',
                   background: 'none',
                   border: 'none',
                   color: 'white',
                   fontSize: '2rem',
                   cursor: 'pointer',
                   padding: '0.5rem',
                   lineHeight: 1,
                 }}
               >
                 &times;
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
