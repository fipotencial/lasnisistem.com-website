'use client'

import { useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

const plesavostLinkLabel: Record<string, string> = {
  sl: 'Spoznajte vzroke in rešitve za plešavost →',
  en: 'Explore the causes of and solutions for baldness →',
  de: 'Ursachen und Lösungen bei Kahlheit entdecken →',
  ru: 'Узнайте о причинах и решениях облысения →',
}

export default function EmpathyBanner({ lang, t }: Props) {
  const e = t.empathy

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
      {/* Subtle radial glow behind text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(193,164,82,0.06) 0%, transparent 70%)',
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

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto text-center"
        style={{ maxWidth: 660, position: 'relative' }}
      >
        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            width: 48,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #C1A452, transparent)',
            margin: '0 auto 2rem',
          }}
        />

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#C1A452',
            letterSpacing: '0.01em',
            lineHeight: 1.25,
            margin: '0 0 1.2rem 0',
          }}
        >
          {e.headline}
        </h2>

        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'rgba(255, 255, 255, 0.85)',
            margin: 0,
          }}
        >
          {e.body}
        </p>

        <Link
          href={`/${lang}/plesavost`}
          style={{
            display: 'inline-block',
            marginTop: '1.6rem',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.82rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#C1A452',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(193,164,82,0.4)',
            paddingBottom: '0.2rem',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(evt) => {
            evt.currentTarget.style.color = '#D4AF37'
            evt.currentTarget.style.borderBottomColor = '#D4AF37'
          }}
          onMouseLeave={(evt) => {
            evt.currentTarget.style.color = '#C1A452'
            evt.currentTarget.style.borderBottomColor = 'rgba(193,164,82,0.4)'
          }}
        >
          {plesavostLinkLabel[lang] || plesavostLinkLabel.sl}
        </Link>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: 48,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #C1A452, transparent)',
            margin: '2rem auto 0',
          }}
        />
      </motion.div>
    </section>
  )
}
