'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

const contactTranslations: Record<LangCode, {
  heroTitle: string
  heroSubtitle: string
  formName: string
  formEmail: string
  formPhone: string
  formMessage: string
  formSubmit: string
  formSending: string
  formSuccess: string
  formDisclaimer: string
  infoTitle: string
  address: string
  addressValue: string
  phone: string
  phoneValue: string
  email: string
  emailValue: string
  hours: string
  hoursValue: string
  hoursSat: string
  mapTitle: string
  discretion: string
  discretionText: string
}> = {
  sl: {
    heroTitle: 'Stopite v stik z nami',
    heroSubtitle: 'Rezervirajte diskretno in strokovno konzultacijo ali nam pišite z vprašanji.',
    formName: 'Ime in priimek',
    formEmail: 'E-poštni naslov',
    formPhone: 'Telefonska številka',
    formMessage: 'Vaše sporočilo',
    formSubmit: 'Pošlji sporočilo',
    formSending: 'Pošiljam...',
    formSuccess: 'Sporočilo je bilo uspešno poslano. Odgovorili vam bomo v najkrajšem času.',
    formDisclaimer: 'Vaši podatki so zaupni in jih ne delimo s tretjimi osebami.',
    infoTitle: 'Kontaktni podatki',
    address: 'Naslov',
    addressValue: 'Komenskega 1\n4000 Kranj, Slovenija',
    phone: 'Telefon',
    phoneValue: '031 444 868',
    email: 'E-pošta',
    emailValue: 'info@lasnisistem.com',
    hours: 'Delovni čas',
    hoursValue: 'Ponedeljek – Sobota: Po dogovoru',
    hoursSat: '',
    mapTitle: 'Naša lokacija',
    discretion: 'Popolna diskretnost',
    discretionText: 'Vsako posvetovanje poteka v popolnoma zasebnem prostoru. Vaša zasebnost je naša prednostna naloga.',
  },
  en: {
    heroTitle: 'Get in Touch',
    heroSubtitle: 'Reserve a discrete and professional consultation or send us your questions.',
    formName: 'Full name',
    formEmail: 'Email address',
    formPhone: 'Phone number',
    formMessage: 'Your message',
    formSubmit: 'Send message',
    formSending: 'Sending...',
    formSuccess: 'Your message has been sent successfully. We will respond as soon as possible.',
    formDisclaimer: 'Your information is confidential and never shared with third parties.',
    infoTitle: 'Contact Information',
    address: 'Address',
    addressValue: 'Komenskega 1\n4000 Kranj, Slovenia',
    phone: 'Phone',
    phoneValue: '+386 31 444 868',
    email: 'Email',
    emailValue: 'info@lasnisistem.com',
    hours: 'Working Hours',
    hoursValue: 'Monday – Saturday: By appointment',
    hoursSat: '',
    mapTitle: 'Our Location',
    discretion: 'Complete Discretion',
    discretionText: 'Every consultation takes place in a completely private setting. Your privacy is our top priority.',
  },
  de: {
    heroTitle: 'Kontaktieren Sie uns',
    heroSubtitle: 'Vereinbaren Sie eine diskrete und professionelle Beratung oder senden Sie uns Ihre Fragen.',
    formName: 'Vollständiger Name',
    formEmail: 'E-Mail-Adresse',
    formPhone: 'Telefonnummer',
    formMessage: 'Ihre Nachricht',
    formSubmit: 'Nachricht senden',
    formSending: 'Wird gesendet...',
    formSuccess: 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden so schnell wie möglich antworten.',
    formDisclaimer: 'Ihre Daten sind vertraulich und werden nicht an Dritte weitergegeben.',
    infoTitle: 'Kontaktdaten',
    address: 'Adresse',
    addressValue: 'Komenskega 1\n4000 Kranj, Slowenien',
    phone: 'Telefon',
    phoneValue: '+386 31 444 868',
    email: 'E-Mail',
    emailValue: 'info@lasnisistem.com',
    hours: 'Öffnungszeiten',
    hoursValue: 'Montag – Samstag: Nach Vereinbarung',
    hoursSat: '',
    mapTitle: 'Unser Standort',
    discretion: 'Vollständige Diskretion',
    discretionText: 'Jede Beratung findet in einem völlig privaten Rahmen statt. Ihre Privatsphäre hat für uns höchste Priorität.',
  },
  ru: {
    heroTitle: 'Свяжитесь с нами',
    heroSubtitle: 'Запишитесь на конфиденциальную профессиональную консультацию или задайте нам вопросы.',
    formName: 'Полное имя',
    formEmail: 'Электронная почта',
    formPhone: 'Номер телефона',
    formMessage: 'Ваше сообщение',
    formSubmit: 'Отправить сообщение',
    formSending: 'Отправка...',
    formSuccess: 'Ваше сообщение отправлено. Мы ответим в ближайшее время.',
    formDisclaimer: 'Ваши данные конфиденциальны и не передаются третьим лицам.',
    infoTitle: 'Контактная информация',
    address: 'Адрес',
    addressValue: 'Коменскега 1\n4000 Крань, Словения',
    phone: 'Телефон',
    phoneValue: '+386 31 444 868',
    email: 'Эл. почта',
    emailValue: 'info@lasnisistem.com',
    hours: 'Часы работы',
    hoursValue: 'Понедельник – Суббота: По записи',
    hoursSat: '',
    mapTitle: 'Наше расположение',
    discretion: 'Полная конфиденциальность',
    discretionText: 'Каждая консультация проходит в полностью приватной обстановке. Ваша конфиденциальность — наш приоритет.',
  },
}

const inputBaseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.9rem',
  fontWeight: 300,
  color: '#1C1917',
  background: 'rgba(255,255,255,0.95)',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '0.6rem',
  padding: '0.85rem 1rem',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

export default function ContactPageContent({ lang }: Props) {
  const ct = contactTranslations[lang] || contactTranslations.sl
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSent(true)
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: '#F5F2ED',
          paddingTop: 'clamp(8rem, 14vw, 11rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                fontWeight: 500,
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              {ct.heroTitle}
            </h1>

            {/* Premium Gold Accent Divider */}
            <div className="w-16 h-[2px] bg-[#B09140] opacity-80 mb-6 mx-auto rounded-full" />

            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)',
                fontWeight: 400,
                color: 'rgba(26,26,26,0.65)',
                maxWidth: 480,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              {ct.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content: Form + Info */}
      <section style={{ background: '#F8F7F5' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: 1200,
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1.2rem',
                  padding: 'clamp(2rem, 3vw, 2.5rem)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.04)',
                }}
              >
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: 'rgba(34,139,34,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#228B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '1.3rem',
                        fontWeight: 500,
                        color: '#1C1917',
                        margin: '0 0 0.5rem 0',
                      }}
                    >
                      ✓
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        color: 'rgba(28,25,23,0.6)',
                        lineHeight: 1.6,
                        maxWidth: 360,
                        margin: '0 auto',
                      }}
                    >
                      {ct.formSuccess}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          style={{
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'rgba(28,25,23,0.5)',
                            display: 'block',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {ct.formName}
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          style={inputBaseStyle}
                          onFocus={e => {
                            e.currentTarget.style.borderColor = '#C1A452'
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(193,164,82,0.1)'
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'rgba(28,25,23,0.5)',
                            display: 'block',
                            marginBottom: '0.5rem',
                          }}
                        >
                          {ct.formEmail}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          style={inputBaseStyle}
                          onFocus={e => {
                            e.currentTarget.style.borderColor = '#C1A452'
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(193,164,82,0.1)'
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        style={{
                          fontFamily: 'var(--font-inter), system-ui, sans-serif',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'rgba(28,25,23,0.5)',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {ct.formPhone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        style={inputBaseStyle}
                        onFocus={e => {
                          e.currentTarget.style.borderColor = '#C1A452'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(193,164,82,0.1)'
                        }}
                        onBlur={e => {
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        style={{
                          fontFamily: 'var(--font-inter), system-ui, sans-serif',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'rgba(28,25,23,0.5)',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {ct.formMessage}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        style={{
                          ...inputBaseStyle,
                          resize: 'vertical',
                          minHeight: 120,
                        }}
                        onFocus={e => {
                          e.currentTarget.style.borderColor = '#C1A452'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(193,164,82,0.1)'
                        }}
                        onBlur={e => {
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>

                    {/* Disclaimer */}
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.72rem',
                        fontWeight: 300,
                        color: 'rgba(28,25,23,0.4)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      🔒 {ct.formDisclaimer}
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        background: '#1C1917',
                        border: 'none',
                        borderRadius: '2rem',
                        padding: '1rem 2rem',
                        cursor: sending ? 'not-allowed' : 'pointer',
                        opacity: sending ? 0.6 : 1,
                        transition: 'all 0.3s',
                        alignSelf: 'flex-start',
                      }}
                      onMouseEnter={e => {
                        if (!sending) e.currentTarget.style.background = '#2C2926'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#1C1917'
                      }}
                    >
                      {sending ? ct.formSending : ct.formSubmit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              {/* Contact details card */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1.2rem',
                  padding: 'clamp(2rem, 3vw, 2.5rem)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.04)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: '#1A1A1A',
                    margin: '0 0 1.8rem 0',
                  }}
                >
                  {ct.infoTitle}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Address */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,26,26,0.5)',
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {ct.address}
                    </span>
                    <a
                      href="https://maps.google.com/?q=Komenskega+1+4000+Kranj+Slovenia"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 300,
                        color: '#1C1917',
                        textDecoration: 'none',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-line',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#B09140' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#1C1917' }}
                    >
                      {ct.addressValue}
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,26,26,0.5)',
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {ct.phone}
                    </span>
                    <a
                      href="tel:+38631444868"
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 300,
                        color: '#1C1917',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#B09140' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#1C1917' }}
                    >
                      {ct.phoneValue}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,26,26,0.5)',
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {ct.email}
                    </span>
                    <a
                      href="mailto:info@lasnisistem.com"
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 300,
                        color: '#1C1917',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#B09140' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#1C1917' }}
                    >
                      {ct.emailValue}
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(26,26,26,0.5)',
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {ct.hours}
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 300,
                        color: '#1C1917',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {ct.hoursValue}
                    </p>
                  </div>
                </div>

                {/* Discretion note */}
                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: 'rgba(26,26,26,0.6)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    🔒 {ct.discretionText}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div
                style={{
                  borderRadius: '1.2rem',
                  overflow: 'hidden',
                  height: 260,
                  background: '#e5e3df',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d14.3555!3d46.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477853a0a0a0a0a0%3A0x0!2sKomenskega+1%2C+4000+Kranj!5e0!3m2!1ssl!2ssi!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={ct.mapTitle}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
