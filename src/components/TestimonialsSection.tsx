'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useCallback } from 'react'
import type { Translation, LangCode } from '@/lib/i18n/translations'

type Props = {
  lang: LangCode
  t: Translation
}

const featuredTestimonials = [
  {
    name: 'Mark Williamson',
    image: '/images/mark williamson-testimonial.jpg',
    instagram: 'https://www.instagram.com/markwilliamson45/',
    clients: 'Vogue, Elle, Harper\'s Bazaar, Vanity Fair, Marie Claire, Max Factor, Roberto Cavalli, Paco Rabanne',
  },
  {
    name: 'Jimmy Paul',
    image: '/images/jimypal_image testimonial.jpg',
    instagram: '',
    clients: 'Vogue, Bazaar, Vanity Fair, Dua Lipa, Scarlett Johansson, Gigi Hadid, Bella Hadid, Kim Kardashian, Justin & Hailey Bieber',
  },
]

type ShortTestimonial = { name: string; quote: string; fullId?: string }

const readMoreLabel: Record<LangCode, string> = {
  sl: 'Preberite celotno mnenje',
  en: 'Read full testimonial',
  de: 'Vollständige Bewertung lesen',
  ru: 'Читать полный отзыв',
}

const shortTestimonialsMap: Record<LangCode, ShortTestimonial[]> = {
  sl: [
    { name: 'Janez', quote: 'Odlična storitev za stranke. Izjemno prijazni. Storijo vse, da si zadovoljen.' },
    { name: 'Erika', quote: 'Navdušena sem in počutim se lahkotno in sproščeno, kot bi imela svoje lase na glavi. Spet lahko delam kar hočem, športam – kolesarim, hodim na pilates, plavam brez skrbi…', fullId: 'erika' },
    { name: 'James B.', quote: 'Genessa in Eva sta najboljši!' },
    { name: 'Andrej', quote: 'Vedno odlično!' },
    { name: 'Christine', quote: 'Z lasnim sistemom sem ponovno zaživela! Od prvega trenutka sem se počutila prosto, neomejeno, ah kaj, preprosto suuuuuper! Kvaliteta življenja z lasnim sistemom je nepopisno boljša…', fullId: 'christine' },
    { name: 'Rok', quote: 'Super izkušnja, vsi so prijazni in odlično opravijo svoje delo.' },
    { name: 'Anonimna stranka', quote: 'Zelo sem zadovoljna s sistemom, navdušeni so tudi vsi ostali – moj fant, ostala družina, prijatelji.' },
    { name: 'Luka', quote: 'V vseh pogledih popolno!' },
    { name: 'Jure', quote: 'Vedno prijetna izkušnja.' },
    { name: 'Katja', quote: 'Bila sem navdušena. Sistem se je povsem prilegal mojim lasem. Izgled je povsem naravno, najboljše pa je, da pozabiš, da ga imaš na glavi. Ni vroč, nobenega srbenja kot pri lasulji…', fullId: 'katja' },
    { name: 'Chris Ishida', quote: 'Absolutna perfekcija! Čudovit rezultat las kot vedno, osebje je vrhunsko profesionalno!' },
    { name: 'Dorothy R.', quote: 'Vedno odlična storitev in prijazna gostoljubnost.' },
    { name: 'Mateja, 22 let', quote: 'Občutek je nepopisen, sistem je bil tako lahek, lasje tako lepi. Plavala sem celo pod vodo. Izgleda povsem naravno, rob sistema je neviden, koža normalno diha…', fullId: 'mateja' },
    { name: 'Robert Olds', quote: 'Vsi so bili zelo prijazni in ustrežljivi. Storitev je bila odlična.' },
    { name: 'Chuck Sweetman', quote: 'Clarissa Eva je NAJBOLJŠA!' },
    { name: 'Thomas A.', quote: 'Obožujem to. Vsi so vedno zelo prijazni in gostoljubni.' },
    { name: 'Giacomo Tocco', quote: 'Vedno odlična storitev!' },
    { name: 'Eva, 18 let', quote: 'Srečanje s Špelo me je prijetno presenetilo. Na njeni glavi sem videla lase, ki so se mi zdeli SUPER. Lasni sistem mi sedaj omogoča normalno življenje…', fullId: 'eva' },
    { name: 'Thomas Proulx', quote: 'Izjemni ljudje in storitev – vedno!' },
    { name: 'Marvin B.', quote: 'Odlična storitev. Salvador opravi čudovito delo.' },
    { name: 'Victor Castaneda', quote: 'Vedno odlična izkušnja! Sal in ostalo osebje so najboljši.' },
    { name: 'Miha iz Ljubljane', quote: 'Nosim Lasni sistem že eno leto. Delam z njim enako, kot bi imel naravne lase – plavam, igram nogomet, tudi močan veter ni problem…', fullId: 'miha' },
    { name: 'Richard Kletter', quote: 'Eva je vedno hitra, a odlična pri svojem delu.' },
    { name: 'Merima, 15 let', quote: 'Po kemoterapiji so mi izpadli lasje. Sintetične lasulje so bile vroče in nenaravne. S Hair System® sem dobila točno iste lase, ki sem jih imela pred boleznijo…', fullId: 'merima' },
    { name: 'Shad Meshad', quote: 'Prijazni, spretni, sproščeni. Počutil sem se zelo udobno.' },
    { name: '22-letni študent', quote: 'Ob »polaganju« na glavo se je sistem dobesedno zlil z mojimi lasmi. Do sedaj ni še nihče razumel, da imam na glavi sistem in ne svoje naravne lase…', fullId: 'student' },
    { name: 'Navdušenec', quote: 'Zadeva je neverjetna. Fenomenalna v vseh pogledih. Najbolj mi je všeč, da se odlično drži glave. Kot da bi iz stoenke presedlal na mercedesa…', fullId: 'navdusenec' },
    { name: 'S.A., 50 let', quote: 'Odkar ga nosim sem mnogo samozavestnejši. Izgledam vsaj 10 let mlajši. Nobena operacija ne nudi take frizure. Počutim se kot milijon evrov…', fullId: 'sa-50let' },
    { name: 'Bojči', quote: 'Nazaj sem pridobila ogromno samozavesti, končno sem spet zadovoljna sama s seboj. Lahko tečem, plešem, skačem, plavam… jaz sem navdušena…', fullId: 'bojci' },
    { name: 'Marjana', quote: 'Z Lasnim sistemom so strahovi povsem odveč. Lahko plavam, se potapljam, se tuširam na plaži. Mokri lasje se obnašajo kot naravni…', fullId: 'marjana' },
    { name: 'Janka iz Celja', quote: 'Spet sem začela uživati v športu, kopanju in savni. Celo veter me več ne moti. Spet ga imam rada. LASNI SISTEM IMAM!!! ŽIVIM!…', fullId: 'janka' },
  ],
  en: [
    { name: 'Janez', quote: 'Excellent customer service. Super nice, super friendly. They go out of their way to make sure you\'re happy.' },
    { name: 'Erika', quote: 'I feel light and relaxed, as if I had my own hair. I can do everything again – cycling, pilates, swimming without worry…', fullId: 'erika' },
    { name: 'Tomaž', quote: 'Genessa and Eva are the best!' },
    { name: 'Andrej', quote: 'Always superb!' },
    { name: 'Christine', quote: 'With the hair system I came alive again! From the first moment I felt free, unlimited, simply amazing! The quality of life is incomparably better…', fullId: 'christine' },
    { name: 'Rok', quote: 'Awesome experience, everyone is friendly and does a great job.' },
    { name: 'Anonymous client', quote: 'I\'m very satisfied with the system. Everyone else is thrilled too – my boyfriend, family, friends.' },
    { name: 'Luka', quote: 'In all ways perfect!' },
    { name: 'Jure', quote: 'Always a nice experience.' },
    { name: 'Katja', quote: 'I was thrilled. The system fit my hair perfectly. It looks completely natural, and the best part is you forget it\'s on your head. No heat, no itching like with a wig…', fullId: 'katja' },
    { name: 'Chris Ishida', quote: 'Absolutely perfection! Wonderful hair result as always and the staff are A+ professional!' },
    { name: 'Dorothy Ross', quote: 'Always excellent service and friendly hospitality.' },
    { name: 'Mateja, 22', quote: 'The feeling was indescribable, the system was so light, the hair so beautiful. I even swam underwater. It looks completely natural, the edge is invisible…', fullId: 'mateja' },
    { name: 'Robert Olds', quote: 'Everyone was so nice and helpful. Service was great.' },
    { name: 'Chuck Sweetman', quote: 'Clarissa Eva is THE BEST!' },
    { name: 'Thomas Anderson', quote: 'Love it there, everyone is always super nice and very welcoming.' },
    { name: 'Giacomo Tocco', quote: 'Always great service!' },
    { name: 'Eva, 18', quote: 'Meeting Spela was a pleasant surprise. On her head I saw hair that looked AMAZING. The Hair System now gives me a normal life…', fullId: 'eva' },
    { name: 'Thomas Proulx', quote: 'Amazing people and service always!' },
    { name: 'Marvin Blaine', quote: 'Great customer service. Salvador has been doing a wonderful job.' },
    { name: 'Victor Castaneda', quote: 'Always a great experience! Sal and the rest of the staff are the best.' },
    { name: 'Miha', quote: 'I\'ve been wearing the Hair System for a year. I do everything as with my natural hair – swimming, football, even strong wind is no problem…', fullId: 'miha' },
    { name: 'Richard Kletter', quote: 'Eva is always speedy, but excellent with her craft.' },
    { name: 'Merima, 15', quote: 'After chemotherapy my hair fell out. Synthetic wigs were hot and unnatural. With Hair System® I got exactly the same hair I had before my illness…', fullId: 'merima' },
    { name: 'Shad Meshad', quote: 'Friendly, skilled, easy. I felt very comfortable.' },
    { name: 'Student, 22', quote: 'When placed on my head, the system literally merged with my hair. Nobody has yet realized I\'m wearing a system and not my natural hair…', fullId: 'student' },
    { name: 'Enthusiast', quote: 'The thing is incredible. Phenomenal in every way. I love that it holds to the head perfectly. Like upgrading from an economy car to a Mercedes…', fullId: 'navdusenec' },
    { name: 'S.A., 50', quote: 'Since I\'ve been wearing it, I\'m much more confident. I look at least 10 years younger. No surgery offers such a hairstyle. I feel like a million euros…', fullId: 'sa-50let' },
    { name: 'Bojči', quote: 'I\'ve regained enormous self-confidence, I\'m finally satisfied with myself again. I can run, dance, jump, swim… I\'m thrilled…', fullId: 'bojci' },
    { name: 'Marjana', quote: 'With the Hair System, all fears are gone. I can swim, dive, shower on the beach. Wet hair behaves like natural hair…', fullId: 'marjana' },
    { name: 'Janka', quote: 'I started enjoying sports, swimming and sauna again. Even the wind doesn\'t bother me anymore. I love it again. I HAVE A HAIR SYSTEM!!! I\'M LIVING!…', fullId: 'janka' },
  ],
  de: [
    { name: 'Janez', quote: 'Ausgezeichneter Kundenservice. Super nett, super freundlich. Sie tun alles, damit man zufrieden ist.' },
    { name: 'Erika', quote: 'Ich fühle mich leicht und entspannt, als hätte ich meine eigenen Haare. Radfahren, Pilates, Schwimmen – alles ohne Sorgen…', fullId: 'erika' },
    { name: 'Tomaž', quote: 'Genessa und Eva sind die Besten!' },
    { name: 'Andrej', quote: 'Immer hervorragend!' },
    { name: 'Christine', quote: 'Mit dem Haarsystem bin ich wieder aufgelebt! Vom ersten Moment an fühlte ich mich frei, unbegrenzt, einfach großartig! Die Lebensqualität ist unbeschreiblich besser…', fullId: 'christine' },
    { name: 'Rok', quote: 'Tolle Erfahrung, alle sind freundlich und machen einen großartigen Job.' },
    { name: 'Anonyme Kundin', quote: 'Ich bin sehr zufrieden mit dem System. Alle anderen sind auch begeistert – mein Freund, Familie, Freunde.' },
    { name: 'Luka', quote: 'In jeder Hinsicht perfekt!' },
    { name: 'Jure', quote: 'Immer eine angenehme Erfahrung.' },
    { name: 'Katja', quote: 'Ich war begeistert. Das System passte perfekt zu meinen Haaren. Es sieht völlig natürlich aus, und das Beste ist, man vergisst es auf dem Kopf. Keine Hitze, kein Jucken…', fullId: 'katja' },
    { name: 'Chris Ishida', quote: 'Absolute Perfektion! Wunderbares Haarergebnis wie immer und das Personal ist erstklassig professionell!' },
    { name: 'Dorothy Ross', quote: 'Immer exzellenter Service und freundliche Gastlichkeit.' },
    { name: 'Mateja, 22', quote: 'Das Gefühl war unbeschreiblich, das System so leicht, die Haare so schön. Ich schwamm sogar unter Wasser. Es sieht völlig natürlich aus, der Rand ist unsichtbar…', fullId: 'mateja' },
    { name: 'Robert Olds', quote: 'Alle waren so nett und hilfsbereit. Der Service war großartig.' },
    { name: 'Chuck Sweetman', quote: 'Clarissa Eva ist DIE BESTE!' },
    { name: 'Thomas Anderson', quote: 'Ich liebe es dort, alle sind immer super nett und sehr einladend.' },
    { name: 'Giacomo Tocco', quote: 'Immer großartiger Service!' },
    { name: 'Eva, 18', quote: 'Das Treffen mit Spela hat mich angenehm überrascht. Auf ihrem Kopf sah ich Haare, die mir SUPER erschienen. Das Haarsystem ermöglicht mir jetzt ein normales Leben…', fullId: 'eva' },
    { name: 'Thomas Proulx', quote: 'Tolle Menschen und Service – immer!' },
    { name: 'Marvin Blaine', quote: 'Großartiger Kundenservice. Salvador macht einen wunderbaren Job.' },
    { name: 'Victor Castaneda', quote: 'Immer eine tolle Erfahrung! Sal und das restliche Personal sind die Besten.' },
    { name: 'Miha', quote: 'Ich trage das Haarsystem seit einem Jahr. Ich mache alles wie mit meinen natürlichen Haaren – Schwimmen, Fußball, auch starker Wind ist kein Problem…', fullId: 'miha' },
    { name: 'Richard Kletter', quote: 'Eva ist immer schnell, aber ausgezeichnet in ihrem Handwerk.' },
    { name: 'Merima, 15', quote: 'Nach der Chemotherapie fielen meine Haare aus. Synthetische Perücken waren heiß und unnatürlich. Mit dem Hair System® bekam ich genau die gleichen Haare wie vor meiner Krankheit…', fullId: 'merima' },
    { name: 'Shad Meshad', quote: 'Freundlich, geschickt, unkompliziert. Ich fühlte mich sehr wohl.' },
    { name: 'Student, 22', quote: 'Beim Auflegen auf den Kopf verschmolz das System buchstäblich mit meinen Haaren. Niemand hat bisher erkannt, dass ich ein System trage…', fullId: 'student' },
    { name: 'Begeisterter', quote: 'Die Sache ist unglaublich. Phänomenal in jeder Hinsicht. Am besten gefällt mir, dass es perfekt hält. Wie ein Upgrade vom Kleinwagen auf einen Mercedes…', fullId: 'navdusenec' },
    { name: 'S.A., 50', quote: 'Seit ich es trage, bin ich viel selbstbewusster. Ich sehe mindestens 10 Jahre jünger aus. Keine Operation bietet so eine Frisur. Ich fühle mich wie eine Million…', fullId: 'sa-50let' },
    { name: 'Bojči', quote: 'Ich habe enormes Selbstvertrauen zurückgewonnen, bin endlich wieder mit mir zufrieden. Ich kann laufen, tanzen, springen, schwimmen… ich bin begeistert…', fullId: 'bojci' },
    { name: 'Marjana', quote: 'Mit dem Haarsystem sind alle Ängste überflüssig. Ich kann schwimmen, tauchen, am Strand duschen. Nasse Haare verhalten sich wie natürliche…', fullId: 'marjana' },
    { name: 'Janka', quote: 'Ich genieße wieder Sport, Schwimmen und Sauna. Sogar der Wind stört mich nicht mehr. ICH HABE EIN HAARSYSTEM!!! ICH LEBE!…', fullId: 'janka' },
  ],
  ru: [
    { name: 'Янез', quote: 'Отличное обслуживание. Очень приятные, очень дружелюбные. Делают всё, чтобы вы были довольны.' },
    { name: 'Эрика', quote: 'Чувствую себя легко и расслабленно, как будто это мои собственные волосы. Велосипед, пилатес, плавание – всё без забот…', fullId: 'erika' },
    { name: 'Томаж', quote: 'Генесса и Ева – лучшие!' },
    { name: 'Андрей', quote: 'Всегда превосходно!' },
    { name: 'Кристин', quote: 'С системой волос я снова ожила! С первого момента почувствовала свободу, безграничность – просто невероятно! Качество жизни несравнимо лучше…', fullId: 'christine' },
    { name: 'Рок', quote: 'Потрясающий опыт, все дружелюбные и отлично справляются.' },
    { name: 'Анонимная клиентка', quote: 'Я очень довольна системой. Все в восторге – мой парень, семья, друзья.' },
    { name: 'Лука', quote: 'Во всех отношениях идеально!' },
    { name: 'Юре', quote: 'Всегда приятный опыт.' },
    { name: 'Катя', quote: 'Я была в восторге. Система идеально подошла к моим волосам. Выглядит совершенно естественно, и лучшее – забываешь, что она на голове. Никакой жары, никакого зуда…', fullId: 'katja' },
    { name: 'Крис Ишида', quote: 'Абсолютное совершенство! Прекрасный результат с волосами, персонал на высшем уровне!' },
    { name: 'Дороти Росс', quote: 'Всегда отличный сервис и дружелюбное гостеприимство.' },
    { name: 'Матея, 22', quote: 'Ощущения не описать словами, система такая лёгкая, волосы такие красивые. Даже плавала под водой. Выглядит совершенно естественно, край невидим…', fullId: 'mateja' },
    { name: 'Роберт Олдс', quote: 'Все были очень приятными и отзывчивыми. Сервис был великолепным.' },
    { name: 'Чак Свитмен', quote: 'Кларисса Ева – ЛУЧШАЯ!' },
    { name: 'Томас Андерсон', quote: 'Обожаю это место, все всегда очень приятные и гостеприимные.' },
    { name: 'Джакомо Токко', quote: 'Всегда отличный сервис!' },
    { name: 'Ева, 18', quote: 'Встреча со Шпелой приятно удивила. На её голове я увидела волосы, которые показались мне СУПЕР. Система Волос теперь даёт мне нормальную жизнь…', fullId: 'eva' },
    { name: 'Томас Пру', quote: 'Замечательные люди и сервис – всегда!' },
    { name: 'Марвин Блейн', quote: 'Отличное обслуживание. Сальвадор делает замечательную работу.' },
    { name: 'Виктор Кастаньеда', quote: 'Всегда отличный опыт! Сал и остальной персонал – лучшие.' },
    { name: 'Миха', quote: 'Ношу систему волос уже год. Делаю всё, как со своими волосами – плаваю, играю в футбол, даже сильный ветер не проблема…', fullId: 'miha' },
    { name: 'Ричард Клеттер', quote: 'Ева всегда быстрая, но отличная в своём мастерстве.' },
    { name: 'Мерима, 15', quote: 'После химиотерапии волосы выпали. Синтетические парики были горячими и неестественными. С Hair System® я получила точно такие же волосы, как до болезни…', fullId: 'merima' },
    { name: 'Шад Мешад', quote: 'Дружелюбные, умелые, легко. Я чувствовал себя очень комфортно.' },
    { name: 'Студент, 22', quote: 'При наложении на голову система буквально слилась с моими волосами. Никто до сих пор не понял, что я ношу систему, а не свои волосы…', fullId: 'student' },
    { name: 'Поклонник', quote: 'Вещь невероятная. Феноменальная во всех отношениях. Больше всего нравится, что отлично держится. Как пересесть с эконом-класса на мерседес…', fullId: 'navdusenec' },
    { name: 'С.А., 50', quote: 'С тех пор как ношу, стал намного увереннее. Выгляжу минимум на 10 лет моложе. Никакая операция не даёт такую причёску. Чувствую себя на миллион…', fullId: 'sa-50let' },
    { name: 'Бойчи', quote: 'Вернула огромную уверенность в себе, наконец снова довольна собой. Могу бегать, танцевать, прыгать, плавать… я в восторге…', fullId: 'bojci' },
    { name: 'Марьяна', quote: 'С системой волос все страхи исчезли. Могу плавать, нырять, принимать душ на пляже. Мокрые волосы ведут себя как натуральные…', fullId: 'marjana' },
    { name: 'Янка', quote: 'Снова наслаждаюсь спортом, плаванием и сауной. Даже ветер больше не мешает. У МЕНЯ СИСТЕМА ВОЛОС!!! Я ЖИВУ!…', fullId: 'janka' },
  ],
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

/* ── Glow card wrapper for carousel items ── */
function GlowCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--glow-x', `${x}px`)
    el.style.setProperty('--glow-y', `${y}px`)
    el.style.setProperty('--glow-opacity', '1')
  }, [])

  const handleLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--glow-opacity', '0')
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        position: 'relative',
        background: '#FFFFFF',
        border: '1px solid rgba(193,164,82,0.15)',
        borderRadius: '0.8rem',
        padding: '1.1rem 1.5rem',
        minWidth: 280,
        maxWidth: 360,
        flexShrink: 0,
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(140,120,60,0.05)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(193,164,82,0.12)'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.3)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(140,120,60,0.05)'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.15)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Cursor-following glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: '0.8rem',
          opacity: 'var(--glow-opacity, 0)' as unknown as number,
          background: 'radial-gradient(300px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(193,164,82,0.28), transparent 50%)',
          transition: 'opacity 0.3s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

