export const languages = [
  { code: 'sl', label: 'SLO', flag: '🇸🇮' },
  { code: 'en', label: 'ENG', flag: '🇬🇧' },
  { code: 'ru', label: 'RUS', flag: '🇷🇺' },
  { code: 'de', label: 'DEU', flag: '🇩🇪' },
] as const

export type LangCode = (typeof languages)[number]['code']

export type Translation = {
  nav: {
    lasniSistem: string
    izpadanjeLas: string
    hollywoodHybrid: string
    oNas: string
    kontakt: string
  }
  hero: {
    headline: string
    tagline: string
    body: string
    cta: string
  }
  logoBanner: {
    label: string
  }
  credibility: {
    kicker: string
    subtitle: string
    years: string
    yearsLabel: string
    experience: string
    experienceLabel: string
    partnersLabel: string
  }
  empathy: {
    headline: string
    body: string
  }
  product: {
    super: string
    headline: string
    subtitle: string
    introText: string
    feature1Title: string
    feature1Desc: string
    feature1Bullet1: string
    feature1Bullet2: string
    feature1Bullet3: string
    feature1Bullet4: string
    feature1Bullet5: string
    feature2Title: string
    feature2Desc: string
    feature2Bullet1: string
    feature2Bullet2: string
    feature2Bullet3: string
    feature2Bullet4: string
    feature2Bullet5: string
    learnMore: string
  }
  ctaStrip: {
    headline: string
    cta: string
  }
  testimonials: {
    sectionTitle: string
    sectionSubtitle: string
    carouselSubtitle: string
    mark: {
      title: string
      quote: string
    }
    jimmy: {
      title: string
      quote: string
    }
  }
  contact: {
    headline: string
    description: string
    name: string
    email: string
    message: string
    submit: string
  }
  videoSection: {
    headline: string
    body: string
  }
}

