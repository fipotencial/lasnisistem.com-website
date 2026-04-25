const descriptionByLang: Record<string, string> = {
  sl: 'Ekskluzivna rešitev za izpadanje las v Sloveniji. Že 25 let zagotavljamo diskretne in tehnološko najnaprednejše rešitve za izpadanje las – Lasni Sistem® iz Hollywooda.',
  en: 'Exclusive hair loss solution in Slovenia. 25 years of providing discreet and technologically advanced solutions for hair loss – the Hollywood Hair System®.',
  de: 'Exklusive Lösung für Haarausfall in Slowenien. Seit 25 Jahren bieten wir diskrete und technologisch fortschrittliche Lösungen – das Hollywood Haarsystem®.',
  ru: 'Эксклюзивное решение от выпадения волос в Словении. 25 лет дискретных и технологически продвинутых решений – Hollywood Hair System®.',
}

export default function OrganizationSchema({ lang }: { lang: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'MedicalBusiness'],
        '@id': 'https://www.lasnisistem.com/#organization',
        name: 'Fi Potencial d.o.o.',
        alternateName: ['Lasni Sistem®', 'Hollywood Lasni Sistem', 'Hollywood Hair System®'],
        url: 'https://www.lasnisistem.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.lasnisistem.com/icon.png',
          width: 512,
          height: 512,
        },
        image: 'https://www.lasnisistem.com/og-image.jpg',
        description: descriptionByLang[lang] ?? descriptionByLang.sl,
        telephone: '+38631444868',
        email: 'info@lasnisistem.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Komenskega 1',
          addressLocality: 'Kranj',
          postalCode: '4000',
          addressCountry: 'SI',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.2397,
          longitude: 14.3556,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          description: 'By appointment only / Samo po predhodnem dogovoru',
        },
        priceRange: '€€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Credit Card',
        areaServed: {
          '@type': 'Country',
          name: 'Slovenia',
        },
        sameAs: ['https://www.facebook.com/Lasnisistem/'],
        inLanguage: lang,
        foundingDate: '1999',
        knowsAbout: [
          'Alopecia Areata',
          'Hair Loss Solutions',
          'Hair Systems',
          'Alopecia Totalis',
          'Alopecia Universalis',
          'Androgenic Alopecia',
          'Female Pattern Hair Loss',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.lasnisistem.com/#website',
        url: 'https://www.lasnisistem.com',
        name: 'Lasni Sistem®',
        publisher: { '@id': 'https://www.lasnisistem.com/#organization' },
        inLanguage: ['sl-SI', 'en-US', 'de-DE', 'ru-RU'],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
