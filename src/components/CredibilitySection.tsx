'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

const partners = [
  {
    name: 'HairArt',
    logo: '/images/HairArt_logo_gold_png_2018_791x.webp',
    width: 154,
    height: 55,
    fb: 'https://www.facebook.com/HairartProducts',
    ig: 'https://www.instagram.com/hairartproducts/',
    website: 'https://hairartinc.com/',
  },
  {
    name: 'House of European Hair',
    logo: '/images/HEH_Gold_Solo.webp',
    width: 105,
    height: 44,
    fb: 'https://www.facebook.com/HouseOfEuropeanHair/',
    ig: 'https://www.instagram.com/houseofeuropeanhair/',
    website: 'https://houseofeuropeanhair.com/',
  },
]

const magazineItems = [
  { src: '/images/Vogue-logo.png', alt: 'Vogue', width: 80, height: 22, invert: true },
  { src: '/images/elle-logo.png', alt: 'Elle', width: 36, height: 36, invert: false },
  { src: '/images/vanity-fair-logo.png', alt: 'Vanity Fair', width: 85, height: 22, invert: true },
  { src: '/images/glamour-logo.svg', alt: 'Glamour', width: 100, height: 20, invert: true },
  { src: '/images/Comopolitan_Magazine_Logo.svg', alt: 'Cosmopolitan', width: 120, height: 22, invert: true },
]

function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#C1A452" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function GlassSocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        color: '#FFFFFF',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(193,164,82,0.2)'
        el.style.borderColor = 'rgba(193,164,82,0.3)'
        el.style.color = '#C1A452'
        el.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(255, 255, 255, 0.15)'
        el.style.borderColor = 'rgba(255, 255, 255, 0.25)'
        el.style.color = '#FFFFFF'
        el.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </a>
  )
}

