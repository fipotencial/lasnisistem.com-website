import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
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
    sl: 'Svetovalni studio Kranj',
    en: 'Consulting Studio',
    de: 'Beratungsstudio',
    ru: 'Консультационная студия',
  }
  const descriptions: Record<string, string> = {
    sl: 'Obiščite naš svetovalni studio v Kranju za diskretno in individualno svetovanje o rešitvah za izpadanje las in plešavost.',
    en: 'Visit our consulting studio in Kranj for discreet, individual advice on hair loss, wigs and custom hair systems.',
    de: 'Besuchen Sie unser Beratungsstudio in Kranj für eine diskrete, individuelle Beratung zu Haarausfall, Perücken und Haarsystemen.',
    ru: 'Посетите нашу студию в Кране для конфиденциальной индивидуальной консультации по выпадению волос, парикам и системам волос.',
  }
  return {
    title: titles[lang] || titles.sl,
    description: descriptions[lang] || descriptions.sl,
    alternates: buildAlternates(lang, '/svetovalni-studio'),
  }
}

const studioImages = [
  { src: '/images/studio1.png', alt: 'Svetovalni studio – notranjost' },
  { src: '/images/studio2.jpg', alt: 'Svetovalni studio – prostor za svetovanje' },
  { src: '/images/studio3.jpg', alt: 'Svetovalni studio – ambient' },
]

const studioLabels: Record<string, any> = {
  sl: {
    title: 'Svetovalni studio',
    desc: 'Naš studio v Kranju je prostor, kjer diskretno in individualno svetujemo o vseh rešitvah za izpadanje las. Obiščite nas za strokovno konzultacijo.',
    location: 'Lokacija',
    contact: 'Kontakt',
    hours: 'Delovni čas',
    hoursText: 'Po dogovoru —\nindividualna konzultacija',
    discretionTitle: 'Diskretnost zagotovljena',
    discretionText: 'Diskretnost zagotovljena, v salonu ste vedno le vi oz. vaši bližnji in naše strokovno osebje. Salon se nahaja v zasebni vili z dvema vhodoma, kjer izgleda, kot, da ste se napotili le na obisk, nobenih nezaželenih srečanj tretjih oseb.',
  },
  en: {
    title: 'Consulting Studio',
    desc: 'Our studio in Kranj is a space where we offer discreet and individual advice on all hair loss solutions. Visit us for a professional consultation.',
    location: 'Location',
    contact: 'Contact',
    hours: 'Working Hours',
    hoursText: 'By appointment —\nindividual consultation',
    discretionTitle: 'Discretion Guaranteed',
    discretionText: 'Discretion guaranteed, in the salon it is always just you, your loved ones, and our professional staff. The salon is located in a private villa with two entrances, where to the uninitiated it looks like you are just visiting, with no unwanted encounters with third parties.',
  },
  de: {
    title: 'Beratungsstudio',
    desc: 'Unser Studio in Kranj ist ein Raum, in dem wir diskret und individuell zu allen Lösungen für Haarausfall beraten. Besuchen Sie uns für eine professionelle Beratung.',
    location: 'Standort',
    contact: 'Kontakt',
    hours: 'Öffnungszeiten',
    hoursText: 'Nach Vereinbarung —\nindividuelle Beratung',
    discretionTitle: 'Diskretion Garantiert',
    discretionText: 'Diskretion garantiert, im Salon sind immer nur Sie, Ihre Liebsten und unser Fachpersonal. Der Salon befindet sich in einer privaten Villa mit zwei Eingängen, wo es für Nichteingeweihte so aussieht, als wären Sie nur zu Besuch, ohne unerwünschte Begegnungen mit Dritten.',
  },
  ru: {
    title: 'Консультационная студия',
    desc: 'Наша студия в Кране — это место, где мы предлагаем конфиденциальные индивидуальные консультации по всем решениям от выпадения волос. Запишитесь на профессиональную консультацию.',
    location: 'Локация',
    contact: 'Контакт',
    hours: 'Часы работы',
    hoursText: 'По договоренности —\nиндивидуальная консультация',
    discretionTitle: 'Гарантия Конфиденциальности',
    discretionText: 'Конфиденциальность гарантирована, в салоне всегда только вы, ваши близкие и наш профессиональный персонал. Салон расположен на частной вилле с двумя входами, где для непосвященных кажется, что вы просто пришли в гости, никаких нежелательных встреч с третьими лицами.',
  },
}

