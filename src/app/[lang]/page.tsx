import ProductSchema from '@/components/schema/ProductSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CredibilitySection from '@/components/CredibilitySection'
import EmpathyBanner from '@/components/EmpathyBanner'
import ProductSection from '@/components/ProductSection'
import BeforeAfterCarousel from '@/components/BeforeAfterCarousel'
import CtaStrip from '@/components/CtaStrip'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { translations, languages } from '@/lib/i18n/translations'
import { buildAlternates } from '@/lib/seo'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params

  const titles: Record<string, string> = {
    sl: 'Rešitev za izpadanje las | Hollywood Lasni Sistem®',
    en: 'Hair Loss Solution | Hollywood Hair System®',
    de: 'Lösung bei Haarausfall | Hollywood Hair System®',
    ru: 'Решение при выпадении волос | Hollywood Hair System®',
  }
  const descriptions: Record<string, string> = {
    sl: 'Izpadanje las in plešavost nista več usoda. Hollywood Lasni Sistem® – diskretna, naravna rešitev za izpadanje las. Že 25 let izkušenj, svetovalni studio v Kranju.',
    en: 'Hair loss is no longer your destiny. Hollywood Hair System® – the discreet, natural hair loss solution. 25 years of experience, consulting studio in Kranj, Slovenia.',
    de: 'Haarausfall ist kein Schicksal mehr. Hollywood Hair System® – die diskrete, natürliche Lösung bei Haarausfall. 25 Jahre Erfahrung, Beratungsstudio in Kranj, Slowenien.',
    ru: 'Выпадение волос — больше не приговор. Hollywood Hair System® — деликатное, естественное решение. 25 лет опыта, студия консультаций в Словении.',
  }

  return {
    title: { absolute: titles[lang] || titles.sl },
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, ''),
  }
}

export default async function HomePage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'

  const t = translations[lang]

  return (
    <main>
      <ProductSchema lang={lang} />
      <FAQSchema lang={lang} />
      <Navigation lang={lang} t={t} />
      <HeroSection lang={lang} t={t} />
      <CredibilitySection lang={lang} t={t} />
      <EmpathyBanner lang={lang} t={t} />
      <ProductSection lang={lang} t={t} />
      <BeforeAfterCarousel />
      <CtaStrip lang={lang} t={t} />
      <TestimonialsSection lang={lang} t={t} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
