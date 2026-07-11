export type FaqItem = {
  question: string
  answer: string
}

/**
 * FAQ content for the /plesavost pillar page. Single source for both the
 * visible FAQ section (BaldnessPageContent) and the FAQPage JSON-LD, so the
 * two can never drift apart (a Google requirement for FAQ rich results).
 */
export const plesavostFaq: Record<string, FaqItem[]> = {
  sl: [
    {
      question: 'Ali je plešavost dedna?',
      answer:
        'Da, najpogostejša oblika plešavosti – androgenetska alopecija – je v veliki meri dedna. Podeduje se povečana občutljivost lasnih mešičkov na hormon DHT (dihidrotestosteron), ki postopoma krajša rastno fazo las. Dedna nagnjenost se lahko prenaša tako po materini kot po očetovi strani.',
    },
    {
      question: 'Ali se plešavost da ustaviti ali pozdraviti?',
      answer:
        'Zdravili minoksidil in finasterid lahko pri delu ljudi upočasnita ali začasno zaustavita izpadanje las, vendar delujeta le, dokler ju uporabljate. Kjer so lasni mešički že propadli, lasje ne zrastejo nazaj. Pri napredovali plešavosti so realne rešitve presaditev las, lasni sistem ali lasulja.',
    },
    {
      question: 'Kdaj se začne moška plešavost?',
      answer:
        'Moška plešavost se lahko začne že kmalu po 18. letu, najpogosteje z umikanjem lasne linije na čelu in redčenjem na temenu. Do 50. leta starosti se z opazno plešavostjo sooča približno polovica moških.',
    },
    {
      question: 'Kaj je najboljša rešitev pri napredovali plešavosti?',
      answer:
        'Pri napredovali plešavosti (višje stopnje po Norwood-Hamiltonovi lestvici) presaditev las pogosto ni več mogoča, ker donorsko območje ne zadošča. Takrat je lasni sistem najboljša neinvazivna rešitev – brez operacije zagotovi polne, naravno izgledajoče lase v nekaj tednih.',
    },
    {
      question: 'Ali plešavost prizadene tudi ženske?',
      answer:
        'Da. Do menopavze se z opaznim redčenjem las sooči približno 40 % žensk. Ženska plešavost običajno poteka difuzno – lasje se enakomerno redčijo po vsem temenu (Ludwigova lestvica), zato je pogosto dolgo neopažena. Rešitve vključujejo lasne vložke, hibridne sisteme in lasulje iz naravnih las.',
    },
  ],
  en: [
    {
      question: 'Is baldness hereditary?',
      answer:
        'Yes, the most common form of baldness – androgenetic alopecia – is largely hereditary. What is inherited is an increased sensitivity of hair follicles to the hormone DHT, which progressively shortens the hair growth phase. The predisposition can be passed down from either parent.',
    },
    {
      question: 'Can baldness be stopped or cured?',
      answer:
        'Minoxidil and finasteride can slow down or temporarily halt hair loss for some people, but they only work while you keep using them. Where hair follicles have already died, hair does not grow back. For advanced baldness the realistic solutions are a hair transplant, a hair system or a wig.',
    },
    {
      question: 'When does male pattern baldness start?',
      answer:
        'Male pattern baldness can begin soon after the age of 18, most often with a receding hairline and thinning at the crown. By the age of 50, roughly half of all men experience noticeable baldness.',
    },
    {
      question: 'What is the best solution for advanced baldness?',
      answer:
        'In advanced baldness (higher Norwood-Hamilton stages) a hair transplant is often no longer possible because the donor area is insufficient. A hair system is then the best non-invasive solution – it delivers full, natural-looking hair within weeks, without surgery.',
    },
    {
      question: 'Does baldness affect women too?',
      answer:
        'Yes. By menopause roughly 40% of women experience noticeable hair thinning. Female pattern hair loss is usually diffuse – hair thins evenly across the crown (Ludwig scale). Solutions include hair toppers, hybrid systems and natural-hair wigs.',
    },
  ],
  de: [
    {
      question: 'Ist Kahlheit erblich?',
      answer:
        'Ja, die häufigste Form – die androgenetische Alopezie – ist weitgehend erblich. Vererbt wird eine erhöhte Empfindlichkeit der Haarfollikel gegenüber dem Hormon DHT, das die Wachstumsphase der Haare zunehmend verkürzt. Die Veranlagung kann von beiden Elternteilen stammen.',
    },
    {
      question: 'Kann Haarausfall gestoppt oder geheilt werden?',
      answer:
        'Minoxidil und Finasterid können den Haarausfall bei manchen Menschen verlangsamen oder vorübergehend stoppen, wirken aber nur solange sie angewendet werden. Wo Haarfollikel bereits abgestorben sind, wachsen keine Haare nach. Bei fortgeschrittener Kahlheit sind Haartransplantation, Haarsystem oder Perücke die realistischen Lösungen.',
    },
    {
      question: 'Wann beginnt die Glatzenbildung beim Mann?',
      answer:
        'Männlicher Haarausfall kann schon kurz nach dem 18. Lebensjahr beginnen, meist mit Geheimratsecken und dünner werdendem Haar am Oberkopf. Bis zum 50. Lebensjahr ist etwa die Hälfte aller Männer sichtbar betroffen.',
    },
    {
      question: 'Was ist die beste Lösung bei fortgeschrittener Kahlheit?',
      answer:
        'Bei fortgeschrittener Kahlheit (höhere Norwood-Hamilton-Stufen) ist eine Haartransplantation oft nicht mehr möglich, weil das Spenderareal nicht ausreicht. Ein Haarsystem ist dann die beste nicht-invasive Lösung – volles, natürlich aussehendes Haar in wenigen Wochen, ohne Operation.',
    },
    {
      question: 'Sind auch Frauen von Kahlheit betroffen?',
      answer:
        'Ja. Bis zur Menopause erleben rund 40 % der Frauen eine sichtbare Haarausdünnung. Weiblicher Haarausfall verläuft meist diffus – das Haar wird gleichmäßig am Oberkopf dünner (Ludwig-Skala). Lösungen sind Haarteile, Hybridsysteme und Echthaarperücken.',
    },
  ],
  ru: [
    {
      question: 'Передаётся ли облысение по наследству?',
      answer:
        'Да, самая распространённая форма – андрогенетическая алопеция – в значительной мере наследственная. Наследуется повышенная чувствительность волосяных фолликулов к гормону ДГТ, который постепенно сокращает фазу роста волос. Предрасположенность может передаваться как по материнской, так и по отцовской линии.',
    },
    {
      question: 'Можно ли остановить или вылечить облысение?',
      answer:
        'Миноксидил и финастерид могут замедлить или временно остановить выпадение волос, но действуют только пока вы их применяете. Там, где фолликулы уже погибли, волосы не отрастают. При запущенном облысении реальные решения – пересадка волос, система волос или парик.',
    },
    {
      question: 'Когда начинается мужское облысение?',
      answer:
        'Мужское облысение может начаться вскоре после 18 лет, чаще всего с отступающей линии роста волос и поредения на макушке. К 50 годам с заметным облысением сталкивается примерно половина мужчин.',
    },
    {
      question: 'Какое решение лучше при запущенном облысении?',
      answer:
        'При запущенном облысении (высокие стадии по шкале Норвуда-Гамильтона) пересадка волос часто уже невозможна из-за недостатка донорской зоны. Тогда система волос – лучшее неинвазивное решение: полные, естественно выглядящие волосы за несколько недель, без операции.',
    },
    {
      question: 'Страдают ли женщины от облысения?',
      answer:
        'Да. К менопаузе с заметным поредением волос сталкивается около 40 % женщин. Женское облысение обычно диффузное – волосы равномерно редеют по всей макушке (шкала Людвига). Решения: накладки, гибридные системы и парики из натуральных волос.',
    },
  ],
}