export default async function StudioPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as keyof typeof translations) in translations
    ? (rawLang as keyof typeof translations)
    : 'sl'
  const t = translations[lang]
  const labels = studioLabels[lang] || studioLabels.sl

  return (
    <main>
      <Navigation lang={lang} t={t} variant="light" />
      <section style={{
        minHeight: '100vh',
        background: '#F5F2ED',
        paddingTop: 'clamp(8rem, 14vw, 12rem)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
      }}>
        <div style={{ width: '80%', maxWidth: 1400, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: 'clamp(3rem, 5vw, 4.5rem)' }}>
            <h1 style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 300,
              color: '#1A1A1A',
              marginBottom: '1.5rem',
            }}>
              {labels.title}
            </h1>
            <p style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: '#5A5248',
              maxWidth: 650,
              lineHeight: 1.7,
            }}>
              {labels.desc}
            </p>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, #1A1A1A, rgba(26,26,26,0.05))',
              marginTop: 'clamp(1.5rem, 2.5vw, 2rem)',
            }} />
          </div>

          {/* Image gallery */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
          }}>
            {studioImages.map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  aspectRatio: i === 0 ? '4/3' : '3/2',
                  gridRow: i === 0 ? 'span 2' : undefined,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
          {/* Discretion Section */}
          <div style={{
            marginTop: 'clamp(4rem, 6vw, 6rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
            background: '#FFFFFF',
            padding: 'clamp(2rem, 4vw, 4rem)',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <div style={{ order: 1 }}>
              <h2 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: '#1A1A1A',
                marginBottom: '1rem',
              }}>
                {labels.discretionTitle}
              </h2>
              <div style={{
                width: '40px',
                height: '2px',
                background: '#C1A452',
                marginBottom: '1.5rem',
              }} />
              <p style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '1rem',
                fontWeight: 300,
                color: '#5A5248',
                lineHeight: 1.7,
              }}>
                {labels.discretionText}
              </p>
            </div>
            <div style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              aspectRatio: '16/10',
              order: 2,
              width: '75%',
              margin: '0 auto',
            }}>
              <Image
                src="/images/vila_svetovalni studio.jpg"
                alt="Zunanjost zasebne vile - Svetovalni studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
          {/* Address / contact info */}
          <div style={{
            marginTop: 'clamp(3rem, 5vw, 4rem)',
            padding: 'clamp(2rem, 3.5vw, 3rem)',
            background: '#FFFFFF',
            borderRadius: '4px',
            borderLeft: '3px solid #C1A452',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.4rem',
                fontWeight: 500,
                color: '#1A1A1A',
                margin: '0 0 0.5rem 0',
              }}>
                {labels.location}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.92rem',
                fontWeight: 300,
                color: '#5A5248',
                lineHeight: 1.6,
                margin: 0,
              }}>
                Komenskega 1<br />
                4000 Kranj, Slovenija
              </p>
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.4rem',
                fontWeight: 500,
                color: '#1A1A1A',
                margin: '0 0 0.5rem 0',
              }}>
                {labels.contact}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.92rem',
                fontWeight: 300,
                color: '#5A5248',
                lineHeight: 1.6,
                margin: 0,
              }}>
                Tel: 031 444 868<br />
                info@lasnisistem.com
              </p>
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.4rem',
                fontWeight: 500,
                color: '#1A1A1A',
                margin: '0 0 0.5rem 0',
              }}>
                {labels.hours}
              </h3>
              <p style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '0.92rem',
                fontWeight: 300,
                color: '#5A5248',
                lineHeight: 1.6,
                margin: 0,
                whiteSpace: 'pre-line',
              }}>
                {labels.hoursText}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer lang={lang} t={t} />
    </main>
  )
}