/* ── Featured card with glow (using CSS custom props for simplicity) ── */
function FeaturedGlowCard({ testimonial, title, quote }: {
  testimonial: typeof featuredTestimonials[0]
  title: string
  quote: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
    el.style.setProperty('--glow-opacity', '1')
  }, [])

  const handleLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--glow-opacity', '0')
  }, [])

  return (
    <div
      ref={cardRef}
      className="flex flex-col sm:flex-row"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        background: 'linear-gradient(145deg, #3A3530 0%, #4A433C 60%, #3A3530 100%)',
        border: '1.5px solid rgba(193,164,82,0.3)',
        borderRadius: '1.2rem',
        overflow: 'hidden',
        flex: 1,
        minWidth: 0,
        position: 'relative',
        boxShadow: '0 10px 40px rgba(0,0,0,0.25), 0 2px 10px rgba(193,164,82,0.08), inset 0 1px 0 rgba(193,164,82,0.1)',
        transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3), 0 4px 20px rgba(193,164,82,0.15), inset 0 1px 0 rgba(193,164,82,0.15)'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.5)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.25), 0 2px 10px rgba(193,164,82,0.08), inset 0 1px 0 rgba(193,164,82,0.1)'
        e.currentTarget.style.borderColor = 'rgba(193,164,82,0.3)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Cursor glow overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: '1.2rem',
          opacity: 'var(--glow-opacity, 0)' as unknown as number,
          background: 'radial-gradient(450px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(193,164,82,0.2), transparent 50%)',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Gold accent line at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, rgba(193,164,82,0.3), #C1A452, #D4BC6A, #C1A452, rgba(193,164,82,0.3))',
          zIndex: 3,
        }}
      />

      {/* Image — left side */}
      <div
        className="sm:w-[38%] w-full"
        style={{
          position: 'relative',
          minHeight: 200,
          flexShrink: 0,
          zIndex: 2,
        }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, 180px"
        />
      </div>

      {/* Content — right side */}
      <div
        style={{
          padding: 'clamp(1.4rem, 2vw, 1.8rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          flex: 1,
          minWidth: 0,
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Name + Instagram */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.35rem',
                fontWeight: 600,
                color: '#F5EFE0',
                lineHeight: 1.2,
              }}
            >
              {testimonial.name}
            </span>
            {testimonial.instagram && (
              <a
                href={testimonial.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(193,164,82,0.7)', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C1A452' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(193,164,82,0.7)' }}
              >
                <InstagramIcon />
              </a>
            )}
          </div>
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: '#D4B95E',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </span>
        </div>

        {/* Quote */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.55,
            color: '#E0D8CC',
            margin: 0,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>

        {/* Clients */}
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 300,
            lineHeight: 1.5,
            color: '#BDB4A6',
            margin: 0,
            marginTop: 'auto',
          }}
        >
          {testimonial.clients}
        </p>
      </div>
    </div>
  )
}

