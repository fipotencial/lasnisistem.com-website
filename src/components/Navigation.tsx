'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { languages } from '@/lib/i18n/translations'
import { flagComponents } from '@/components/FlagIcons'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
  variant?: 'dark' | 'light'
}

type NavItem = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

export default function Navigation({ lang, t, variant = 'dark' }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileONasOpen, setMobileONasOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const oNasLabel: Record<string, string> = { sl: 'O nas', en: 'About', de: 'Über uns', ru: 'О нас' }
  const clankiLabel: Record<string, string> = { sl: 'Blog', en: 'Articles', de: 'Artikel', ru: 'Статьи' }
  const mediciLabel: Record<string, string> = { sl: 'Mediji', en: 'Media', de: 'Medien', ru: 'СМИ' }
  const studioLabel: Record<string, string> = { sl: 'Svetovalni studio', en: 'Consulting Studio', de: 'Beratungsstudio', ru: 'Консультационная студия' }
  const poslanstvoLabel: Record<string, string> = { sl: 'Kdo smo / Naše poslanstvo', en: 'Who We Are / Our Mission', de: 'Wer Wir Sind / Unsere Mission', ru: 'Кто Мы / Наша миссия' }
  const mnenjaLabel: Record<string, string> = { sl: 'Mnenja strank', en: 'Testimonials', de: 'Kundenmeinungen', ru: 'Отзывы клиентов' }
  const lasniSistemLabel: Record<string, string> = { sl: 'Lasni sistem', en: 'Hair System', de: 'Haarsystem', ru: 'Система волос' }
  const hibridniLabel: Record<string, string> = { sl: 'Hibridni sistemi', en: 'Hybrid Systems', de: 'Hybridsysteme', ru: 'Гибридные системы' }
  const lasuljeLabel: Record<string, string> = { sl: 'Lasulje', en: 'Wigs', de: 'Perücken', ru: 'Парики' }
  const plesavostLabel: Record<string, string> = { sl: 'Plešavost', en: 'Baldness', de: 'Kahlheit', ru: 'Облысение' }
  const kontaktLabel: Record<string, string> = { sl: 'Kontakt', en: 'Contact', de: 'Kontakt', ru: 'Контакт' }

  const isLandingPage = pathname === `/${lang}` || pathname === `/${lang}/`

  const navItems: NavItem[] = [
    {
      label: lasniSistemLabel[lang] || 'Lasni sistem',
      href: isLandingPage ? '#lasni-sistem' : `/${lang}/#lasni-sistem`,
    },
    {
      label: hibridniLabel[lang] || 'Hibridni sistemi',
      href: `/${lang}/hibridni-sistemi`,
    },
    {
      label: lasuljeLabel[lang] || 'Lasulje',
      href: `/${lang}/lasulje`,
    },
    {
      label: plesavostLabel[lang] || 'Plešavost',
      href: `/${lang}/plesavost`,
    },
    {
      label: oNasLabel[lang] || 'O nas',
      href: `/${lang}/poslanstvo`,
      dropdown: [
        { label: poslanstvoLabel[lang] || 'Kdo smo / Naše poslanstvo', href: `/${lang}/poslanstvo` },
        { label: mnenjaLabel[lang] || 'Mnenja strank', href: `/${lang}/mnenja-strank` },
        { label: clankiLabel[lang] || 'Članki', href: `/${lang}/blog` },
        { label: mediciLabel[lang] || 'Mediji', href: `/${lang}/mediji` },
        { label: studioLabel[lang] || 'Svetovalni studio', href: `/${lang}/svetovalni-studio` },
      ],
    },
    {
      label: kontaktLabel[lang] || 'Kontakt',
      href: `/${lang}/kontakt`,
    },
  ]

  // All links flat for mobile
  const mobileLinks = navItems.flatMap(item => {
    if (item.dropdown) return [] // handled separately
    return [{ label: item.label, href: item.href }]
  })

  const linkColor = (scrolled || variant === 'light') ? 'rgba(10, 10, 10, 0.85)' : 'rgba(255, 255, 255, 0.9)'
  const hamburgerColor = (scrolled || variant === 'light') ? '#1A1A1A' : '#FFFFFF'

  const switchLang = async (code: string) => {
    let newPath = pathname

    if (pathname.startsWith(`/${lang}/blog/`) && pathname !== `/${lang}/blog`) {
      // We are on a single blog article page. Slugs are translated, so we map the index.
      try {
        const { getArticlesByLang } = await import('@/lib/blog/articles')
        const currentSlug = pathname.replace(`/${lang}/blog/`, '')
        const currentArticles = getArticlesByLang(lang)
        const idx = currentArticles.findIndex((a: any) => a.slug === currentSlug)
        
        if (idx !== -1) {
          const targetArticles = getArticlesByLang(code)
          if (targetArticles[idx]) {
            newPath = `/${code}/blog/${targetArticles[idx].slug}`
          } else {
            newPath = `/${code}/blog`
          }
        } else {
          newPath = `/${code}/blog`
        }
      } catch (e) {
        newPath = `/${code}/blog`
      }
    } else {
      // Basic language replacement for other structural pages
      newPath = pathname.replace(`/${lang}`, `/${code}`)
    }

    router.push(newPath)
    setMenuOpen(false)
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        backgroundColor: scrolled
          ? 'rgba(255,255,255,0.94)'
          : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div
        className="w-full flex items-center justify-between"
        style={{
          padding: '0 4vw',
          height: scrolled ? '80px' : '96px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link href={`/${lang}`} aria-label="Lasni Sistem – domov">
          <Image
            src="/images/logo.png"
            alt="Hollywood Hair System"
            width={250}
            height={72}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center" style={{ gap: '2.8rem' }} aria-label="Navigacija">
          {navItems.map(item => {
            if (item.dropdown) {
              // Dropdown item
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: linkColor,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.5rem 0',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#B09140'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = linkColor
                    }}
                  >
                    {item.label}
                    <svg
                      width="10" height="10" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '0.75rem',
                          zIndex: 60,
                        }}
                      >
                        <div
                          style={{
                            background: 'rgba(255,255,255,0.98)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '6px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)',
                            padding: '0.6rem 0',
                            minWidth: '220px',
                          }}
                        >
                          {item.dropdown.map((sub, i) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setDropdownOpen(false)}
                              style={{
                                display: 'block',
                                padding: '0.65rem 1.5rem',
                                fontFamily: 'Inter, system-ui, sans-serif',
                                fontSize: '0.76rem',
                                fontWeight: 500,
                                letterSpacing: '0.06em',
                                color: 'rgba(26,26,26,0.75)',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                borderBottom: i < item.dropdown!.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.color = '#B09140'
                                e.currentTarget.style.paddingLeft = '1.8rem'
                                e.currentTarget.style.background = 'rgba(193,164,82,0.04)'
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.color = 'rgba(26,26,26,0.75)'
                                e.currentTarget.style.paddingLeft = '1.5rem'
                                e.currentTarget.style.background = 'transparent'
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            // Regular link
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: linkColor,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#B09140'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = linkColor
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#B09140] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </Link>
            )
          })}
        </nav>

        {/* Right: Phone + Language Letters */}
        <div className="hidden lg:flex items-center" style={{ gap: '14px' }}>
          <a
            href="tel:+38631444868"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: linkColor,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#B09140' }}
            onMouseLeave={e => { e.currentTarget.style.color = linkColor }}
            aria-label="Pokličite nas: +386 31 444 868"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +386 31 444 868
          </a>
          <span style={{ width: 1, height: 16, background: 'rgba(176,145,64,0.35)' }} />
          {languages.map(l => {
            const label = l.code === 'sl' ? 'SLO' : l.code === 'en' ? 'ENG' : l.code === 'de' ? 'GER' : 'RUS'
            return (
              <button
                key={l.code}
                onClick={() => switchLang(l.code)}
                title={l.label}
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: l.code === lang ? '#B09140' : linkColor,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  opacity: l.code === lang ? 1 : 0.65,
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#B09140';
                  (e.currentTarget as HTMLElement).style.opacity = '1'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = l.code === lang ? '#B09140' : linkColor;
                  (e.currentTarget as HTMLElement).style.opacity = l.code === lang ? '1' : '0.65'
                }}
                aria-label={`Jezik: ${l.label}`}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center"
          style={{ width: 36, height: 36, gap: '6px', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meni"
          aria-expanded={menuOpen}
        >
          <motion.span
            style={{ display: 'block', width: 24, height: 1.5, background: hamburgerColor, transition: 'background 0.3s ease', transformOrigin: 'center' }}
            animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
          />
          <motion.span
            style={{ display: 'block', width: 24, height: 1.5, background: hamburgerColor, transition: 'background 0.3s ease' }}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.18 }}
          />
          <motion.span
            style={{ display: 'block', width: 24, height: 1.5, background: hamburgerColor, transition: 'background 0.3s ease', transformOrigin: 'center' }}
            animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', overflow: 'hidden' }}
          >
            <nav
              style={{ padding: '1.5rem 3rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
            >
              {/* Regular links */}
              {mobileLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,26,26,0.7)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* O NAS accordion */}
              <div>
                <button
                  onClick={() => setMobileONasOpen(!mobileONasOpen)}
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,26,26,0.7)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {oNasLabel[lang] || 'O nas'}
                  <svg
                    width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      transform: mobileONasOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileONasOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: 'hidden', paddingLeft: '1rem', marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
                    >
                      {navItems.find(i => i.dropdown)?.dropdown?.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => { setMenuOpen(false); setMobileONasOpen(false) }}
                          style={{
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.8rem',
                            fontWeight: 400,
                            letterSpacing: '0.08em',
                            color: 'rgba(26,26,26,0.55)',
                            textDecoration: 'none',
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ height: 1, background: 'rgba(26,26,26,0.08)' }} />

              <a
                href="tel:+38631444868"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#B09140',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingTop: '0.5rem',
                }}
                aria-label="Pokličite nas: +386 31 444 868"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +386 31 444 868
              </a>

              <div style={{ display: 'flex', gap: '16px', paddingTop: '0.5rem' }}>
                {languages.map(l => {
                  const label = l.code === 'sl' ? 'SLO' : l.code === 'en' ? 'ENG' : l.code === 'de' ? 'GER' : 'RUS'
                  return (
                    <button
                      key={l.code}
                      onClick={() => switchLang(l.code)}
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        color: l.code === lang ? '#B09140' : 'rgba(26,26,26,0.6)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px 0',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      aria-label={l.label}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
