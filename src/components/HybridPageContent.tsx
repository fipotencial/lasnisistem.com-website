'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef } from 'react'
import type { LangCode } from '@/lib/i18n/translations'

/* ─── Image data ─── */

const menImages = [
  { src: '/hibridi moski slike/Ethan-web-new.jpg', name: 'Ethan' },
  { src: '/hibridi moski slike/Jake-web-new.jpg', name: 'Jake' },
  { src: '/hibridi moski slike/Leo-web-new.jpg', name: 'Leo' },
  { src: '/hibridi moski slike/Logan-web-new.jpg', name: 'Logan' },
  { src: '/hibridi moski slike/Mark-web-new.jpg', name: 'Mark' },
  { src: '/hibridi moski slike/Polo-web-new.jpg', name: 'Polo' },
  { src: '/hibridi moski slike/Ryan-web-new.jpg', name: 'Ryan' },
  { src: '/hibridi moski slike/Tony-web-new.jpg', name: 'Tony' },
  { src: '/hibridi moski slike/Viktor-web-new.jpg', name: 'Viktor' },
  { src: '/hibridi moski slike/William-web-new.jpg', name: 'William' },
]

const womenPairs = [
  {
    name: 'Jenny',
    front: '/zenski hibridi/JENNY_first one.jpg',
    back: '/zenski hibridi/JENNY_TOP_DARK_web.jpg',
  },
  {
    name: 'Reese',
    front: '/zenski hibridi/Reese-01-1.jpg',
    back: '/zenski hibridi/reese 02.jpg',
  },
  {
    name: 'Doris',
    front: '/zenski hibridi/doris1.jpg',
    back: '/zenski hibridi/doris2.jpg',
  },
]

/* ─── Translations ─── */

