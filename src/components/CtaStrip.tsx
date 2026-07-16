'use client'

import { useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

export default function CtaStrip({ lang, t }: Props) {
  const c = t.ctaStrip

  const sectionRef = useRef<HTMLElement>(null)

  const handleMove = useCallback((evt: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${evt.clientX - rect.left}px`)
    el.style.setProperty('--glow-y', `${evt.clientY - rect.top}px`)
    el.style.setProperty('--glow-opacity', '1')
  }, [])

  const handleLeave = useCallback(() => {
    const el = sectionRef.current
    if (!el) return
    el.style.setProperty('--glow-opacity', '0')
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        background: '#1C1917',
        padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gold shimmer line across the top */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(193,164,82,0.4), transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          height: '120%',
          background: 'radial-gradient(ellipse at center, rgba(193,164,82,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Mouse hover premium glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 'var(--glow-opacity, 0)' as unknown as number,
          background: 'radial-gradient(800px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(193,164,82,0.15), transparent 45%)',
          transition: 'opacity 0.6s ease',
        }}
      />

      <div
        className="mx-auto flex flex-col items-center justify-center gap-8"
        style={{ maxWidth: 800, position: 'relative' }}
      >
        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            width: 48,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #C1A452, transparent)',
          }}
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.01em',
            lineHeight: 1.2,
            margin: 0,
            textAlign: 'center',
          }}
        >
          {c.headline}
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href={`/${lang}/kontakt`}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1C1917',
              backgroundColor: '#C1A452',
              border: 'none',
              borderRadius: '2px',
              padding: '1rem 3rem',
              textDecoration: 'none',
              transition: 'all 0.35s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 20px rgba(193,164,82,0.15)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#D4AF37'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(193,164,82,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#C1A452'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(193,164,82,0.15)'
            }}
          >
            {c.cta}
          </Link>
        </motion.div>
      </div>

      {/* Animated gold shimmer line across the bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(193,164,82,0.4), transparent)',
          transformOrigin: 'center',
        }}
      />
    </section>
  )
}
