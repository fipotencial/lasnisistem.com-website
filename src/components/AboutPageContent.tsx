'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LangCode } from '@/lib/i18n/translations'
import Image from 'next/image'

type Props = {
  lang: LangCode
}

const aboutTranslations: Record<LangCode, any> = {
  sl: {
    heroTitle: 'Kdo smo / Naše poslanstvo',
    heroSubtitle: 'Smo lastniki franšize Hollywood Lasni sistem® za področje celotne Evrope.',
    spelaSemeTitle: 'Špela Šeme',
    spelaSemeP1: 'Vodja oddelka Lasni Sistemi®, dr. Špela Šeme, aktivna članica NAAF, ima več kot 40-letne izkušnje s premoščanjem izgube las in tudi sama nosi Lasni sistem®. Torej ve, o čem govori, in vam osebno pojasni vse pomembne detajle o tem, kako se Lasni sistem® namešča, vzdržuje in uporablja. Saj veste – problem je vedno v podrobnostih.',
    spelaSemeP2: 'Dr. Špela Šeme aktivno sodeluje z mednarodnimi strokovnjaki na področju odkrivanja vzrokov alopecije areate in redno organizira izobraževalne seminarje na to tematiko. Z odkritji na tem področju seznanja tudi zainteresirano slovensko medicinsko osebje. Člani celotne ekipe, ki delujejo v našem oddelku, imajo bodisi lastne izkušnje z izgubo las, ali pa je lase izgubil nekdo izmed bližnjih.',
    specialistsTitle: 'V podjetju smo ponosni na to, da smo specialisti za svetovanje pri:',
    specialistsList: [
      'popolni ali delni izgubi las zaradi delovanja stresnih faktorjev',
      'nekirurškem vračanju las s pomočjo Lasnega sistema®',
      'popolni ali delni izgubi las zaradi kemoterapije in drugih zdravljenj',
      'psihološkem in estetskem premoščanju posledic alopecije areate',
      'estetskem reševanju težav moške ali ženske plešavosti oziroma redkih las'
    ],
    spelaSemeP3: 'Dr. Špela Šeme je poleg svojega dela tudi pobudnica in vodja prve slovenske Skupine za samopomoč ob izpadanju las in organizira redne sestanke za vse (v zdravstvenem domu Kranj), ki trpijo zaradi izgube las.',
    skupinaReadMore: 'Preberite več o Skupini za samopomoč',
    goalsTitle: 'Naši cilji',
    goalsDesc: 'Cilj našega oddelka je pomagati ljudem, ki trpijo zaradi delne ali popolne izgube las. Naša pomoč vključuje psihološko in estetsko premoščanje izgube in sestoji iz:',
    goalsList: [
      'zagotavljanja informacij o vizualnih tehnikah in pripomočkih, ki pomagajo omiliti odsotnost las, obrvi, trepalnic (tehnike risanja trepalnic, obrvi, informiranje o pokrivalih…)',
      'zagotavljanja informacij in nasvetov, ki pomagajo ljudem prebroditi najhujši psihični izziv ob izgubi las',
      'razlage tehnik, ki pomagajo pri premoščanju depresije in apatičnosti, ki velikokrat spremlja izgubo',
      'organiziranja srečanj z ljudmi, ki so doživeli podobne izkušnje izgube las (starši, otroci, sestre, bratje, prijatelji in partnerji) ter s tem zagotavljanja, da se ne počutijo več tako same in nerazumljene',
      'informiranja o svetovnih novostih glede problematike izgubljanja las',
      'nudenja pomoči pri organizaciji obiska vsakoletne NAAF konference v ZDA',
      'širjenja informacij in ozaveščenosti o problematiki izgube las s pomočjo TV in radijskih prispevkov, člankov v revijah in časopisih, predavanj, okroglih miz, srečanj v zdravstvenih domovih, lekarnah, bolnicah, šolah…'
    ],
    closingP1: 'Imeti možnost prispevati k večji kvaliteti življenja ljudi je nedvomno veliko darilo. Biti član podjetja, ki ima tako plemenito poslanstvo, pa je še posebno veselje in čast.',
    closingP2: 'Podatke o sestankih Skupine za samopomoč lahko dobite v rubriki Skupina za samopomoč.',
    brandTitle: 'Blagovna znamka',
    brandP1: 'Registrirana blagovna znamka. Blagovna znamka HOLLYWOOD LASNI SISTEM® in HOLLYWOOD HAIR SYSTEM® je blagovna znamka lasnih sistemov, ki niso običajne lasulje, ampak jih obravnavajo kot alternativo presaditvi las, ki jo prodaja le podjetje Fi-potencial d.o.o. in poslovni partnerji.',
    brandP2: 'Ime Hollywood Lasni Sistem® in vse izpeljanke tega imena so zakonsko zaščitene s strani Urada RS za intelektualno lastnino. Edini lastnik blagovne znamke je podjetje Fi-Potencial d.o.o. iz Kranja. Uporaba imena blagovne znamke je dovoljena samo uporabnikom franšize / imetnikom licence za uporabo tega imena.',
    brandP3: 'Kje lahko kupite prave Lasne Sisteme®? Vsaka zloraba tega imena in nepooblaščena uporaba s strani posameznikov in pravnih oseb bo preganjana po pravni poti.',
    brandP4: 'Edino na tak način lahko v naprej zaščitimo stranke pred cenenimi kopijami in izdelki, ki se poizkušajo prodajati pod istim imenom. Zaradi nekvalitetnih in neustreznih materialov (barvani azijski lasje ali celo sintetika) te kopije namreč razpadejo v nekaj mesecih in velikokrat močno iritirajo kožo (predvsem lepila za pritrjevanje, ki niso medicinsko testirana!).',
    brandP5: 'Pravi Hollywood Lasni Sistem® lahko dobite le v Kranju (Fi Potencial d.o.o.) in na Krku (HR) – Villa Splendissima d.o.o.',
  },
  en: {
    heroTitle: 'Who We Are / Our Mission',
    heroSubtitle: 'We are the franchise owners selling Hollywood Hair Systems® for the whole of Europe.',
    spelaSemeTitle: 'Špela Šeme',
    spelaSemeP1: 'Head of the Hair Systems® department, Dr. Špela Šeme, an active NAAF member, has over 40 years of experience bridging hair loss and personally wears a Hair System®. She knows what she is talking about and will personally explain all important details on how the Hair System® is applied, maintained, and used. After all, the devil is in the details.',
    spelaSemeP2: 'Dr. Špela Šeme actively collaborates with international experts on discovering the causes of alopecia areata and regularly organizes educational seminars on this topic. She also shares these findings with interested Slovenian medical staff. Members of the entire team working in our department either have personal experience with hair loss or have a close one who has lost hair.',
    specialistsTitle: 'We are proud to specialize in counseling for:',
    specialistsList: [
      'complete or partial hair loss due to stress factors',
      'non-surgical hair restoration using the Hair System®',
      'complete or partial hair loss due to chemotherapy and other treatments',
      'psychological and aesthetic bridging of the consequences of alopecia areata',
      'aesthetic solutions for male or female baldness or thinning hair'
    ],
    spelaSemeP3: 'In addition to her work, Dr. Špela Šeme is the initiator and leader of the first Slovenian self-help group for hair loss, organizing regular meetings for anyone suffering from hair loss.',
    skupinaReadMore: 'Read more about the Self-Help Group',
    goalsTitle: 'Our Goals',
    goalsDesc: 'Our department’s goal is to help people suffering from partial or complete hair loss. Our support includes psychological and aesthetic bridging of the loss and consists of:',
    goalsList: [
      'providing information on visual techniques and accessories to alleviate the absence of hair, eyebrows, eyelashes (eyelash and eyebrow drawing techniques, information on headwear...)',
      'providing information and advice to help people overcome the toughest psychological challenges of hair loss',
      'explaining techniques that help overcome depression and apathy often accompanying the loss',
      'organizing meetings with people who have experienced similar hair loss experiences (parents, children, siblings, friends, and partners) ensuring they no longer feel so alone and misunderstood',
      'informing about global novelties regarding hair loss issues',
      'offering assistance in organizing visits to the annual NAAF conference in the USA',
      'spreading information and raising awareness about hair loss issues through TV and radio contributions, magazine and newspaper articles, lectures, round tables, meetings in health centers, pharmacies, hospitals, schools...'
    ],
    closingP1: 'Having the opportunity to contribute to a better quality of life for people is undoubtedly a great gift. Being a member of a company with such a noble mission is a special joy and honor.',
    closingP2: 'Information about the Self-help Group meetings can be found in the Contact section.',
    brandTitle: 'Trademark',
    brandP1: 'Registered trademark. The trademark HOLLYWOOD LASNI SISTEM® and HOLLYWOOD HAIR SYSTEM® is a brand of hair systems that are not ordinary wigs, but are treated as an alternative to hair transplantation, sold only by Fi-potencial d.o.o. and its business partners.',
    brandP2: 'The name Hollywood Lasni Sistem® and all derivatives of this name are legally protected by the Slovenian Intellectual Property Office. The sole owner of the trademark is Fi-Potencial d.o.o. from Kranj. The use of the brand name is permitted only to franchise users/licensees of this name.',
    brandP3: 'Where can you buy real Hair Systems®? Any misuse of this name and unauthorized use by individuals and legal entities will be legally prosecuted.',
    brandP4: 'This is the only way we can protect customers in advance from cheap copies and products trying to be sold under the same name. Due to poor quality and inappropriate materials (dyed Asian hair or even synthetics), they fall apart in a few months and often strongly irritate the skin (especially fixing adhesives that are not medically tested!).',
    brandP5: 'The authentic Hollywood Hair System® is available exclusively in Kranj (Fi Potencial d.o.o.) and on the island of Krk, Croatia – Villa Splendissima d.o.o.',
  },
  de: {
    heroTitle: 'Wer wir sind / Unsere Mission',
    heroSubtitle: 'Wir sind die Franchise-Eigentümer für den Verkauf von Hollywood Hair Systems® für ganz Europa.',
    spelaSemeTitle: 'Špela Šeme',
    spelaSemeP1: 'Die Leiterin der Abteilung Hair Systems®, Dr. Špela Šeme, aktives NAAF-Mitglied, hat über 40 Jahre Erfahrung im Umgang mit Haarausfall und trägt selbst ein Hair System®. Sie weiß also, wovon sie spricht, und wird Ihnen persönlich alle wichtigen Details zur Anwendung, Pflege und Nutzung des Hair Systems® erklären. Denn das Problem liegt oft im Detail.',
    spelaSemeP2: 'Dr. Špela Šeme arbeitet aktiv mit internationalen Experten bei der Erforschung der Ursachen von Alopecia Areata zusammen und organisiert regelmäßig Bildungsseminare zu diesem Thema. Diese Erkenntnisse teilt sie auch mit interessiertem medizinischen Personal. Die Mitglieder des gesamten Teams in unserer Abteilung haben entweder persönliche Erfahrung mit Haarausfall oder haben einen nahestehenden Menschen, der Haare verloren hat.',
    specialistsTitle: 'Wir sind stolz darauf, Spezialisten in der Beratung zu sein für:',
    specialistsList: [
      'vollständigen oder teilweisen Haarausfall aufgrund von Stressfaktoren',
      'nicht-chirurgische Haarwiederherstellung mit dem Hair System®',
      'vollständigen oder teilweisen Haarausfall aufgrund von Chemotherapie und anderen Behandlungen',
      'psychologische und ästhetische Überbrückung der Folgen von Alopecia Areata',
      'ästhetische Lösungen bei männlicher oder weiblicher Kahlheit oder ausdünnendem Haar'
    ],
    spelaSemeP3: 'Neben ihrer Arbeit ist Dr. Špela Šeme Initiatorin und Leiterin der ersten Selbsthilfegruppe bei Haarausfall in Slowenien und organisiert regelmäßige Treffen für alle, die unter Haarausfall leiden.',
    skupinaReadMore: 'Mehr über die Selbsthilfegruppe lesen',
    goalsTitle: 'Unsere Ziele',
    goalsDesc: 'Das Ziel unserer Abteilung ist es, Menschen zu helfen, die unter teilweisem oder vollständigem Haarausfall leiden. Unsere Hilfe umfasst die psychologische und ästhetische Überbrückung des Verlusts und besteht aus:',
    goalsList: [
      'Bereitstellung von Informationen über visuelle Techniken und Hilfsmittel, um das Fehlen von Haaren, Augenbrauen und Wimpern zu mildern (Zeichentechniken für Wimpern und Augenbrauen, Informationen über Kopfbedeckungen...)',
      'Bereitstellung von Informationen und Ratschlägen, um Menschen bei der Bewältigung der schwersten psychologischen Herausforderungen des Haarausfalls zu helfen',
      'Erklärung von Techniken, die helfen, Depressionen und Apathie zu überwinden, die oft mit dem Verlust einhergehen',
      'Organisation von Treffen mit Menschen, die ähnliche Haarausfallerfahrungen gemacht haben (Eltern, Kinder, Geschwister, Freunde und Partner), um sicherzustellen, dass sie sich nicht mehr so allein und unverstanden fühlen',
      'Information über weltweite Neuigkeiten zu Haarausfallproblemen',
      'Unterstützung bei der Organisation des Besuchs der jährlichen NAAF-Konferenz in den USA',
      'Verbreitung von Informationen und Bewusstseinsbildung zu Haarausfallproblemen durch TV- und Radiobeiträge, Zeitschriften- und Zeitungsartikel, Vorträge, runde Tische, Treffen in Gesundheitszentren, Apotheken, Krankenhäusern, Schulen...'
    ],
    closingP1: 'Die Möglichkeit zu haben, zu einer besseren Lebensqualität der Menschen beizutragen, ist zweifellos ein großes Geschenk. Mitglied eines Unternehmens mit einer so edlen Mission zu sein, ist eine besondere Freude und Ehre.',
    closingP2: 'Informationen zu den Treffen der Selbsthilfegruppe finden Sie im Kontaktbereich.',
    brandTitle: 'Marke',
    brandP1: 'Eingetragene Marke. Die Marke HOLLYWOOD LASNI SISTEM® und HOLLYWOOD HAIR SYSTEM® ist eine Marke für Haarsysteme, die keine gewöhnlichen Perücken sind, sondern als Alternative zur Haartransplantation behandelt werden und nur von Fi-potencial d.o.o. und ihren Geschäftspartnern verkauft werden.',
    brandP2: 'Der Name Hollywood Lasni Sistem® und alle Ableitungen dieses Namens sind durch das slowenische Amt für geistiges Eigentum rechtlich geschützt. Alleiniger Inhaber der Marke ist das Unternehmen Fi-Potencial d.o.o. aus Kranj. Die Verwendung des Markennamens ist nur Franchise-Nutzern / Lizenznehmern dieses Namens gestattet.',
    brandP3: 'Wo können Sie echte Hair Systems® kaufen? Jeder Missbrauch dieses Namens und jede unbefugte Nutzung durch Einzelpersonen oder juristische Personen wird strafrechtlich verfolgt.',
    brandP4: 'Nur so können wir unsere Kunden im Vorfeld vor billigen Kopien und Produkten schützen, die unter demselben Namen verkauft werden. Aufgrund mangelhafter und ungeeigneter Materialien (gefärbtes asiatisches Haar oder gar Synthetik) zerfallen sie innerhalb weniger Monate und reizen oft stark die Haut (insbesondere Befestigungskleber, die nicht medizinisch getestet sind!).',
    brandP5: 'Das echte Hollywood Hair System® erhalten Sie ausschließlich in Kranj (Fi Potencial d.o.o.) und auf der Insel Krk (HR) – Villa Splendissima d.o.o.',
  },
  ru: {
    heroTitle: 'Кто мы / Наша миссия',
    heroSubtitle: 'Мы являемся владельцами франшизы по продаже Hollywood Hair Systems® для всей Европы.',
    spelaSemeTitle: 'Шпела Шеме',
    spelaSemeP1: 'Руководитель отдела Hair Systems®, доктор Шпела Шеме, активный член NAAF, имеет более 40 лет опыта преодоления потери волос и сама носит Hair System®. Она знает, о чем говорит, и лично объяснит вам все важные детали о том, как применяется, обслуживается и используется Hair System®.',
    spelaSemeP2: 'Доктор Шпела Шеме активно сотрудничает с международными экспертами по выявлению причин очаговой алопеции и регулярно организует образовательные семинары на эту тему. Она также делится этими открытиями с заинтересованным медицинским персоналом. Члены всей команды нашего отдела либо сами имеют опыт потери волос, либо кто-то из их близких потерял волосы.',
    specialistsTitle: 'Мы гордимся тем, что являемся специалистами-консультантами по:',
    specialistsList: [
      'полной или частичной потере волос из-за стрессовых факторов',
      'безоперационному восстановлению волос с помощью Hair System®',
      'полной или частичной потере волос из-за химиотерапии и других видов лечения',
      'психологическому и эстетическому преодолению последствий очаговой алопеции',
      'эстетическому решению проблем мужского или женского облысения или редких волос'
    ],
    spelaSemeP3: 'Помимо своей работы, доктор Шпела Шеме является инициатором и руководителем первой словенской группы взаимопомощи при потере волос и организует регулярные встречи для всех страдающих от потери волос.',
    skupinaReadMore: 'Подробнее о группе взаимопомощи',
    goalsTitle: 'Наши цели',
    goalsDesc: 'Цель нашего отдела — помочь людям, страдающим от частичной или полной потери волос. Наша помощь включает психологическое и эстетическое преодоление потери и состоит из:',
    goalsList: [
      'предоставления информации о визуальных техниках и аксессуарах, помогающих смягчить отсутствие волос, бровей, ресниц (техники рисования ресниц, бровей, информация о головных уборах...)',
      'предоставления информации и советов, помогающих людям преодолеть самые тяжелые психологические проблемы при потере волос',
      'объяснения техник, помогающих преодолеть депрессию и апатию, которые часто сопровождают потерю',
      'организации встреч с людьми, имеющими аналогичный опыт потери волос (родители, дети, братья и сестры, друзья и партнеры), чтобы они больше не чувствовали себя одинокими и непонятыми',
      'информирования о мировых новинках в области проблем потери волос',
      'оказания помощи в организации поездки на ежегодную конференцию NAAF в США',
      'распространения информации и повышения осведомленности о проблемах потери волос через теле- и радиопередачи, статьи в журналах и газетах, лекции, круглые столы, встречи в медицинских центрах, аптеках, больницах, школах...'
    ],
    closingP1: 'Иметь возможность способствовать повышению качества жизни людей – это несомненно большой дар. Быть частью компании с такой благородной миссией – особая радость и честь.',
    closingP2: 'Информацию о встречах Группы поддержки можно найти в разделе Контакты.',
    brandTitle: 'Торговая марка',
    brandP1: 'Зарегистрированная торговая марка. Торговая марка HOLLYWOOD LASNI SISTEM® и HOLLYWOOD HAIR SYSTEM® — это бренд систем волос, которые не являются обычными париками, а рассматриваются как альтернатива пересадке волос, продаваемые только компанией Fi-potencial d.o.o. и её деловыми партнерами.',
    brandP2: 'Название Hollywood Lasni Sistem® и все производные этого названия юридически защищены Ведомством интеллектуальной собственности Словении. Единственным владельцем торговой марки является компания Fi-Potencial d.o.o. из Краня. Использование названия бренда разрешено только пользователям франшизы / владельцам лицензии на использование этого названия.',
    brandP3: 'Где можно купить настоящие Hair Systems®? Любое злоупотребление этим названием и несанкционированное использование физическими и юридическими лицами будет преследоваться по закону.',
    brandP4: 'Только так мы можем заранее защитить клиентов от дешевых копий и продуктов, которые пытаются продать под тем же названием. Из-за некачественных и неподходящих материалов (окрашенные азиатские волосы или даже синтетика) они распадаются за несколько месяцев и часто сильно раздражают кожу (особенно клеи для фиксации, которые не проходят медицинское тестирование!).',
    brandP5: 'Настоящий Hollywood Hair System® можно приобрести исключительно в Крани (Fi Potencial d.o.o.) и на острове Крк (Хорватия) – Villa Splendissima d.o.o.',
  },
}