const t = {
  sl: {
    heroSuperTitle: 'Hibridni sistemi',
    heroTitle: 'Mešanica Hollywood Lasnega Sistema® in lasulje',
    heroSubtitle: 'Za moške in ženske lasulje',
    introTitle: 'Hibridni sistemi za moške in ženske iz najkvalitetnejših evropskih las!',
    introP1: 'Strojno narejeni na zalogo in zato cenovno ugodnejši, kot Hollywood Lasni sistem®, čeprav so iz evropskih las enake najvišje kvalitete in so na voljo v vseh barvah. Lahko se jih tudi barva, dela pramene, kodra, lika,… Visoka kvaliteta las vas bo naravnost osupnila!',
    introP2: 'Hibridni sistemi moških in ženskih lasulj vam omogočajo, da z lasmi počnete točno tisto kar si želite – JA! – Do njih se lahko vedete, kot bi bili lasje vaši in ponovno lahko zaživite polno življenje!',
    whyTitle: 'Zakaj niso kot običajne nizkocenovne lasulje?',
    whyP1: 'Ker se zanje uporabi le najkvalitetnejše neoporečne evropske lase – kot za Hollywood Lasne sisteme®, hkrati imajo spredaj podobno mrežico kot Hollywood Lasni sistem®…',
    whyP2: 'Hibridni sistemi so primerni predvsem za ljudi, ki se soočajo s kemoterapijo ali ostalimi boleznimi, saj je organizem že tako obremenjen s kemikalijami in jih ne potrebujete še na glavi v obliki cenejših kemično obdelanih ali celo radioaktivnih las ali sintetičnih vlaken! Drugi razlog za nakup hibrida je, da so dobavljivi običajno v tednu dni, v kolikor je na zalogi izdelek v vaši zaželeni barvi.',
    galleryMenTitle: 'Moški hibridni sistemi',
    galleryWomenTitle: 'Ženski hibridni sistemi',
    partnerText: 'Za podrobnejše informacije o vseh razpoložljivih modelih obiščite spletno stran našega partnerja',
    houseOfEuropeanHair: 'House of European Hair',
    partnerMenLink: 'Moški hibridni sistemi →',
    partnerWomenLink: 'Ženski hibridni sistemi →',
    partnerCta: 'Ko izberete hibridni sistem, ki vam je všeč, nas kontaktirajte in pomagali vam bomo pri naročilu ali izbiri najprimernejšega za vas.',
    contactUs: 'Kontaktirajte nas',
    front: 'Spredaj',
    back: 'Zadaj',
  },
  en: {
    heroSuperTitle: 'Hybrid Systems',
    heroTitle: 'A blend of Hollywood Hair System® and a wig',
    heroSubtitle: 'For men and women',
    introTitle: 'Hybrid systems for men and women made from the finest European hair!',
    introP1: 'Machine-made and kept in stock, making them more affordable than the Hollywood Hair System®, even though they use European hair of the same highest quality and are available in all colours. They can also be coloured, highlighted, curled, straightened,… The high quality of the hair will truly amaze you!',
    introP2: 'Hybrid systems for men and women allow you to do exactly what you want with your hair – YES! – You can treat them as if they were your own hair and start living life to the fullest again!',
    whyTitle: 'Why are they not like ordinary low-cost wigs?',
    whyP1: 'Because only the finest virgin European hair is used – just like for the Hollywood Hair Systems®, and they also feature a similar mesh at the front, just like the Hollywood Hair System®…',
    whyP2: 'Hybrid systems are particularly suitable for people undergoing chemotherapy or other illnesses, as the body is already burdened with chemicals and does not need more on the head in the form of cheaper chemically treated or even radioactive hair or synthetic fibres! Another reason to purchase a hybrid is that they are usually available within a week, provided the product in your desired colour is in stock.',
    galleryMenTitle: 'Men\'s Hybrid Systems',
    galleryWomenTitle: 'Women\'s Hybrid Systems',
    partnerText: 'For more detailed information about all available models, visit the website of our partner',
    houseOfEuropeanHair: 'House of European Hair',
    partnerMenLink: 'Men\'s Hybrid Systems →',
    partnerWomenLink: 'Women\'s Hybrid Systems →',
    partnerCta: 'When you choose a hybrid system you like, contact us and we\'ll help you with the order or choose the most suitable one for you.',
    contactUs: 'Contact Us',
    front: 'Front',
    back: 'Back',
  },
  de: {
    heroSuperTitle: 'Hybridsysteme',
    heroTitle: 'Eine Mischung aus Hollywood Haarsystem® und Perücke',
    heroSubtitle: 'Für Männer und Frauen',
    introTitle: 'Hybridsysteme für Männer und Frauen aus hochwertigstem europäischem Haar!',
    introP1: 'Maschinell gefertigt und auf Lager, daher günstiger als das Hollywood Haarsystem®, obwohl sie aus europäischem Haar gleicher höchster Qualität bestehen und in allen Farben erhältlich sind. Sie können auch gefärbt, gestränt, gelockt, geglättet werden,… Die hohe Qualität der Haare wird Sie einfach verblüffen!',
    introP2: 'Hybridsysteme für Männer und Frauen ermöglichen es Ihnen, mit Ihren Haaren genau das zu tun, was Sie möchten – JA! – Sie können sie behandeln, als wären es Ihre eigenen Haare und wieder ein volles Leben genießen!',
    whyTitle: 'Warum sind sie nicht wie gewöhnliche Billigperücken?',
    whyP1: 'Weil nur das hochwertigste unbehandelte europäische Haar verwendet wird – wie für die Hollywood Haarsysteme®, und sie vorne ein ähnliches Netz wie das Hollywood Haarsystem® haben…',
    whyP2: 'Hybridsysteme sind besonders geeignet für Menschen, die sich einer Chemotherapie oder anderen Krankheiten unterziehen, da der Körper bereits mit Chemikalien belastet ist und keine weiteren auf dem Kopf in Form von billigeren chemisch behandelten oder sogar radioaktiven Haaren oder synthetischen Fasern braucht! Ein weiterer Grund für den Kauf eines Hybrids ist, dass sie in der Regel innerhalb einer Woche lieferbar sind, sofern das Produkt in Ihrer gewünschten Farbe vorrätig ist.',
    galleryMenTitle: 'Hybridsysteme für Herren',
    galleryWomenTitle: 'Hybridsysteme für Damen',
    partnerText: 'Für detailliertere Informationen zu allen verfügbaren Modellen besuchen Sie die Website unseres Partners',
    houseOfEuropeanHair: 'House of European Hair',
    partnerMenLink: 'Herren-Hybridsysteme →',
    partnerWomenLink: 'Damen-Hybridsysteme →',
    partnerCta: 'Wenn Sie ein Hybridsystem gefunden haben, das Ihnen gefällt, kontaktieren Sie uns und wir helfen Ihnen bei der Bestellung oder bei der Auswahl des für Sie am besten geeigneten.',
    contactUs: 'Kontaktieren Sie uns',
    front: 'Vorne',
    back: 'Hinten',
  },
  ru: {
    heroSuperTitle: 'Гибридные системы',
    heroTitle: 'Смесь Голливудской Системы Волос® и парика',
    heroSubtitle: 'Для мужчин и женщин',
    introTitle: 'Гибридные системы для мужчин и женщин из высококачественных европейских волос!',
    introP1: 'Машинного производства и в наличии на складе, поэтому дешевле, чем Голливудская Система Волос®, хотя используются европейские волосы такого же высочайшего качества и доступны во всех цветах. Их также можно окрашивать, мелировать, завивать, выпрямлять,… Высокое качество волос вас просто поразит!',
    introP2: 'Гибридные системы для мужчин и женщин позволяют вам делать с волосами именно то, что вы хотите – ДА! – Вы можете обращаться с ними, как со своими собственными волосами, и снова жить полной жизнью!',
    whyTitle: 'Почему они не похожи на обычные дешёвые парики?',
    whyP1: 'Потому что используются только высококачественные необработанные европейские волосы – как и для Голливудских Систем Волос®, а также спереди имеется аналогичная сетка, как у Голливудской Системы Волос®…',
    whyP2: 'Гибридные системы особенно подходят для людей, проходящих химиотерапию или страдающих другими заболеваниями, поскольку организм уже нагружен химическими веществами и не нуждается в дополнительных на голове в виде более дешёвых химически обработанных или даже радиоактивных волос или синтетических волокон! Другая причина для покупки гибрида – они обычно доступны в течение недели, при условии наличия товара в вашем желаемом цвете.',
    galleryMenTitle: 'Мужские гибридные системы',
    galleryWomenTitle: 'Женские гибридные системы',
    partnerText: 'Для получения более подробной информации обо всех доступных моделях посетите сайт нашего партнера',
    houseOfEuropeanHair: 'House of European Hair',
    partnerMenLink: 'Мужские гибридные системы →',
    partnerWomenLink: 'Женские гибридные системы →',
    partnerCta: 'Когда вы выберете понравившуюся гибридную систему, свяжитесь с нами, и мы поможем вам с заказом или подбором наиболее подходящей для вас.',
    contactUs: 'Связаться с нами',
    front: 'Спереди',
    back: 'Сзади',
  },
}

