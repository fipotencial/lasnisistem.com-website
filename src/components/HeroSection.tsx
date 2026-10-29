'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <h1
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
        <span
          key={i}
          className="inline-block hero-content-enter"
          style={{ marginRight: '0.28em', animationDelay: `${Math.min(i * 25, 150)}ms` }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
}

export default function HeroSection({ lang, t }: Props) {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{
        minHeight: '100vh',
      }}
      aria-label="Hero"
    >
      {/* Paint the first frame before the video is ready, including when autoplay is blocked. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: 'scaleX(-1)', filter: 'contrast(1.1)' }}
        aria-hidden="true"
      >
        <Image
          src="/images/hero-poster-v1.webp"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        <video
          className="hero-background-video absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoReady ? 1 : 0 }}
          poster="/images/hero-poster-v1.webp"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          onPlaying={event => {
            const video = event.currentTarget
            if ('requestVideoFrameCallback' in video) {
              video.requestVideoFrameCallback(() => setVideoReady(true))
            } else {
              setVideoReady(true)
            }
          }}
          onError={() => setVideoReady(false)}
        >
          <source src="/videos/hero-mobile-v1.mp4" media="(max-width: 767px)" type="video/mp4" />
          <source src="/videos/hero-desktop-v1.mp4" type="video/mp4" />
        </video>
      </div>

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
        <div
          className="flex flex-col items-start"
          style={{ maxWidth: 720 }}
        >
          {/* Main headline — gold */}
          <AnimatedHeadline text={t.hero.headline} />

          {/* Tagline — light for contrast on dark video */}
          <h2
            className="hero-content-enter"
            style={{
              animationDelay: '80ms',
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
          >
            {t.hero.tagline}
          </h2>

          {/* CTA — ghost button */}
          <div
            className="hero-content-enter"
            style={{ marginTop: '3.5rem', animationDelay: '120ms' }}
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
          </div>
        </div>
      </div>

    </section>
  )
}
