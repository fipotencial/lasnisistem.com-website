import type { LangCode } from '@/lib/i18n/translations'
import type { Testimonial } from '@/lib/testimonials'

// Nik's exact approved Slovenian email excerpt, including the original poem.
const poem = `Na svetu si, da gledaš sonce,
na svetu si, da greš za soncem,
na svetu si, da sam si sonce
in da s sveta odganjaš sence.
${'\u00a0'.repeat(28)}~Tone Pavček~`
export const danicaTestimonials: Record<LangCode, Testimonial & { excerpt: string }> = {
  sl: {
    id: 'danica',
    name: 'Danica Prnaver',
    source: 'email',
    excerpt: 'Sem zelo srečna Danica Prnaver, ki že 4 leta in pol z največjim veseljem nosim lasni sistem.',
    quote: `Spoštovana gospa Špela!

Sem zelo srečna Danica Prnaver, ki že 4 leta in pol z največjim veseljem nosim lasni sistem. [...] bi rada prišla do vas, ko sta tam obe - gospa frizerka, ki to baje uredi (tako sva se pogovarjali tistega lepega 4. junija 2022), in seveda vi, spoštovani, saj bi rada naročila še enega, novega. Lepo vas prosim za termin in vas neskončno lepo pozdravljam, Danica Prnaver

${poem}

Lep pozdrav in vse dobro, Danica Prnaver`,
  },
  hr: {
    id: 'danica',
    name: 'Danica Prnaver',
    source: 'email',
    excerpt: 'Ja sam vrlo sretna Danica Prnaver, koja već četiri i pol godine s najvećim veseljem nosi sustav za kosu.',
    quote: `Poštovana gospođo Špela!

Ja sam vrlo sretna Danica Prnaver, koja već četiri i pol godine s najvećim veseljem nosi sustav za kosu. [...] htjela bih doći kad ste obje tamo - gospođa frizerka, koja to navodno može urediti (tako smo razgovarale onog lijepog 4. lipnja 2022.), i naravno vi, poštovana, jer bih htjela naručiti još jedan, novi. Lijepo vas molim za termin i šaljem vam najsrdačnije pozdrave, Danica Prnaver

${poem}

Lijep pozdrav i sve najbolje, Danica Prnaver`,
  },
  en: {
    id: 'danica',
    name: 'Danica Prnaver',
    source: 'email',
    excerpt: 'I am a very happy Danica Prnaver, and I have been wearing a hair system with the greatest joy for four and a half years.',
    quote: `Dear Mrs Špela,

I am a very happy Danica Prnaver, and I have been wearing a hair system with the greatest joy for four and a half years. [...] I would like to visit when both of you are there - the hairdresser, who can apparently take care of it (as we discussed on that lovely 4 June 2022), and of course you, as I would also like to order another, new one. Please could you arrange an appointment for me? With my warmest regards, Danica Prnaver

${poem}

Kind regards and all the best, Danica Prnaver`,
  },
  de: {
    id: 'danica',
    name: 'Danica Prnaver',
    source: 'email',
    excerpt: 'Ich bin eine sehr glückliche Danica Prnaver und trage seit viereinhalb Jahren mit größter Freude ein Haarsystem.',
    quote: `Sehr geehrte Frau Špela!

Ich bin eine sehr glückliche Danica Prnaver und trage seit viereinhalb Jahren mit größter Freude ein Haarsystem. [...] ich würde Sie gerne besuchen, wenn Sie beide da sind - die Friseurin, die das offenbar in Ordnung bringen kann (so hatten wir an jenem schönen 4. Juni 2022 darüber gesprochen), und natürlich Sie, denn ich würde gerne noch ein neues System bestellen. Ich bitte Sie herzlich um einen Termin und sende Ihnen meine allerbesten Grüße, Danica Prnaver

${poem}

Herzliche Grüße und alles Gute, Danica Prnaver`,
  },
  ru: {
    id: 'danica',
    name: 'Danica Prnaver',
    source: 'email',
    excerpt: 'Я очень счастливая Даница Прнавер, и уже четыре с половиной года с огромной радостью ношу систему волос.',
    quote: `Уважаемая госпожа Шпела!

Я очень счастливая Даница Прнавер, и уже четыре с половиной года с огромной радостью ношу систему волос. [...] я хотела бы приехать, когда вы обе будете на месте - парикмахер, которая, как мне сказали, может всё уладить (так мы обсуждали в тот прекрасный день, 4 июня 2022 года), и, конечно, вы, поскольку я хотела бы заказать ещё одну, новую систему. Очень прошу назначить мне время приёма и передаю вам самые тёплые пожелания, Даница Прнавер

${poem}

С наилучшими пожеланиями и всего доброго, Даница Прнавер`,
  },
}