/* ─── Gallery Arrow ─── */

function ArrowButton({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid rgba(193,164,82,0.3)',
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s ease',
        color: '#A0885A',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#C1A452'
        e.currentTarget.style.color = '#FFFFFF'
        e.currentTarget.style.borderColor = '#C1A452'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
        e.currentTarget.style.color = '#A0885A'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.3)'
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'left'
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 6 15 12 9 18" />
        }
      </svg>
    </button>
  )
}

/* ─── Men's Gallery ─── */

function MenGallery() {
  const [idx, setIdx] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const prev = () => setIdx(i => (i - 1 + menImages.length) % menImages.length)
  const next = () => setIdx(i => (i + 1) % menImages.length)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
    el.style.setProperty('--glow-opacity', '1')
  }, [])

  const handleLeave = useCallback(() => {
    cardRef.current?.style.setProperty('--glow-opacity', '0')
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: '1rem',
          overflow: 'hidden',
          background: '#FFFFFF',
          border: '1px solid rgba(193,164,82,0.15)',
          boxShadow: '0 4px 24px rgba(140,120,60,0.08)',
        }}
      >
        {/* Glow overlay */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3, borderRadius: '1rem',
            opacity: 'var(--glow-opacity, 0)' as unknown as number,
            background: 'radial-gradient(350px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(193,164,82,0.12), transparent 50%)',
            transition: 'opacity 0.3s ease',
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={menImages[idx].src}
              alt={menImages[idx].name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Name overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          padding: '2rem 1.2rem 1rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.4rem',
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
          }}>
            {menImages[idx].name}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ArrowButton direction="left" onClick={prev} />
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 400,
          color: '#8B8178',
          minWidth: 48,
          textAlign: 'center',
        }}>
          {idx + 1} / {menImages.length}
        </span>
        <ArrowButton direction="right" onClick={next} />
      </div>
    </div>
  )
}

