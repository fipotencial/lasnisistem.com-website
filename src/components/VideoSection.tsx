'use client'

import { motion } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

export default function VideoSection({ t }: Props) {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#FDFCFA] overflow-hidden border-t border-[rgba(193,164,82,0.1)]">
      {/* Subtle Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '50vh',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at bottom, rgba(193, 164, 82, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 items-center">
          
          {/* Left Video Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-full max-w-[380px] aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(193, 164, 82, 0.15)',
              }}
            >
              {/* Fallback Image/Gradient before video loads */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8E2D8] to-[#F2EEE7]" />
              
              {/* Placeholder play button overlay for premium feel */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full border transform scale-100 group-hover:scale-110 transition-transform flex items-center justify-center" style={{ borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Text Explanation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div
              style={{
                width: 40,
                height: 1,
                background: '#B09140',
                marginBottom: '2rem',
              }}
            />
            
            <h3
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)',
                fontWeight: 500,
                color: '#0A0A0A',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}
            >
              {t.videoSection.headline}
            </h3>
            
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 300,
                color: 'rgba(10, 10, 10, 0.65)',
                lineHeight: 1.8,
                maxWidth: '400px',
              }}
            >
              {t.videoSection.body}
            </p>

            <div
              style={{
                width: 40,
                height: 1,
                background: '#B09140',
                marginTop: '2.5rem',
              }}
            />
          </motion.div>

          {/* Right Video Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <div 
              className="relative w-full max-w-[380px] aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(193, 164, 82, 0.15)',
                marginTop: 'Opx', // could be staggered for design
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2EEE7] to-[#E8E2D8]" />
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full border transform scale-100 group-hover:scale-110 transition-transform flex items-center justify-center" style={{ borderColor: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
