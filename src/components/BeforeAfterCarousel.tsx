'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { LangCode } from '@/lib/i18n/translations'

type PairCard = { type: 'pair'; before: string; after: string }
type SingleCard = { type: 'single'; src: string }
type Card = PairCard | SingleCard

const B = '/predpo%20-%20slike'

const CARDS: Card[] = [
  { type: 'pair',   before: `${B}/predpo-merima_pred.jpg`,      after: `${B}/predpo-merima_po.jpg` },
  { type: 'single', src: `${B}/predpo_waynerooney_oboje.jpg` },
  { type: 'pair',   before: `${B}/predpo_women1_pred.jpg`,       after: `${B}/predpo_women1_po.jpg` },
  { type: 'single', src: `${B}/predpo_jeremy%20piven_oboje.webp` },
  { type: 'pair',   before: `${B}/predpo_women2_pred.jpg`,       after: `${B}/predpo_women2_po.jpg` },
  { type: 'single', src: `${B}/predpo_kevincostner_oboje.jpg` },
  { type: 'pair',   before: `${B}/predpo_tip%20pred.jpg`,        after: `${B}/predpo_tip%20po.jpg` },
  { type: 'single', src: `${B}/predpo_john%20travolta_oboje.jpg` },
  { type: 'pair',   before: `${B}/predpo_woen3%20prej.jpg`,      after: `${B}/predpo_women3%20po.jpg` },
]

const H = 300   // card height px
const W = 212   // single image width px

const LABEL_BASE: React.CSSProperties = {
  position: 'absolute',
  bottom: 10,
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.58rem',
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  backdropFilter: 'blur(6px)',
  padding: '4px 9px',
  borderRadius: 2,
  pointerEvents: 'none',
}

const labels: Record<LangCode, { results: string; title: string; before: string; after: string; close: string }> = {
  sl: { results: 'Rezultati', title: 'Pred & Po', before: 'Pred', after: 'Po', close: 'Zapri' },
  hr: { results: 'Rezultati', title: 'Prije & Poslije', before: 'Prije', after: 'Poslije', close: 'Zatvori' },
  en: { results: 'Results', title: 'Before & After', before: 'Before', after: 'After', close: 'Close' },
  de: { results: 'Ergebnisse', title: 'Vorher & Nachher', before: 'Vorher', after: 'Nachher', close: 'Schließen' },
  ru: { results: 'Результаты', title: 'До & После', before: 'До', after: 'После', close: 'Закрыть' },
}

export default function BeforeAfterCarousel({ lang }: { lang: LangCode }) {
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState<string[] | null>(null)
  const text = labels[lang]

  const track = [...CARDS, ...CARDS]

  return (
    <section style={{ background: '#0F0D0B', padding: '5rem 0 4.5rem', overflow: 'hidden' }}>
      <style>{`
        @keyframes ba-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 1.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontSize: '0.68rem',
          fontWeight: 500,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#C1A452',
          marginBottom: '0.7rem',
        }}>
          {text.results}
        </p>
        <h2 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
          fontWeight: 400,
          color: '#FAF8F5',
          lineHeight: 1.1,
          margin: 0,
        }}>
          {text.title}
        </h2>
      </div>

      {/* Carousel strip */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ overflow: 'hidden', padding: '14px 0' }}
      >
        <div style={{
          display: 'flex',
          gap: 20,
          paddingLeft: 20,
          width: 'max-content',
          animation: 'ba-scroll 48s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}>
          {track.map((card, i) => (
            <div
              key={i}
              onClick={() => {
                setLightbox(card.type === 'pair' ? [card.before, card.after] : [card.src])
              }}
              style={{
                flexShrink: 0,
                cursor: 'zoom-in',
                borderRadius: 6,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'scale(1.025)'
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'scale(1)'
                el.style.boxShadow = 'none'
              }}
            >
              {card.type === 'pair' ? (
                /* ── Paired card: two images side by side ── */
                <div style={{ display: 'flex', gap: 2, height: H }}>
                  <div style={{ position: 'relative', width: W, height: H, flexShrink: 0 }}>
                    <Image src={card.before} alt={text.before} fill style={{ objectFit: 'cover' }} sizes={`${W}px`} />
                    <span style={{ ...LABEL_BASE, left: 8, color: '#C1A452', background: 'rgba(0,0,0,0.65)' }}>
                      {text.before}
                    </span>
                  </div>
                  <div style={{ position: 'relative', width: W, height: H, flexShrink: 0 }}>
                    <Image src={card.after} alt={text.after} fill style={{ objectFit: 'cover' }} sizes={`${W}px`} />
                    <span style={{ ...LABEL_BASE, right: 8, color: '#FAF8F5', background: 'rgba(193,164,82,0.85)' }}>
                      {text.after}
                    </span>
                  </div>
                </div>
              ) : (
                /* ── Single card (oboje): one image, both labels ── */
                <div style={{ position: 'relative', width: W * 2 + 2, height: H }}>
                  <Image src={card.src} alt={`${text.before} / ${text.after}`} fill style={{ objectFit: 'cover' }} sizes={`${W * 2 + 2}px`} />
                  {/* gradient fade at bottom */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)',
                    pointerEvents: 'none',
                  }} />
                  <span style={{ ...LABEL_BASE, left: 10, color: '#C1A452', background: 'rgba(0,0,0,0.65)' }}>
                    {text.before}
                  </span>
                  <span style={{ ...LABEL_BASE, right: 10, color: '#FAF8F5', background: 'rgba(193,164,82,0.85)' }}>
                    {text.after}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.93)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem',
          }}
        >
          {lightbox.map((src, idx) => (
            <div
              key={idx}
              onClick={e => e.stopPropagation()}
              style={{
                position: 'relative',
                width: lightbox.length === 1 ? 'min(90vw, 900px)' : 'min(45vw, 600px)',
                height: '80vh',
                borderRadius: 4,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={idx === 0 ? text.before : text.after}
                fill
                style={{ objectFit: 'contain' }}
                sizes="90vw"
              />
              {lightbox.length > 1 && (
                <span style={{
                  position: 'absolute',
                  bottom: 14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  borderRadius: 2,
                  color: idx === 0 ? '#C1A452' : '#FAF8F5',
                  background: idx === 0 ? 'rgba(0,0,0,0.7)' : 'rgba(193,164,82,0.85)',
                  backdropFilter: 'blur(6px)',
                }}>
                  {idx === 0 ? text.before : text.after}
                </span>
              )}
            </div>
          ))}

          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              top: '1.25rem',
              right: '1.25rem',
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.16)'
              el.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.08)'
              el.style.color = 'rgba(255,255,255,0.8)'
            }}
            aria-label={text.close}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
