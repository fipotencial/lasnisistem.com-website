'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
        fontWeight: 400,
        lineHeight: 1.08,
        color: '#d9cc6b',
        letterSpacing: '-0.02em',
        margin: 0,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: '0.28em' }}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.65,
                delay: 0.55 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default function HeroSection({ lang, t }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{
        minHeight: '100vh',
      }}
      aria-label="Hero"
    >
      {/* Background video */}
      <video
        src="/hero%20video_slow%20(2)%20compresed.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          pointerEvents: 'none', 
          transform: 'scaleX(-1)', 
          filter: 'contrast(1.1)' 
        }}
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Gentle warm wash over entire video (blur removed for maximum sharpness) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(245, 240, 230, 0.08)',
          pointerEvents: 'none',
        }}
      />

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(15,12,8,0.2) 40%, rgba(15,12,8,0.15) 60%, rgba(0,0,0,0.5) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.2) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          opacity: 0.45,
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Center — content, positioned at ~40% from top */}
      <div
        className="relative z-10 flex flex-col items-start px-6 lg:px-[12vw] text-left"
        style={{
          minHeight: '100vh',
          paddingTop: 'calc(72px + 26vh)',
        }}
      >
        <motion.div
          className="flex flex-col items-start"
          style={{ maxWidth: 720 }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main headline — gold */}
          <AnimatedHeadline text={t.hero.headline} />

          {/* Tagline — light for contrast on dark video */}
          <motion.h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.4,
              letterSpacing: '0.01em',
              margin: '1.6rem 0 0 0',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.tagline}
          </motion.h2>

          {/* CTA — ghost button */}
          <motion.div
            style={{ marginTop: '3.5rem' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link
              href={`/${lang}/kontakt`}
              className="hero-cta"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                backgroundColor: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '2px',
                padding: '1rem 3rem',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.backgroundColor = '#B09140'
                el.style.border = '1px solid #B09140'
                el.style.color = '#FFFFFF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.backgroundColor = 'rgba(0,0,0,0.2)'
                el.style.border = '1px solid rgba(255,255,255,0.3)'
                el.style.color = '#FFFFFF'
              }}
            >
              {t.hero.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
