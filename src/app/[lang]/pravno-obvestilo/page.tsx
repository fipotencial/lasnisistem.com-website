import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { translations, languages, LangCode } from '@/lib/i18n/translations'
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
    sl: 'Pravno obvestilo',
    en: 'Legal Notice',
    de: 'Rechtlicher Hinweis',
    ru: 'Правовое уведомление',
  }

  return {
    title: titles[lang] || titles.sl,
    description: 'Pravno obvestilo, nakup in vračilo lasnega sistema, odstop od pogodbe in pogoji uporabe.',
    alternates: buildAlternates(lang, '/pravno-obvestilo'),
  }
}

export default async function LegalPage({ params }: Props) {
  const { lang: rawLang } = await params
  const lang = (rawLang as LangCode) in translations
    ? (rawLang as LangCode)
    : 'sl'

  const t = translations[lang]

  return (
    <main style={{ background: '#F8F7F5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation lang={lang} t={t} variant="light" />

      {/* Hero Header */}
      <section
        style={{
          background: '#F5F2ED',
          paddingTop: 'clamp(8rem, 14vw, 11rem)',
          paddingBottom: 'clamp(4rem, 6vw, 5rem)',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="flex flex-col items-center text-center">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
                fontWeight: 500,
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Pravno obvestilo
            </h1>
            <div className="w-16 h-[2px] bg-[#B09140] opacity-80 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Document Content */}
      <section style={{ flex: 1, padding: '0 clamp(1.5rem, 4vw, 3rem) clamp(5rem, 8vw, 7rem)' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: 860,
            background: '#FFFFFF',
            borderRadius: '1.2rem',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.03)',
            marginTop: '-2rem',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            className="prose prose-lg"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 300,
              color: 'rgba(26,26,26,0.7)',
              lineHeight: 1.7,
              fontSize: '0.95rem',
            }}
          >
            {/* Section 1 */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '1.2rem', marginTop: 0 }}>
              NAKUP ALI VRAČILO LASNEGA SISTEMA
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Naročilo je potrebno prevzeti v roku 15 delovnih dni od prejema obvestila za prevzem.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Če artiklov v tem roku ne prevzamete, bomo morali pošiljko zaradi omejene kapacitete skladišča vrniti proizvajalcu, ki ga bo / celega ali del sistema / uporabil za izdelavo novega sistema za novo osebo.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Morebitna vplačila, avansi ali plačila računov za 1. del Lasnega sistema s tem zapadejo in kupec ( plačnik ) <strong>NIMA MOŽNOSTI</strong> za vračilo vplačanega zneska, kateri je bil potrditev sklenitve ustne Pogodbe o dobavi. S plačilom omenjega zneska stranka izrecno naroča izdelek po meri in točnih specifikacijah oblike, barve, kvalitete in dolžine las – Order form – ki se pošljejo direktno k izdelovalcu v Hollywood.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Svetujemo vam, da naročene izdelke po prejetju pregledate in nas v primeru kakršnihkoli nepravilnosti obvestite v roku 2 dni.
            </p>
            <p style={{ marginBottom: '3rem' }}>
              Hvala za vaš nakup. Veselimo se vašega ponovnega obiska.
            </p>

            {/* Section 2 */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '1.2rem' }}>
              Odstop potrošnika od pogodbe
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Potrošnik (navedeno velja izključno za fizične osebe, ki pridobijo blago za namene izven svoje pridobitne dejavnosti) ima pravico, da v 14 dneh od prevzema artiklov podjetju sporoči (e-naslov: <a href="mailto:info@fi-potencial.com" style={{ color: '#B09140', textDecoration: 'none' }}>info@fi-potencial.com</a>), da odstopa od pogodbe, ne da bi mu bilo treba navesti razlog za svojo odločitev. Rok se začne šteti en dan po datumu prevzema. Edini strošek, ki bremeni potrošnika v zvezi z odstopom od pogodbe, je strošek vračila artikla (ki se v primeru pošiljanja obračunava po ceniku dostavne službe in je odvisen od tega ali gre za pošiljko/paket/tovor). Artikel je potrebno vrniti prodajalcu najkasneje v roku 30 dni od oddanega sporočila o odstopu od pogodbe (nakupa).
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Potrošnik nima pravice do odstopa od pogodbe, pri pogodbah katerih predmet je artikel, ki je bil izdelan po natančnih navodilih potrošnika, ki je bil prilagojen njegovim osebnim potrebam, ki zaradi svoje narave ni primeren za vračilo, ki je hitro pokvarljiv ali kateremu je že potekel rok uporabe.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Prejet artikel mora vrniti nepoškodovan in v nespremenjeni količini, razen če je artikel uničen, pokvarjen, izgubljen ali se je njegova količina zmanjšala, ne da bi bil za to kriv potrošnik. Potrošnik artiklov ne sme neovirano uporabljati do odstopa od pogodbe. Potrošnik sme opraviti ogled in preizkus artiklov v obsegu, kot je to nujno potrebno za ugotovitev dejanskega stanja.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              V kolikor se prejeti izdelek – Lasni sistem – pomeri in postavi na glavo, lasišče vračilo zaradi sanitarnih razlogov <strong>NI MOGOČE</strong>.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Prav tako ni možno vračilo izdelka kateremu je <strong>ŽE BILA</strong> odstržena prednja mrežica.
            </p>
            <p style={{ marginBottom: '3rem' }}>
              Potrošnik odgovarja za zmanjšanje vrednosti blaga, če zmanjšanje posledica ravnanja, ki ni nujno potrebno za ugotovitev narave, lastnosti in delovanja blaga.
            </p>

            {/* Section 3 */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '1.2rem' }}>
              Obrazec za odstop potrošnika od pogodbe
            </h2>
            <div style={{ background: '#F9F8F6', padding: '1.5rem', borderRadius: '0.8rem', marginBottom: '3rem', border: '1px solid rgba(0,0,0,0.04)' }}>
              <p style={{ marginBottom: '0.5rem', fontWeight: 500, color: '#1A1A1A' }}>Odstop od pogodbe – vračilo v 14 dneh</p>
              <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                (Izpolnite ta obrazec in ga pošljite nazaj le, če želite odstopiti od pogodbe)
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>Naslovnik:</strong> Fi Potencial d.o.o., Komenskega 1, 4000 Kranj
              </p>
              <p style={{ marginBottom: '0' }}>Obveščam vas, da odstopam od pogodbe za naslednje artikle:</p>
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="/Obrazec%20za%20odstop%20potrošnika%20od%20pogodbe.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#B09140] hover:text-[#FFFFFF]"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#B09140',
                    border: '1px solid #B09140',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '2rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Prenesite obrazec
                </a>
              </div>
            </div>

            {/* Section 4 */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '1.2rem' }}>
              STRIŽENJE IN OBLIKOVANJE LASNEGA SISTEMA
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Sporočamo, da DAMJANA STARMAN ni več pooblaščena za dodajanje las/popravila Lasnih Sistemov. To pomeni, da nima več dostopa do edino primerno pripravljenih las za to, ki se ne vozlajo in povzročajo hitrejšega lomljenja/zapletanja z obstoječimi.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Po meri narejen vrhunski izdelek – Lasni sistem – lahko strižejo samo strokovno usposobljene osebe, ki imajo dovoljenje oziroma licenco proizvajalca iz Hollywooda.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Osebe so imele ustrezen tečaj ter obiskujejo seminarje, ki so potrebni za obnovitev licence.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Osebje vedno striže Lasne sisteme postopoma – po željah stranke, ki se lahko odloči za poljuben stil frizure in dolžino las.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Stranka <strong>SAMA</strong> določa stil ter dolžino, naš strokovno usposobljen frizer pa lahko svetuje kaj je izvedljivo in kaj ne.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              V primeru reklamacije storitve – striženja in oblikovanja je potrebno na licu mesta striženja <strong>PODATI ustno reklamacijo</strong> ter potem v roku 24-ih ur poslati pisno reklamacijo na naslov podjetja, ki potem razišče zadevo ter se pogovori s frizerko.
            </p>
            <p style={{ marginBottom: '0' }}>
              V primeru, da se Lasni sistem striže pri frizerju ki nima potrebnih znanj – licence ali dovoljenja – ne prevzemamo odgovornosti za nastale napake ali poškodbe Lasnega sistema.
            </p>
          </div>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </main>
  )
}
