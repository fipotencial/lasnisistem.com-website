'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'
import LazyAutoplayVideo from '@/components/LazyAutoplayVideo'

const articleSlugs: Record<LangCode, string> = {
  sl: 'hollywood-lasni-sistem-najboljsa-resitev',
  en: 'hollywood-hair-system-the-best-solution',
  de: 'hollywood-haarsystem-die-beste-loesung',
  ru: 'hollywood-sistema-volos-luchshee-reshenie',
}

type Props = {
  lang: LangCode
  t: Translation
}

function GoldDot() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: '#C1A452',
        flexShrink: 0,
        marginTop: '0.55rem',
      }}
    />
  )
}

export default function ProductSection({ lang, t }: Props) {
  const p = t.product

  // 3D Parallax Hover Config
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPos)
    mouseY.set(yPos)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      id="lasni-sistem"
      style={{ background: '#FEFEFE' }}
    >
      {/* ─── Premium Hero: Title overlaid on product image ─── */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ padding: 'clamp(3rem, 6vw, 6rem) 0 clamp(2rem, 4vw, 4rem)' }}
      >

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: '#111111',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {p.headline}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#666666',
            maxWidth: 650,
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          {p.subtitle}
        </motion.p>

        {/* Product image — large and prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ width: '85%', maxWidth: 600, position: 'relative', perspective: 1200 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
            <Image
              src="/images/hair-system-graphics.webp"
              alt={p.headline}
              width={1200}
              height={1338}
              className="w-full h-auto"
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 85vw, 600px"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Feature Row 1: Text LEFT, Video RIGHT ─── */}
      <div style={{ width: '92%', maxWidth: 1700, margin: '0 auto', paddingBottom: '3rem' }}>
        <div
          style={{
            background: '#F3F0EB',
            borderRadius: '2rem',
            border: '1px solid rgba(193,164,82,0.12)',
            padding: 'clamp(2rem, 4vw, 4rem)',
          }}
        >
          <div
            className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full"
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full lg:w-[48%] flex justify-center lg:justify-start"
            >
              <div style={{ maxWidth: 1000, width: '100%' }}>
                {/* Decorative line */}
                <div style={{
                  width: 48, height: 2,
                  background: 'linear-gradient(90deg, #C1A452, rgba(193,164,82,0.2))',
                  borderRadius: 2,
                  marginBottom: '2rem',
                }} />

                <h3 style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#1C1917',
                  lineHeight: 1.1,
                  marginBottom: '1.8rem',
                }}>
                  {p.feature1Title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(28,25,23,0.6)',
                  marginBottom: '2.5rem',
                  whiteSpace: 'pre-line',
                }}>
                  {p.feature1Desc}
                </p>

                {/* Bullet highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    p.feature1Bullet1,
                    p.feature1Bullet2,
                    p.feature1Bullet3,
                    p.feature1Bullet4,
                    p.feature1Bullet5,
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <GoldDot />
                      <span style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: 'rgba(28,25,23,0.7)',
                      }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${lang}/blog/${articleSlugs[lang]}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '2rem',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1C1917',
                    backgroundColor: '#C1A452',
                    borderRadius: '2px',
                    padding: '0.85rem 2.2rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#D4AF37'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#C1A452'
                  }}
                >
                  {p.learnMore}
                </Link>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="w-full lg:w-[52%] flex justify-center lg:justify-end"
            >
              <div
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  borderRadius: '1.2rem',
                  overflow: 'hidden',
                  background: '#E8E6E1',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03)',
                  position: 'relative',
                  pointerEvents: 'none',
                }}
              >
                <LazyAutoplayVideo
                  src="/second%20video%20website%20(1)%20compresed.mp4"
                  poster="/images/video-hair-system-fit-poster.webp"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Feature Row 2: Video LEFT, Text RIGHT ─── */}
      <div style={{ width: '92%', maxWidth: 1700, margin: '0 auto', paddingBottom: '4rem' }}>
        <div
          style={{
            background: '#F3F0EB',
            borderRadius: '2rem',
            border: '1px solid rgba(193,164,82,0.12)',
            padding: 'clamp(2rem, 4vw, 4rem)',
          }}
        >
          <div
            className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full"
          >
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="w-full lg:w-[52%] flex justify-center lg:justify-start"
            >
              <div
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  borderRadius: '1.2rem',
                  overflow: 'hidden',
                  background: '#E8E6E1',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03)',
                  position: 'relative',
                  pointerEvents: 'none',
                }}
              >
                <LazyAutoplayVideo
                  src="/first%20video%20website%20(1)%20cmopresed.mp4"
                  poster="/images/video-hair-system-lifestyle-poster.webp"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full lg:w-[48%] flex justify-center lg:justify-start"
            >
              <div style={{ maxWidth: 1000, width: '100%' }}>
                {/* Decorative line */}
                <div style={{
                  width: 48, height: 2,
                  background: 'linear-gradient(90deg, #C1A452, rgba(193,164,82,0.2))',
                  borderRadius: 2,
                  marginBottom: '2rem',
                }} />

                <h3 style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#1C1917',
                  lineHeight: 1.1,
                  marginBottom: '1.8rem',
                }}>
                  {p.feature2Title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(28,25,23,0.6)',
                  marginBottom: '2.5rem',
                  whiteSpace: 'pre-line',
                }}>
                  {p.feature2Desc}
                </p>

                {/* Bullet highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    p.feature2Bullet1,
                    p.feature2Bullet2,
                    p.feature2Bullet3,
                    p.feature2Bullet4,
                    p.feature2Bullet5,
                  ].map((text, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <GoldDot />
                      <span style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: 'rgba(28,25,23,0.7)',
                      }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${lang}/blog/${articleSlugs[lang]}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '2rem',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1C1917',
                    backgroundColor: '#C1A452',
                    borderRadius: '2px',
                    padding: '0.85rem 2.2rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#D4AF37'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#C1A452'
                  }}
                >
                  {p.learnMore}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
