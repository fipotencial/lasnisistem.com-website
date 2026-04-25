type FAQEntry = { question: string; answer: string }

const faqData: Record<string, FAQEntry[]> = {
  sl: [
    {
      question: 'Kaj je Hollywood Lasni Sistem®?',
      answer:
        'Hollywood Lasni Sistem® je prozorna mikromrežica, narejena po meri posameznika, z ročno pritrjenimi naravnimi lasmi (virgin hair). Ni kirurški poseg in ni lasulja – je napredna, nevidna rešitev za izpadanje las, ki jo nosite 24/7, tudi pri prhanju, plavanju in športu.',
    },
    {
      question: 'Koliko časa traja lasni sistem?',
      answer:
        'Ob pravilni negi in vzdrževanju Hollywood Lasni Sistem® zdrži do 4 leta ali celo več. Vsak sistem ima zagotovljeno 6-mesečno garancijo.',
    },
    {
      question: 'Ali je lasni sistem viden?',
      answer:
        'Ne. Mikromrežica je tako tanka in prozorna, da rob sistema ni viden niti pri česanju las nazaj. Sistem izgleda popolnoma naravno 24 ur na dan, 7 dni v tednu.',
    },
    {
      question: 'Kakšna je cena lasnega sistema?',
      answer:
        'Cena Hollywood Lasnega sistema® se začne pri 935 EUR. Cena vključuje individualno konzultacijo, odvzem mavčnega kalupa glave in prilagoditev barve ter gostote las.',
    },
    {
      question: 'Ali je postopek nameščanja boleč?',
      answer:
        'Ne. Postopek nameščanja Hollywood Lasnega sistema® je povsem neboleč. Sistem se pritrdi z medicinsko testiranimi lepilnimi trakovi – brez kirurških posegov, brez vbodov, brez bolečin.',
    },
    {
      question: 'Kako vzdržujem lasni sistem?',
      answer:
        'Lasni sistem vzdržujete z rednim umivanjem z blagimi šamponi in balzami za naravne lase. Sistem nosi se neprekinjeno 3–4 tedne, nato ga prilagodite ali zamenjate v svetovalnem studiu. Naravni lasje, iz katerih je narejen, zahtevajo enako nego kot vaši lastni lasje.',
    },
    {
      question: 'Kakšna je razlika med Hollywood Lasnim sistemom® in lasuljami?',
      answer:
        'Hollywood Lasni Sistem® je narejen individualno po meri, pritrjen z medicinskimi trakovi in omogoča 24/7 nošenje, vključno s plavanjem in dinamičnim športom. Lasulje so serijsko izdelane, bolj vidne in jih je treba snemati vsak večer. Lasni sistem zdrži do 4 leta – kar je do 8-krat dlje kot najboljše lasulje.',
    },
    {
      question: 'Kje se nahaja svetovalni studio?',
      answer:
        'Svetovalni studio Fi Potencial d.o.o. se nahaja na naslovu Komenskega 1, 4000 Kranj, Slovenija. Konzultacije so izključno po predhodnem dogovoru za zagotovitev popolne zasebnosti.',
    },
  ],
  en: [
    {
      question: 'What is the Hollywood Hair System®?',
      answer:
        'The Hollywood Hair System® is a transparent micro-mesh custom-made for each individual, with natural virgin hair attached by hand. It is neither surgery nor a wig – it is an advanced, invisible solution for hair loss that you wear 24/7, including while showering, swimming, and doing sports.',
    },
    {
      question: 'How long does the hair system last?',
      answer:
        'With proper care and maintenance, the Hollywood Hair System® lasts up to 4 years or more. Every system comes with a 6-month warranty.',
    },
    {
      question: 'Is the hair system visible?',
      answer:
        'No. The micro-mesh is so thin and transparent that the edge of the system is completely invisible even when brushing your hair straight back. The system looks entirely natural 24 hours a day, 7 days a week.',
    },
    {
      question: 'How much does the hair system cost?',
      answer:
        'The Hollywood Hair System® starts from €935. The price includes an individual consultation, a head mold casting, and matching of hair color and density.',
    },
    {
      question: 'Is the fitting process painful?',
      answer:
        'No. The fitting process is completely painless. The system is attached using medically tested adhesive tapes – no surgery, no injections, no pain.',
    },
    {
      question: 'How do I maintain the hair system?',
      answer:
        'Maintain the hair system by washing regularly with gentle shampoos and conditioners designed for natural hair. You wear it continuously for 3–4 weeks, then adjust or replace it at the studio. The natural hair it is made from requires the same care as your own hair.',
    },
    {
      question: 'What is the difference between the Hollywood Hair System® and wigs?',
      answer:
        'The Hollywood Hair System® is custom-made, secured with medical adhesive tapes, and allows 24/7 wear including swimming and sports. Wigs are mass-produced, more visible, and must be removed every night. The hair system lasts up to 4 years – up to 8 times longer than the best wigs.',
    },
    {
      question: 'Where is the consulting studio located?',
      answer:
        'The Fi Potencial d.o.o. consulting studio is located at Komenskega 1, 4000 Kranj, Slovenia. All consultations are by appointment only to ensure complete privacy.',
    },
  ],
  de: [
    {
      question: 'Was ist das Hollywood Haarsystem®?',
      answer:
        'Das Hollywood Haarsystem® ist ein transparentes Mikronetz, das individuell angefertigt wird, mit von Hand befestigten natürlichen Haaren (Virgin Hair). Es ist weder eine Operation noch eine Perücke – es ist eine fortschrittliche, unsichtbare Lösung für Haarausfall, die Sie 24/7 tragen, auch beim Duschen, Schwimmen und Sport.',
    },
    {
      question: 'Wie lange hält das Haarsystem?',
      answer:
        'Bei richtiger Pflege hält das Hollywood Haarsystem® bis zu 4 Jahre oder länger. Jedes System wird mit einer 6-Monats-Garantie geliefert.',
    },
    {
      question: 'Ist das Haarsystem sichtbar?',
      answer:
        'Nein. Das Mikronetz ist so dünn und transparent, dass der Rand des Systems auch beim Zurückbürsten der Haare völlig unsichtbar ist. Das System sieht 24 Stunden am Tag, 7 Tage die Woche völlig natürlich aus.',
    },
    {
      question: 'Was kostet das Haarsystem?',
      answer:
        'Das Hollywood Haarsystem® beginnt ab 935 €. Der Preis beinhaltet eine individuelle Beratung, einen Kopfabdruck sowie die Anpassung von Haarfarbe und -dichte.',
    },
    {
      question: 'Ist das Anpassen schmerzhaft?',
      answer:
        'Nein. Das Anpassen ist völlig schmerzlos. Das System wird mit medizinisch geprüften Klebestreifen befestigt – kein chirurgischer Eingriff, keine Injektionen, keine Schmerzen.',
    },
    {
      question: 'Wie pflege ich das Haarsystem?',
      answer:
        'Pflegen Sie das Haarsystem durch regelmäßiges Waschen mit milden Shampoos und Pflegespülungen für Naturhaar. Sie tragen es 3–4 Wochen ununterbrochen, dann passen Sie es im Studio an oder ersetzen es. Die Naturhaare, aus denen es besteht, erfordern dieselbe Pflege wie Ihre eigenen Haare.',
    },
    {
      question: 'Was ist der Unterschied zwischen dem Hollywood Haarsystem® und Perücken?',
      answer:
        'Das Hollywood Haarsystem® wird individuell angefertigt, mit medizinischen Klebestreifen befestigt und kann 24/7 getragen werden, auch beim Schwimmen und Sport. Perücken sind seriengefertigt, sichtbarer und müssen täglich abgenommen werden. Das Haarsystem hält bis zu 4 Jahre – bis zu 8-mal länger als die besten Perücken.',
    },
    {
      question: 'Wo befindet sich das Beratungsstudio?',
      answer:
        'Das Beratungsstudio der Fi Potencial d.o.o. befindet sich in Komenskega 1, 4000 Kranj, Slowenien. Alle Beratungen sind nur nach vorheriger Vereinbarung möglich, um vollständige Privatsphäre zu gewährleisten.',
    },
  ],
  ru: [
    {
      question: 'Что такое Hollywood Hair System®?',
      answer:
        'Hollywood Hair System® — это прозрачная микросетка, изготовленная индивидуально для каждого, с вручную прикреплёнными натуральными волосами (Virgin Hair). Это не операция и не парик – это современное, невидимое решение от выпадения волос для ношения 24/7, включая душ, плавание и занятия спортом.',
    },
    {
      question: 'Как долго служит система волос?',
      answer:
        'При правильном уходе Hollywood Hair System® служит до 4 лет и более. Каждая система поставляется с 6-месячной гарантией.',
    },
    {
      question: 'Видна ли система волос?',
      answer:
        'Нет. Микросетка настолько тонкая и прозрачная, что край системы совершенно невидим даже при укладке волос назад. Система выглядит абсолютно естественно 24 часа в сутки, 7 дней в неделю.',
    },
    {
      question: 'Сколько стоит система волос?',
      answer:
        'Hollywood Hair System® начинается от 935 €. Стоимость включает индивидуальную консультацию, снятие слепка головы, а также подбор цвета и плотности волос.',
    },
    {
      question: 'Больно ли проходит примерка?',
      answer:
        'Нет. Процесс примерки совершенно безболезненный. Система крепится с помощью медицинских клейких лент – без хирургических вмешательств, без инъекций, без боли.',
    },
    {
      question: 'Как ухаживать за системой волос?',
      answer:
        'Ухаживайте за системой волос, регулярно промывая её мягкими шампунями и кондиционерами для натуральных волос. Носите её непрерывно 3–4 недели, затем скорректируйте или замените в студии. Натуральные волосы, из которых она изготовлена, требуют такого же ухода, как ваши собственные.',
    },
    {
      question: 'В чём разница между Hollywood Hair System® и париком?',
      answer:
        'Hollywood Hair System® изготавливается индивидуально, крепится медицинскими лентами и носится 24/7, включая плавание и занятия спортом. Парики производятся серийно, более заметны и снимаются каждую ночь. Система волос служит до 4 лет – до 8 раз дольше лучших париков.',
    },
    {
      question: 'Где находится консультационная студия?',
      answer:
        'Консультационная студия Fi Potencial d.o.o. расположена по адресу Komenskega 1, 4000 Kranj, Словения. Все консультации проводятся только по предварительной записи для обеспечения полной конфиденциальности.',
    },
  ],
}

export default function FAQSchema({ lang }: { lang: string }) {
  const entries = faqData[lang] ?? faqData.sl

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
