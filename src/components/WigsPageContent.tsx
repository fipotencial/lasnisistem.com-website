'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef } from 'react'
import type { LangCode } from '@/lib/i18n/translations'
import { lasuljeFaq } from '@/lib/lasuljeFaq'

/* ─── Image data ─── */

const wigPairs = [
  {
    name: 'Cara',
    front: '/lasulje zenske slike/Cara_HEH_hair.webp',
    side: '/lasulje zenske slike/Cara_side.webp',
  },
  {
    name: 'Laura',
    front: '/lasulje zenske slike/Laura_sq.webp',
    side: '/lasulje zenske slike/Laura-2.jpg',
  },
  {
    name: 'Nancy',
    front: '/lasulje zenske slike/Nancy.webp',
    side: '/lasulje zenske slike/Nancy-side.webp',
  },
  {
    name: 'Reba',
    front: '/lasulje zenske slike/REBA-House-of-European-Hair-1005.webp',
    side: '/lasulje zenske slike/Reba_side.webp',
  },
  {
    name: 'Susan',
    front: '/lasulje zenske slike/Susan-German-House-of-European-Hair-4242.webp',
    side: '/lasulje zenske slike/Susan side.webp',
  },
  {
    name: 'Susan German',
    front: '/lasulje zenske slike/SusanGermanfrontsidecap.webp',
    side: '/lasulje zenske slike/Susan2GHTside.webp',
  },
]

/* ─── Translations ─── */