function MagazineCarousel() {
  const items = [...magazineItems, ...magazineItems, ...magazineItems]

  return (
    <div style={{ width: '100%', maxWidth: 550, margin: '0 auto' }}>
      <div className="relative overflow-hidden mx-auto" style={{ height: 36, width: '100%' }}>
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '15%',
            background: 'linear-gradient(to right, #FAF8F5, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '15%',
            background: 'linear-gradient(to left, #FAF8F5, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{ x: { duration: 40, repeat: Infinity, ease: 'linear' } }}
          style={{
            display: 'flex', alignItems: 'center', gap: '4rem',
            whiteSpace: 'nowrap', width: 'max-content', height: '100%',
          }}
        >
          {items.map((item, i) => (
            <div key={`${item.alt}-${i}`} style={{ opacity: 0.6, display: 'flex', alignItems: 'center' }}>
              <Image
                src={item.src} alt={item.alt} width={item.width} height={item.height}
                style={{ objectFit: 'contain', filter: item.invert ? 'brightness(0)' : 'none' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function CredibilitySection({ t }: Props) {
  const c = t.credibility

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: '#FAF8F5',
      }}
    >
      {/* Subtle warm ambient glow behind stats */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50vw',
          height: '40vh',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(193, 164, 82, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Man — left side, fully visible */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: '-3%',
          bottom: 0,
          width: '36%',
          height: '92%',
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/man.png"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'right bottom' }}
          sizes="36vw"
        />
      </div>

      {/* Woman — right side, fully visible */}
      <div
        className="absolute hidden lg:block"
        style={{
          right: '-2%',
          bottom: 0,
          width: '32%',
          height: '88%',
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/woman.png"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
          sizes="32vw"
        />
      </div>

      {/* ===== PART 1: Company stats (Hollywood Lasni Sistem) ===== */}
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-12 pt-16 md:pt-20 pb-12 md:pb-16">

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '0.04em',
            color: '#C1A452',
            textAlign: 'center',
            marginBottom: '0.8rem',
          }}
        >
          {c.kicker}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.02em',
            color: 'rgba(28, 25, 23, 0.7)',
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto 2.5rem auto',
          }}
        >
          {c.subtitle}
        </motion.p>

        {/* Big numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center gap-12 md:gap-20"
        >
          <div className="text-center">
            <span
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(4rem, 8vw, 6.5rem)',
                fontWeight: 300,
                lineHeight: 0.9,
                color: '#C1A452',
                display: 'block',
              }}
            >
              {c.years}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(28, 25, 23, 0.6)',
                marginTop: '0.6rem',
                display: 'block',
              }}
            >
              {c.yearsLabel}
            </span>
          </div>

          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/logo just icon gold.png"
              alt="Hollywood Hair System Icon"
              width={65}
              height={65}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="text-center">
            <span
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(4rem, 8vw, 6.5rem)',
                fontWeight: 300,
                lineHeight: 0.9,
                color: '#C1A452',
                display: 'block',
              }}
            >
              {c.experience}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(28, 25, 23, 0.6)',
                marginTop: '0.6rem',
                display: 'block',
              }}
            >
              {c.experienceLabel}
            </span>
          </div>
        </motion.div>
      </div>

      {/* ===== Separator ===== */}
      <div
        className="mx-auto"
        style={{
          width: '85%',
          maxWidth: 700,
          height: 2,
          background: 'linear-gradient(90deg, transparent 0%, rgba(193,164,82,0.5) 25%, rgba(193,164,82,0.5) 75%, transparent 100%)',
        }}
      />

      {/* ===== PART 2: Partners + Magazine carousel ===== */}
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-12 pt-8 md:pt-10 pb-6 md:pb-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(28, 25, 23, 0.75)',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          {c.partnersLabel}
        </motion.p>

        {/* Partners row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-0 mb-6 md:mb-10 mx-auto"
          style={{
            background: '#2A2623',
            padding: '2rem 1.5rem',
            borderRadius: '1.5rem',
            width: '100%',
            maxWidth: '560px',
          }}
        >
          {/* HairArt */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <a
              href={partners[0].website}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 flex items-center justify-center group relative transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <Image
                src={partners[0].logo}
                alt={partners[0].name}
                width={partners[0].width}
                height={partners[0].height}
                style={{ objectFit: 'contain', opacity: 1 }}
              />
            </a>
            {/* Socials + rating */}
            <div className="flex items-center gap-2">
              <GlassSocialLink href={partners[0].fb} label={`${partners[0].name} Facebook`}><FacebookIcon /></GlassSocialLink>
              <GlassSocialLink href={partners[0].ig} label={`${partners[0].name} Instagram`}><InstagramIcon /></GlassSocialLink>
              <a
                href="https://www.trustindex.io/reviews/hairartinc.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HairArt ocena 4.9 od 5 na podlagi 384 ocen"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.2rem',
                  textDecoration: 'none', transition: 'opacity 0.3s ease',
                  marginLeft: '0.15rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                <span style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.85rem', fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.95)',
                }}>
                  4.9
                </span>
                <div style={{ transform: 'scale(1)' }}>
                  <StarIcon />
                </div>
                <span style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.75rem', fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginLeft: '0.05rem'
                }}>
                  HairArt (384)
                </span>
              </a>
            </div>
          </div>

          {/* Divider (Vertical on desktop, Horizontal on mobile) */}
          <div className="hidden sm:block w-[1px] h-20" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.15), rgba(255,255,255,0))' }} />
          <div className="block sm:hidden w-32 h-[1px]" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.15), rgba(255,255,255,0))' }} />

          {/* HEH */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <a
              href={partners[1].website}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 flex items-center justify-center group relative transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <Image
                src={partners[1].logo}
                alt={partners[1].name}
                width={partners[1].width}
                height={partners[1].height}
                style={{ objectFit: 'contain', opacity: 1 }}
              />
            </a>
            {/* Socials */}
            <div className="flex items-center gap-2.5">
              <GlassSocialLink href={partners[1].fb} label={`${partners[1].name} Facebook`}><FacebookIcon /></GlassSocialLink>
              <GlassSocialLink href={partners[1].ig} label={`${partners[1].name} Instagram`}><InstagramIcon /></GlassSocialLink>
            </div>
          </div>
        </motion.div>

        {/* Magazine carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <MagazineCarousel />
        </motion.div>

      </div>
    </section>
  )
}
