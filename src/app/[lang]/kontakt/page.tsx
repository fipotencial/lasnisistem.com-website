import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactPageContent from '@/components/ContactPageContent'
import FAQSchema from '@/components/schema/FAQSchema'
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
  const t = translations[lang as keyof typeof translations] || translations.sl

  const titles: Record<string, string> = {
    sl: 'Kontakt',
    en: 'Contact',
    de: 'Kontakt',
    ru: 'Контакт',
  }

  const descriptions: Record<string, string> = {
    sl: 'Stopite v stik z nami – brezplačno in diskretno svetovanje o rešitvah za izpadanje las. Tel: +386 31 444 868, svetovalni studio v Kranju.',
    en: 'Get in touch – free and discreet consultation about hair loss solutions. Tel: +386 31 444 868, consulting studio in Kranj, Slovenia.',
    de: 'Kontaktieren Sie uns – kostenlose und diskrete Beratung zu Lösungen bei Haarausfall. Tel: +386 31 444 868, Beratungsstudio in Kranj, Slowenien.',
    ru: 'Свяжитесь с нами – бесплатная и деликатная консультация по решениям при выпадении волос. Тел: +386 31 444 868, студия в Словении.',
  }

  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, '/kontakt'),
  }
}

export default async function ContactPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'

  const t = translations[lang]

  return (
    <main>
      <FAQSchema lang={lang} />
      <Navigation lang={lang} t={t} variant="light" />
      <ContactPageContent lang={lang} t={t} />
      <Footer lang={lang} t={t} />
    </main>
  )
}
