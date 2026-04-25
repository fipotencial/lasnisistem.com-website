import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactPageContent from '@/components/ContactPageContent'
import FAQSchema from '@/components/schema/FAQSchema'
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

  const titles: Record<string, string> = {
    sl: 'Kontakt | Lasni Sistem®',
    en: 'Contact | Hollywood Hair System®',
    de: 'Kontakt | Hollywood Hair System®',
    ru: 'Контакт | Hollywood Hair System®',
  }

  return {
    title: titles[lang] || titles.sl,
    description: t.hero.body,
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
