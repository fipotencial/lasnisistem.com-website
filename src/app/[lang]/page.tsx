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
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const t = translations[lang as keyof typeof translations] || translations.sl

  return {
    title: `Lasni Sistem® | ${t.hero.headline}`,
    description: t.hero.body,
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