const t = {
  sl: {
    heroSuperTitle: 'Lasulje',
    heroTitle: 'Samo najboljše lasulje',
    heroSubtitle: 'Naše lasulje iz evropskih las so na voljo v različnih modelih oziroma bazah.',
    introTitle: 'Vrhunske lastnosti naših lasulj',
    introP1: 'Lasulje iz evropskih las so na voljo v različnih modelih oziroma bazah. Lahko jih nosite preko svojih las, tiste s silikonskimi trakovi pa so primerne za ljudi, ki imajo zelo malo ali nič las. Vse imajo na vrhu ročno obdelano vrhunsko francosko mrežico za optimalno naraven izgled las in lasišča.',
    introP2: 'Izboljšajte svoj videz z našimi vrhunskimi ženskimi lasuljami in lasnimi vložki (topperji). Izdelani iz najkakovostnejših človeških las, je vsak kos strokovno narejen za zagotavljanje naravnega videza in občutka. Naša zbirka vključuje različne delne lasne vložke iz človeških las, vključno z modeli s "French top" in "Silk top" (francoska mrežica in svila) obdelavo, za dodajanje volumna in prekrivanja. Poiščite najboljši vložek na zalogi ali raziščite možnosti izdelave po meri.',
    introP3: 'Na voljo so lasulje s klasično bazo, mešanico silikona in mrežice, mrežico spredaj in elastiko zadaj.',
    galleryTitle: 'Galerija lasulj in baz',
    partnerText: 'Za podrobnejše informacije o vseh razpoložljivih modelih obiščite spletno stran našega partnerja',
    houseOfEuropeanHair: 'House of European Hair',
    partnerLink: 'Oglejte si modele →',
    partnerCta: 'Ko izberete lasuljo, ki vam je všeč, nas kontaktirajte in pomagali vam bomo pri naročilu ali izbiri najprimernejše za vas.',
    contactUs: 'Kontaktirajte nas',
  },
  en: {
    heroSuperTitle: 'Wigs',
    heroTitle: 'Only the Best Wigs',
    heroSubtitle: 'Our European hair wigs are available in various models and bases.',
    introTitle: 'Premium features of our wigs',
    introP1: 'European hair wigs are available in various models and bases. You can wear them over your own hair, while those with silicone bands are suitable for people with very little or no hair. They all feature a hand-finished premium French lace top for an optimally natural look of the hair and scalp.',
    introP2: 'Elevate your look with our premium women\'s hair toppers. Made with the highest quality human hair, each topper is expertly crafted to ensure a natural look and feel. Our collection features a variety of partial human hair toppers, including French top and silk top designs, to add volume and coverage. Find the best in-stock topper or explore custom-made options.',
    introP3: 'Wigs with a classic base, a silicone and lace mix, lace front and elastic back are available.',
    galleryTitle: 'Wigs & Bases Gallery',
    partnerText: 'For more detailed information about all available models, visit the website of our partner',
    houseOfEuropeanHair: 'House of European Hair',
    partnerLink: 'View Models →',
    partnerCta: 'When you choose a wig you like, contact us and we\'ll help you with the order or choose the most suitable one for you.',
    contactUs: 'Contact Us',
  },
  de: {
    heroSuperTitle: 'Perücken',
    heroTitle: 'Nur die besten Perücken',
    heroSubtitle: 'Unsere europäischen Echthaarperücken sind in verschiedenen Modellen erhältlich.',
    introTitle: 'Premium-Eigenschaften unserer Perücken',
    introP1: 'Europäische Echthaarperücken sind in verschiedenen Modellen und Basen erhältlich. Sie können sie über Ihrem eigenen Haar tragen, während die mit Silikonbändern für Personen mit sehr wenig oder gar keinem Haar geeignet sind. Alle verfügen über eine handgearbeitete hochwertige französische Spitze am Oberkopf für ein optimal natürliches Aussehen von Haar und Kopfhaut.',
    introP2: 'Werten Sie Ihren Look mit unseren Premium-Haar-Toppern für Damen auf. Hergestellt aus hochwertigstem Echthaar, ist jeder Topper meisterhaft gefertigt, um ein natürliches Aussehen und Gefühl zu gewährleisten. Unsere Kollektion umfasst eine Vielzahl von Teil-Echthaar-Toppern, darunter Designs mit French Top und Silk Top, um Volumen und Abdeckung hinzuzufügen. Finden Sie den besten Topper auf Lager oder entdecken Sie maßgeschneiderte Optionen.',
    introP3: 'Erhältlich sind Perücken mit klassischer Basis, einer Mischung aus Silikon und Spitze sowie Lacefront mit elastischer Rückseite.',
    galleryTitle: 'Perücken & Basis Galerie',
    partnerText: 'Für detailliertere Informationen zu allen verfügbaren Modellen besuchen Sie die Website unseres Partners',
    houseOfEuropeanHair: 'House of European Hair',
    partnerLink: 'Modelle ansehen →',
    partnerCta: 'Wenn Sie eine Perücke gefunden haben, die Ihnen gefällt, kontaktieren Sie uns und wir helfen Ihnen bei der Bestellung oder der Auswahl.',
    contactUs: 'Kontaktieren Sie uns',
  },
  ru: {
    heroSuperTitle: 'Парики',
    heroTitle: 'Только лучшие парики',
    heroSubtitle: 'Наши парики из европейских волос доступны в различных моделях и основах.',
    introTitle: 'Премиальные особенности наших париков',
    introP1: 'Парики из европейских волос доступны в различных моделях и основах. Вы можете носить их поверх собственных волос, а варианты с силиконовыми лентами подходят для людей с очень небольшим количеством волос или их отсутствием. Все они имеют ручную отделку премиальным французским кружевом на макушке для оптимально естественного вида волос и кожи головы.',
    introP2: 'Подчеркните свой образ с нашими премиальными женскими накладками для волос. Сделанная из высококачественных человеческих волос, каждая накладка мастерски создана для обеспечения естественного вида и ощущения. Наша коллекция включает различные частичные накладки из человеческих волос, в том числе с отделкой "French top" и "Silk top" (французское кружево и шелк), для добавления объема и покрытия. Найдите лучшую накладку в наличии или рассмотрите варианты изготовления на заказ.',
    introP3: 'Доступны парики с классической основой, смесью силикона и кружева, передней сеткой и эластичной спинкой.',
    galleryTitle: 'Галерея париков',
    partnerText: 'Для получения более подробной информации обо всех доступных моделях посетите сайт нашего партнера',
    houseOfEuropeanHair: 'House of European Hair',
    partnerLink: 'Посмотреть модели →',
    partnerCta: 'Когда вы выберете понравившийся парик, свяжитесь с нами, и мы поможем вам с заказом или подбором подходящего.',
    contactUs: 'Связаться с нами',
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

/* ─── Wigs Gallery ─── */

function WigsGallery() {
  const [idx, setIdx] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const prev = () => setIdx(i => (i - 1 + wigPairs.length) % wigPairs.length)
  const next = () => setIdx(i => (i + 1) % wigPairs.length)

  const pair = wigPairs[idx]

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 900,
          aspectRatio: '3 / 2',
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
            {/* Left image */}
            <div style={{ position: 'relative', flex: 1 }}>
              <Image
                src={pair.front}
                alt={`${pair.name}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 45vw, 450px"
              />
            </div>
            {/* Thin vertical separator */}
            <div style={{ width: 2, background: '#F3F0EB', flexShrink: 0 }} />
            {/* Right image */}
            <div style={{ position: 'relative', flex: 1 }}>
              <Image
                src={pair.side}
                alt={`${pair.name}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 45vw, 450px"
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
            fontFamily: 'var(--font-cormorant), Georgia, serif',
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
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 400,
          color: '#8B8178',
          minWidth: 48,
          textAlign: 'center',
        }}>
          {idx + 1} / {wigPairs.length}
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

export default function WigsPageContent({ lang }: { lang: LangCode }) {
  const labels = t[lang] || t.sl

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        background: 'linear-gradient(180deg, #F5F2ED 0%, #EDE8E0 100%)',
        paddingTop: 'clamp(8rem, 14vw, 12rem)',
        paddingBottom: 'clamp(4rem, 6vw, 6rem)',
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
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
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
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.1,
                marginBottom: '1.2rem',
              }}
            >
              {labels.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 300,
                color: '#6B6155',
                lineHeight: 1.6,
              }}
            >
              {labels.heroSubtitle}
            </motion.p>
          </div>

          {/* Right Image */}
          <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                maxWidth: 600,
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/lasulje zenske slike/Cara_HEH_hair.webp"
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
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 400,
              color: '#1C1917',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}>
              {labels.introTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '1.05rem', fontWeight: 300,
                lineHeight: 1.8, color: 'rgba(28,25,23,0.65)',
                margin: 0,
              }}>
                {labels.introP1}
              </p>
              
              <p style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '1.05rem', fontWeight: 300,
                lineHeight: 1.8, color: 'rgba(28,25,23,0.65)',
                margin: 0,
              }}>
                {labels.introP2}
              </p>

              <div style={{
                marginTop: '1rem',
                background: '#F3F0EB',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(193,164,82,0.15)',
              }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <GoldDot />
                  <p style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '1rem', fontWeight: 500,
                    lineHeight: 1.6, color: '#44403C',
                    margin: 0,
                  }}>
                    {labels.introP3}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {lang === 'sl' && (
        <>
          {/* ─── SLOVENIAN BUYER GUIDE ─── */}
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
                <h2 style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1C1917',
                  lineHeight: 1.15,
                  marginBottom: '2rem',
                }}>
                  Kako izbrati pravo lasuljo?
                </h2>

                <p style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '1.05rem', fontWeight: 300,
                  lineHeight: 1.8, color: 'rgba(28,25,23,0.65)',
                  marginBottom: '1.5rem',
                }}>
                  Dobra lasulja ni samo pričeska. Na naraven videz in udobje vplivajo izvor ter obdelava las, konstrukcija baze, gostota, barva, velikost in način pritrditve. Pri osebi z lastnimi lasmi so zahteve drugačne kot pri popolni izgubi las zaradi <Link href="/sl/blog/alopecia-areata" style={{ color: '#6B6155', textDecoration: 'underline', textUnderlineOffset: 3 }}>alopecije</Link> ali onkološkega zdravljenja.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                  {[
                    {
                      title: 'Lasulja iz naravnih las',
                      text: 'Omogoča striženje, barvno prilagoditev in več načinov oblikovanja. Evropski lasje so lahko posebej primerni, ko želimo fino strukturo in naraven padec, podoben lasem številnih evropskih uporabnic.',
                    },
                    {
                      title: 'Sintetična lasulja',
                      text: 'Običajno je cenovno dostopnejša in po pranju lažje ohrani obliko. Omejitve so manj naraven občutek pri nekaterih vlaknih, manj možnosti oblikovanja in občutljivost na toploto.',
                    },
                    {
                      title: 'Lasni vložek ali topper',
                      text: 'Primeren je, ko je izguba las omejena predvsem na prečo ali teme in je dovolj lastnih las za povezavo. Doda gostoto brez prekrivanja celotnega lasišča.',
                    },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: '#FFFFFF',
                      borderRadius: '1rem',
                      border: '1px solid rgba(193,164,82,0.15)',
                      padding: '1.6rem',
                      boxShadow: '0 4px 24px rgba(140,120,60,0.05)',
                    }}>
                      <h3 style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '1.35rem',
                        fontWeight: 500,
                        color: '#1C1917',
                        marginBottom: '0.7rem',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.95rem', fontWeight: 300,
                        lineHeight: 1.7, color: 'rgba(28,25,23,0.65)',
                        margin: 0,
                      }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

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
                <h2 style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: '#1C1917',
                  lineHeight: 1.15,
                  marginBottom: '2rem',
                }}>
                  Kaj preveriti pred nakupom lasulje
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    ['Prileganje in velikost', 'Lasulja ne sme drseti, pritiskati ali povzročati bolečine. Velikost in oblika baze morata ustrezati obsegu ter obliki glave.'],
                    ['Baza in zračnost', 'French top, silk top, mrežica spredaj, silikon in elastični deli imajo različne prednosti. Izbira je odvisna od količine lastnih las, občutljivosti kože in načina pritrditve.'],
                    ['Gostota in linija las', 'Pregosta lasulja je lahko manj naravna. Gostoto, prečo in sprednjo linijo je smiselno prilagoditi obrazu, starosti ter želeni pričeski.'],
                    ['Nega in stroški skozi čas', 'Poleg začetne cene upoštevajte pranje, oblikovanje, morebitne prilagoditve ter pričakovano življenjsko dobo. Naravni lasje zahtevajo nežno nego in zaščito pred visoko toploto.'],
                  ].map(([title, text]) => (
                    <div key={title} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <GoldDot />
                      <p style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '1rem', fontWeight: 300,
                        lineHeight: 1.75, color: '#44403C',
                        margin: 0,
                      }}>
                        <strong style={{ fontWeight: 500, color: '#1C1917' }}>{title}.</strong>{' '}
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '1.05rem', fontWeight: 300,
                  lineHeight: 1.8, color: 'rgba(28,25,23,0.65)',
                  margin: '2rem 0 0',
                }}>
                  Cena je odvisna od vrste in dolžine las, konstrukcije baze, izdelave po meri ter potrebnih prilagoditev. Zato brez izbire modela ne navajamo ene splošne cene. Na osebnem posvetu lahko primerjate možnosti in dobite jasno ponudbo pred naročilom. Če še ne veste, ali potrebujete lasuljo, vložek ali drug lasni nadomestek, preberite tudi vodič o <Link href="/sl/blog/izpadanje-las-vzroki-vrste-in-resitve" style={{ color: '#6B6155', textDecoration: 'underline', textUnderlineOffset: 3 }}>vzrokih in rešitvah za izpadanje las</Link>.
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* ─── GALLERY SECTION ─── */}
      <section style={{ background: '#F5F2ED' }}>
        <div style={{
          width: '88%', maxWidth: 1100, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 400,
              color: '#1C1917',
              textAlign: 'center',
              marginBottom: '2.5rem',
            }}>
              {labels.galleryTitle}
            </h3>
            
            <div className="flex justify-center">
              <WigsGallery />
            </div>
          </motion.div>

          {/* Partner section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{
              marginTop: 'clamp(4rem, 6vw, 5rem)',
              background: '#FFFFFF',
              borderRadius: '1.5rem',
              border: '1px solid rgba(193,164,82,0.15)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(140,120,60,0.06)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '1rem', fontWeight: 300,
              lineHeight: 1.7, color: '#44403C',
              marginBottom: '1.5rem',
              maxWidth: 700, marginLeft: 'auto', marginRight: 'auto',
            }}>
              {labels.partnerText}{' '}
              <span style={{ fontWeight: 500, color: '#A0885A' }}>{labels.houseOfEuropeanHair}</span>.
            </p>

            {/* Partner link */}
            <div style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'center', gap: '1rem',
              marginBottom: '2rem',
            }}>
              <a
                href="https://houseofeuropeanhair.com/collections/womens-wigs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.78rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#1C1917', backgroundColor: '#C1A452',
                  padding: '0.8rem 2rem', borderRadius: '2px',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4AF37' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C1A452' }}
              >
                {labels.partnerLink}
              </a>
            </div>

            {/* CTA text + contact button */}
            <p style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
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
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
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

      {lang === 'sl' && (
        <section style={{ background: '#FEFEFE' }}>
          <div style={{
            width: '88%', maxWidth: 900, margin: '0 auto',
            padding: 'clamp(3rem, 5vw, 5rem) 0',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 400,
              color: '#1C1917',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}>
              Pogosta vprašanja o lasuljah
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {lasuljeFaq.map((item) => (
                <div key={item.question} style={{
                  background: '#F5F2ED',
                  borderRadius: '1rem',
                  border: '1px solid rgba(193,164,82,0.15)',
                  padding: '1.6rem 1.8rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: '#1C1917',
                    marginBottom: '0.6rem',
                    lineHeight: 1.3,
                  }}>
                    {item.question}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: 'rgba(28,25,23,0.65)',
                    margin: 0,
                  }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
