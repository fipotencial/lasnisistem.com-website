'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { LangCode } from '@/lib/i18n/translations'
import { plesavostFaq } from '@/lib/plesavostFaq'

/* ─── Translations ─── */

type Solution = {
  title: string
  desc: string
  href?: string
  linkLabel?: string
}

const t = {
  sl: {
    heroSuperTitle: 'Izpadanje las',
    heroTitle: 'Plešavost: vzroki, vrste in rešitve, ki delujejo',
    heroSubtitle:
      'Plešavost in redčenje las sta pogosta pri moških in ženskah. Razumevanje vzroka je prvi korak do realne izbire zdravljenja ali estetske rešitve.',
    introTitle: 'Kaj je plešavost in kako pogosta je?',
    introP1:
      'Alopecija je medicinski izraz za izgubo las in vključuje več različnih stanj. Nekatera povzročijo začasno čezmerno izpadanje, druga postopno redčenje, pri brazgotinskih oblikah pa je izguba lahko trajna. Običajno dnevno izpade približno 50 do 100 las; širjenje preče, umikanje lasne linije ali zaplate brez las pa so znaki, ki jih je smiselno raziskati.',
    introP2:
      'Najpogostejša oblika je androgenetska alopecija oziroma dedno vzorčno redčenje las. Lahko se začne že v mladosti in s starostjo napreduje. Plešavost ni razlog za sram, vendar je pravilna diagnoza pomembna, ker se zdravljenje androgenetske alopecije razlikuje od zdravljenja telogenega efluvija, alopecije areate ali bolezni lasišča.',
    maleTitle: 'Moška plešavost (androgenetska alopecija)',
    maleP1:
      'Pri moški androgenetski alopeciji imajo lasni mešički dedno povečano občutljivost na hormon DHT (dihidrotestosteron). Rastna faza se krajša, lasje pa postopoma postajajo tanjši in krajši. Značilen vzorec se začne z umikanjem lasne linije na čelu ("zalizci"), nadaljuje z redčenjem na temenu in lahko napreduje do obsežne plešavosti zgornjega dela glave.',
    maleP2:
      'Napredovanje se pogosto opisuje z Norwood-Hamiltonovo lestvico s sedmimi stopnjami. Lestvica pomaga opisati vzorec, ne pove pa sama, katera rešitev je primerna. Na izbiro vplivajo hitrost napredovanja, starost, zdravje, stanje donorskega območja in pričakovanja.',
    norwoodAlt: 'Norwood-Hamiltonova lestvica moške plešavosti – 7 stopenj',
    norwoodCaption: 'Norwood-Hamiltonova lestvica: 7 stopenj napredovanja moške plešavosti',
    femaleTitle: 'Ženska plešavost',
    femaleP1:
      'Ženska plešavost poteka drugače kot moška. Lasna linija običajno ostane, lasje pa se difuzno – enakomerno – redčijo po vsem temenu. Napredovanje se meri z Ludwigovo lestvico s tremi stopnjami: od komaj opaznega redčenja preko vse širše preče do vidnega lasišča.',
    femaleP2:
      'Ker je redčenje postopno in razpršeno, ga je mogoče dolgo spregledati. Podoben videz lahko povzročijo dedna nagnjenost, telogeni efluvij, pomanjkanje železa, bolezen ščitnice ali hormonske spremembe, zato je pregled pomemben. Za estetsko dodajanje gostote so na voljo lasni vložki, hibridni sistemi in lasulje iz naravnih las.',
    causesTitle: 'Najpogostejši vzroki plešavosti',
    causes: [
      {
        title: 'Genetika in hormoni',
        desc: 'Dedna občutljivost lasnih mešičkov je glavni dejavnik androgenetske alopecije pri moških in ženskah. Nagnjenost se lahko podeduje po materini ali očetovi strani.',
      },
      {
        title: 'Stres in travmatični dogodki',
        desc: 'Močan telesni ali čustveni stres lahko sproži telogeni efluvij – povečano izpadanje nekaj mesecev po dogodku. Pogosto se izboljša, ko se vzrok odpravi, okrevanje pa traja več mesecev.',
      },
      {
        title: 'Avtoimunski vzroki (alopecija areata)',
        desc: 'Imunski sistem napade lasne mešičke, zato lasje pogosto izpadajo v okroglih zaplatah. Pri nekaterih ljudeh se izguba razširi na celotno lasišče ali telo.',
      },
      {
        title: 'Kemoterapija in zdravila',
        desc: 'Kemoterapija in nekatera zdravila lahko povzročijo izpadanje. Zdravila ne prekinite sami; o povezavi, poteku in morebitni zamenjavi se posvetujte z zdravnikom.',
      },
      {
        title: 'Pomanjkanje železa in hranil',
        desc: 'Pomanjkanje železa ali beljakovin je lahko povezano z izpadanjem las. Preiskave in dodatki naj bodo usmerjeni glede na simptome ter presojo zdravnika, ne zgolj na podlagi spletnega testa.',
      },
      {
        title: 'Bolezni ščitnice',
        desc: 'Tako povečano kot zmanjšano delovanje ščitnice se pogosto pokaže prav na laseh – ti postanejo tanki, krhki in redki.',
      },
    ],
    solutionsTitle: 'Rešitve za plešavost – primerjava',
    solutionsIntro:
      'Nobena rešitev ni najboljša za vsakogar – prava izbira je odvisna od stopnje plešavosti, zdravja, proračuna in pričakovanj. Poštena primerjava možnosti:',
    solutions: [
      {
        title: 'Zdravila (minoksidil, finasterid)',
        desc: 'Pri androgenetski alopeciji lahko pri delu ljudi upočasnijo izpadanje in spodbudijo nekaj ponovne rasti. Učinek praviloma zahteva nadaljnjo uporabo, primernost in tveganja pa je treba preveriti z zdravnikom ali farmacevtom.',
      },
      {
        title: 'Presaditev las',
        desc: 'Kirurška preselitev lastnih mešičkov. Zahteva ustrezno diagnozo, stabilen načrt za nadaljnje izpadanje in zadostno donorsko območje. Primernost oceni kirurg za presaditev las.',
      },
      {
        title: 'Lasulja',
        desc: 'Takojšnja rešitev za popolno pokritost, primerna zlasti ob kemoterapiji in obsežni ženski plešavosti. Kakovostna lasulja iz evropskih las izgleda naravno in je udobna.',
        href: '/lasulje',
        linkLabel: 'Več o lasuljah →',
      },
      {
        title: 'Hibridni sistem',
        desc: 'Kombinacija tehnologije lasnega sistema in lasulje iz evropskih las – naravnejši videz od klasične lasulje ob dostopnejši ceni, na zalogi in hitro dobavljiv.',
        href: '/hibridni-sistemi',
        linkLabel: 'Več o hibridnih sistemih →',
      },
      {
        title: 'Hollywood Lasni Sistem®',
        desc: 'Po meri izdelana prozorna mikromrežica z ročno vozlanimi naravnimi lasmi. Brez operacije prekrije delno ali obsežno plešavost. Omogoča stabilno pritrjevanje in ima 6-mesečno garancijo.',
        href: '',
        linkLabel: 'Spoznajte Lasni sistem® →',
      },
    ],
    faqTitle: 'Pogosta vprašanja o plešavosti',
    ctaTitle: 'Niste prepričani, katera rešitev je prava za vas?',
    ctaText:
      'Na brezplačnem in diskretnem posvetu v našem svetovalnem studiu v Kranju skupaj pregledamo vaše lasišče in možnosti – brez obveznosti.',
    ctaButton: 'Rezervirajte brezplačen posvet',
  },
  en: {
    heroSuperTitle: 'Hair Loss',
    heroTitle: 'Baldness: causes, types and solutions that work',
    heroSubtitle:
      'Baldness affects half of all men and nearly half of all women. Understanding the causes is the first step – choosing the right solution is the one that changes everything.',
    introTitle: 'What is baldness and how common is it?',
    introP1:
      'Baldness (medically: alopecia) is a condition in which hair is lost permanently and does not grow back. What separates it from everyday shedding – everyone loses 50 to 100 hairs a day – is permanence: with baldness, hair follicles gradually weaken, shrink and finally die.',
    introP2:
      'The most common form is androgenetic alopecia, which affects roughly half of all men by age 50, while around 40% of women experience noticeable thinning by menopause. Baldness is neither rare nor a reason for shame – but it is a reason to know your options.',
    maleTitle: 'Male pattern baldness (androgenetic alopecia)',
    maleP1:
      'In men, baldness is caused by an increased sensitivity of hair follicles to the hormone DHT. It progressively shortens the hair growth phase: hairs become thinner and shorter until the follicle dies. The typical pattern starts with a receding hairline, continues with crown thinning and can progress to complete baldness of the top of the head.',
    maleP2:
      'The progression is measured on the seven-stage Norwood-Hamilton scale. The higher the stage, the smaller the chance of success with medication or transplant – which is why the solution should match your stage, not advertising promises.',
    norwoodAlt: 'Norwood-Hamilton scale of male pattern baldness – 7 stages',
    norwoodCaption: 'The Norwood-Hamilton scale: 7 stages of male pattern baldness',
    femaleTitle: 'Female pattern baldness',
    femaleP1:
      'Female baldness progresses differently. The hairline is usually preserved while hair thins diffusely – evenly – across the crown. Progression is measured on the three-stage Ludwig scale: from barely noticeable thinning to a widening part to visible scalp.',
    femaleP2:
      'Because the thinning is gradual and diffuse, women often only notice it after a third of their hair is gone. Triggers include hormonal changes (pregnancy, menopause, thyroid), stress, iron deficiency and genetics. Solutions that add density without surgery are especially suitable: hair toppers, hybrid systems and natural-hair wigs.',
    causesTitle: 'The most common causes of baldness',
    causes: [
      {
        title: 'Genetics and hormones',
        desc: 'Inherited DHT sensitivity accounts for over 90% of male baldness and much of female baldness. It can be inherited from either parent.',
      },
      {
        title: 'Stress and traumatic events',
        desc: 'Severe stress can trigger telogen effluvium – accelerated shedding a few months after the event. Usually temporary, though chronic stress can entrench thinning.',
      },
      {
        title: 'Autoimmune causes (alopecia areata)',
        desc: 'The immune system attacks its own hair follicles, causing hair to fall out in round patches. It can progress to complete loss of scalp or body hair.',
      },
      {
        title: 'Chemotherapy and medication',
        desc: 'Cytostatics, anticoagulants, some antidepressants and blood-pressure drugs can cause extensive hair loss – hair mostly grows back after therapy ends.',
      },
      {
        title: 'Iron and nutrient deficiency',
        desc: 'Low iron stores (ferritin), protein, zinc or vitamin D deficiency weaken hair growth. A blood test is a sensible first step for unexplained shedding.',
      },
      {
        title: 'Thyroid conditions',
        desc: 'Both an overactive and an underactive thyroid often show first in the hair – it becomes thin, brittle and sparse.',
      },
    ],
    solutionsTitle: 'Solutions for baldness – an honest comparison',
    solutionsIntro:
      'No solution is best for everyone – the right choice depends on your stage of baldness, health, budget and expectations. An honest comparison:',
    solutions: [
      {
        title: 'Medication (minoxidil, finasteride)',
        desc: 'Works only in early stages and only while you use it. It can slow shedding but rarely restores lost hair. Finasteride can have hormonal side effects.',
      },
      {
        title: 'Hair transplant',
        desc: 'Surgical relocation of your own follicles. Effective at lower stages, but requires a sufficient donor area – often not feasible with advanced baldness. Results take 12–18 months.',
      },
      {
        title: 'Wig',
        desc: 'An immediate solution for full coverage, especially suitable during chemotherapy and extensive female hair loss. A quality European-hair wig looks natural and feels comfortable.',
        href: '/lasulje',
        linkLabel: 'More about wigs →',
      },
      {
        title: 'Hybrid system',
        desc: 'A combination of hair-system technology and a European-hair wig – more natural than a classic wig at a more accessible price, in stock and quickly available.',
        href: '/hibridni-sistemi',
        linkLabel: 'More about hybrid systems →',
      },
      {
        title: 'Hollywood Hair System®',
        desc: 'A custom-made transparent micro-mesh with hand-knotted natural hair. Full, natural hair without surgery – even at the highest stages of baldness when a transplant is no longer possible. Continuous wear, 6-month warranty.',
        href: '',
        linkLabel: 'Discover the Hair System® →',
      },
    ],
    faqTitle: 'Frequently asked questions about baldness',
    ctaTitle: 'Not sure which solution is right for you?',
    ctaText:
      'In a free, discreet consultation at our studio in Kranj we review your scalp and options together – with no obligation.',
    ctaButton: 'Book a free consultation',
  },
  de: {
    heroSuperTitle: 'Haarausfall',
    heroTitle: 'Kahlheit: Ursachen, Formen und Lösungen, die funktionieren',
    heroSubtitle:
      'Kahlheit betrifft die Hälfte aller Männer und fast die Hälfte aller Frauen. Die Ursachen zu verstehen ist der erste Schritt – die richtige Lösung zu wählen der entscheidende.',
    introTitle: 'Was ist Kahlheit und wie häufig ist sie?',
    introP1:
      'Kahlheit (medizinisch: Alopezie) ist ein Zustand, bei dem Haare dauerhaft ausfallen und nicht nachwachsen. Vom alltäglichen Haarverlust – jeder verliert 50 bis 100 Haare pro Tag – unterscheidet sie die Dauerhaftigkeit: Die Haarfollikel schwächen sich ab, schrumpfen und sterben schließlich ab.',
    introP2:
      'Die häufigste Form ist die androgenetische Alopezie, die bis zum 50. Lebensjahr etwa die Hälfte aller Männer betrifft; bis zur Menopause erleben auch rund 40 % der Frauen eine sichtbare Ausdünnung. Kahlheit ist also weder selten noch ein Grund zur Scham – aber ein Grund, seine Möglichkeiten zu kennen.',
    maleTitle: 'Männliche Kahlheit (androgenetische Alopezie)',
    maleP1:
      'Bei Männern wird die Kahlheit durch eine erhöhte Empfindlichkeit der Haarfollikel gegenüber dem Hormon DHT verursacht. Es verkürzt zunehmend die Wachstumsphase: Die Haare werden dünner und kürzer, bis der Follikel abstirbt. Das typische Muster beginnt mit Geheimratsecken, setzt sich mit dünner werdendem Haar am Oberkopf fort und kann bis zur vollständigen Glatze des Oberkopfes fortschreiten.',
    maleP2:
      'Das Fortschreiten wird mit der siebenstufigen Norwood-Hamilton-Skala gemessen. Je höher die Stufe, desto geringer die Erfolgschancen von Medikamenten oder Transplantation – die Lösung sollte daher zu Ihrer Stufe passen, nicht zu Werbeversprechen.',
    norwoodAlt: 'Norwood-Hamilton-Skala der männlichen Kahlheit – 7 Stufen',
    norwoodCaption: 'Die Norwood-Hamilton-Skala: 7 Stufen der männlichen Kahlheit',
    femaleTitle: 'Weibliche Kahlheit',
    femaleP1:
      'Weiblicher Haarausfall verläuft anders. Der Haaransatz bleibt meist erhalten, während sich das Haar diffus – gleichmäßig – am Oberkopf ausdünnt. Gemessen wird mit der dreistufigen Ludwig-Skala: von kaum merklicher Ausdünnung über einen breiter werdenden Scheitel bis zur sichtbaren Kopfhaut.',
    femaleP2:
      'Weil die Ausdünnung schleichend ist, bemerken Frauen sie oft erst, wenn bereits ein Drittel der Haare fehlt. Auslöser sind hormonelle Veränderungen (Schwangerschaft, Menopause, Schilddrüse), Stress, Eisenmangel und Veranlagung. Besonders geeignet sind Lösungen, die ohne Eingriff Dichte hinzufügen: Haarteile, Hybridsysteme und Echthaarperücken.',
    causesTitle: 'Die häufigsten Ursachen der Kahlheit',
    causes: [
      {
        title: 'Genetik und Hormone',
        desc: 'Die vererbte DHT-Empfindlichkeit verursacht über 90 % der männlichen Kahlheit und einen großen Teil der weiblichen. Sie kann von beiden Elternteilen vererbt werden.',
      },
      {
        title: 'Stress und traumatische Ereignisse',
        desc: 'Starker Stress kann ein telogenes Effluvium auslösen – beschleunigten Haarausfall einige Monate nach dem Ereignis. Meist vorübergehend; chronischer Stress kann die Ausdünnung verfestigen.',
      },
      {
        title: 'Autoimmune Ursachen (Alopecia areata)',
        desc: 'Das Immunsystem greift die eigenen Haarfollikel an, die Haare fallen in runden Flecken aus. Kann bis zum vollständigen Verlust der Kopf- oder Körperbehaarung fortschreiten.',
      },
      {
        title: 'Chemotherapie und Medikamente',
        desc: 'Zytostatika, Antikoagulanzien, manche Antidepressiva und Blutdruckmittel können massiven Haarausfall verursachen – nach Therapieende wachsen die Haare meist nach.',
      },
      {
        title: 'Eisen- und Nährstoffmangel',
        desc: 'Niedrige Eisenspeicher (Ferritin), Protein-, Zink- oder Vitamin-D-Mangel schwächen das Haarwachstum. Ein Blutbild ist bei unerklärlichem Haarausfall ein sinnvoller erster Schritt.',
      },
      {
        title: 'Schilddrüsenerkrankungen',
        desc: 'Sowohl Über- als auch Unterfunktion zeigen sich oft zuerst am Haar – es wird dünn, brüchig und licht.',
      },
    ],
    solutionsTitle: 'Lösungen bei Kahlheit – ein ehrlicher Vergleich',
    solutionsIntro:
      'Keine Lösung ist für jeden die beste – die richtige Wahl hängt von Stadium, Gesundheit, Budget und Erwartungen ab. Ein ehrlicher Vergleich:',
    solutions: [
      {
        title: 'Medikamente (Minoxidil, Finasterid)',
        desc: 'Wirken nur in frühen Stadien und nur solange sie angewendet werden. Sie können den Ausfall verlangsamen, verlorenes Haar aber selten zurückbringen. Finasterid kann hormonelle Nebenwirkungen haben.',
      },
      {
        title: 'Haartransplantation',
        desc: 'Chirurgische Verpflanzung eigener Follikel. Wirksam in niedrigen Stadien, erfordert aber ein ausreichendes Spenderareal – bei fortgeschrittener Kahlheit oft nicht machbar. Ergebnis erst nach 12–18 Monaten sichtbar.',
      },
      {
        title: 'Perücke',
        desc: 'Sofortige Lösung für vollständige Abdeckung, besonders geeignet während der Chemotherapie und bei ausgedehntem weiblichem Haarausfall. Eine hochwertige Echthaarperücke sieht natürlich aus.',
        href: '/lasulje',
        linkLabel: 'Mehr über Perücken →',
      },
      {
        title: 'Hybridsystem',
        desc: 'Kombination aus Haarsystem-Technologie und Echthaarperücke – natürlicher als eine klassische Perücke zu einem zugänglicheren Preis, auf Lager und schnell lieferbar.',
        href: '/hibridni-sistemi',
        linkLabel: 'Mehr über Hybridsysteme →',
      },
      {
        title: 'Hollywood Hair System®',
        desc: 'Maßgefertigtes transparentes Mikronetz mit handgeknüpftem Naturhaar. Volles, natürliches Haar ohne Operation – auch bei den höchsten Stadien der Kahlheit, wenn eine Transplantation nicht mehr möglich ist. Durchgehendes Tragen, 6 Monate Garantie.',
        href: '',
        linkLabel: 'Das Haarsystem® entdecken →',
      },
    ],
    faqTitle: 'Häufige Fragen zur Kahlheit',
    ctaTitle: 'Nicht sicher, welche Lösung die richtige für Sie ist?',
    ctaText:
      'In einer kostenlosen, diskreten Beratung in unserem Studio in Kranj besprechen wir gemeinsam Ihre Kopfhaut und Ihre Möglichkeiten – unverbindlich.',
    ctaButton: 'Kostenlose Beratung buchen',
  },
  ru: {
    heroSuperTitle: 'Выпадение волос',
    heroTitle: 'Облысение: причины, виды и решения, которые работают',
    heroSubtitle:
      'Облысение затрагивает половину мужчин и почти половину женщин. Понять причины – первый шаг; выбрать правильное решение – решающий.',
    introTitle: 'Что такое облысение и насколько оно распространено?',
    introP1:
      'Облысение (медицински: алопеция) – это состояние, при котором волосы выпадают навсегда и не отрастают. От обычного выпадения – каждый теряет 50–100 волос в день – его отличает необратимость: фолликулы постепенно слабеют, уменьшаются и погибают.',
    introP2:
      'Самая распространённая форма – андрогенетическая алопеция, которая к 50 годам затрагивает примерно половину мужчин; к менопаузе заметное поредение волос переживают и около 40 % женщин. Облысение – не редкость и не повод для стыда, но повод знать свои возможности.',
    maleTitle: 'Мужское облысение (андрогенетическая алопеция)',
    maleP1:
      'У мужчин облысение вызвано повышенной чувствительностью фолликулов к гормону ДГТ. Он постепенно сокращает фазу роста: волосы становятся тоньше и короче, пока фолликул не погибнет. Типичная картина начинается с отступающей линии роста волос, продолжается поредением на макушке и может дойти до полного облысения верхней части головы.',
    maleP2:
      'Прогрессирование измеряется по семиступенчатой шкале Норвуда-Гамильтона. Чем выше стадия, тем меньше шансов на успех медикаментов или пересадки – поэтому решение должно соответствовать вашей стадии, а не рекламным обещаниям.',
    norwoodAlt: 'Шкала Норвуда-Гамильтона мужского облысения – 7 стадий',
    norwoodCaption: 'Шкала Норвуда-Гамильтона: 7 стадий мужского облысения',
    femaleTitle: 'Женское облысение',
    femaleP1:
      'Женское облысение протекает иначе. Линия роста волос обычно сохраняется, а волосы редеют диффузно – равномерно – по всей макушке. Прогрессирование измеряется по трёхступенчатой шкале Людвига: от едва заметного поредения через расширяющийся пробор до видимой кожи головы.',
    femaleP2:
      'Поскольку поредение постепенное, женщины часто замечают его, когда потеряна уже треть волос. Триггеры – гормональные изменения (беременность, менопауза, щитовидная железа), стресс, дефицит железа и наследственность. Особенно подходят решения, добавляющие густоту без операции: накладки, гибридные системы и парики из натуральных волос.',
    causesTitle: 'Самые частые причины облысения',
    causes: [
      {
        title: 'Генетика и гормоны',
        desc: 'Наследственная чувствительность к ДГТ – причина более 90 % мужского облысения и значительной части женского. Передаётся по обеим линиям.',
      },
      {
        title: 'Стресс и травматические события',
        desc: 'Сильный стресс может вызвать телогеновую алопецию – ускоренное выпадение через несколько месяцев после события. Обычно временное явление.',
      },
      {
        title: 'Аутоиммунные причины (гнёздная алопеция)',
        desc: 'Иммунная система атакует собственные фолликулы, волосы выпадают круглыми очагами. Может прогрессировать до полной потери волос.',
      },
      {
        title: 'Химиотерапия и лекарства',
        desc: 'Цитостатики, антикоагулянты, некоторые антидепрессанты и препараты от давления могут вызвать обширное выпадение – после терапии волосы обычно отрастают.',
      },
      {
        title: 'Дефицит железа и питательных веществ',
        desc: 'Низкий ферритин, недостаток белка, цинка или витамина D ослабляют рост волос. Анализ крови – разумный первый шаг.',
      },
      {
        title: 'Заболевания щитовидной железы',
        desc: 'И гипер-, и гипофункция часто сначала проявляются на волосах – они становятся тонкими, ломкими и редкими.',
      },
    ],
    solutionsTitle: 'Решения при облысении – честное сравнение',
    solutionsIntro:
      'Нет решения, лучшего для всех – правильный выбор зависит от стадии, здоровья, бюджета и ожиданий. Честное сравнение:',
    solutions: [
      {
        title: 'Медикаменты (миноксидил, финастерид)',
        desc: 'Работают только на ранних стадиях и только пока применяются. Могут замедлить выпадение, но редко возвращают утраченные волосы.',
      },
      {
        title: 'Пересадка волос',
        desc: 'Хирургическое перемещение собственных фолликулов. Эффективна на ранних стадиях, но требует достаточной донорской зоны – при запущенном облысении часто невозможна. Результат через 12–18 месяцев.',
      },
      {
        title: 'Парик',
        desc: 'Мгновенное решение для полного покрытия, особенно при химиотерапии и обширном женском облысении. Качественный парик из европейских волос выглядит естественно.',
        href: '/lasulje',
        linkLabel: 'Подробнее о париках →',
      },
      {
        title: 'Гибридная система',
        desc: 'Сочетание технологии системы волос и парика из европейских волос – естественнее классического парика по более доступной цене, в наличии на складе.',
        href: '/hibridni-sistemi',
        linkLabel: 'Подробнее о гибридных системах →',
      },
      {
        title: 'Hollywood Hair System®',
        desc: 'Изготовленная на заказ прозрачная микросетка с завязанными вручную натуральными волосами. Полные, естественные волосы без операции – даже на самых высоких стадиях облысения. Непрерывное ношение, гарантия 6 месяцев.',
        href: '',
        linkLabel: 'Узнать о Системе волос® →',
      },
    ],
    faqTitle: 'Частые вопросы об облысении',
    ctaTitle: 'Не уверены, какое решение подходит именно вам?',
    ctaText:
      'На бесплатной и деликатной консультации в нашей студии в Кране мы вместе оценим ваши волосы и возможности – без обязательств.',
    ctaButton: 'Записаться на бесплатную консультацию',
  },
}

