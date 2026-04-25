export type BlogArticle = {
  slug: string
  title: string
  oldUrl: string
  excerpt: string
  content: string
  category: 'lasni-sistem' | 'izpadanje-las' | 'produkti' | 'skupnost'
  publishDate: string
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

<p>Večina cenejših kopij ali na oko podobnih izdelkov ima namesto naravnih, nikoli obdelanih (nebarvanih) las, obdelane azijske lase ali celo sintetične, kar pomeni, da nikoli ne bodo zdržali do 4 leta! Večina kopij razpade po nekaj mesecih in so BREZ GARANCIJE!<br>Lasni Sistem® ne poškoduje vaših las, jih ne zateguje in s tem posledično puli ter oslabi vaše lase. Ravno tako jih ne duši, kot po meri narejene lasulje s silikonsko ali kakšno drugo osnovo, saj mikromrežica s cca. 1mm velikimi luknjicami omogoča največje možno dihanje lasišča.</p>

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

<p>Lasni sistem® je najsodobnejša alternativa presajanju las, ki v Slovenijo prihaja iz ZDA in spreminja življenje osebam, ki trpijo zaradi izpadanja las – izgube las.</p>

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

<p>Ni niti kirurški poseg niti lasulja. Gre za prozorno mikromrežico, ki je izdelana v Švici po meri posameznika s pomočjo predhodno odvzetega mavčnega kalupa. Nanjo so lasje ročno pritrjeni. Eden po eden, s posebnimi, s patentom zaščitenimi vozliči, s čimer se doseže enkratni učinek naravne gostote las. Bolj jih češeš, bolj se vozel zateza, kar pomeni znatno manjšo izgubo las, kot so jih sposobne doseči najboljše lasulje. To seveda pomeni tudi za dvakrat do osemkrat daljšo dobo trajanja od najboljših lasulj, saj lahko uporabljate Lasni sistem® ob pravilni negi kar do štiri leta ali celo več (odvisno od pogostosti in načina nošenja ter pravilne nege).</p>

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

<p>Izpadanje las pri moških – moška plešavost oziroma <strong>androgena alopecija</strong> je pogost pojav. Začetni znaki se pojavijo pri skoraj vsakem drugem moškem do 50. leta, pri ženskah pa se redčenje las pojavi pri skoraj celotni populaciji do 60. leta starosti.</p>

<p>Prvi znaki sprememb na lasišču se lahko pojavijo že pri 20. letih in potem s staranjem napredujejo. Začetni simptom je običajno tanjšanje las, ki postajajo vedno krajši in svetleje pigmentirani. Z napredovanjem te bolezni pa se lasje postopoma redčijo, pojavi se vidno izpadanje las – vse dokler ne nastopi popolna plešavost.</p>

<h3>Vzroki moške plešavosti</h3>
<p>Vzrok nastanka moške plešavosti je vpliv moških spolnih hormonov. Plešavost je tudi dedna. Hitrost in obseg izpadanja las sta odvisna od posameznika in jih je zaradi različnih genskih zasnov težko predvideti.</p>

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
<p>V našem svetovalnem studiu priporočamo uporabo <strong>Lasnega sistema®</strong>, ki na neboleč in nekirurški način zagotovi naravne lase, ki so najbližje možne gostote, strukture in barve, kot so (bili) človekovi lastni.</p>

<p>Izguba las, posebej če je le-ta prezgodnja, čezmerna ali pa vodi do nezadovoljstva, je zadosten razlog, da se oglasite pri nas, kjer boste deležni individualnega svetovanja.</p>`,
  },
  {
    slug: 'alopecia-areata',
    title: 'Alopecia areata',
    oldUrl: 'http://lasnisistem.com/index.php?IzpisVsebineMenija=1&iIdMeni=84',
    excerpt: 'Kaj je alopecia areata? Spoznajte to nepredvidljivo medicinsko stanje, ki prizadene milijone ljudi po svetu.',
    category: 'izpadanje-las',
    publishDate: '2022-10-12',
    readTime: 7,
    image: '/images/alopecia areata image.jpg',
    imageCaption: 'Dr. Vera Price, soustanoviteljica NAAF-a in dr. Špela Šeme, pobudnica in vodja Skupine za samopomoč ob izpadanju las in solastnica podjetja Fi potencial d.o.o.',
    content: `<h2>Alopecia areata</h2>

<p><strong>Alopecia areata</strong> je nepredvidljivo medicinsko stanje, ki samo v ZDA prizadene štiri milijone in pol ljudi. Zanjo je značilna nenadna izguba las v krožnih lisah, ki se lahko pojavijo kjerkoli na glavi ali telesu.</p>

<h3>Kaj je alopecia areata?</h3>
<p>Gre za <strong>avtoimunsko bolezen</strong>, pri kateri imunski sistem napade lasne folikle. To privede do delne ali popolne izgube las. Bolezen lahko prizadene vsakogar, ne glede na starost ali spol, najpogosteje pa se pojavi v mlajših letih.</p>

<h3>Oblike alopecije areate</h3>
<ul>
<li><strong>Alopecia areata (lokalizirana):</strong> Ena ali več okroglih lis brez las na lasišču</li>
<li><strong>Alopecia totalis:</strong> Popolna izguba las na glavi</li>
<li><strong>Alopecia universalis:</strong> Popolna izguba las na celotnem telesu</li>
</ul>

<h3>Vzroki</h3>
<p>Natančen vzrok alopecije areate ni dokončno pojasnjen. Znanstveniki menijo, da gre za kombinacijo genetskih in okoljskih dejavnikov, ki sprožijo avoimunski odziv. Stres, okužbe in drugi dejavniki so lahko sprožitveni faktorji.</p>

<h3>Zdravljenje in rešitve</h3>
<p>Čeprav za alopecijo areato trenutno ni dokončnega zdravila, obstajajo različni pristopi k obvladovanju stanja. Za mnoge prizadete je <strong>Lasni sistem®</strong> idealna estetska rešitev, ki omogoča normalno kakovost življenja – vključno z vsemi športnimi aktivnostmi.</p>

<p>V našem svetovalnem studiu imamo bogate izkušnje s pomočjo osebam z alopecijo areato. Vabimo vas na <strong>diskretno in individualno konzultacijo</strong>.</p>`,
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
<p>V okviru NAAF raziskav so odkrili, da alopecijo areato določa kar <strong>8 genov</strong>, katere so tudi že uspeli določiti. To je pomemben korak k razvoju novih zdravil in terapij.</p>

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
<p>V okviru NAAF raziskav so odkrili, da alopecijo areato določa kar <strong>8 genov</strong>, katere so tudi že uspeli določiti!</p>`,
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
