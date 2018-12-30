import React from 'react'
import { withPrefix } from 'gatsby-link'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import ScrollSection from '../components/ScrollSection'
import PreviousButton from '../components/PreviousButton'
import NextButton from '../components/NextButton'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: '',
    }
  }

  onEnterViewport = (id) => {
    history.replaceState(undefined, undefined, `#${id}`)
    this.setState({
      inViewport: id,
    })
  }

  render() {
    const {
      inViewport,
    } = this.state

    return (
      <Layout bodyClass={inViewport}>
        <div className="content">
          <div className="ui text container list">
            <ScrollSection onEnter={this.onEnterViewport} id="story.fairytales.holle">
              <h1>Holle anyó</h1>
              <div>
                <p>A mesét <a href="https://www.grimmstories.com/hu/grimm_mesek/holle_anyo" target="_blank" rel="noopener noreferrer">itt</a> elolvashatjátok</p>
                <p>Holle anyó neve egy nagyon érdekes szó, amely rámutat a nyugati nyelvek és a magyar nyelv ideológiája közt tátongó szakadékra. Holle anyó dunyhájából rázza a havat le a földre, így egy kis manipulációval - plusz egy ékezet, mínusz egy l - a <b>Hó le anyó</b> nevet kapjuk. Kicsit olyan ez, mint a felhők fehér világa, egyfajta <i>mennyország</i>.</p>
                <p>
                  <img src={withPrefix('images/holle/45c8f2a3946446926597f94c06cb9768.jpg')} className="ui fluid image" />
                </p>
                <p>Másként is manipulálhatjuk a nevet, ha egy umlauttal megtoldjuk az o betűt, a <b>Hölle</b> szót kapjuk, mely német nyelven direktbe <i>poklot</i> jelent.</p>
                <p>
                  <img src={withPrefix('images/holle/5d722d0c267aa17011f38e956c93bab0.jpg')} className="ui fluid image" />
                </p>
                <p>Ha tovább manipulálom a nevet, még a hivatalos levezetés is kijön: Heilig, Holy, azaz szent. A különbség ellenére szeretném nyomatékosítani, a téma és a kontextus azonos. Egy közös európai történetről van szó, ha nem egy világiról.</p>

                <p>Hél a <cite>skandináv mitológiában a holtak birodalmának úrnője félig élő, félig holt volt, egyes források szerint fél arca, míg mások szerint a lábai voltak holtak.</cite> Hell németül világosat jelent, angolul poklot. Hell - Holle szintén hasonló.</p>

                <p>Ennek a mesének a fő témája véleményem szerint a karma, az újjászületés, a reinkarnáció technikai részletezése. (Ismét egy védikus tanítás a németektől.) A történetet ennek tudatában kell vizsgálni, a kor és a helyszín alakító tényezőinek figyelembe vételével. A kálvinista német népet akkor is rá lehetett fogni a precíz munkavégzésre, a mese tanításának fő vonala a német verziókban a szorgos és a lusta lány sorsa, így példa arra, hogy a serény munka jutalommal, a hanyagság büntetéssel jár. Ez önmagában egy kommunista propagandának is beillik. Természetesen, ennek a mesének is jóval mélyebbre nyúlnak a gyökerei, legalább is szerintem.</p>
                <blockquote>
                  <p>Élt egyszer egy özvegyasszony, annak volt két lánya: az egyik szép és szorgos, a másik csúnya és lusta. Az özvegy sokkal jobban szerette a csúnya lustát, mert az édeslánya volt. Minden munkát a másiknak kellett végeznie, az volt Hamupipőke a házban.</p>
                  <p>Ott ült szegény napestig a kút mellett az úton, és font, egyre font, míg csak a vér ki nem serkent az ujjából. Egyszer aztán úgy megvágta az ujját a szál, hogy az orsó is csupa vér lett tőle. Le akarta mosni a kútnál, de az orsó kicsusszant a kezéből, és beleesett a vízbe. A lány sírva fakadt, hazaszaladt a mostohájához, s elpanaszolta neki, mi történt. Az meg, ahelyett hogy megszánta volna, kegyetlenül ráripakodott:</p>
                  <p>- Ha beleejtetted, szedd is ki belőle!</p>
                  <p>Szegény lány visszament a kúthoz, nem tudta, mitévő legyen; félelmében végül is az orsó után ugrott. Elvesztette az eszméletét, s mikor aztán magához tért, egy szép, napfényes, virágos mezőn találta magát. ...</p>
                </blockquote>
                <p>
                  <img src={withPrefix('images/holle/e2dfd64e2d17bdb900cf55cd31ededdd.jpg')} className="ui fluid image" />
                </p>
                <p>A mese elején a leány - aki Hófehérkéhez hasonlóan mostoha sorsú - annyit fon, hogy véres lesz az ujja, és összevérzi az orsót. Így áll elő az a furcsa helyzet, hogy az orsó a kútba esik. Mint azt már említettem, az orsó fallikus, s most kitérek rá, hogy a kút vaginális szimbólum. Erős túlzás, mindig csak a szex meg a szipu, de így van. A kút egy sötét nedves alagút, egyetlen hibája csak, hogy hideg, de a többi passzol. Az orsó véres, így az orsó és a vér ismét közösen szerepelnek.</p>
                <p>De ez nem elég. Mivel a lányka igen nagy hibát vét, az anyja azt javasolja neki, hogy ugorjon utána, amit ő meg is tesz, bánatában. Nos itt érdemes megállni. Két okból is. Az egyik, hogy az adott korban feltehetően az öngyilkos statisztikában a fára akasztást közvetlenül követte a kútba ugrás. Úgy értem nem szokás csak úgy kútba ugrani a nélkül, hogy az ember ne akarna meghalni. A kút hordozza az <b>élet vizét</b> de egyben a <b>halált</b> is. A másik érdekes dolog, hogy a mese innen kezd izgalmas lenni, a lányka egy ismeretlen, új világban ébred.</p>
                <p>Mi is ez a kút. Ha jobban megvizsgáljuk és belenézünk, érdekes dolgot fogunk látni. Emlékszünk a mostohára aki a holdat figyelte éjjel, mint varázstükröt? Egy ugyanilyen varázstükröt láthatunk a kútban is. Az éj sötétjében világító holdkoronghoz hasonlóan csillan meg a kerek víztükör a kút sötét mélyében. És mit látunk még? Természetesen magunkat. Magunkat látjuk amint az alvilágból egy csőbe nézünk, és rácsodálkozunk felvilági tükörképünkre, valós önmagunkra. A kút így egy sötét cső, ami összeköt két világot. (lásd: Utas és holdvilág)</p>

                <p className="masonry">
                  <img src={withPrefix('images/witch/moon/229012e1941a24801c615341013c236b.jpg')} />
                  <img src={withPrefix('images/holle/well/a331e7ccb1b68357c30ab30ecb64bc53.jpg')} />
                  <img src={withPrefix('images/witch/moon/5481afcbf9e3ea35168bba674ed43817.jpg')} />
                </p>

                <p>A véres orsó a kútba esik... A véres orsón a fonal is véres, a vérpiros szál pedig a már részletezett <b>élet fonala</b>. Ismét egyfajta köldökzsinór, mely az egyik világból pottyan a másik világba. A lányka meg követi. Mi történik a lánnyal? Meghal? Megszületik? Mindkettő egyszerre?</p>

                <p>Az élet a születéssel kezdődik, és a halállal ér véget. Szinte közhelyes. Ez a mese arra próbál rámutatni, hogy van egy másik birodalom halál és születés közt, Hölle anyó, Hóle anyó birodalma, aki maga egyfajta ősanya. A születés úgy történik ahogy ismerjük, a maga biológiai valóságában, így elkerülhetetlen a női nemi szerv ismételt megemlítése. A mesében ez az alagút a kút, a köldökzsinór pedig a véres sodrat. Vegyük újra - jajj de élvezem - és képzeljük el:</p>
                <ol>
                  <li>esik a <i>kútba</i> az <i>orsó</i>,</li>
                  <li>pörög le róla a véres fonal, az <i>élet fonala</i></li>
                  <li>majd kényszeresen pottyan maga a <i>gyermek</i> is.</li>
                </ol>
                <p>Ennél egyértelműbben is tudnám mondani. A mese szépsége, hogy finom szimbólumokkal dolgozik, melyek tágabb értelmüknél fogva képesek összekötni a kevésbé nyilvánvalóan összetartozó dolgokat is. A mese ugyanis csak most kezdődik...</p>

                <p>Még egy kis játék a Holle szóval: Hoehle németül, hole angolul barlangot, üreget, lyukat, odút, vermet jelent. A kút pontosan az, egy fekete üreg a föld mélysége felé, a Földanya nyílása. A kút egy út. Hol lel ilyen anyót az ember? Le kell menni az úton, le kell ereszkedni a kúton.</p>

                <p>A virágos rét ahol a lányka ébred, maga a túlvilág. Ott találkozik a fehér vagy fekete istennővel, ami tulajdonképpen mindegy is, egyrészt, mert az ősistennő szerepe a legfontosabb, másrészt pedig, mert nem tudjuk felismerni, melyik világban is vagyunk, melyik szín birodalmában. A leányka épp meghalt, és beleszületett a túlvilágba. Tünetei tipikusak: émelygés, eszméletvesztés, csodálkozás. Az újszülött érzi így magát új világában. Mi tudjuk, hogy az előbb még épp a fonós konfliktusát próbálta rendezni, de ő elfelejtette. Majd csak sokára, mikor már elvégezte munkáját érzi, hogy vissza szeretne menni.</p>

                <blockquote>
                  <p>De jó dolga is volt ám az öregnél! Soha egy rossz szót sem hallott, s ehetett, amennyi jólesett neki.</p>
                  <p>- Evett is eleinte jó étvággyal; hanem aztán valahogyan ízét vesztette a falat a szájában. Egyre kedvetlenebb, egyre szomorúbb lett. Eleinte maga sem tudta, mi leli; hanem utóbb, mikor már jó ideje szolgált Holle anyónál, ráeszmélt; hogy hazakívánkozik. Hiába ment itt ezerszer jobban a dolga, mint otthon, mégiscsak mindig ott járt a gondolata a messzi kis falusi házban. Végül aztán már nem bírta tovább, odaállt szépen Holle anyó elé, és azt mondta neki:</p>
                  <p>- Elfogta a szívemet a honvágy, nem maradhatok tovább nálad. Tudom, százszor jobb sorsom van itt, mégis azt mondja a szívem: vissza kell mennem az enyéimhez!</p>
                  <p>- Tetszik nekem, hogy hazavágyol - felelte az öreg -, ebből is látszik, hogy derék, hűséges teremtés vagy. És amiért olyan becsülettel szolgáltál, én magam viszlek fel a fenti világba.</p>
                  <p>Azzal kézen fogta, és egy nagy kapuhoz vezette.</p>
                </blockquote>

                <p>A lányka tehát saját kívánsága szerint visszakerül világába. Egy kapun kell átmennie. Szerintem ez a kapu a halál tornáca, egy kapu, amely a halálból az életbe vezet, avagy fordítva. Olyan ez mint egy kút... A lényeg, hogy egyik végén be, a másikon ki. De hogy honnan hova, az nehéz kérdés.</p>

                <blockquote>
                  <p>Ha pokolra jutsz, legmélyére térj: az már a menny. Mert minden körbe ér.</p>
                  <cite>Weöres Sándor</cite>
                </blockquote>

                <p>Mit is csinált a lány Holle anyónál? Ott élt nála. Tehát nem volt halott... Végül is halálról szó sincs a mesében, miért erőltetem ezt a témát... Szerintem a mese azt mutatja, nincs halál, nincs elképzelhetetlen túlvilág, csak kapuk egyik életből a másikba. Zavarosnak tűnhet ez, főleg egy meglévő túlvilág-elképzeléssel. De nem sokan emlékeznek előző életükre, és a halálközeli beszámolók sem a halálról, hanem az oda vezető útról számolnak be. De egyöntetűen azt állítják: szép, boldog világ, és egy olyan fényben úsznak, amely nem fogható a földi fényhez. De hogy utána mi következik... A tibeti halottas könyv szerint a kivételesen megvilágosodottaknak, ha nagyon akarják, akkor a nirvána. Az összes többinek meg a szamszára, vagyis újra kell járni az élet iskoláját. A keleti filozófiáknak ez közhelyes, csak nekünk nyugatiaknak nagy szám, hogy képtelenség meghalni, mert jön a következő élet, újra és újra. A következő képek eredetileg a köldökzsinór fejezetnél voltak, de ide jobban illenek. A „puniverzum“ avagy „G.alaxis“ kép találó hasonlat, akár csak a születés-halál alagút.</p>
                <p style={{ columnCount: 2, columnGap: '10px' }}>
                  <img src={withPrefix('images/dns/127bbdae390c17a90692f3c66deb6de8.jpg')} className="ui fluid image" />
                  <img src={withPrefix('images/dns/9a89fd44784303216a1ab156c7e37c14.jpg')} className="ui fluid image" />
                </p>
                <p>Persze az élet nem könnyű, szegény lánykának is rengeteg munkája volt. Méltatlanul bántak vele, mostoha sorsa volt. Nem úgy a másik, akinek arany élete volt, pedig nem szolgált rá. Ilyen a sors, mondhatnánk, de a mese rámutat: jó tett helyébe jót várj. A leány a kútba esik, meghal, de egyben kútból esik, átpottyan a vaginális szimbólumon és megszületik. Előző életében szerzett megrögzött kényszerességgel takarít, teszi a sok jót. És mi lesz a jutalma?</p>
                <blockquote>
                  <p>Azzal kézen fogta, és egy nagy kapuhoz vezette.</p>
                  <p>- Innét most már mehet magad is - mondta -, ez a kapu egyenest a falutok határába nyílik.</p>
                  <p>A kapu kitárult, s abban a pillanatban, ahogy a lány átlépett rajta, sűrű aranyeső hullott rá a magasból, és az arany mind ott ragadt a ruháján; fénylett, csillogott az egész lány tetőtől talpig.</p>
                  <p>- Ez a fizetség a szorgalmadért! - kiáltotta Holle anyó a kapun át, és még a kútba esett orsóját is kidobta utána.</p>
                  <p>A két kapuszárny dördülve becsukódott, s lám a lány, amint körülnézett, ott találta magát a falujuk határában, nem messze az anyja házától.</p>
                </blockquote>
                <p>
                  <img src={withPrefix('images/holle/9cffeb65375d276329471a9fbc76019c.jpg')} className="ui fluid image" />
                </p>
                <p>Kapu és kút, a két elválasztó és összekötő szimbólum. Míg a kút egy sötét nedves cső, addig a kapunak lifegő szárnyai vannak... A lány ismét átkelhet, és ugyanott találja magát, ahol már volt, az életben. De ezúttal már nem a kis koszvadt, mostoha hamupipőke, hanem vagyonában él, jutalmul kapott aranyának köszönhetően. Ismerünk olyan városrészeket, ahol a Gazdagok és szépek élnek? Olyan helyeket a világban amire azt mondják: oda születni kell? A lányka egy ilyen születésen van túl, vagyona nem e-világi, hanem túlvilági erők jutalma, előző életek munkája.</p>
                <p>Ezek után szomorú, hogy vannak olyanok is, akik lusták. Akiknek arany élete van, és nem veszik észre mások szenvedését. Ilyen volt a lusta lány, aki nem mostoha, hanem édes gyermek volt. Mármint az anyjának az édes gyermeke, nem Holle anyónak. Mert a másik lányka, a szorgos majdhogynem az volt, Holle anyó legkedvesebb gyermeke. Nagyon ellentétesek voltak ők ketten, de mégis van valami fura hasonlóság. A szorgos leány a lustával helyet cserél a mese végén. A lusta lesz a koszos, a szorgos az aranyéletű... De vajon mire fogja őket ez a környezet motiválni? Tán csak nem ugyanarra? Elkezdődik egy újabb mese, hogy volt egy szegény szurkos leány, akinek dolgozni kellett, és utálta az életét, és volt egy akinek arany élete volt, mert tetőtől talpig arany borította?...</p>

                <p>Ki is ez a Holle anyó? Értelmezésem és érvelésem igen ambivalens lesz. Két személyről van szó, és egyugyanazon személyről. A fekete istennőről, és a fehérről. A különböző jellemzők, az elkülönítésük egyszerű, de hogy miért mégis ugyanaz, az nehezebb. Szerintem azért lehet összevonni, mert nem tudjuk, melyikkel is állunk szemben, hiszen egy nem e-világi utazás során találkozunk vele, nincsenek emlékeink, tapasztalataink, csak sejtéseink. A jin-jang szimbólumhoz hasonlóan egymást feltételezik. Kéz a kézben járnak, és a legnagyobb ellenlábasok. Sőt, jó-rossz, fekete-fehér megítélésük szubjektív, az aktuális világnézet szerint, a szerint, melyik világból nézzük. Például ha épp meg vagyunk halva, és valahol felszabadul egy üres hely, az ebből a nézőpontból nagyon pozitív. De ha mi vagyunk az üres hely ex-tulajdonosai, az bezzeg mekkora szerencsétlenség.</p>

                <blockquote>
                  <p>Ment, mendegélt, végre egy házikóhoz ért. A házikóból egy anyóka kukucskált ki barátságosan, de olyan hosszú foga volt, hogy a lány megijedt, és el akart szaladni. Az öregasszony azonban utána kiáltott:</p>
                  <p>- Ne félj tőlem, kedves lányom! Maradj nálam; ha minden munkát rendben elvégzel a háznál, jó sorsod lesz. Csak arra vigyázz, hogy jól megvesd az ágyamat, jól fölrázd a párnámat, hadd szálljon a pihéje; olyankor hó hullik fönt a világban. Én vagyok Holle anyó.</p>
                </blockquote>

                <p>Miután a leány átkerül a túlvilágra, és találkozik annak úrnőjével, megijed a nagy fogaitól. Ismét a tibeti halottas könyv halottaknak szóló tanácsai jutnak eszembe: Ne ijedjünk meg a vérivó és csontrágó szörnyektől. A kútba zuhant lányka meghal és teste épp elenyész, a fekete istennő befogadja, testébe veszi. A fekete földbe kerül, alvadt fekete vérét, fekete bogarak, fekete gyökerek emésztik a fekete sötétségben. Azt is gondolhatnánk, ennél már nem is lehetne rosszabb. És valóban, kellemetlen helyzet ez, jogos az ijedelem. De maga az anyó kéri, ne féljen. Ez a fontos tanítás a keresztény kultúrában is megjelenik: Ne féljetek. És valóban az ijedtség csak az első benyomás, a lány nem menekül, az anyó magához veszi.</p>
                <p><img src={withPrefix('images/dns/0_f548d_11f26d1c_orig.jpg')} /></p>

                <blockquote>
                  <p>...Most, a nyolcadik napon a Vérivó Haragvó Istenségek világítanak majd. Igyekezz őket szórakozottságot mellőzve felismerni....</p>
                  <p>– Ó, Nemes Család Fia, a Nagy Dicsőséges Heruka Buddha, a sötétbarna színű, háromfejű, hatkarú, aki négy lábával súlyos-mereven áll, kinek jobb (arca) fehér, bal (arca) vörös, a középső sötétbarna, és (kinek) egy teste van, mely sugarakat lövell, kinek kilenc tág, borzalmas tekintetű szeme van, melyek villámokat szórnak, kinek ragyogó, kiálló egymás fölött álló fogai vannak, ... kinek fejeit kiszáradt (ember) koponyák, valamint a Nap és Hold szimbólumai díszítik, akinek teste körül az övet fekete kígyók és nyers ember (fejek) díszítik...</p>
                  <p>Ne félj tőlük, ne engedd magadat befolyásoltatni...</p>
                  <p>(máshol) Odaadóan bízzál benne, ne menekülj. Még hogyha menekülnél is (lényedtől), elválaszthatatlanul követni fog.</p>
                </blockquote>

                <p className="masonry">
                  <img src={withPrefix('images/holle/black/0d8d2240416eda198833109269465623.jpg')} />
                  <img src={withPrefix('images/holle/black/6e938f21445fbf6af940c6c66bfca945.jpg')} />
                  <img src={withPrefix('images/holle/black/46a59aaf88eb52f94173737cd4ca219a.jpg')} />
                  <img src={withPrefix('images/holle/black/2849456002759d35f8a845a20d05ce6b.jpg')} />
                  <img src={withPrefix('images/holle/black/d48fdc05f4ee275b18f0e07bb731ac5a.jpg')} />
                  <img src={withPrefix('images/holle/black/d1352e2e856bf9a34b93c88aaa528f37.jpg')} />
                </p>

                <p>Az anyag nem vész el, csak átalakul. Az egyik test meghal, a másik megszületik. Az orsó pereg, készül a szál, szerveződnek a szövetek. Az univerzum lassú forgásában a porszemnyi test tehetetlen az őt irányító erőkkel szemben. Ha lejár az ideje, a párkák elvágják élete fonalát, a fonalból mint érből kifolyik az éltető tűz, mint amikor a szorgos lány a kútban mossa a véres szálat, kifeslik belőle a piros. Az élet szálát fonó orsó végleg elkopik, nincs már meg az <b>Orsó</b> jöhet a kop<b>orsó</b>. Egy élet véget ér. A gonosz istennő felzabálja a dögöt, undorító, félelmetes módon. Persze ez a folyamat csak nekünk szörnyű, itt és most. Piroskát eszi épp a fekete farkas, még szép, hogy félelmetes. De az istennőnek azért kell ennie, hogy szülni tudjon. És valóban, a kútba esett lánynak holle anyó mellett új élete kezdődik, mondhatni újjászületik.</p>

                <p>A lány feladatokat kap Holle anyótól, ezeket sorra el is végzi. Az egyik ilyen feladat már a Holle anyó birodalmában tett úja során, hogy a kisült kenyereket ki kell venni a kemencéből, a másik, hogy az almafát rázza, hogy a pirosra érett almák lehulljanak. Megint csak az alma szimbóluma, ami szerintem a női út egyik egyértelmű feladatát mutatja, fenn kell tartania az életet, önmagának is úgy kell eljárnia, mint az istennőnek, ennie kell, szülnie kell és táplálnia kell, hisz az élet fonala rajta keresztül vezet. A kenyér fehér, az alma piros. Rázni kell az almafát, hogy hulljon az alma: az érő almák hullása, a peteérés, az érett peték esése a méhbe, a derék táncoltatása, rázása, a domborodva sülő kenyér, ami ha kész, elhagyja forró barlangját, mind-mind női szimbólumok, kimeríthetetlen mennyiségben.</p>

                <p>Babajaga az oroszok, a szláv népek boszorka alakja a maga módján élet-halál ura, ha akarja, nagyon kedves, ha akarja nagyon gonosz. A magyar mesékben a vasorrú bába jelenik meg, a szó eredete tisztázatlan, vas orú bába jelenthet a hegy ormára állított szobrot is, de a bába rész biztosnak néz ki. A bába szülész-nőgyógyászt jelent, régen ezt a munkát nők végezhették. (Ma már tudjuk, hogy a férfiak jobban értenek a szüléshez.) A megszületendő gyermek anyja méhében egy fejlődési folyamaton megy keresztül, ennek folyamán az embrió kezdetben bab formájú. Pontosabban nehéz megítélni, hogy az embriónak van-e bab formája, vagy a babnak embrió, hiszen a bab is egy embrió. Lényeg, hogy hasonlóság van az ember kicsinye és a növény kicsinye között. A csicsóka gumója is babásodik, a krumpli gumója is ilyen, olykor elkülönül egy kis fejecske, vagy akár végtagok. A dél-amerikai őslakosok ezt a növényt papának, vagy pápának nevezték, hasonlóképp a magyar baba szóhoz. Ebből lett aztán a spanyolok révén papáta, és batáta, illetve másik vonalon potáta és potátó. Úgy tűnik, hogy a bab, baba szó igen elterjedt világszerte, hasonlóképp az ezzel foglalkozó szakember a bába, mint javasasszony, jót akaró nő neve. Ez a szakma nagy tapasztalatot kíván, így művelői gyakran idős korúak, és munkájukból kifolyólag élet-halál urai. Nem de-misztifikálni kívánom Babajaga szimbólumát, épp ellenkezőleg, szeretném összekapcsolni a az élet kezdetét jelentő szimbólumokkal és akár magával Holle anyóval, már legalábbis ami a szakmájukat illeti.</p>

                <h4>A fehér istennő</h4>
                <p>Holle anyó mégis csak a párnából hulló hópihékről híres, fehér az ő birodalma így a Hó-le anyó név is találó lenne. Átvezetésként megjegyezném, hogy a Hófehérke nyitójelenetében valószínűleg serény munka folyt Holle anyónál, hiszen nagy pelyhekben hullott a hó. Visszatérve a szorgos lánykára, nos neki sehol ilyen jó dolga még nem volt. A leírás tényleg a <a href="https://www.youtube.com/watch?v=DefqH54EqZ4" target="_blank" rel="noopener noreferrer">halálközeli élményekhez</a> hasonlít (<a href="https://www.youtube.com/watch?v=2WzzMlfqKzk" target="_blank" rel="noopener noreferrer">további</a>). De visszavágyik. Pont mint a tibeti halottas könyvben. A lélek újra meg akar és újra meg is fog születni. A vágy hozza vissza, a vágy amely a szerelmespárt is tüzeli, a vágy melynek eredménye a gyermekáldás. Az egyetlen dolog, amiért a tibeti papok imádkozni tudnak, az egy szerencsés újjászületés, egy szerencsés kezdet, egy olyan helyen, ahova csak születni lehet, ahova születni kell. Hogy a szerelmesek vágya mozgatja a lelket, vagy a lélek a szerelmeseket, azt nem tudom. Mégiscsak bizarr lenne, ha egy megszületni vágyó lény vonná kontroll alá a leendő szüleinek vágyvilágát...</p>
                <p>Pillantsunk vissza a Hófehérke történetére. Egy télen, mikor nagy pelyhekben hullott a hó, a királynő elábrándozik, megszúrja ujját, és az élet fonala újból színt vált, a fehér fonal vörös lesz, Hófehérke megfogan. Egy kis lélek megszületik majd egy olyan világban, ahová születni kell, mert csak így lehet oda jutni, a Király és Királyné gyermekeként a fehér palotába.</p>

                <p>Nehéz megítélni, mikor, melyik istennő tevékenykedik, hiszen a dolgok egyszerre, párhuzamosan történnek. A Holle anyó mesében nem tudni, mi történik a lánykával, amikor a kútba zuhan. Áthatol a víz tükrén, és elnyeli a sötétség. Nem tudni, ki és hova kerül ekkor. A lány esik-e az alvilágba, vagy az alvilági tükörkép emelkedik ebbe, az ismert világba... Beavatás ez? Egy alámerítkezés, megszentelődés, hogy a magasabb szférákba jusson? Melyik világból jut melyikbe? Pokolból mennyországba, avagy pont fordítva? Melyik a mi világunk? A fehér, a vörös, vagy a fekete? Avagy mind, egyszerre? Ez esetben mi a tükör másik oldala? Ugyanez, ugyanitt, ugyanakkor?</p>

                <div className="ui embed" data-source="youtube" data-id="Kg79EPTiVNE">
                  <iframe title="A megvilágosodás három istennője - Fekete Istennő" width="560" height="315" src="https://www.youtube.com/watch?v=Kg79EPTiVNE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
            </ScrollSection>
            <ScrollSection onEnter={this.onEnterViewport} id="story.fairytales.third-eye">
              <h3>A harmadik szem</h3>
              <div>
                <p>Sokszor említem a keleti filozófiát, a védákat. Ennek oka, hogy a magyar nyelv kultúrájához mintha ez állna legközelebb. A latinból biztosan nem lehet levezetni ismeretlen szavaink értelmezését, de a finnugor testvériségből se nagyon. Ellenben a kelet sok mindenre magyarázatot adott már nekem. Úgy látom, a magyarság egyfajta összekötő kelet és nyugat között, már ami a kultúráját, az ideológiáját vagy egyfajta vallási meggyőződését illeti.</p>
                <p>Egy érdekes példát mondanék erre. Shiva isten a védákban szereplő karakter, s mikor indiai kollégámat kérdeztem kilétéről, ő így írta le: Shivának van egy harmadik szeme, és ha azt kinyitja, a világ megsemmisül. Ez nagyon érdekes volt, mármint, hogy ezt emelte ki. Ron Fricke Samsara c. filmjében mind a kezdő, mind a záró jelenetben ezer karú istennővel találkozunk, így jelzi a világ keletkezését és végét. A semmiből indul és a semmibe érkezik. A helyszín nagyon találóan a sivatag. Csakhogy a sivatag szóban sem tamil, sem malajalam nyelven nincs benne Shiva neve. A magyar nyelven kívül nem tudok másról, amely a sivatagot vagy egyéb sivár, lepusztult helyet Shiva nevével kapcsolatba hozná. Ha valaki tud ilyenről, nagyon érdekelne.</p>
                <p>Shiva harmadik szemének kinyílása és a világ pusztulása közötti kapcsolat szerintem elég egyértelmű. A harmadik szem egy intuitív látás szimbóluma, ezzel lehet látni a láthatatlant. A megvilágosodottaknak nyílik meg a harmadik szemük, ez a szint szükséges ahhoz, hogy meghaladva a világunk ismereteit és érzékszerveinkkel befogadható részét valami másra nyíljon rá a szemünk, illetve mivel ez a szféra szemmel nem látható, a harmadik szemünk. Amint megnyílik a tudásnak ez a csatornája, abban a pillanatban törik össze korábbi, az új ismeretekkel már összeegyeztethetetlen világképünk. A világkép semmisül meg, de egy új kialakul. Mivel Shiva az egész világ istene, az ő világképének megdőlése nagyobb szegmenst ölel fel, ebbe a világba u.i. már maguk a Shiva hívő indiaiak is bele tartoznak. (Akik nem hisznek Shivában, azok biztonságban vannak.)</p>

                <p className="masonry">
                  <img src={withPrefix('images/holle/shiva/7731fee8039ad8c38b3d7ecbcbfe4d92.jpg')} />
                  <img src={withPrefix('images/holle/shiva/1eb07241c9b3fb1294402dad6e88f352.jpg')} />
                  <img src={withPrefix('images/holle/shiva/b23ed708111076c19f84ece5d847ae37.jpg')} />
                  <img src={withPrefix('images/holle/shiva/dbfd0660490c986f7458ab23b36f4a4f.jpg')} />
                  <img src={withPrefix('images/holle/shiva/365a74efdb0c56047b688c8514192f38.jpg')} />
                  <img src={withPrefix('images/holle/shiva/samsara-movie-trailer.jpg')} />
                  <img src={withPrefix('images/holle/shiva/cd7af5f196c4e70bc99e38a431e2976f.jpg')} />
                  <img src={withPrefix('images/holle/shiva/f8276258bf51517e0df39aa903f6ed5c.jpg')} />
                </p>

                <p>Talán beugrik az a népmese, hogy Az Egyszemű, a Kétszemű és a Háromszemű... Biztos vagyok benne, hogy a magyar mesék közt is sok utalást találnánk. De ami még érdekesebb, az a nyugati, pontosabban a skandináv mitológia főistene: Odin. Odinnak egy szeme van. Oroszul amúgy 1: ágyin. A wikin ezt írják róla:</p>

                <blockquote>
                  <p>A legidősebb, legnagyobb és legbölcsebb isten a skandináv mitológiában. Ő a háború, a költészet és a halottak istene, valamint a legfőbb gyakorlója a mágiának (sámán)... Állandóan járja a világot, hogy mindent megismerjen és megtanuljon. Tud alakot váltani, ismeri a jövendőt és a babonákat. De Odin a tudásért nagy árat fizetett. Amikor ivott a Bölcsesség Forrásából, elveszítette a fél szemét.</p>
                </blockquote>

                <p>
                  <img src={withPrefix('images/holle/800px-Manuscript_Odinn.jpg')} className="ui fluid image" />
                </p>

                <p>Nem tudom, ugyanazt érzitek-e mint én, de mintha itt kisiklott volna a történet szála. Judit a kétkedésem helyett egy sokkal érdekesebb elmélettel állt elő: Ez valóban egy beavatás, ez a nyugatias beavatás, egy ellen-megvilágosodás, éppen ezért én a mesék értelmezését ne az anyagi világban keressem. És valóban, a világ azért tart ott ahol tart, mert ilyen eredetmondákra épül. A keletnek eggyel több szeme lesz, a nyugatnak eggyel kevesebb, a magyar pedig mindhárom lehetőséggel számol. A nyugatias beavatás, a térlátás elveszítése egy fókuszált, anyagelvű, nem pedig kitárulkozó, spirituális látásmódhoz vezet. A Hegylakó gondolkodásmódja ez: csak egyetlenegy maradhat. A nyugat eredetmondája a testvérgyilkos férfipár, Káin és Ábel, Romulusz és Rémusz. A magyar Hunor Magor eredetmonda nem ezt a mintázatot követi. A magvető példabeszéd Jézustól könnyebben beilleszthető ebbe a képbe. Érdekes szimbólum a keresztényi kultúrkörben a háromszögben a szem. Nem szemháromság ez, hanem egyetlen szem a szentháromságban. Vajon a mi szemünk hogyan nyílik rá az új világokra? Mit jelent a megvilágosodás számunkra? Ha nekünk nyílna ki egy szemünk más módon, vajon mi lenne az a világ ami megsemmisül?</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.fairytales.holle">
              <h3>Egyéb Holle</h3>
              <div>
                <p>Saját gondolataim lejegyzése után nagy örömmel bukkantam az <a href="http://www.berkano.hu/holle.html" target="_blank" rel="noopener noreferrer">alábbi szövegre</a></p>

                <blockquote>
                  <p>Holle anyó legendája a mai ember számára legfőképp a Grimm mesékből ismert, pedig az emberek eredetileg számos hegyvidéken tisztelték. Sok monda maradt fenn a Hessen északi részén található Hoher Meißner hegység vidékéről is. A Holle anyó-tó (Frau-Holle-Teich) állítólag végtelenül mély, és a néphit szerint ez lehet a bejárat a föld alatti világba, amelyet a Grimm testvérek is leírtak meséjükben.</p>
                  <p>Holle anyót („Frau Holle“) ismerik és tisztelik Holla, Holda, Huld, Hulda, Hilde és Hilda neveken is. Neve a ógermán „Hold“ szóból származik, melynek jelentése „jóságos, hűséges“. Holle anyó fehér ruhát visel, az övén pedig kulcsok lógnak. Általában csúnya öregasszonyként ábrázolják, nagy fogakkal és orral, és ellaposodott lábfejekkel, mely a sok szövésnek-fonásnak köszönhető (a pedál taposásának). Holle anyó mondabeli lakóhelye az Eisenach városához közeli Hörselberg hegy, ahol az anyó a Kitzkammer nevű barlangban tanyázik macskái társaságában. Egyes történetek szerint ezek a macskák valójában átváltoztatott leányok, akiket Holle anyó lustaságukért büntetett meg ilyen módon. ...</p>
                  <p>...Arról is szól a fáma, hogy Holle anyó süteményt, virágot, gyümölcsöt ajándékoz, és különösen nőknek és lányoknak segít, jó évet kíván nekik, valamint egészségessé és termékennyé teszi őket. Emellett a fonónők és a takácsok védelmezője is, emiatt részben a nornákkal és a párkákkal állítják párhuzamba. ...</p>
                  <p>...A bodza olyan növény, amelyet különösen kedves Holle anyónak, valószínűleg a nevét is róla kapta (németül: Holunder vagy Holler). Úgy is tartják, hogy a hópelyhek igazából a bodzacserjének a fehér virágai. Holle anyóhoz való kötődése még egy szempontból magyarázható: Holle anyó élet és halál úrnője, ugyanígy e növénynek is „két arca“ van: fehér virágai és fekete bogyói; jótékony hatású gyógynövény, ugyanakkor egyik fajtája mérgező is. ...</p>
                </blockquote>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/terminal/"
                content="Terminal"
              />
              <NextButton
                to="/theseus/"
                content="Thészeusz"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