/* ─── Gold Dot ─── */

function GoldDot() {
  return (
    <span style={{
      display: 'inline-block', width: 6, height: 6,
      borderRadius: '50%', background: '#C1A452',
      flexShrink: 0, marginTop: '0.55rem',
    }} />
  )
}

/* ─── Main Component ─── */

export default function BaldnessPageContent({ lang }: { lang: LangCode }) {
  const labels = t[lang] || t.sl
  const faq = plesavostFaq[lang] || plesavostFaq.sl

  const headingFont = 'var(--font-cormorant), Georgia, serif'
  const bodyFont = 'var(--font-inter), system-ui, sans-serif'

  const paragraphStyle: React.CSSProperties = {
    fontFamily: bodyFont,
    fontSize: '1.05rem',
    fontWeight: 300,
    lineHeight: 1.8,
    color: 'rgba(28,25,23,0.65)',
    marginBottom: '1.5rem',
  }

  const h2Style: React.CSSProperties = {
    fontFamily: headingFont,
    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
    fontWeight: 400,
    color: '#1C1917',
    lineHeight: 1.15,
    marginBottom: '2rem',
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        background: 'linear-gradient(180deg, #F5F2ED 0%, #EDE8E0 100%)',
        paddingTop: 'clamp(8rem, 14vw, 12rem)',
        paddingBottom: 'clamp(3rem, 5vw, 5rem)',
      }}>
        <div style={{ width: '88%', maxWidth: 900, margin: '0 auto', textAlign: 'left' }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: bodyFont,
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C1A452',
              display: 'block',
              marginBottom: '1.5rem',
            }}
          >
            {labels.heroSuperTitle}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: headingFont,
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 300,
              color: '#1A1A1A',
              lineHeight: 1.1,
              marginBottom: '1.2rem',
            }}
          >
            {labels.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: bodyFont,
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(28,25,23,0.65)',
              maxWidth: 640,
              margin: 0,
            }}
          >
            {labels.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section style={{ background: '#FEFEFE' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              width: 48, height: 2, borderRadius: 2, marginBottom: '2rem',
              background: 'linear-gradient(90deg, #C1A452, rgba(193,164,82,0.2))',
            }} />
            <h2 style={h2Style}>{labels.introTitle}</h2>
            <p style={paragraphStyle}>{labels.introP1}</p>
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>{labels.introP2}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── MALE BALDNESS + NORWOOD ─── */}
      <section style={{ background: '#F3F0EB' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={h2Style}>{labels.maleTitle}</h2>
            <p style={paragraphStyle}>{labels.maleP1}</p>
            <p style={paragraphStyle}>{labels.maleP2}</p>

            <figure style={{ margin: '2.5rem 0 0' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1024 / 634',
                borderRadius: '1rem',
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '1px solid rgba(193,164,82,0.15)',
                boxShadow: '0 4px 24px rgba(140,120,60,0.08)',
              }}>
                <Image
                  src="/images/7-stages-of-the-norwood-hamilton-scale-1024x634.jpeg"
                  alt={labels.norwoodAlt}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 90vw, 900px"
                />
              </div>
              <figcaption style={{
                fontFamily: bodyFont,
                fontSize: '0.82rem',
                fontWeight: 300,
                color: '#8B8178',
                textAlign: 'center',
                marginTop: '0.8rem',
              }}>
                {labels.norwoodCaption}
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ─── FEMALE BALDNESS ─── */}
      <section style={{ background: '#FEFEFE' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={h2Style}>{labels.femaleTitle}</h2>
            <p style={paragraphStyle}>{labels.femaleP1}</p>
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>{labels.femaleP2}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CAUSES ─── */}
      <section style={{ background: '#F3F0EB' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              background: '#FFFFFF',
              borderRadius: '1.5rem',
              border: '1px solid rgba(193,164,82,0.15)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 4px 24px rgba(140,120,60,0.06)',
            }}>
              <h2 style={{
                fontFamily: headingFont,
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#A0885A',
                marginBottom: '1.8rem',
                lineHeight: 1.2,
              }}>
                {labels.causesTitle}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {labels.causes.map((cause) => (
                  <div key={cause.title} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                    <GoldDot />
                    <p style={{
                      fontFamily: bodyFont,
                      fontSize: '1rem', fontWeight: 300,
                      lineHeight: 1.75, color: '#44403C',
                      margin: 0,
                    }}>
                      <strong style={{ fontWeight: 500, color: '#1C1917' }}>{cause.title}.</strong>{' '}
                      {cause.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SOLUTIONS ─── */}
      <section style={{ background: '#FEFEFE' }}>
        <div style={{
          width: '88%', maxWidth: 1100, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{ ...h2Style, marginBottom: '1rem' }}>{labels.solutionsTitle}</h2>
            <p style={{ ...paragraphStyle, maxWidth: 720 }}>{labels.solutionsIntro}</p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.2rem',
            marginTop: '1.5rem',
          }}>
            {labels.solutions.map((solution: Solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: i === labels.solutions.length - 1 ? 'linear-gradient(135deg, #F5F2ED 0%, #EDE8E0 100%)' : '#FFFFFF',
                  borderRadius: '1rem',
                  border: i === labels.solutions.length - 1 ? '1px solid rgba(193,164,82,0.4)' : '1px solid rgba(193,164,82,0.15)',
                  padding: '1.8rem',
                  boxShadow: '0 4px 24px rgba(140,120,60,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h3 style={{
                  fontFamily: headingFont,
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: '#1C1917',
                  marginBottom: '0.8rem',
                  lineHeight: 1.25,
                }}>
                  {solution.title}
                </h3>
                <p style={{
                  fontFamily: bodyFont,
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(28,25,23,0.65)',
                  margin: 0,
                  flexGrow: 1,
                }}>
                  {solution.desc}
                </p>
                {solution.linkLabel !== undefined && (
                  <Link
                    href={`/${lang}${solution.href || ''}`}
                    style={{
                      fontFamily: bodyFont,
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      color: '#A0885A',
                      textDecoration: 'none',
                      marginTop: '1.2rem',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C1A452' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#A0885A' }}
                  >
                    {solution.linkLabel}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {lang === 'sl' && (
        <section style={{ background: '#F5F2ED' }}>
          <div style={{
            width: '88%', maxWidth: 900, margin: '0 auto',
            padding: 'clamp(3rem, 5vw, 5rem) 0',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <h2 style={h2Style}>Kdaj je pri izpadanju las potreben dermatolog?</h2>
              <p style={paragraphStyle}>
                Plešavost ni ena sama diagnoza. Pregled je posebej pomemben pri nenadnem izpadanju, okroglih zaplatah brez las, bolečem ali vnetem lasišču, izgubi obrvi in trepalnic, hitrem napredovanju ali drugih simptomih, kot so utrujenost, spremembe telesne teže in neredne menstruacije.
              </p>
              <p style={paragraphStyle}>
                Zdravnik ali dermatolog lahko razlikuje med androgenetsko alopecijo, telogenim efluvijem, <Link href="/sl/blog/alopecia-areata" style={{ color: '#6B6155', textDecoration: 'underline', textUnderlineOffset: 3 }}>alopecijo areato</Link>, okužbo in brazgotinskimi oblikami. Glede na izvid so lahko potrebne krvne preiskave, dermatoskopija ali biopsija lasišča.
              </p>
              <p style={{ ...paragraphStyle, marginBottom: '2rem' }}>
                Celoten pregled vzrokov, poteka diagnostike in zdravljenja je v vodiču <Link href="/sl/blog/izpadanje-las-vzroki-vrste-in-resitve" style={{ color: '#6B6155', textDecoration: 'underline', textUnderlineOffset: 3 }}>Izpadanje las: vzroki, vrste, zdravljenje in rešitve</Link>. Naš posvet je namenjen izbiri estetskega lasnega nadomestka in ne nadomešča zdravstvene diagnoze.
              </p>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '1rem',
                border: '1px solid rgba(193,164,82,0.15)',
                padding: '1.6rem 1.8rem',
              }}>
                <h3 style={{
                  fontFamily: headingFont,
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: '#1C1917',
                  marginBottom: '0.8rem',
                }}>
                  Medicinski viri
                </h3>
                <ul style={{
                  fontFamily: bodyFont,
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(28,25,23,0.65)',
                  margin: 0,
                  paddingLeft: '1.2rem',
                }}>
                  <li><a href="https://www.aad.org/public/diseases/hair-loss/causes/fall-out" target="_blank" rel="noopener noreferrer" style={{ color: '#6B6155' }}>American Academy of Dermatology: Hair loss overview</a></li>
                  <li><a href="https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat" target="_blank" rel="noopener noreferrer" style={{ color: '#6B6155' }}>American Academy of Dermatology: Diagnosis and treatment</a></li>
                  <li><a href="https://www.nhs.uk/conditions/hair-loss/" target="_blank" rel="noopener noreferrer" style={{ color: '#6B6155' }}>NHS: Hair loss</a></li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─── */}
      <section style={{ background: '#F3F0EB' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={h2Style}
          >
            {labels.faqTitle}
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faq.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '1rem',
                  border: '1px solid rgba(193,164,82,0.15)',
                  padding: '1.6rem 1.8rem',
                  boxShadow: '0 4px 24px rgba(140,120,60,0.05)',
                }}
              >
                <h3 style={{
                  fontFamily: headingFont,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#1C1917',
                  marginBottom: '0.6rem',
                  lineHeight: 1.3,
                }}>
                  {item.question}
                </h3>
                <p style={{
                  fontFamily: bodyFont,
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'rgba(28,25,23,0.65)',
                  margin: 0,
                }}>
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: '#FEFEFE' }}>
        <div style={{
          width: '88%', maxWidth: 900, margin: '0 auto',
          padding: 'clamp(3rem, 5vw, 5rem) 0',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, #F3F0EB 0%, #EDE8E0 100%)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(193,164,82,0.15)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center',
            }}
          >
            <h2 style={{
              fontFamily: headingFont,
              fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
              fontWeight: 400,
              color: '#1C1917',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              {labels.ctaTitle}
            </h2>
            <p style={{
              fontFamily: bodyFont,
              fontSize: '1rem', fontWeight: 300,
              lineHeight: 1.7, color: '#44403C',
              marginBottom: '1.8rem',
              maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
            }}>
              {labels.ctaText}
            </p>
            <Link
              href={`/${lang}/kontakt`}
              style={{
                fontFamily: bodyFont,
                fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#FFFFFF', backgroundColor: '#1C1917',
                padding: '0.85rem 2.2rem', borderRadius: '2px',
                textDecoration: 'none', transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#44403C' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1C1917' }}
            >
              {labels.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
