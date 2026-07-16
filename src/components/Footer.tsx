'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

const footerTranslations: Record<LangCode, {
  tagline: string
  navigation: string
  hairSystem: string
  hairLoss: string
  hollywoodHybrid: string
  aboutUs: string
  blog: string
  contact: string
  contactUs: string
  address: string
  phone: string
  email: string
  legalNotice: string
  allRightsReserved: string
  bookConsultation: string
  ctaDescription: string
}> = {
  sl: {
    tagline: 'Ekskluzivni evropski distributer Hollywood Hair System® – 40 let izkušenj, 25 let delovanja v Evropi.',
    navigation: 'Navigacija',
    hairSystem: 'Lasni Sistem',
    hairLoss: 'Hibridni sistemi',
    hollywoodHybrid: 'Lasulje',
    aboutUs: 'Kdo smo / Naše poslanstvo',
    blog: 'Blog',
    contact: 'Kontakt',
    contactUs: 'Kontaktni podatki',
    address: 'Komenskega 1, 4000 Kranj',
    phone: '031 444 868',
    email: 'info@lasnisistem.com',
    legalNotice: 'Pravno obvestilo',
    allRightsReserved: 'Vse pravice pridržane.',
    bookConsultation: 'Rezervirajte posvet',
    ctaDescription: 'Dogovorite se za diskretno in strokovno posvetovanje.',
  },
  en: {
    tagline: 'Exclusive European distributor of the Hollywood Hair System® – 40 years of experience, 25 years in Europe. Our partner system has been operating since 1977.',
    navigation: 'Navigation',
    hairSystem: 'Hair System',
    hairLoss: 'Hybrid Systems',
    hollywoodHybrid: 'Wigs',
    aboutUs: 'Who We Are / Our Mission',
    blog: 'Articles',
    contact: 'Contact',
    contactUs: 'Get in Touch',
    address: 'Komenskega 1, 4000 Kranj, Slovenia',
    phone: '+386 31 444 868',
    email: 'info@lasnisistem.com',
    legalNotice: 'Legal Notice',
    allRightsReserved: 'All rights reserved.',
    bookConsultation: 'Book a Consultation',
    ctaDescription: 'Schedule a discreet and professional consultation.',
  },
  de: {
    tagline: 'Exklusiver europäischer Distributor des Hollywood Hair System® – 40 Jahre Erfahrung, 25 Jahre in Europa. Das Partnersystem ist seit 1977 tätig.',
    navigation: 'Navigation',
    hairSystem: 'Haarsystem',
    hairLoss: 'Hybridsysteme',
    hollywoodHybrid: 'Perücken',
    aboutUs: 'Wer Wir Sind / Unsere Mission',
    blog: 'Artikel',
    contact: 'Kontakt',
    contactUs: 'Kontaktdaten',
    address: 'Komenskega 1, 4000 Kranj, Slowenien',
    phone: '+386 31 444 868',
    email: 'info@lasnisistem.com',
    legalNotice: 'Rechtlicher Hinweis',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    bookConsultation: 'Beratung buchen',
    ctaDescription: 'Vereinbaren Sie eine diskrete und professionelle Beratung.',
  },
  ru: {
    tagline: 'Эксклюзивный европейский дистрибьютор Hollywood Hair System® – 40 лет опыта, 25 лет в Европе. Партнёрская система работает с 1977 года.',
    navigation: 'Навигация',
    hairSystem: 'Система Волос',
    hairLoss: 'Гибридные системы',
    hollywoodHybrid: 'Парики',
    aboutUs: 'Кто Мы / Наша миссия',
    blog: 'Статьи',
    contact: 'Контакт',
    contactUs: 'Контакты',
    address: 'Коменскега 1, 4000 Крань, Словения',
    phone: '+386 31 444 868',
    email: 'info@lasnisistem.com',
    legalNotice: 'Правовое уведомление',
    allRightsReserved: 'Все права защищены.',
    bookConsultation: 'Записаться на консультацию',
    ctaDescription: 'Запишитесь на конфиденциальную профессиональную консультацию.',
  },
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export default function Footer({ lang }: Props) {
  const ft = footerTranslations[lang] || footerTranslations.sl
  const plesavostLabel: Record<string, string> = {
    sl: 'Plešavost in izpadanje las',
    en: 'Baldness & Hair Loss',
    de: 'Kahlheit & Haarausfall',
    ru: 'Облысение и выпадение волос',
  }

  return (
    <footer style={{ background: '#141210' }}>
      {/* Thin accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(193,164,82,0.3), transparent)' }} />

      {/* Main content */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 3vw, 2.5rem)',
        }}
      >
        {/* Top row: Logo + CTA */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{ marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)', gap: '1.5rem' }}
        >
          <Link href={`/${lang}`} aria-label="Lasni Sistem – domov">
            <Image
              src="/images/logo just icon gold.png"
              alt="Hollywood Hair System Icon"
              width={65}
              height={65}
              style={{
                objectFit: 'contain',
                filter: 'brightness(1.15)',
              }}
            />
          </Link>

          <a
            href={`/${lang}/kontakt`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              padding: '0.75rem 1.8rem',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '2rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
          >
            {ft.bookConsultation}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: 'clamp(2rem, 3vw, 3rem)' }} />

        {/* Columns */}
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {/* Tagline column */}
          <div style={{ maxWidth: 300 }}>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.15rem',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.85)',
                margin: '0 0 1.5rem 0',
              }}
            >
              {ft.tagline}
            </p>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/lasnisistem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.75)',
                transition: 'all 0.25s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FFFFFF'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              }}
            >
              <FacebookIcon />
            </a>
          </div>

          {/* Navigation column */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '1.2rem',
              }}
            >
              {ft.navigation}
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              {[
                { label: ft.hairSystem, href: `/${lang}/#lasni-sistem` },
                { label: ft.hairLoss, href: `/${lang}/hibridni-sistemi` },
                { label: ft.hollywoodHybrid, href: `/${lang}/lasulje` },
                { label: plesavostLabel[lang] || plesavostLabel.sl, href: `/${lang}/plesavost` },
                { label: ft.aboutUs, href: `/${lang}/poslanstvo` },
                { label: ft.blog, href: `/${lang}/blog` },
                { label: ft.contact, href: `/${lang}/kontakt` },
              ].map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    lineHeight: 2,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '1.2rem',
              }}
            >
              {ft.contactUs}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href="https://maps.google.com/?q=Komenskega+1+4000+Kranj+Slovenia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  lineHeight: 1.6,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
              >
                <PinIcon /> {ft.address}
              </a>
              <a
                href="tel:+38631444868"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
              >
                <PhoneIcon /> {ft.phone}
              </a>
              <a
                href="mailto:info@lasnisistem.com"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
              >
                <MailIcon /> {ft.email}
              </a>
            </div>
          </div>

          {/* Consultation description column */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '1.2rem',
              }}
            >
              {ft.bookConsultation}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.75)',
                margin: 0,
              }}
            >
              {ft.ctaDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: 1200,
            padding: '1.2rem clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.8rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            © 2026 FI Potencial d.o.o. {ft.allRightsReserved}
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link
              href={`/${lang}/pravno-obvestilo`}
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              {ft.legalNotice}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