export default function AboutPageContent({ lang }: Props) {
  const at = aboutTranslations[lang] || aboutTranslations.sl

  return (
    <div style={{ background: '#F8F7F5', minHeight: '100vh', color: '#1C1917' }}>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: 'clamp(9rem, 15vw, 13rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: '#F4F2EC',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <div className="mx-auto relative z-10" style={{ maxWidth: 1000, padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              fontStyle: 'italic',
              color: '#1C1917',
              letterSpacing: '0.01em',
              margin: '0 0 1.5rem 0',
            }}
          >
            {at.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
              fontWeight: 400,
              color: 'rgba(28,25,23,0.7)',
              maxWidth: 700,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {at.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0' }}>
        <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 clamp(1.5rem, 4vw, 3rem)' }}>

          {/* Dr. Spela Seme Section (Wider with Image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
            style={{ marginBottom: '6rem' }}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/3">
              <div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
                style={{
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <Image
                  src="/images/spela-seme-v2.jpg"
                  alt="Dr. Špela Šeme"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-2/3">
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 600,
                  color: '#C1A452',
                  margin: '0 0 1.5rem 0',
                }}
              >
                {at.spelaSemeTitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 300, color: 'rgba(28,25,23,0.85)', lineHeight: 1.8 }}>
                <p>{at.spelaSemeP1}</p>
                <p>{at.spelaSemeP2}</p>

                <div style={{ margin: '1.5rem 0', padding: '2rem', background: '#FFFFFF', borderRadius: '1rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                  <p style={{ fontWeight: 600, color: '#1C1917', marginBottom: '1rem' }}>{at.specialistsTitle}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.2rem', margin: 0 }}>
                    {at.specialistsList.map((item: string, idx: number) => (
                      <li key={idx} style={{ position: 'relative', listStyle: 'none' }}>
                        <span style={{ position: 'absolute', left: '-1.2rem', color: '#C1A452', fontWeight: 'bold' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>{at.spelaSemeP3}</p>

                <Link
                  href={`/${lang}/blog/${lang === 'de' ? 'selbsthilfegruppe' : lang === 'en' || lang === 'ru' ? 'support-group' : 'skupina-za-samopomoc'}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: '#1A1A1A',
                    textDecoration: 'none',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '2px',
                    transition: 'background 0.3s ease',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#C1A452' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1A1A1A' }}
                >
                  {at.skupinaReadMore}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Goals Section (Wider layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.03)',
              borderRadius: '1.5rem',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '6rem',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 600,
                color: '#C1A452',
                margin: '0 0 2rem 0',
                borderBottom: '1px solid rgba(193,164,82,0.2)',
                paddingBottom: '1rem',
              }}
            >
              {at.goalsTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 300, color: 'rgba(28,25,23,0.85)', lineHeight: 1.8 }}>
              <p>{at.goalsDesc}</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', paddingLeft: '1.5rem', margin: '1rem 0' }}>
                {at.goalsList.map((item: string, idx: number) => (
                  <li key={idx} style={{ position: 'relative', listStyle: 'none', paddingLeft: '1rem' }}>
                    <span style={{ position: 'absolute', left: '-1.5rem', top: '0.5rem', width: '6px', height: '6px', borderRadius: '50%', background: '#C1A452' }} />
                    <span style={{ display: 'block' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontStyle: 'italic', color: 'rgba(28,25,23,0.7)' }}>
                <p style={{ marginBottom: '1rem' }}>{at.closingP1}</p>
                <p>{at.closingP2}</p>
              </div>
            </div>
          </motion.div>

          {/* Trademark Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={{
              background: '#F4F2EC',
              border: '1px solid rgba(193,164,82,0.3)',
              borderRadius: '1.5rem',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 600,
                color: '#C1A452',
                margin: '0 0 2rem 0',
              }}
            >
              {at.brandTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 400, color: 'rgba(28,25,23,0.85)', lineHeight: 1.8 }}>
              <p><strong>{at.brandP1.split('.')[0]}.</strong> {at.brandP1.substring(at.brandP1.indexOf('.') + 1)}</p>
              <p>{at.brandP2}</p>
              <p>
                <span style={{ fontWeight: 600, color: '#C1A452', display: 'block', marginBottom: '0.5rem' }}>
                  {at.brandP3.split('?')[0]}?
                </span>
                {at.brandP3.split('?')[1]}
              </p>
              <p>{at.brandP4}</p>
              <p style={{ fontWeight: 600, color: '#1C1917' }}>{at.brandP5}</p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
