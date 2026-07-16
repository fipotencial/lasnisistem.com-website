const productDescriptions: Record<string, string> = {
  sl: 'Najsodobnejša alternativa presajanju las – prozorna mikromrežica, narejena po meri, z ročno pritrjenimi naravnimi lasmi (virgin hair). Nosi se 24/7, zdrži do 4 leta, pritrjena z medicinsko testiranimi trakovi.',
  en: 'The most advanced alternative to hair transplants – a transparent micro-mesh, custom-made, with hand-attached natural virgin hair. Wear 24/7, lasts up to 4 years, secured with medically tested adhesive tapes.',
  de: 'Die modernste Alternative zu Haartransplantationen – ein transparentes Mikronetz, individuell angefertigt, mit handgefertigten Naturhaaren (Virgin Hair). 24/7 tragbar, hält bis zu 4 Jahre, mit medizinisch geprüften Klebestreifen befestigt.',
  ru: 'Самая современная альтернатива пересадке волос – прозрачная микросетка, изготовленная на заказ, с вручную прикреплёнными натуральными волосами. Носится 24/7, служит до 4 лет, крепится медицинскими лентами.',
}

export default function ProductSchema({ lang }: { lang: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Hollywood Lasni Sistem® / Hollywood Hair System®',
    alternateName: ['HairArt Hair System', 'Lasni Sistem®'],
    brand: {
      '@type': 'Brand',
      name: 'Lasni Sistem®',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'HairArt Inc.',
    },
    seller: {
      '@id': 'https://www.lasnisistem.com/#organization',
    },
    description: productDescriptions[lang] ?? productDescriptions.sl,
    image: 'https://www.lasnisistem.com/images/hair-system-graphics.webp',
    url: `https://www.lasnisistem.com/${lang}`,
    offers: {
      '@type': 'Offer',
      price: '935',
      priceCurrency: 'EUR',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: `https://www.lasnisistem.com/${lang}`,
      seller: { '@id': 'https://www.lasnisistem.com/#organization' },
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Warranty', value: '6 months' },
      { '@type': 'PropertyValue', name: 'Lifespan', value: 'Up to 4 years' },
      { '@type': 'PropertyValue', name: 'Material', value: 'Virgin European Hair' },
      { '@type': 'PropertyValue', name: 'Base', value: 'Custom micro-mesh (Switzerland / Germany)' },
      { '@type': 'PropertyValue', name: 'Attachment', value: 'Medical-grade adhesive tapes' },
      { '@type': 'PropertyValue', name: 'Wear', value: '24/7 including swimming and sports' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