export const translations: Record<LangCode, Translation> = {
  sl: {
    nav: {
      lasniSistem: 'Lasni Sistem',
      izpadanjeLas: 'Izpadanje Las',
      hollywoodHybrid: 'Hollywood Hybrid',
      oNas: 'O Nas',
      kontakt: 'Kontakt',
    },
    hero: {
      headline: 'Standard, ki mu zaupa Hollywood.',
      tagline: 'Rešitev, ki jo čutite kot svoje lase.',
      body: 'Ekskluzivna tehnologija vodilne ameriške hiše Hairart.\nŽe 25 let postavljamo merila naravnega videza v Sloveniji.',
      cta: 'Rezervirajte posvet',
    },
    logoBanner: {
      label: 'Zaupajo nam',
    },
    credibility: {
      kicker: 'Ekskluzivni evropski distributer',
      subtitle: 'Že več kot 25 let pomagamo ljudem z najboljšimi rešitvami za izpadanje las na trgu, v sodelovanju z Hairart Inc. ~ vodilnim svetovnim proizvajalcem lasnih sistemov od leta 1977.',
      years: '25',
      yearsLabel: 'let delovanja',
      experience: '40',
      experienceLabel: 'let izkušenj',
      partnersLabel: 'Ameriška partnerja',
    },
    empathy: {
      headline: 'Izpadanje las spremeni vse.',
      body: 'Samozavest, družabno življenje, pogled v ogledalo. Razumemo, kako globoko to vpliva na kvaliteto življenja – zato že 25 let iščemo rešitve, ki resnično delujejo in pomagajo.',
    },
    product: {
      super: 'Inovacija',
      headline: 'Hollywood Lasni sistem®',
      subtitle: 'Najsodobnejša alternativa presajanju las, ki v Slovenijo prihaja iz ZDA in spreminja življenje osebam, ki trpijo zaradi izpadanja las.',
      introText: 'Ni niti kirurški poseg niti lasulja. Gre za prozorno mikromrežico, izdelano po meri posameznika v Švici ali Nemčiji.',
      feature1Title: 'Naj bo izpadanje las preteklost',
      feature1Desc: 'Prozorna mikromrežica z ročno pritrjenimi lasmi – eden po eden, s patentiranimi vozliči. Rezultat je naravna gostota, ki je lasulje ne dosežejo.',
      feature1Bullet1: 'Do 8x daljša doba trajanja od najboljših lasulj',
      feature1Bullet2: 'Ob pravilni negi do štiri leta ali več brezskrbne uporabe',
      feature1Bullet3: 'Patentirani vozliči za naravno gostoto las',
      feature1Bullet4: 'Mikromrežica izdelana v Švici ali Nemčiji in po meri oblikovana v Hollywoodu.',
      feature1Bullet5: 'Ni kirurški poseg – brez tveganj in okrevanja',
      feature2Title: 'Edinstvena tehnologija nošenja',
      feature2Desc: 'Nosite ga 24/7, do tri tedne brez snemanja. Mrežna osnova omogoča popolno dihanje kože – brez znojenja, srbenja ali izpuščajev.',
      feature2Bullet1: 'Nosite 24/7, do tri tedne brez snemanja',
      feature2Bullet2: 'Neomejen šport: plavanje, jadranje in potapljanje',
      feature2Bullet3: 'Videti in občutiti kot 100% vaši naravni lasje',
      feature2Bullet4: 'Priporočajo ga dermatologi in estetski kirurgi',
      feature2Bullet5: 'Vodoodporna pritrditev z medicinskimi trakovi',
      learnMore: 'Več o sistemu',
    },
    ctaStrip: {
      headline: 'Pripravljeni na spremembo?',
      cta: 'Rezervirajte strokoven posvet',
    },
    testimonials: {
      sectionTitle: 'Zaupajo nam najboljši',
      sectionSubtitle: 'Svetovno priznani stilisti o naših izdelkih',
      carouselSubtitle: 'Mnenja strank pri nas in po svetu',
      mark: {
        title: 'Hollywoodski frizer & stilist',
        quote: 'Hairart lasni sistemi so najboljši, kar sem jih kdaj uporabil. Kakovost mrežice in las je izjemna – moje stranke iz sveta mode in filma ne sprejmejo nič manj.',
      },
      jimmy: {
        title: 'Slavnostni frizer & stilist',
        quote: 'Ko delam z najboljšimi na svetu, potrebujem izdelke, ki so brezhibni. Hairart lasni sistemi so moja prva izbira – nevidni, naravni in popolnoma zanesljivi.',
      },
    },
    contact: {
      headline: 'Stopite v stik z nami',
      description: 'Zaupajte nam vaše želje in skupaj bomo poiskali najboljšo rešitev za vas.',
      name: 'Ime in priimek',
      email: 'Email naslov',
      message: 'Sporočilo',
      submit: 'Pošljite sporočilo',
    },
    videoSection: {
      headline: 'Lasje, ki vam vrnejo samozavest.',
      body: 'Preverite neverjetne transformacije in odkrijte, kako lahko Lasni Sistem® spremeni vaš vsakdan z naravnim izgledom.',
    },
  },

  en: {
    nav: {
      lasniSistem: 'Hair System',
      izpadanjeLas: 'Hair Loss',
      hollywoodHybrid: 'Hollywood Hybrid',
      oNas: 'About Us',
      kontakt: 'Contact',
    },
    hero: {
      headline: 'The Standard Trusted by Hollywood.',
      tagline: 'A solution you feel as your own hair.',
      body: 'Exclusive European franchise of the American HairArt hair system.\n25 years of setting the benchmark for natural appearance.',
      cta: 'Book a discreet consultation',
    },
    logoBanner: {
      label: 'As seen on',
    },
    credibility: {
      kicker: 'Exclusive European distributor',
      subtitle: 'For 25 years, providing the best hair loss solutions available globally.',
      years: '25',
      yearsLabel: 'years of operation',
      experience: '40',
      experienceLabel: 'years combined experience',
      partnersLabel: 'Main partners',
    },
    empathy: {
      headline: 'Hair loss changes everything.',
      body: 'Confidence, social life, the way you see yourself. We understand how deeply it affects you \u2013 that\'s why we\'ve spent 25 years finding solutions that truly work.',
    },
    product: {
      super: 'Innovation',
      headline: 'Hollywood Hair System\u00ae',
      subtitle: 'The state-of-the-art alternative to hair transplants, coming to Europe from the US.',
      introText: 'Neither surgery nor a wig. A transparent micro-mesh custom-made in Switzerland or Germany.',
      feature1Title: 'Make hair loss a thing of the past',
      feature1Desc: 'A transparent micro-mesh with hair attached one by one using patented knots. The result is natural density that no wig can match.',
      feature1Bullet1: 'Up to 8x longer lifespan than premium wigs',
      feature1Bullet2: 'With proper care, lasts four years or more',
      feature1Bullet3: 'Patented knots for natural density',
      feature1Bullet4: 'Custom-made in Switzerland or Germany',
      feature1Bullet5: 'Non-surgical \u2013 no risks, no recovery time',
      feature2Title: 'Unique wearing technology',
      feature2Desc: 'Wear it 24/7 for up to three weeks straight. The mesh base lets your scalp breathe \u2013 no sweat, no itching, no irritation.',
      feature2Bullet1: 'Wear 24/7, up to 3 weeks without removal',
      feature2Bullet2: 'Unlimited sports: swimming, sailing, diving',
      feature2Bullet3: 'Looks and feels like your 100% natural hair',
      feature2Bullet4: 'Recommended by dermatologists and surgeons',
      feature2Bullet5: 'Waterproof medical-grade adhesive tapes',
      learnMore: 'Learn More',
    },
    ctaStrip: {
      headline: 'Ready for the change?',
      cta: 'Book a professional consultation',
    },
    testimonials: {
      sectionTitle: 'Trusted by the Best',
      sectionSubtitle: 'Leading stylists about our products',
      carouselSubtitle: 'Client testimonials locally and worldwide',
      mark: {
        title: 'Hollywood Hair Stylist',
        quote: 'Hairart hair systems are the best I\'ve ever used. The quality of the mesh and hair is exceptional – my clients in fashion and film accept nothing less.',
      },
      jimmy: {
        title: 'Celebrity Stylist',
        quote: 'When working with the world\'s best, I need flawless products. Hairart systems are my first choice – invisible, natural, and completely reliable.',
      },
    },
    contact: {
      headline: 'Get in Touch',
      description: 'Tell us your wishes and together we will find the perfect solution for you.',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Your Message',
      submit: 'Send Message',
    },
    videoSection: {
      headline: 'Hair that brings back confidence.',
      body: 'Check out incredible transformations and discover how the Hair System® can change your everyday life with a natural look.',
    },
  },

  de: {
    nav: {
      lasniSistem: 'Haarsystem',
      izpadanjeLas: 'Haarausfall',
      hollywoodHybrid: 'Hollywood Hybrid',
      oNas: 'Über uns',
      kontakt: 'Kontakt',
    },
    hero: {
      headline: 'Vom Hollywood vertrauter Standard.',
      tagline: 'Eine Lösung, die sich wie Ihr eigenes Haar anfühlt.',
      body: 'Exklusives europäisches Franchise-Unternehmen für das amerikanische HairArt-Haarsystem.\nSeit 25 Jahren setzen wir den Maßstab für natürliches Aussehen.',
      cta: 'Buchen Sie eine Beratung',
    },
    logoBanner: {
      label: 'Bekannt aus',
    },
    credibility: {
      kicker: 'Exklusiver Distrubutor',
      subtitle: 'Seit 25 Jahren bieten wir die weltweit besten Lösungen für Haarausfall.',
      years: '25',
      yearsLabel: 'Jahre Betrieb',
      experience: '40',
      experienceLabel: 'Jahre Erfahrung',
      partnersLabel: 'Hauptpartner',
    },
    empathy: {
      headline: 'Haarausfall verändert alles.',
      body: 'Selbstvertrauen, soziales Leben, der Blick in den Spiegel. Wir verstehen, wie tief es geht \u2013 deshalb suchen wir seit 25 Jahren nach Lösungen, die wirklich funktionieren.',
    },
    product: {
      super: 'Innovation',
      headline: 'Hollywood Haarsystem\u00ae',
      subtitle: 'Die hochmoderne Alternative zur Haartransplantation aus den USA.',
      introText: 'Weder Operation noch Perücke. Ein durchsichtiges Mikronetz, individuell angefertigt in der Schweiz oder Deutschland.',
      feature1Title: 'Machen Sie Haarausfall zur Vergangenheit',
      feature1Desc: 'Durchsichtiges Mikronetz mit einzeln befestigten Haaren mittels patentierter Knoten. Das Ergebnis ist eine natürliche Dichte, die keine Perücke erreicht.',
      feature1Bullet1: 'Bis zu 8x längere Lebensdauer als Premiumperücken',
      feature1Bullet2: 'Bei richtiger Pflege bis zu 4 Jahre oder mehr',
      feature1Bullet3: 'Patentierte Knoten für natürliche Dichte',
      feature1Bullet4: 'Maßgefertigt in der Schweiz oder Deutschland',
      feature1Bullet5: 'Nicht-chirurgisch \u2013 kein Risiko, keine Erholungszeit',
      feature2Title: 'Einzigartige Trage-Technologie',
      feature2Desc: 'Tragen Sie es 24/7 für bis zu drei Wochen am Stück. Die Netzbasis lässt Ihre Kopfhaut atmen \u2013 kein Schwitzen, kein Jucken.',
      feature2Bullet1: 'Tragen 24/7, bis zu 3 Wochen ohne Abnehmen',
      feature2Bullet2: 'Unbegrenzter Sport: Schwimmen, Segeln, Tauchen',
      feature2Bullet3: 'Sieht aus und fühlt sich an wie Ihr eigenes Haar',
      feature2Bullet4: 'Empfohlen von Dermatologen und Chirurgen',
      feature2Bullet5: 'Wasserfeste medizinische Klebebänder',
      learnMore: 'Mehr erfahren',
    },
    ctaStrip: {
      headline: 'Bereit für die Veränderung?',
      cta: 'Professionelle Beratung buchen',
    },
    testimonials: {
      sectionTitle: 'Den Besten vertrauen',
      sectionSubtitle: 'Führende Stylisten über unsere Produkte',
      carouselSubtitle: 'Kundenrezensionen aus dem In- und Ausland',
      mark: {
        title: 'Hollywood Stylist',
        quote: 'Hairart-Haarsysteme sind die besten, die ich je benutzt habe. Die Qualität ist außergewöhnlich.',
      },
      jimmy: {
        title: 'Promi-Stylist',
        quote: 'Hairart-Systeme sind meine erste Wahl – unsichtbar, natürlich und absolut zuverlässig.',
      },
    },
    contact: {
      headline: 'Kontaktieren Sie uns',
      description: 'Teilen Sie uns Ihre Wünsche mit und gemeinsam finden wir die perfekte Lösung für Sie.',
      name: 'Vollständiger Name',
      email: 'E-Mail',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
    },
    videoSection: {
      headline: 'Haare, die Ihr Selbstvertrauen zurückbringen.',
      body: 'Sehen Sie unvorstellbare Transformationen und entdecken Sie, wie das Haarsystem® Ihren Alltag verändern kann.',
    },
  },

  ru: {
    nav: {
      lasniSistem: 'Система волос',
      izpadanjeLas: 'Выпадение волос',
      hollywoodHybrid: 'Голливуд Гибрид',
      oNas: 'О нас',
      kontakt: 'Контакты',
    },
    hero: {
      headline: 'Стандарт, которому доверяет Голливуд.',
      tagline: 'Решение, которое ощущается как ваши собственные волосы.',
      body: 'Эксклюзивная европейская франшиза американской системы HairArt.\n25 лет мы устанавливаем эталон естественного внешнего вида.',
      cta: 'Запишитесь на консультацию',
    },
    logoBanner: {
      label: 'Упомянуты в',
    },
    credibility: {
      kicker: 'Эксклюзивный дистрибьютор',
      subtitle: 'Уже 25 лет мы предоставляем лучшие в мире решения проблемы выпадения волос.',
      years: '25',
      yearsLabel: 'Лет работы',
      experience: '40',
      experienceLabel: 'Лет опыта',
      partnersLabel: 'Главные партнеры',
    },
    empathy: {
      headline: 'Выпадение волос меняет всё.',
      body: 'Уверенность в себе, общение, взгляд в зеркало. Мы понимаем, как глубоко это влияет \u2013 поэтому уже 25 лет ищем решения, которые действительно работают.',
    },
    product: {
      super: 'Инновация',
      headline: 'Голливудская Система Волос\u00ae',
      subtitle: 'Современная альтернатива пересадке волос прямиком из США.',
      introText: 'Ни операция, ни парик. Прозрачная микросетка, изготовленная на заказ в Швейцарии или Германии.',
      feature1Title: 'Сделайте выпадение волос прошлым',
      feature1Desc: 'Прозрачная микросетка с волосами, закреплёнными по одному запатентованными узлами. Результат \u2013 естественная густота, недостижимая для париков.',
      feature1Bullet1: 'Срок службы до 8 раз дольше премиум-париков',
      feature1Bullet2: 'При правильном уходе \u2013 до 4 лет и более',
      feature1Bullet3: 'Запатентованные узлы для естественной густоты',
      feature1Bullet4: 'Изготовлена на заказ в Швейцарии или Германии',
      feature1Bullet5: 'Без хирургии \u2013 без рисков и восстановления',
      feature2Title: 'Уникальная технология ношения',
      feature2Desc: 'Носите 24/7 до трёх недель подряд. Сетчатая основа позволяет коже дышать \u2013 без пота, зуда и раздражения.',
      feature2Bullet1: 'Носите 24/7 до 3 недель без снятия',
      feature2Bullet2: 'Любой спорт: плавание, парусный спорт, дайвинг',
      feature2Bullet3: 'Выглядит и ощущается как ваши натуральные волосы',
      feature2Bullet4: 'Рекомендовано дерматологами и хирургами',
      feature2Bullet5: 'Водостойкие медицинские клейкие ленты',
      learnMore: 'Подробнее',
    },
    ctaStrip: {
      headline: 'Готовы к переменам?',
      cta: 'Запишитесь на профессиональную консультацию',
    },
    testimonials: {
      sectionTitle: 'Доверяют лучшие',
      sectionSubtitle: 'Ведущие стилисты о наших продуктах',
      carouselSubtitle: 'Отзывы клиентов у нас и по всему миру',
      mark: {
        title: 'Голливудский стилист',
        quote: 'Системы волос Hairart — лучшие из тех, что я использовал. Качество сетки и волос исключительное.',
      },
      jimmy: {
        title: 'Стилист знаменитостей',
        quote: 'В работе с лучшими мне нужны безупречные материалы. Системы Hairart абсолютно невидимы и естественны.',
      },
    },
    contact: {
      headline: 'Свяжитесь с нами',
      description: 'Расскажите о ваших пожеланиях, и мы найдем для вас идеальное решение.',
      name: 'Полное имя',
      email: 'Email',
      message: 'Ваше сообщение',
      submit: 'Отправить сообщение',
    },
    videoSection: {
      headline: 'Волосы, возвращающие уверенность.',
      body: 'Посмотрите на реальные преображения и узнайте, как Система Волос® меняет жизнь каждый день.',
    },
  },
}