/* ─── Women's Gallery ─── */

function WomenGallery({ labels }: { labels: { front: string; back: string } }) {
  const [idx, setIdx] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const prev = () => setIdx(i => (i - 1 + womenPairs.length) % womenPairs.length)
  const next = () => setIdx(i => (i + 1) % womenPairs.length)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
    el.style.setProperty('--glow-opacity', '1')
  }, [])

  const handleLeave = useCallback(() => {
    cardRef.current?.style.setProperty('--glow-opacity', '0')
  }, [])

  const pair = womenPairs[idx]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '2 / 1',
          borderRadius: '1rem',
          overflow: 'hidden',
          background: '#FFFFFF',
          border: '1px solid rgba(193,164,82,0.15)',
          boxShadow: '0 4px 24px rgba(140,120,60,0.08)',
        }}
      >
        {/* Glow overlay */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3, borderRadius: '1rem',
            opacity: 'var(--glow-opacity, 0)' as unknown as number,
            background: 'radial-gradient(350px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(193,164,82,0.12), transparent 50%)',
            transition: 'opacity 0.3s ease',
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'row',
            }}
          >
            {/* Left image — front */}
            <div style={{ position: 'relative', flex: 1 }}>
              <Image
                src={pair.front}
                alt={`${pair.name}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 45vw, 200px"
              />
            </div>
            {/* Thin vertical separator */}
            <div style={{ width: 2, background: '#F3F0EB', flexShrink: 0 }} />
            {/* Right image — back */}
            <div style={{ position: 'relative', flex: 1 }}>
              <Image
                src={pair.back}
                alt={`${pair.name}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Name overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          padding: '2rem 1.2rem 1rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.4rem',
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
          }}>
            {pair.name}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ArrowButton direction="left" onClick={prev} />
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 400,
          color: '#8B8178',
          minWidth: 48,
          textAlign: 'center',
        }}>
          {idx + 1} / {womenPairs.length}
        </span>
        <ArrowButton direction="right" onClick={next} />
      </div>
    </div>
  )
}

/* ─── Gold Dot ─── */

function GoldDot() {
  return (
    <span style={{
      display: 'inline-block', width: 6, height: 6,
      borderRadius: '50%', background: '#C1A452',
      flexShrink: 0, marginTop: '0.55rem',
    }} />
  )
}

/* ─── Main Component ─── */

