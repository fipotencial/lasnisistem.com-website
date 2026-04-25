import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MediaPageContent from '@/components/MediaPageContent'
import { translations, languages } from '@/lib/i18n/translations'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return languages.map((l) => ({ lang: l.code }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const titles: Record<string, string> = {
    sl: 'Mediji o nas | Lasni Sistem®',
    en: 'Media about us | Hollywood Hair System®',
    de: 'Medien über uns | Hollywood Hair System®',
    ru: 'СМИ о нас | Hollywood Hair System®',
  }
  return {
    title: titles[lang] || titles.sl,
  }
}

const pageTranslations: Record<string, any> = {
  sl: { title: 'Mediji o nas', videoTitle: 'Pojavljanje v medijih', eyebrow1: 'Galerija', eyebrow2: 'Video' },
  en: { title: 'Media about us', videoTitle: 'Media Appearances', eyebrow1: 'Gallery', eyebrow2: 'Video' },
  de: { title: 'Medien über uns', videoTitle: 'Medienauftritte', eyebrow1: 'Galerie', eyebrow2: 'Video' },
  ru: { title: 'СМИ о нас', videoTitle: 'Появления в СМИ', eyebrow1: 'Галерея', eyebrow2: 'Видео' },
}

const videos = [
  { id: 'je551_bWkXU', title: 'Alopecia areata – TV SLO 1 Tednik, 10 junij 2004' },
  { id: '7dbMUjKnDJM', title: 'Hollywood vlasni sustav® – RTL Hrvatska' },
  { id: 'LVAKSgAe1fw', title: 'Borza las iz katerih je narejen Hollywood lasni sistem®' },
  { id: 's8SMTNYhRTE', title: 'Hollywood lasni sistem® prispevek iz oddaje "Z VAMI" (2007)' },
  { id: 'cMMjmujwWGg', title: 'Vlasni sistem – prispevek v oddaji EXPLOZIV na RTL Hrvatska' },
]

export default async function MediaPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'
  const t = translations[lang]
  const pt = pageTranslations[lang]

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <section style={{
        minHeight: '100vh',
        background: '#F5F2ED',
        paddingTop: 'clamp(8rem, 14vw, 10rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
      }}>
        <div style={{ width: '90%', maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
            <div style={{
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#8B7355',
              marginBottom: '1rem',
              fontWeight: 600,
            }}>
              {pt.eyebrow1}
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
              fontWeight: 300,
              color: '#111827',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>
              {pt.title}
            </h1>
            <div style={{
              width: '120px',
              height: '1px',
              background: 'linear-gradient(90deg, rgba(139, 115, 85, 0), rgba(139, 115, 85, 0.6), rgba(139, 115, 85, 0))',
            }} />
          </div>

          <MediaPageContent />

          <div style={{ marginTop: '8rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
              <div style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: '#8B7355',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                {pt.eyebrow2}
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: '#111827',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                {pt.videoTitle}
              </h2>
              <div style={{
                width: '100px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(139, 115, 85, 0), rgba(139, 115, 85, 0.6), rgba(139, 115, 85, 0))',
              }} />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '3rem 2rem',
              alignItems: 'start',
            }}>
              {videos.map((vid, i) => (
                <div key={i} className="group flex flex-col items-center">
                  <div className="relative w-full rounded-lg overflow-hidden bg-white group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1" style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    aspectRatio: '16/9',
                    marginBottom: '1rem',
                  }}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${vid.id}`}
                      title={vid.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#6B6155',
                    textAlign: 'center',
                    lineHeight: 1.4,
                    padding: '0 0.5rem',
                    maxWidth: '90%',
                  }}>
                    {vid.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer lang={lang} t={t} />
    </main>
  )
}