function TestimonialCarousel({ lang }: { lang: LangCode }) {
  const testimonials = shortTestimonialsMap[lang] || shortTestimonialsMap.sl
  const items = [...testimonials, ...testimonials, ...testimonials]
  const rmLabel = readMoreLabel[lang] || readMoreLabel.sl

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '10%',
          background: 'linear-gradient(to right, #F3F0EB, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '10%',
          background: 'linear-gradient(to left, #F3F0EB, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ x: { duration: 120, repeat: Infinity, ease: 'linear' } }}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.5rem',
          width: 'max-content',
        }}
      >
        {items.map((item, i) => {
          const hasFull = !!item.fullId
          return hasFull ? (
            /* ── Story card — visually distinct ── */
            <Link
              key={`${item.name}-${i}`}
              href={`/${lang}/mnenja-strank#${item.fullId}`}
              style={{ textDecoration: 'none', flexShrink: 0 }}
            >
              <div
                style={{
                  position: 'relative',
                  background: 'linear-gradient(145deg, #FFFDF8 0%, #FBF6EC 100%)',
                  border: '1.5px solid rgba(193,164,82,0.3)',
                  borderRadius: '0.8rem',
                  padding: '1.3rem 1.5rem',
                  minWidth: 300,
                  maxWidth: 380,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(193,164,82,0.10), 0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 10px 36px rgba(193,164,82,0.18), 0 2px 8px rgba(0,0,0,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(193,164,82,0.5)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(193,164,82,0.10), 0 1px 4px rgba(0,0,0,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(193,164,82,0.3)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Gold left border accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 0,
                    bottom: 12,
                    width: 3,
                    borderRadius: '0 2px 2px 0',
                    background: 'linear-gradient(180deg, #C1A452, #D4BC6A, #C1A452)',
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    lineHeight: 1.55,
                    color: '#3E3A36',
                    margin: '0 0 0.8rem 0',
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #C1A452, #A0885A)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '2rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  {rmLabel} →
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.73rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#8B7535',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ) : (
            /* ── Short quote card — simple ── */
            <GlowCard key={`${item.name}-${i}`}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '0.98rem',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  color: '#57534E',
                  margin: '0 0 0.6rem 0',
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '0.73rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  color: '#B5973D',
                  textTransform: 'uppercase',
                }}
              >
                {item.name}
              </span>
            </GlowCard>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function TestimonialsSection({ lang, t }: Props) {
  const ts = t.testimonials

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F3F0EB 0%, #EDE8E0 50%, #F3F0EB 100%)' }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          padding: 'clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 3vw, 3rem)',
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3vw, 3rem)' }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#A0885A',
              letterSpacing: '0.02em',
              margin: '0 0 0.5rem 0',
            }}
          >
            {ts.sectionTitle}
          </h2>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 300,
              color: '#78716C',
              margin: 0,
            }}
          >
            {ts.sectionSubtitle}
          </p>
        </motion.div>

        {/* Featured cards — side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-5"
          style={{ marginBottom: 'clamp(2rem, 3vw, 3rem)' }}
        >
          <FeaturedGlowCard
            testimonial={featuredTestimonials[0]}
            title={ts.mark.title}
            quote={ts.mark.quote}
          />
          <FeaturedGlowCard
            testimonial={featuredTestimonials[1]}
            title={ts.jimmy.title}
            quote={ts.jimmy.quote}
          />
        </motion.div>
      </div>

      {/* Testimonial slider subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#1C1917',
            letterSpacing: '0.02em',
            margin: 0,
          }}
        >
          {ts.carouselSubtitle}
        </h3>
      </motion.div>

      {/* Carousel — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ paddingBottom: 'clamp(2rem, 3vw, 3rem)' }}
      >
        <TestimonialCarousel lang={lang} />
      </motion.div>
    </section>
  )
}
