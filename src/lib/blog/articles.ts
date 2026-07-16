export type BlogArticle = {
  slug: string
  title: string
  oldUrl: string
  excerpt: string
  content: string
  category: 'lasni-sistem' | 'izpadanje-las' | 'produkti' | 'skupnost'
  publishDate: string
  updatedDate?: string
  author?: string
  readTime: number
  image: string
  imageCaption?: string
  images?: string[]
  imageCaptions?: string[]
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'hollywood-lasni-sistem-lasulje-in-tupeji',
    title: 'Razlika: HOLLYWOOD LASNI SISTEM® & lasulje in tupeji',
    oldUrl: '',
    excerpt: 'Spoznajte ključne razlike med originalnim Hollywood Lasnim sistemom®, lasuljami in tupeji ter zakaj izbrati kakovost za dolgotrajno nošenje.',
    category: 'lasni-sistem',
    publishDate: '2024-04-02',
    readTime: 5,
    image: '/images/blog/hair-system-comparison.png',
    content: `<h2>Razlika: HOLLYWOOD LASNI SISTEM® & lasulje in tupeji</h2>

<p>Večina cenejših kopij ali na oko podobnih izdelkov ima namesto naravnih, nikoli obdelanih (nebarvanih) las, obdelane azijske lase ali celo sintetične, kar pomeni, da nikoli ne bodo zdržali do 4 leta! Večina kopij razpade po nekaj mesecih in so BREZ GARANCIJE!<br>Lasni Sistem® ne poškoduje vaših las, jih ne zateguje in s tem posledično puli ter oslabi vaše lase. Ravno tako jih ne duši, kot po meri narejene <a href="/sl/lasulje">lasulje</a> s silikonsko ali kakšno drugo osnovo, saj mikromrežica s cca. 1mm velikimi luknjicami omogoča največje možno dihanje lasišča.</p>

<h3>Razlika - Lastnosti Lasnega Sistema® v primerjavi z najboljšimi lasuljami ali vložki iz naravnih las:</h3>
<ul>
<li>6 mesečna garancija!</li>
<li>Individualno oblikovan (oblika, dolžina, barva las, pred naročanjem odvzet mavčni kalup glave)</li>
<li>Varno pritrjen z MEDICINSKO TESTIRANIMI TRAKOVI (možno plavanje, potapljanje, jahanje, vožnja z motorjem, dinamičen ples…)</li>
<li>Omogoča dihanje kože – kar cenijo zlasti vsi, ki so do sedaj nosili nepraktične lasulje in tupeje</li>
<li>Omogoča nepretrgano nošenje 3-4 tedne (tudi ponoči in pri prhanju)</li>
<li>Je ultra lahek in udoben – tako da niti ne veste, da ga imate na glavi</li>
<li>Mikromrežica je tako tanka, da si greste s prsti lahko skozi lase kot skozi svoje</li>
<li>Narejen le iz najboljših testiranih naravnih las – virgin hair, naravnih barv</li>
<li>Omogoča celo česanje naravnost nazaj brez vidnega robu! Izgleda popolnoma naravno 24 ur na dan</li>
<li>Enostavno nameščanje</li>
<li>Trajanje do 4 leta – cena od 935 EUR naprej – ob optimalnem izgledu, udobnosti in zanesljivosti pritrditve</li>
<li>Zadovoljna stranka z Lasnim Sistemom®. Lasni Sistem® s tipično prozorno mrežico in na sliki s temnimi lasmi. Tipični izled lasulje.</li>
</ul>

<h3>Lasulje in tupeji:</h3>
<ul>
<li>V večini primerov ni garancije</li>
<li>Lasulje so narejene strojno in ne dajejo občutka naravnih las</li>
<li>Večinoma so serijsko izdelani</li>
<li>Možnost zdrsa z glave pri vetru, hitrih gibih…</li>
<li>So vroči (koža se pod lasuljo močno znoji, kar je velik problem poleti ali pod žarometi – kar je zlasti neugodno za TV napovedovalce in igralce)</li>
<li>Nepretrgano nošenje ni mogoče brez posledic na koži</li>
<li>So neudobni (nikdar ne pozabite, da je na glavi)</li>
<li>Podloga lasulj in tupejev je debela in draži kožo ali iz nekvalitetne mikromrežice</li>
<li>Narejeni so večinoma iz obdelanih las ki se hitro lomijo, mešanice naravnih las in umetnih vlaken, samo iz umetnih vlaken, lahko so tudi mešanice z živalsko dlako (jak) …</li>
<li>Omejene možnosti friziranja</li>
<li>Nikoli ne izgleda res naravno – gostota las je nerealno velika, veter razkriva robove</li>
<li>Trajajo pol do enega leta- s ceno od 500 EUR dalje (za dolge naravne lase, ki pa so običajno obdelani azijski lasje – torej bolj porozni in s tem lomljivi in ne evropski neobdelani!). Velikokrat pa so celo iz umetnih vlaken.</li>
</ul>

<h3>Pozor:</h3>
<p>Po meri narejen originalen Hollywood Lasni sistem® ima v silikonski del zadaj vtisnjen datum izdelave in ime lastnika (stranke)! Mrežica pravega Lasnega sistema® ima precej velike luknjice (cca 1mm!) da koža res diha in je zato znatno prijaznejša koži, kot goste mrežice ostalih izdelkov, ki so zato bolj vroči.</p>
<p>V 4. – 6. letih 4 menjave nižje cenovne lasulje in tupeji znesejo 2000 EUR ali več, še enkrat toliko pa, če menjate vsake pol leta. Torej ni dvoma, da s Hollywood Lasnim Sistemom® prihranite in dobite še nepredstavljivo višjo kvaliteto življenja.</p>`,
  },
  {
    slug: 'hollywood-lasni-sistem-najboljsa-resitev',
    title: 'Hollywood Lasni sistem® – najboljša rešitev!',
    oldUrl: '',
    excerpt: 'Hollywood Lasni sistem® je najsodobnejša alternativa presajanju las, ki v Slovenijo prihaja iz ZDA in spreminja življenje osebam z izpadanjem las.',
    category: 'lasni-sistem',
    publishDate: '2024-06-01',
    readTime: 10,
    image: '/images/hair system with graphics.png',
    content: `<h2>Hollywood Lasni sistem® – najboljša rešitev!</h2>

<p>Lasni sistem® je najsodobnejša alternativa presajanju las, ki v Slovenijo prihaja iz ZDA in spreminja življenje osebam, ki trpijo zaradi <a href="/sl/plesavost">izpadanja las – izgube las</a>.</p>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 3rem 0;">
  <figure style="margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/images/LS2_v%20roki_upscaled.png" alt="Lasni sistem v roki" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 0.8rem;" />
    <figcaption style="font-size: 0.85rem; color: #8A8070; text-align: center; font-style: italic; line-height: 1.45;">Lasni sistem v roki. Sprednji del mrežice je potrebno odstriči tik nad linijo las pred prvo namestitvijo, da izgleda povsem naravno in neopazno.</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/images/LS3-traki_upscaled.png" alt="Patentirani lepilni trakovi" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 0.8rem;" />
    <figcaption style="font-size: 0.85rem; color: #8A8070; text-align: center; font-style: italic; line-height: 1.45;">Patentirani lepilni trakovi.</figcaption>
  </figure>
  <figure style="margin: 0; display: flex; flex-direction: column; align-items: center;">
    <img src="/images/LS4_kalup_upscaled.png" alt="Kalup za lasni sistem" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 0.8rem;" />
    <figcaption style="font-size: 0.85rem; color: #8A8070; text-align: center; font-style: italic; line-height: 1.45;">Mavčni kalup za lasni sistem.</figcaption>
  </figure>
</div>

<p>Ni niti kirurški poseg niti lasulja. Gre za prozorno mikromrežico, ki je izdelana v Švici po meri posameznika s pomočjo predhodno odvzetega mavčnega kalupa. Nanjo so lasje ročno pritrjeni. Eden po eden, s posebnimi, s patentom zaščitenimi vozliči, s čimer se doseže enkratni učinek naravne gostote las. Bolj jih češeš, bolj se vozel zateza, kar pomeni znatno manjšo izgubo las, kot so jih sposobne doseči <a href="/sl/lasulje">najboljše lasulje</a>. To seveda pomeni tudi za dvakrat do osemkrat daljšo dobo trajanja od najboljših lasulj, saj lahko uporabljate Lasni sistem® ob pravilni negi kar do štiri leta ali celo več (odvisno od pogostosti in načina nošenja ter pravilne nege).</p>

<h3>Revolucionarna pritrditev in nevidni robovi</h3>

<p>Tudi sama pritrditev je revolucionarna, saj so posebej za Lasne sisteme® razvili izjemno močne prozorne lepilne trakove, ki se ne odlepijo niti pod vodo in so medicinsko testirani, kar je nadvse pomembno, da ne dražijo kože! Lasni sistem® je neverjetno lahek in nudi le minimalen odpor vodi – prav tako kot lastni lasje.</p>

<p>Lasni sistemi® so danes dosegli tako stopnjo perfekcije, da dejansko uživajo status neboleče alternative presajanju las. Oseba si lahko sama izbere barvo, dolžino, kvaliteto in obliko las, lahko pa uporabi tudi kakšno fotografijo za lažje definiranje zaželene pričeske.</p>

<h3>Dihanje kože in optimalen videz</h3>

<p>Edinstvena lastnost Lasnega sistema®, da omogoča dihanje kože, je med drugim pritegnila tudi pozornost dermatologov in plastičnih kirurgov. Pri še tako kvalitetnih lasuljah iz naravnih las se koža znoji, kar velikokrat privede do srbenja ali izpuščajev na lasišču. Pri presaditvah las pogosto nastopi vnetje presadkov ali prevelika občutljivost lasišča na toploto ali različne materiale. Lasni sistem® pa s svojo mrežno strukturo pomeni povrnjen optimalen videz – s polno glavo las in brez tveganega poseganja v telo ali neudobnega občutka, da nosite nestabilno kučmo na glavi. V Sloveniji ljudje, ki trpijo zaradi izpadanja las in/ali so izgubili lase, največkrat izvedo za Lasne sisteme® prav od strokovnjakov v Kliničnem centru, Oddelku za plastično kirurgijo, na dermatoloških oddelkih, Onkološkem inštitutu, v nekaterih lekarnah in bolnicah na Gorenjskem.</p>

<h3>Hollywoodska kvaliteta in svoboda gibanja</h3>

<p>Tisti, ki se še spomnite Seana Conneryja v filmu Zadnji dnevi raja, se boste spomnili tudi njegove do ramen segajoče grive, ki je bila v resnici Lasni sistem®. Kot se vidi v filmu, se ga lahko češe naravnost nazaj, česar ne omogoča nobena lasulja ali lasni vložek, saj bi se tudi pri še tako dobri silikonski ali monofilamentni podlagi videli sprednji robovi. Pri Lasnem sistemu® pa zaradi ultra tanke in lahke mrežice sploh ni vidnih robov, je kot druga koža, ki se na glavo pritrdi s prozornimi, vodoodpornimi dvostransko lepljivimi trakovi. Tako se Lasni sistem® ne odlepi niti pod vodo, ko se človek potaplja. Fiksiran je stabilno, tako da človek spet lahko uživa v razigranosti ob plesu salse ali akrobatskega rokenrola.</p>

<h3>Za dinamičen življenjski slog</h3>

<p>Lasni sistemi® se neverjetno dobro obnesejo tudi pri tipično moški izgubi las spredaj in na vrhu glave – pri omejenem tipu izpadanja las.</p>

<p>Poslovneži in dinamični ljudje izredno cenijo prihranek časa in udobnost, ki jo zagotavlja možno nepretrgano nošenje Lasnega sistema®: tudi 3-4 tedne. Ko ga enkrat pritrdite, se lahko z njim prhate, spite in v bistvu pozabite, da ga imate na glavi. Tanka mikromrežica pa vas ne ovira, da si ne bi mogli iti s prsti skozi lase kot skozi svoje.</p>`,
  },
  {
    slug: 'pogosta-vprasanja-in-odgovori',
    title: 'Lasni sistem® – pogosta vprašanja in odgovori',
    oldUrl: 'http://lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=122',
    excerpt: 'Odgovori na najpogostejša vprašanja o Lasnem sistemu® – od vzdrževanja in nameščanja do vsakodnevnega nošenja.',
    category: 'lasni-sistem',
    publishDate: '2023-05-10',
    readTime: 12,
    image: '/images/blog/faq-tools.png',
    content: `<h2>Lasni sistem® – pogosta vprašanja in odgovori</h2>

<h3>Kako se Lasni sistem® vzdržuje?</h3>
<p>Sistem je narejen iz naravnih, nebarvanih las (razen, če si zaželite drugače), zato je tudi vzdrževanje podobno, kot če bi imeli svoje lase. Pomembno je redno umivanje z mlačno vodo.</p>

<h3>Kako pogosto moram umivati Lasni sistem®?</h3>
<p>Pozimi je zaradi več smoga potrebno umivati lase pogosteje. Ravno tako, če ste pogosto v prostorih kjer se kadi. Ni nekega napisanega pravila, kot ga tudi ni za tiste s svojimi lasmi. Naravni lasje sistema se tudi v vlažnem in suhem vremenu obnašajo naravno.</p>

<h3>Kako je z umivanjem glave?</h3>
<p>Lasni sistem® lahko umivate na glavi ali ga snamete. Če umivate sistem na glavi, počnite to pod tušem, nagnite glavo nazaj in z vodnim curkom sledite običajni obliki pričeske. Dvakrat nanesite šampon in sperite, nato enkrat nanesite balzam na konice oziroma sredino las.</p>

<p><strong>Pomembno:</strong> Balzam ne sme priti do mrežice ali celo ostati na njej, saj naredi lase mehke, s tem pa tudi zmehča vozličke iz las, ki so na mrežici.</p>

<h3>Koliko časa običajno traja nameščanje Lasnega sistema®?</h3>
<p>Na začetku svetujemo, da si za nameščanje vzamete več časa in prvič sami nameščate sistem ko se vam nikamor ne mudi. Že čez par nameščanj pa boste tako vešči, da si ga boste namestili v parih minutah.</p>

<h3>Kako snameš Lasni sistem®?</h3>
<p>Snemanje se pri <strong>delnih sistemih</strong> vedno prične na zadnji strani sistema. Sprednji, nežnejši del, bi se raztrgal, če bi pričeli tam. Pri <strong>celih sistemih</strong> najprej dvignete zalizce in potem nežno pričnete vleči sistem od zadaj proti vrhu glave.</p>

<h3>Kako pogosto je potrebno menjati lepilne trakove?</h3>
<p>Odvisno od tega, koliko se znojite, ter koliko kislin vsebuje vaš znoj. Telesne kisline namreč sčasoma začno raztapljati lepilni trak, ki drži največ mesec dni nepretrganega nošenja.</p>

<h3>Ali lahko vsak sam vzdržuje sistem?</h3>
<p>Lahko. <strong>95% ljudi, ki nosijo Lasni sistem® to tudi počne.</strong> Ob prejemu in prvem oblikovanju – striženju sistema prejmete pisna navodila za vzdrževanje, poleg tega vam vse pokažemo, pa tudi sami poizkusite sneti in namestiti sistem.</p>

<h3>Kaj pa je s sistemom mentorstva?</h3>
<p>To je poseben sistem nagrajevanja, ki omogoča tudi do <strong>50% cenejši nakup</strong> Lasnega sistema®. Če še niste mentor nekomu in vas to zanima, povprašajte za detajle v studiju.</p>`,
  },
  {
    slug: 'nega-in-vzdrzevanje-lasnega-sistema',
    title: 'Lasni sistem® – nega in vzdrževanje',
    oldUrl: 'http://lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=162',
    excerpt: 'Podroben vodič za pravilno nego in vzdrževanje vašega Lasnega sistema® – od umivanja do sušenja in odstranjevanja lepilnih trakov.',
    category: 'lasni-sistem',
    publishDate: '2023-07-22',
    readTime: 10,
    image: '/images/blog/care-products.png',
    content: `<h2>Lasni sistem® – nega in vzdrževanje</h2>

<p>Sistem je narejen iz naravnih, nebarvanih las (razen, če si zaželite drugače), zato je tudi vzdrževanje podobno, kot če bi imeli svoje lase.</p>

<h3>Osnovna nega</h3>
<p>Pomembno je redno umivanje z mlačno vodo, ki je potrebno takrat, ko opazite, da so lasje umazani (se bolj vozlajo in niso več sijoči). Obvezno tudi uporabljajte balzam, saj vrača lasem vlago in elastičnost.</p>

<p>Sušenje je priporočljivo na zraku, če pa se vam mudi, lahko uporabite mlačen fen, ki naj bo čim dalj od sistema. Glavnik naj bo z redkimi in neostrimi zobmi – da ne raztrgate z njim mrežice. Krtače odsvetujemo, saj populijo več las.</p>

<h3>Umivanje sistema na glavi</h3>
<p>Če umivate sistem na glavi, je izredno pomembno, da ne nagibate glave nad lijak. Ob nagibanju nad lijak namreč vodni curek sili lase v lego, ki je nasprotna smeri vozlanja las na mrežico sistema, kar povzroča vozlanje in težje razčesavanje.</p>

<p>Počnite to pod tušem, nagnite glavo nazaj in z vodnim curkom sledite običajni obliki pričeske. Dvakrat nanesite šampon in sperite, nato enkrat nanesite balzam na konice oziroma sredino las.</p>

<h3>Umivanje snetega sistema</h3>
<p>Če raje umivate sistem tako, da ga snamete, ga najprej razčešite. Nato ga snemite z glave, odstranite lepilni trak, ga obrnite tako, da je mrežica na zunanji strani, lasje pa na notranji ter tako potopite v lavor ali lijak mlačne vode.</p>

<h3>Snemanje sistema</h3>
<p>Snemanje se pri <strong>delnih sistemih</strong> vedno prične na zadnji strani sistema. Sprednji, nežnejši del, bi se raztrgal, če bi pričeli tam.</p>

<p>Pri <strong>celih sistemih</strong> najprej dvignite zalizce in potem nežno pričnite vleči sistem od zadaj proti vrhu glave.</p>

<h3>Odstranjevanje lepilnih trakov</h3>
<ol>
<li>Skozi zgornji del sistema razpršite po obodu sprednjega dela topilo, ki odlepi lepilni trak od mrežice</li>
<li>Počakajte cca. 2-3 minute (ne predolgo, sicer se lepilo nazaj posuši)</li>
<li>Nežno potegnite sistem z glave</li>
<li>Ko je sistem že odstranjen, si lahko zmočite prste s topilom in nato odstranite morebiten ostanek lepilnega traku z glave</li>
<li>Ostanke lepila obrišite z glave s krpico, ki je namočena v topilo</li>
</ol>

<h3>Menjava lepilnih trakov</h3>
<p>Odvisno od tega, koliko se znojite, ter koliko kislin vsebuje vaš znoj. Telesne kisline sčasoma začno raztapljati lepilni trak, ki drži največ mesec dni nepretrganega nošenja. Trakovi so vodoodporni, le pri nameščanju morate paziti, da je koža suha, nemastna ter brez dlak.</p>

<p>O vzdrževanju vas podrobno naučimo pri prejemu Lasnega sistema®, kjer dobite tudi pisna Navodila za vzdrževanje.</p>`,
  },

  {
    slug: 'izpadanje-las-izguba-las-plesavost',
    title: 'Izpadanje las – izguba las – plešavost',
    oldUrl: 'http://www.lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=83',
    excerpt: 'Celovit vodnik o vzrokih izpadanja las pri moških in ženskah, fazah plešavosti in možnih rešitvah.',
    category: 'izpadanje-las',
    publishDate: '2022-09-18',
    readTime: 14,
    image: '/images/7-stages-of-the-norwood-hamilton-scale-1024x634.jpeg',
    content: `<h2>Izpadanje las – izguba las – plešavost</h2>

<p>Za širši pregled vzrokov, diagnostike in zdravljenja preberite novi vodič <a href="/sl/blog/izpadanje-las-vzroki-vrste-in-resitve">Izpadanje las: vzroki, vrste, zdravljenje in rešitve</a>. Ta članek se osredotoča predvsem na vzorce in stopnje plešavosti.</p>

<p>Izpadanje las pri moških – moška plešavost oziroma <strong>androgenetska alopecija</strong> – je pogost pojav. Pogostost s starostjo narašča, dedno vzorčno redčenje pa se pojavlja tudi pri ženskah.</p>

<p>Prvi znaki sprememb na lasišču se lahko pojavijo že v mladosti in nato s staranjem napredujejo. Lasje postopoma postajajo tanjši, krajši in manj pigmentirani. Obseg napredovanja je med posamezniki zelo različen in ne vodi pri vseh do popolne <a href="/sl/plesavost">plešavosti</a>.</p>

<h3>Vzroki moške plešavosti</h3>
<p>Pri moški androgenetski alopeciji imajo lasni mešički dedno povečano občutljivost na dihidrotestosteron (DHT). Hitrost in obseg redčenja sta odvisna od posameznika in ju je težko natančno predvideti.</p>

<h3>Hamiltonova lestvica – 7 faz napredovanja</h3>
<p>Izguba las pri moških napreduje drugače kot pri ženskah. Pri moških se prične lasišče redčiti na obeh straneh čela in na vrhu glave.</p>

<ol>
<li><strong>Faza 1:</strong> Ni simptomov izpadanja las</li>
<li><strong>Faza 2:</strong> Rahlo dviganje linije las nad področjem oči</li>
<li><strong>Faza 2A:</strong> Slabše izraženo dviganje linije na čelnem predelu</li>
<li><strong>Faza 3:</strong> Izrazitejše dviganje linije las tudi na čelnem predelu</li>
<li><strong>Faza 3A:</strong> Izguba las na čelnem predelu (združitev)</li>
<li><strong>Faza 3V:</strong> Pojavi se manjši krogec na vrhu glave</li>
<li><strong>Faza 4–6:</strong> Postopna združitev linije las s čelnega in temenskega področja</li>
<li><strong>Faza 7:</strong> Popolna izguba las na zgornjem predelu</li>
</ol>

<h3>Izpadanje las pri ženskah – Ludwigova lestvica</h3>
<p>Pri ženskah se plešavost odraža kot redčenje in izguba las na vrhu lasišča in običajno ne prizadene lasišča na obeh straneh čela.</p>

<h3>Drugi vzroki izpadanja las</h3>
<p>Lasje lahko izpadajo tudi zaradi mnogih drugih faktorjev:</p>
<ul>
<li>Jemanje nekaterih zdravil</li>
<li>Prebolele infekcije</li>
<li>Nepravilno delovanje ščitnice</li>
<li>Operacije in post-operativna stanja</li>
<li>Povečana vročina ali podhranjenost</li>
<li>Nosečnost ali porod</li>
<li>Jemanje kontracepcijskih tablet</li>
<li>Močnejši stresni dogodki</li>
<li>Kemoterapija ali obsevanje (začasno)</li>
</ul>

<h3>Naša rešitev</h3>
<p>V našem svetovalnem studiu priporočamo uporabo <strong>Lasnega sistema®</strong>, ki na neboleč in nekirurški način zagotovi naravne lase, ki so najbližje možne gostote, strukture in barve, kot so (bili) človekovi lastni. Za ženske so na voljo tudi <a href="/sl/lasulje">vrhunske lasulje iz evropskih las</a> in <a href="/sl/hibridni-sistemi">hibridni sistemi</a>.</p>

<p>Izguba las, posebej če je le-ta prezgodnja, čezmerna ali pa vodi do nezadovoljstva, je zadosten razlog, da se oglasite pri nas, kjer boste deležni individualnega svetovanja.</p>`,
  },
  {
    slug: 'alopecia-areata',
    title: 'Alopecija areata: znaki, vzroki, zdravljenje in rešitve',
    oldUrl: 'http://lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=84',
    excerpt: 'Kaj je alopecija areata, kako jo prepoznamo in kakšne so možnosti zdravljenja ter estetskega prekrivanja izgube las?',
    category: 'izpadanje-las',
    publishDate: '2022-10-12',
    updatedDate: '2026-07-16',
    author: 'Uredništvo Lasni Sistem®',
    readTime: 10,
    image: '/images/alopecia areata image.jpg',
    imageCaption: 'Dr. Vera Price, soustanoviteljica NAAF-a in dr. Špela Šeme, pobudnica in vodja Skupine za samopomoč ob izpadanju las in solastnica podjetja Fi potencial d.o.o.',
    content: `<h2>Kaj je alopecija areata?</h2>

<p><strong>Alopecija areata</strong> (latinsko <em>alopecia areata</em>) je avtoimunska bolezen, pri kateri imunski sistem napade lasne mešičke. Najpogosteje se pokaže kot ena ali več nenadno nastalih okroglih ali ovalnih zaplat brez las. Izguba las se lahko pojavi na lasišču, obrveh, trepalnicah, bradi ali drugih delih telesa.</p>

<p>Lasni mešički pri alopeciji areati praviloma niso uničeni, zato je ponovna rast las mogoča. Potek pa je nepredvidljiv: lasje lahko ponovno zrastejo, izpadanje se lahko ponovi ali razširi. Po podatkih organizacije NAAF se z alopecijo areato v življenju sreča približno 2 % ljudi.</p>

<h2>Znaki in simptomi</h2>
<ul>
<li>gladke, jasno omejene okrogle ali ovalne zaplate brez las,</li>
<li>hitro izpadanje las v nekaj dneh ali tednih,</li>
<li>kratki lasje v obliki klicaja ob robu zaplate,</li>
<li>izguba obrvi, trepalnic, brade ali dlak drugod po telesu,</li>
<li>drobne vdolbinice, cepljenje ali hrapavost nohtov,</li>
<li>hkratno izpadanje na enem in ponovno izraščanje na drugem predelu.</li>
</ul>

<p>Podobne zaplate lahko povzročijo tudi glivična okužba, brazgotinska alopecija, vlečenje las ali druga stanja. Zato diagnoze ni smiselno postavljati samo po fotografiji ali opisu na spletu.</p>

<h2>Oblike alopecije areate</h2>
<ul>
<li><strong>Lokalizirana alopecija areata:</strong> ena ali več omejenih zaplat brez las.</li>
<li><strong>Ophiasis:</strong> pasasto izpadanje ob straneh in na zatilju.</li>
<li><strong>Alopecia totalis:</strong> popolna ali skoraj popolna izguba las na lasišču.</li>
<li><strong>Alopecia universalis:</strong> izguba las in dlak po celotnem telesu.</li>
</ul>

<h2>Zakaj nastane?</h2>
<p>Natančen razlog, zakaj se imunski sistem usmeri proti lasnim mešičkom, ni povsem pojasnjen. Pomembno vlogo imajo geni in delovanje imunskega sistema. Tveganje je večje pri osebah, ki imajo bližnjega sorodnika z alopecijo areato ali drugo avtoimunsko bolezen, na primer bolezen ščitnice, vitiligo ali luskavico.</p>

<p>Močan stres lahko pri nekaterih ljudeh sovpada z začetkom ali poslabšanjem bolezni, vendar stres sam po sebi ni dokazan edini vzrok. Alopecija areata ni nalezljiva in je ne povzročijo neustrezna higiena, šampon ali pokrivalo.</p>

<h2>Kako poteka diagnoza?</h2>
<p>Diagnozo običajno postavi dermatolog s pregledom lasišča, dlak in nohtov ter pogovorom o poteku izpadanja in zdravstveni zgodovini. Uporabi lahko dermatoskop. Če slika ni značilna, so včasih potrebni puljenje nekaj las, biopsija kože ali krvne preiskave, na primer za izključevanje bolezni ščitnice oziroma pomanjkanj.</p>

<h2>Zdravljenje alopecije areate</h2>
<p>En način zdravljenja ne deluje pri vseh. Izbira je odvisna od starosti, obsega in trajanja izpadanja, prizadetih predelov, drugih bolezni ter vpliva bolezni na kakovost življenja. Pri eni ali dveh manjših zaplatah lahko dermatolog predlaga tudi spremljanje, saj lasje včasih zrastejo brez zdravljenja.</p>

<p>Med možnosti, ki jih glede na primer uporablja dermatolog, sodijo lokalni ali vbrizgani kortikosteroidi, kontaktna imunoterapija in druga zdravila, ki vplivajo na imunski odziv. Za težje oblike so danes na voljo tudi zaviralci JAK. Evropska agencija za zdravila med drugim navaja baricitinib za zdravljenje težke alopecije areate pri odraslih in mladostnikih od 12. leta. Ta zdravila imajo pomembna tveganja in niso primerna za vsakogar, zato o njih odloča specialist.</p>

<p>Minoksidil se lahko v nekaterih načrtih uporablja kot dopolnilo za ohranjanje ponovno zraslih las, vendar sam po sebi običajno ni dovolj za obsežno alopecijo areato. Ne prekinjajte predpisanih zdravil in ne začnite zdravljenja na lastno pest.</p>

<h2>Estetske rešitve in vsakdanje življenje</h2>
<p>Zdravljenje potrebuje čas, rezultat ni zagotovljen, nekateri pa se zanj ne odločijo. Za takojšnje prekrivanje so na voljo lasulje, lasni vložki in po meri izdelani lasni sistemi. Ameriška akademija za dermatologijo med možnostmi za obvladovanje videza izgube las izrecno navaja lasuljo, lasni vložek ali lasno protezo.</p>

<p>Pri obsežni ali popolni izgubi las je lahko primerna <a href="/sl/lasulje">lasulja iz naravnih evropskih las</a>. Kadar je treba prekriti omejen predel ali se rešitev stabilno pritrdi, pride v poštev tudi lasni sistem. To sta estetski rešitvi, ne zdravljenje bolezni. V našem svetovalnem studiu pomagamo izbrati možnost glede na obseg izgube las, občutljivost lasišča, življenjski slog in želeni videz.</p>

<h2>Kdaj k zdravniku?</h2>
<p>Pregled je priporočljiv pri nenadnem izpadanju v zaplatah, izgubi obrvi ali trepalnic, spremembah nohtov, bolečem ali vnetem lasišču ter hitrem širjenju izgube las. Če izpadanje močno vpliva na počutje, to povejte zdravniku; psihološka podpora in stik z drugimi osebami z alopecijo sta lahko pomemben del obravnave.</p>

<p>Alopecija areata je samo eden od možnih vzrokov za <a href="/sl/blog/izpadanje-las-vzroki-vrste-in-resitve">izpadanje las</a>. Več o drugih oblikah in estetskih možnostih preberite tudi na strani o <a href="/sl/plesavost">plešavosti pri moških in ženskah</a>.</p>

<div class="article-note"><strong>Pomembno:</strong> Članek je informativen in ne nadomešča pregleda ali zdravljenja pri zdravniku oziroma dermatologu.</div>

<h2>Viri</h2>
<ul>
<li><a href="https://www.naaf.org/navigation-toolkit/understanding-alopecia-areata/" target="_blank" rel="noopener noreferrer">NAAF: Understanding Alopecia Areata</a></li>
<li><a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia/causes" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: Alopecia areata – causes</a></li>
<li><a href="https://www.aad.org/public/diseases/hair-loss/types/alopecia/treatment" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: Diagnosis and treatment</a></li>
<li><a href="https://www.ema.europa.eu/en/medicines/human/EPAR/olumiant" target="_blank" rel="noopener noreferrer">European Medicines Agency: Olumiant</a></li>
</ul>`,
  },
  {
    slug: 'naaf-national-alopecia-areata-foundation',
    title: 'NAAF – National Alopecia Areata Foundation',
    oldUrl: 'http://lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=85',
    excerpt: 'Spoznajte NAAF – največjo ustanovo na svetu, ki se ukvarja z alopecijo areato in nudi podporo prizadetim.',
    category: 'izpadanje-las',
    publishDate: '2022-10-20',
    readTime: 5,
    image: '/images/blog/naaf-support.png',
    content: `<h2>NAAF – National Alopecia Areata Foundation</h2>

<p><strong>NAAF (National Alopecia Areata Foundation)</strong> je največja ustanova na svetu, ki se ukvarja z alopecijo areato. Ustanovljena je bila leta 1981 in od takrat nudi podporo milijonom ljudi, ki se soočajo s to boleznijo.</p>

<h3>Poslanstvo NAAF</h3>
<p>NAAF si prizadeva za:</p>
<ul>
<li>Financiranje raziskav za zdravljenje alopecije areate</li>
<li>Podporo prizadetim in njihovim družinam</li>
<li>Izobraževanje javnosti o tej bolezni</li>
<li>Mreženje skupin za samopomoč po svetu</li>
</ul>

<h3>Raziskave</h3>
<p>Raziskave so odkrile več genetskih območij, povezanih z alopecijo areato, zlasti takih, ki sodelujejo pri uravnavanju imunskega sistema. Bolezni ne določa en sam gen; pri nastanku se prepletajo genetski in drugi dejavniki.</p>

<h3>Podpora v Sloveniji</h3>
<p>Tudi v Sloveniji se zavedamo pomena te organizacije. V našem svetovalnem studiu sledimo najnovejšim spoznanjem NAAF in jih prenašamo v prakso – tako pri psihološki podpori kot pri iskanju najboljših estetskih rešitev za naše stranke.</p>

<p>Za več informacij o NAAF obiščite njihovo uradno spletno stran: <strong>www.naaf.org</strong></p>`,
  },
  {
    slug: 'itech-sprej-za-svez-videz-in-sijoce-lase',
    title: 'iTech sprej – za svež videz in sijoče lase',
    oldUrl: 'http://www.lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=133',
    excerpt: 'Revolucionaren energetski sprej, ki zgladi gube, napne kožo in vrne sijaj lasem s pomočjo patentiranega filtrirnega sistema.',
    category: 'produkti',
    publishDate: '2023-01-08',
    readTime: 8,
    image: '/images/itech spray.jpg',
    content: `<h2>iTech sprej – za svež videz in sijoče lase</h2>

<p><strong>Zgladi gube, napne kožo in vrne sijaj lasem!</strong></p>

<h3>Kaj je iTech energetski sprej?</h3>
<p>Filter, ki je vgrajen v iTech izdelke, s patentiranim sistemom večslojnega filtriranja prefiltrira vodo iz vašega pipe oziroma tuša in jo spremeni v funkcionalno vodo – energetsko vodo, ki je obogatena z vitaminom C in kolagenom ter uravnotežena na nižji pH.</p>

<h3>Kako deluje?</h3>
<p>Droben pršec se vpije v kožo, jo vlaži in obenem vitaminizira od znotraj navzven. Na laseh zapre nazobčan vrhnji sloj las, da je zopet gladek in zato zopet odbija svetlobo – lasje se svetijo.</p>

<h3>Rezultat</h3>
<p>Rezultat je uravnotežen pH vode, ki ne vsebuje več klora, težkih kovin in ostalih škodljivih elementov.</p>

<h3>Zakaj je pH vode pomemben?</h3>
<p>pH (potential of hydrogen) je merilo za kislost ali alkalnost raztopin. Kisle raztopine imajo svoje prednosti za lase in kožo:</p>
<ul>
<li><strong>Zgladijo nazobčano povrhnjico las</strong> – kompaktna povrhnjica pomeni sijoče lase</li>
<li><strong>Preprečujejo poškodbe povrhnjice</strong> in s tem vozlanje las</li>
<li><strong>Ojačajo vodikove vezi</strong>, kar prispeva k elastičnosti las</li>
<li><strong>Povečajo sposobnost kože</strong> za sprejemanje hranilnih snovi</li>
</ul>

<h3>Plasti v filtru</h3>
<ol>
<li><strong>Aktivno oglje s srebrom:</strong> odstrani klor in nečistoče</li>
<li><strong>Aroma in vitamin C:</strong> aromoterapija, čiščenje in učvrstitev kože</li>
<li><strong>Plast za izmenjavo ionov:</strong> spremeni vodo iz vodovoda v energetsko vodo</li>
<li><strong>Hranilne snovi:</strong> naredijo lase in kožo sijoče, mehke in svilnate</li>
</ol>

<h3>Velikosti in cene</h3>
<ul>
<li><strong>Profesionalna (380 mL):</strong> za salone in fitnes studije – 200 EUR</li>
<li><strong>Osebna (105 mL):</strong> najbolj priljubljena velikost – 100 EUR</li>
<li><strong>Priročna (13 mL):</strong> za v torbico – 70 EUR</li>
</ul>

<p>Izdelki so običajno na zalogi in se vam lahko pošljejo že naslednji delovni dan po prejemu naročila.</p>

<p><strong>Učinkovitost so dokazali znanstveni testi.</strong> Varnost in korektno izvedbo sistema filtriranja vode je testiral KOTRIC (Korea Testing and Research Institute for Chemical Industry).</p>`,
  },
  {
    slug: 'skupina-za-samopomoc',
    title: 'Skupina za samopomoč',
    oldUrl: 'http://www.lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=86',
    excerpt: 'Slovenska skupina za samopomoč za vse, ki se soočajo z izgubo las – delimo informacije, izkušnje in tkemo prijateljstva.',
    category: 'skupnost',
    publishDate: '2023-02-14',
    readTime: 8,
    image: '/images/alopecia%20image1_Vera-in-Spela.jpg',
    images: [
      '/images/alopecia%20image1_Vera-in-Spela.jpg',
      '/images/alopecia%20image2.jpg',
      '/images/alopecia%20image3.jpg',
    ],
    imageCaptions: [
      'Dr. Vera Price, soustanoviteljica NAAF-a in dr. Špela Šeme, pobudnica in vodja Skupine za samopomoč ob izpadanju las in solastnica podjetja Fi potencial d.o.o.',
      'NAAF konferenca pomeni izjemno priložnost za tkanje prijateljstev med otroki in odraslimi, ki se soočajo z izpadanjem las.',
    ],
    content: `<h2>Skupina za samopomoč</h2>

<p>Vsi, ki se soočajo z izgubo las, imajo končno tudi v Sloveniji svojo <strong>skupino za samopomoč</strong>. Tu se delijo informacije o najsodobnejših načinih za psihično in estetsko premoščanje travm, povezanih s tematiko, ter tkejo prijateljstva.</p>

<h3>Zakaj skupina za samopomoč?</h3>
<p>Človek, ki se v Sloveniji ali bližnji okolici naše države sooča z izgubo las, se do nedavnega ni imel kam obrniti za nasvet in izkušnje iz prve roke. Po vzoru ameriških izredno uspešnih skupin za samopomoč pa je leta 2003 tudi pri nas začela delovati podobna skupina ljudi.</p>

<h3>Psihološki vidik izgube las</h3>
<p>Zgodbe ljudi iz skupine za samopomoč razkrivajo stiske, ki so tistemu z lasmi nepojmljive:</p>
<ul>
<li>Strah pred smučarskimi izleti in spalnico brez pokrivala</li>
<li>Stiske na delovnih mestih, posebej pri delu na terenu</li>
<li>Odpoved športnih aktivnosti iz strahu pred razkritjem</li>
<li>Napetost v vetrovnih in sončnih dnevih</li>
<li>Izogibanje družabnim priložnostim</li>
</ul>

<p>Pri prizadetosti zaradi izgube las pomaga največ zdrav humor in pozitiven odnos do življenja. A izgradnja trdne osebnosti zahteva čas, ki se močno skrajša ob stiku z ljudmi iz skupine za samopomoč.</p>

<h3>Prednosti članstva</h3>
<p>Drag, tehten razlog za druženje s skupino je prednost človeka, ki je na tekočem z informacijami. Večina ljudi v Sloveniji še ne ve, da obstaja izdelek za premoščanje izgube las, ki nam zmore povrniti kvaliteto življenja.</p>

<h3>Srečanja</h3>
<p>Naša Skupina za samopomoč se srečuje v <strong>Zdravstvenem domu Kranj 2–4x/leto</strong>.</p>

<p>Obvestilo o srečanju bo objavljeno na naših straneh. Za informacije nas kontaktirajte na telefonsko številko <strong>031 444 868</strong>.</p>

<h3>Raziskave</h3>
<p>Raziskave alopecije areate so pokazale povezave z več genetskimi območji, ki sodelujejo pri delovanju imunskega sistema. Nova spoznanja pomagajo pri razvoju in izbiri sodobnejših zdravljenj.</p>`,
  },
  {
    slug: 'kako-je-lasni-sistem-prisel-v-slovenijo',
    title: 'Kako je Lasni sistem® prišel v Slovenijo',
    oldUrl: '',
    excerpt: 'Več kot 40 let izkušenj in 25 let obstoja našega podjetja. Spoznajte zgodbo dr. Špele Šeme in začetke Lasnega sistema v Sloveniji.',
    category: 'lasni-sistem',
    publishDate: '2024-02-10',
    readTime: 4,
    image: '',
    content: `<h2>Strokovnjaki za izpadanje las</h2>

<p><strong>Več kot 40 let izkušenj in 25 let obstoja našega podjetja!</strong></p>
<p>Vodja oddelka Lasni Sistemi®, dr. Špela Šeme, aktivna članica NAAF, ima več kot 40-letne izkušnje s premoščanjem izgube las in tudi sama nosi Lasni Sistem®.</p>

<p>Dr. Špela Šeme aktivno sodeluje z mednarodnimi strokovnjaki na področju odkrivanja vzrokov alopecije areate in redno organizira izobraževalne seminarje na to tematiko ter vodi Skupino za samopomoč. Člani celotne ekipe, ki delujejo v našem oddelku, imajo bodisi lastne izkušnje z izgubo las, ali pa je lase izgubil nekdo izmed bližnjih.</p>

<p>Zagotovljamo kakovostne storitve, podporo in svetovanje v vsakem koraku postopka.</p>

<h3>O Nas in Srečanja skupine za samopomoč</h3>
<p>Pri prizadetosti zaradi izgube las pomaga največ zdrav humor in pozitiven odnos do življenja. A izgradnja trdne osebnosti pač zahteva nek čas, ki se močno skrajša ob stiku z ljudmi iz Skupine za samopomoč. Vemo, kako pomembno je, da ima človek v stiski nekoga, na katerega se lahko obrne in če je ta nekdo šel še skozi enako izkušnjo, še toliko bolje!</p>

<h3>Neopaznost, kakovost in trajnost</h3>
<p>Ker je dr. Šeme zasebno in službeno preživela ogromno časa v tujini (ZDA, Azija, Avstralija…), je najprej zase, potem pa seveda še druge, iskala najboljše rešitve za izgubo las. Zato so naše rešitve izbor najboljšega z vsega sveta. Zasnovane so z veliko pozornosti do kakovosti in trajnosti, kar zagotavlja zanesljiv, dolgotrajen ter brezhiben naraven videz.</p>`,
  },
  {
    slug: 'izpadanje-las-vzroki-vrste-in-resitve',
    title: 'Izpadanje las: vzroki, vrste, zdravljenje in rešitve',
    oldUrl: '',
    excerpt: 'Celovit vodič o izpadanju las pri ženskah in moških: najpogostejši vzroki, diagnoza, zdravljenje ter estetske rešitve.',
    category: 'izpadanje-las',
    publishDate: '2026-07-16',
    updatedDate: '2026-07-16',
    author: 'Uredništvo Lasni Sistem®',
    readTime: 14,
    image: '/images/7-stages-of-the-norwood-hamilton-scale-1024x634.jpeg',
    content: `<h2>Kdaj je izpadanje las normalno in kdaj čezmerno?</h2>

<p>Izpadanje las je normalen del lasnega cikla. Običajno dnevno izgubimo približno 50 do 100 las, ki jih nadomestijo novi. Težava nastane, ko lasje izpadajo hitreje, kot ponovno rastejo, ko se preča širi, lasna linija umika, čop postaja tanjši ali se pojavijo jasno omejene zaplate brez las.</p>

<p>Pomembno je razlikovati med <strong>čezmernim izpadanjem</strong> in <strong>postopnim redčenjem las</strong>. Pri telogenem efluviju več las hkrati preide v fazo mirovanja in izpade, pogosto nekaj mesecev po bolezni, porodu, operaciji, hitrem hujšanju ali močnem stresu. Pri androgenetski alopeciji pa se lasni mešički zaradi dedne občutljivosti postopoma manjšajo, zato lasje postajajo tanjši in krajši.</p>

<h2>Kako rastejo lasje?</h2>
<p>Vsak las prehaja skozi rastno fazo (anageno), prehodno fazo (katageno) in fazo mirovanja (telogeno), ki ji sledi izpad. Ker posamezni lasje niso v isti fazi hkrati, zdravo lasišče ne izgubi vseh las naenkrat. Bolezen, hormonska sprememba, pomanjkanje hranil, zdravilo ali močan telesni stres lahko ta ritem porušijo.</p>

<h2>Najpogostejši vzroki izpadanja las</h2>

<h3>1. Androgenetska alopecija</h3>
<p>Dedno pogojeno izpadanje je najpogostejši vzrok redčenja pri moških in ženskah. Pri moških se pogosto začne z umikanjem lasne linije in redčenjem na temenu. Pri ženskah je značilna širša preča in difuzno redčenje na vrhu glave, sprednja lasna linija pa pogosto ostane ohranjena. Zgodnja diagnoza je pomembna, ker so medicinski postopki praviloma učinkovitejši, preden redčenje močno napreduje.</p>

<h3>2. Telogeni efluvij</h3>
<p>Gre za nenadno povečano izpadanje po telesnem ali čustvenem stresorju. Sprožijo ga lahko visoka vročina, okužba, operacija, porod, večja izguba telesne teže, pomanjkanje železa ali dolgotrajen stres. Izpadanje se pogosto začne šele dva do tri mesece po dogodku. Če se vzrok odpravi, se gostota pri mnogih ljudeh postopoma izboljša, vendar okrevanje traja več mesecev.</p>

<h3>3. Alopecija areata</h3>
<p><a href="/sl/blog/alopecia-areata">Alopecija areata</a> je avtoimunska bolezen, pri kateri se lasje navadno izgubijo v okroglih zaplatah. Prizadene lahko tudi obrvi, trepalnice, brado ali druge dele telesa. Ker so mešički večinoma ohranjeni, je ponovna rast mogoča, potek pa je lahko ponavljajoč in nepredvidljiv.</p>

<h3>4. Bolezni, hormoni in pomanjkanja</h3>
<p>Izpadanje je lahko povezano z boleznimi ščitnice, anemijo oziroma pomanjkanjem železa, hormonskimi spremembami po porodu ali v menopavzi, nekaterimi kroničnimi boleznimi ter nezadostnim vnosom beljakovin. Prehranskih dopolnil ni smiselno jemati brez ugotovljenega pomanjkanja, saj presežek nekaterih snovi prav tako lahko škoduje.</p>

<h3>5. Zdravila in onkološko zdravljenje</h3>
<p>Nekatera zdravila ter kemoterapija ali obsevanje lahko povzročijo izpadanje. Zdravila ne prekinite sami; o časovni povezavi in možnih zamenjavah se pogovorite z zdravnikom. Po koncu določenih terapij lasje pogosto ponovno zrastejo, vendar sta čas in obseg ponovne rasti odvisna od zdravljenja in posameznika.</p>

<h3>6. Vlečenje in poškodovanje las</h3>
<p>Tesne pričeske, podaljški, pogosto močno vlečenje, kemično ravnanje in pretirana toplota lahko povzročijo lomljenje ali trakcijsko alopecijo. Dolgotrajno vlečenje lahko mešičke trajno poškoduje, zato je smiselno ukrepati ob prvih znakih bolečine, zategovanja ali redčenja ob lasni liniji.</p>

<h2>Izpadanje las pri ženskah</h2>
<p>Pri ženskah se lahko prepletajo dedna nagnjenost, hormonske spremembe, pomanjkanje železa, bolezni ščitnice, porod, stres in poškodovanje las. Posebej pozorni bodite na širjenje preče, tanjšanje čopa, vidnejše lasišče na temenu ali nenadno povečano količino las pri umivanju. Ker ima več različnih stanj podoben videz, je diagnoza pomembnejša od nakupa prvega izdelka proti izpadanju.</p>

<h2>Izpadanje las pri moških</h2>
<p>Pri moških je najpogostejša androgenetska alopecija. Napredovanje se pogosto opisuje z Norwood-Hamiltonovo lestvico, vendar fotografija lestvice ne nadomesti pregleda. Redčenje se lahko hkrati poslabša zaradi telogenega efluvija, vnetja lasišča ali drugega vzroka. Več o vzorcih in stopnjah preberite na strani <a href="/sl/plesavost">plešavost: vzroki, vrste in rešitve</a>.</p>

<h2>Kdaj je potreben pregled?</h2>
<p>Obrnite se na osebnega zdravnika ali dermatologa, če:</p>
<ul>
<li>lasje izpadajo nenadoma ali v jasno omejenih zaplatah,</li>
<li>se izguba hitro širi ali traja več mesecev,</li>
<li>je lasišče rdeče, boleče, srbeče, luskasto ali brazgotinjeno,</li>
<li>izgubljate tudi obrvi, trepalnice ali dlake drugod po telesu,</li>
<li>imate utrujenost, spremembe telesne teže, neredne menstruacije ali druge simptome,</li>
<li>se je izpadanje začelo po uvedbi zdravila,</li>
<li>izpadanje močno vpliva na samozavest ali počutje.</li>
</ul>

<h2>Kako zdravnik ugotavlja vzrok?</h2>
<p>Obravnava se začne s pogovorom o začetku in poteku izpadanja, boleznih, zdravilih, prehrani, nosečnosti, stresorjih in družinski zgodovini. Sledi pregled lasišča in las, pogosto z dermatoskopom. Glede na ugotovitve so lahko potrebne krvne preiskave ali biopsija lasišča. En sam komercialni “pregled lasišča” ne more izključiti vseh zdravstvenih vzrokov.</p>

<h2>Možnosti zdravljenja</h2>
<p>Zdravljenje je odvisno od diagnoze. Pri dednem redčenju se uporabljajo zdravila, kot sta minoksidil in pri primernih moških finasterid, vendar ne delujejo pri vseh in učinek praviloma traja samo med uporabo. O koristih, omejitvah, kontraindikacijah in neželenih učinkih se pogovorite z zdravnikom ali farmacevtom.</p>

<p>Pri alopeciji areati se uporabljajo drugačni pristopi, na primer kortikosteroidi, kontaktna imunoterapija ali pri težjih oblikah specialistično predpisani zaviralci JAK. Pri pomanjkanju železa, bolezni ščitnice ali drugem osnovnem vzroku se zdravi predvsem ta vzrok. Presaditev las je kirurška možnost za izbrane osebe s stabilnim vzorcem izgube in zadostnim donorskim območjem.</p>

<h2>Lasulja, lasni vložek ali lasni sistem?</h2>
<p>Estetska rešitev ne zdravi vzroka izpadanja, lahko pa takoj povrne videz gostih las in zmanjša vsakodnevno obremenitev. Izbira je odvisna od obsega izgube, lastnih las in načina življenja:</p>
<ul>
<li><strong>Lasni vložek oziroma topper</strong> doda gostoto na omejenem predelu in se lahko poveže z obstoječimi lasmi.</li>
<li><strong><a href="/sl/lasulje">Lasulja</a></strong> prekrije celotno lasišče in je primerna pri obsežni ali popolni izgubi las, tudi med onkološkim zdravljenjem.</li>
<li><strong><a href="/sl/hibridni-sistemi">Hibridni sistem</a></strong> združuje lastne lase in lasni nadomestek, kadar je del las še ohranjen.</li>
<li><strong>Lasni sistem</strong> je po meri izdelan lasni nadomestek za stabilno prekrivanje delne ali obsežne plešavosti brez operacije.</li>
</ul>

<p>Na diskretnem posvetu je smiselno primerjati udobje, način pritrditve, vzdrževanje, življenjsko dobo in realne stroške, ne samo fotografij pred in po.</p>

<h2>Kaj lahko naredite sami?</h2>
<ul>
<li>Ne vlecite las v tesne pričeske in zmanjšajte agresivno toploto ali kemično obdelavo.</li>
<li>Poskrbite za dovolj beljakovin in uravnoteženo prehrano; dodatke jemljite ob dokazanem pomanjkanju.</li>
<li>Fotografirajte prečo, teme in lasno linijo v enaki svetlobi enkrat mesečno, ne vsak dan.</li>
<li>Zapišite začetek težave, bolezni, stresne dogodke in nova zdravila.</li>
<li>Ne nasedajte zagotovilom o “100-odstotni ponovni rasti”. Nobeno zdravljenje ne deluje pri vseh.</li>
</ul>

<div class="article-note"><strong>Pomembno:</strong> Članek je namenjen splošnemu informiranju. Ne postavlja diagnoze in ne nadomešča pregleda pri zdravniku ali dermatologu.</div>

<h2>Viri</h2>
<ul>
<li><a href="https://www.aad.org/public/diseases/hair-loss/causes/fall-out" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: Hair loss overview</a></li>
<li><a href="https://www.aad.org/public/diseases/hair-loss/causes/18-causes" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: Causes of hair loss</a></li>
<li><a href="https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat" target="_blank" rel="noopener noreferrer">American Academy of Dermatology: Diagnosis and treatment</a></li>
<li><a href="https://www.nhs.uk/conditions/hair-loss/" target="_blank" rel="noopener noreferrer">NHS: Hair loss</a></li>
<li><a href="https://www.naaf.org/navigation-toolkit/understanding-alopecia-areata/" target="_blank" rel="noopener noreferrer">NAAF: Understanding Alopecia Areata</a></li>
</ul>`,
  },
]

import { articlesEN } from './articles-en'
import { articlesDE } from './articles-de'
import { articlesRU } from './articles-ru'

export function getArticlesByLang(lang: string): BlogArticle[] {
  if (lang === 'en') return articlesEN;
  if (lang === 'de') return articlesDE;
  if (lang === 'ru') return articlesRU;
  return blogArticles; // sl
}

export function getAllSlugsForLang(lang: string): string[] {
  return getArticlesByLang(lang).map(a => a.slug);
}

export function getArticleBySlugAndLang(slug: string, lang: string): BlogArticle | undefined {
  return getArticlesByLang(lang).find(a => a.slug === slug);
}
