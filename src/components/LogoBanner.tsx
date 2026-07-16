'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

const brands = [
  { name: 'Vogue', src: '/images/Vogue-logo.png', width: 90, height: 24 },
  { name: 'Elle Decoration', src: '/images/elle-logo.png', width: 110, height: 24 },
  { name: 'Vanity Fair', src: '/images/vanity-fair-logo.png', width: 100, height: 24 },
]

export default function LogoBanner({ t }: Props) {
  return (
    <motion.div
      aria-label="Zaupanja vredni partnerji"
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 4vw',
      }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '0.64rem',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#B09140',
          }}
        >
          {t.logoBanner.label}
        </span>

        {/* Brand logos */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {brands.map((brand, i) => (
            <span key={brand.name} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Image
                  src={brand.src}
                  alt={`${brand.name} Logo`}
                  width={brand.width}
                  height={brand.height}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {i < brands.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'rgba(176, 145, 64, 0.4)', // Subtle gold dot
                    margin: '0 2.2rem',
                  }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