export default function HybridPageContent({ lang }: { lang: LangCode }) {
  const labels = t[lang] || t.sl

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        background: 'linear-gradient(180deg, #F5F2ED 0%, #EDE8E0 100%)',
        paddingTop: 'clamp(8rem, 14vw, 12rem)',
        paddingBottom: 'clamp(3rem, 5vw, 5rem)',
      }}>
        <div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          style={{ width: '88%', maxWidth: 1200, margin: '0 auto' }}
        >
          {/* Left Content */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            {/* Super title */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C1A452',
                display: 'block',
                marginBottom: '1.5rem',
              }}
            >
              {labels.heroSuperTitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.1,
                marginBottom: '1.2rem',
              }}
            >
              {labels.heroTitle}
            </motion.h1>

          </div>

          {/* Right Image */}
          <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                position: 'relative',
                marginTop: '3rem',
                width: '100%',
                aspectRatio: '21 / 9',
                maxWidth: 500,
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/lasni-hibridi_image.jpg"
                alt={labels.heroTitle}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INTRO CONTENT ─── */}
      <section style={{ background: '#FEFEFE' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative line */}
            <div style={{
              width: 48, height: 2, borderRadius: 2, marginBottom: '2rem',
              background: 'linear-gradient(90deg, #C1A452, rgba(193,164,82,0.2))',
            }} />

            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 400,
              color: '#1C1917',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}>
              {labels.introTitle}
            </h2>

            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.05rem', fontWeight: 300,
              lineHeight: 1.8, color: 'rgba(28,25,23,0.65)',
              marginBottom: '1.5rem',
            }}>
              {labels.introP1}
            </p>

            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.05rem', fontWeight: 300,
              lineHeight: 1.8, color: 'rgba(28,25,23,0.65)',
              marginBottom: 0,
            }}>
              {labels.introP2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY SECTION ─── */}
      <section style={{ background: '#F3F0EB' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              background: '#FFFFFF',
              borderRadius: '1.5rem',
              border: '1px solid rgba(193,164,82,0.15)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 4px 24px rgba(140,120,60,0.06)',
            }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#A0885A',
                marginBottom: '1.8rem',
                lineHeight: 1.2,
              }}>
                {labels.whyTitle}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <GoldDot />
                  <p style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1rem', fontWeight: 300,
                    lineHeight: 1.75, color: '#44403C',
                    margin: 0,
                  }}>
                    {labels.whyP1}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <GoldDot />
                  <p style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1rem', fontWeight: 300,
                    lineHeight: 1.75, color: '#44403C',
                    margin: 0,
                  }}>
                    {labels.whyP2}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERIES ─── */}
      <section style={{ background: '#FEFEFE' }}>
        <div style={{
          width: '88%', maxWidth: 1100, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          {/* Gallery grid: Men left, Women right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Men's gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2vw, 1.9rem)',
                fontWeight: 400,
                color: '#1C1917',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}>
                {labels.galleryMenTitle}
              </h3>
              <MenGallery />
            </motion.div>

            {/* Women's gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1"
            >
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2vw, 1.9rem)',
                fontWeight: 400,
                color: '#1C1917',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}>
                {labels.galleryWomenTitle}
              </h3>
              <WomenGallery labels={{ front: labels.front, back: labels.back }} />
            </motion.div>
          </div>

          {/* Partner section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{
              marginTop: 'clamp(3rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #F3F0EB 0%, #EDE8E0 100%)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(193,164,82,0.15)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1rem', fontWeight: 300,
              lineHeight: 1.7, color: '#44403C',
              marginBottom: '1.5rem',
              maxWidth: 700, marginLeft: 'auto', marginRight: 'auto',
            }}>
              {labels.partnerText}{' '}
              <span style={{ fontWeight: 500, color: '#A0885A' }}>{labels.houseOfEuropeanHair}</span>.
            </p>

            {/* Partner links */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'center', gap: '1rem',
              marginBottom: '2rem',
            }}>
              <a
                href="https://houseofeuropeanhair.com/collections/mens-hair-pieces"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.78rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#1C1917', backgroundColor: '#C1A452',
                  padding: '0.8rem 2rem', borderRadius: '2px',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4AF37' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C1A452' }}
              >
                {labels.partnerMenLink}
              </a>
              <a
                href="https://houseofeuropeanhair.com/collections/womens-toppers"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.78rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#1C1917', backgroundColor: '#C1A452',
                  padding: '0.8rem 2rem', borderRadius: '2px',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4AF37' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C1A452' }}
              >
                {labels.partnerWomenLink}
              </a>
            </div>

            {/* CTA text + contact button */}
            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.95rem', fontWeight: 300,
              lineHeight: 1.7, color: '#6B6155',
              marginBottom: '1.5rem',
              maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
            }}>
              {labels.partnerCta}
            </p>

            <Link
              href={`/${lang}/kontakt`}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#FFFFFF', backgroundColor: '#1C1917',
                padding: '0.85rem 2.2rem', borderRadius: '2px',
                textDecoration: 'none', transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#44403C' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1C1917' }}
            >
              {labels.contactUs}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
