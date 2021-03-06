import React from 'react'
import { Image } from 'semantic-ui-react'
import { withPrefix } from 'gatsby-link'
import Layout from '../components/layout'
import ScrollSection from '../components/ScrollSection'
import Footer from '../components/Footer'
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
            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations">
              <h1>Átalakulások</h1>
              <div>
                <p>Az elemzés lezárásaként pár szabadon értelmezhető következtetést osztanék meg. Minden folyamatosan változik, így mi magunk is, de vajon tisztában vagyunk-e egyáltalán ezekkel a változásokkal, és ha igen, tudjuk-e befolyásolni, irányítani önnön átalakulásunkat? A mesék segítséget nyújtanak az önmenedzseléshez, mivel tartalmazzák az emberi lét fontos fordulópontjainak forgatókönyvét, kulcsot adnak az ősi tudás nyitjához, szépen megrajzolt képekben mutatják be rejtett tudatalattink megfogalmazhatatlan kuszaságát, világokat ívelnek át, és örök érvényű útjelző táblát képeznek életünkben, járjunk bármerre is. Egyszerre szólnak a kisgyermekhez, a gyermekét nevelő szülőhöz és a másik világba készülő öreghez. Ki-ki annyit vesz ki a történetekből amennyit tud, ahol éppen tart az egyén, ott mutat utat a mese.</p>
                <p>A következő részben a felnőttek világára jellemző részeket próbálom meg egyértelműbbé tenni, reményeim szerint a nélkül, hogy közönségessé tenném a szép történeteket.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.snowwhite">
              <h2>Hófehérke átalakulása - a nő jellemfejlődésének útja</h2>
              <div>
                <p><Image src={withPrefix('images/snowwhite/transformation/d08af55c3c132937d429330305423ba4.jpg')} className="ui fluid image" /></p>
                <p>Visszatérve kicsit a Hófehérke meséhez, és azon felismeréshez, hogy a való életünkben az egyes karakterek átjárhatók, azaz dönthetünk arról, mely karakter jellemvonásával felruházva kívánjuk életünket vezérelni, íme pár jellemrajz az egyes állomásokról. Természetesen a való életben ritkán jelennek meg ezek a karakterek vegytiszta formában, de maga a mese tesz tanúbizonyságot arról, hogy érdemes kisarkítani az egyes vonásokat, hogy könnyebben eligazodjunk. A Hófehérke történet nem regény, hanem egy rövidke mese, így nem tartalmaz fondorlatos csavarokat, árnyalt jellem-alakulásokat, csak vegytiszta esszenciáját egy sokkal komplexebb történetnek, magának az életnek. Ezt az elixírt próbálom meg most felhígítani, kibontakoztatni, összekötve ezzel a mese világát az általunk ismert világgal, nem utolsósorban saját életünkkel. Először fel kell ismernünk az aktuális pozíciónkat a térképen, ha szeretnénk eligazodni, először fel kell ismernünk, melyik karakter jelleme uralja épp az életünket, ha szeretnénk változtatni, javítani rajta.</p>

                <p className="masonry">
                  <Image src={withPrefix('images/witch/83c20240358d6259d10ab0e1ec2232cc.jpg')} />
                  <Image src={withPrefix('images/snowwhite/heartless/714f205905464c86268a585d854b080e.jpg')} />
                  <Image src={withPrefix('images/snowwhite/3017b17f75c3d9e3a28481cca638a617.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.snowwhite-and-the-death">
              <h3>Hófehérke és a halál</h3>
              <div>
                <p>Noha Hófehérke nem hal meg a mesében, de nagyon közel kerül hozzá. Ennek az oka a gonosz mostoha szándéka, az elveszejtés ötlete az ő fejében fogalmazódik meg. Első alkalommal amikor a mostoha felbújtja a vadászt, az ő keze tiszta marad, és a vadász megtorpanása bizonyítja, hogy nem értett egyet a tervvel, így ez a szándék kizárólag a gonosz mostoha szándéka marad. A mostohára nem kell feltétlenül külső személyként gondolni, lehet ő egy belső árnyékszemélyiség is. Úgy tűnik, a legtöbb nő életében viszonylag fiatalkorban eljön az az időszak, amikor megkapja ezt a belső elhívást, és az erdő felé veszi az utat. A mesékben a nő útja az erdőbe nem sétaként jelenik meg, a virágos rétre csalt lányka nagyot csalódik, és mint űzött vad menekül be az erdő sötétjébe. Nehéz megfogalmazni, mi is ez az ősi elveszejtő szándék, mi is ez a vágy, avagy félelem, hiszen egy kialakulatlan személyiség bizonytalan, zavart de rendkívül erős érzelmeiről van szó.</p>

                <p className="masonry">
                  <Image src={withPrefix('images/snowwhite/death/9dbfe66649033c9d2e53cbd43284c9a7.jpg')} />
                  <Image src={withPrefix('images/snowwhite/death/55a92caa159c914ae23ee87c69864d4c.jpg')} />
                  <Image src={withPrefix('images/snowwhite/death/da7cdc9f004da24f8fdec89d97623805.jpg')} />
                  <Image src={withPrefix('images/snowwhite/death/bc045b5b1f5d39829fc6e944efd49661.jpg')} />
                  <Image src={withPrefix('images/snowwhite/death/cc2f60e1c2a3014bb87fe8ae6cf67c8c.jpg')} />
                  <Image src={withPrefix('images/snowwhite/death/f76f12c76135471ebd189c7ce27f82a0.jpg')} />
                </p>
                <p>Véleményem szerint a gyermek felnőtté válásának folyamata ez, az a pont amikor a boldog gyermeki lét véget ér, és a nő elhívást kap a túlvilágról, hogy teljesítse be szerepét. Születés és halál ellentétes fogalmak, de így egyazon téma végpontjai. A szerelembe eső nő nem pusztán az életet tartja fenn, de a halálnak is táplálékot nevel, a kaszás, ha aratni akar, előbb vetnie kell. A gyermekvállalás a nő szempontjából is egészségügyi kockázatokkal járhat, a múltban itt dőlt el, hogy az adott élőlény fenntartja-e az életet, vagy maga is kiszáll belőle. Innen a szerelem-halál páros.</p>
                <p>Hófehérkét a halál a vadász képében találja meg, de megkíméli a rémült gyermek életét. Ettől a vadász még nem válik pozitív karakterré, Hófehérke viszont az erdőben ragad. Tovább lazítva a mese merev történetén nyomatékosítanám, hogy a vadász a gonosz mostoha szándékától vezérelve akarja ledöfni Hófehérkét. A mostoha és a vadász így közösen, avagy egyesítve maga a sötét oldal csalja, löki be a gyermeket a sötét erdőbe. A sötét mélység így veszi át a hatalmat a napfényes gyermekkor felett. A nappal éjszakára vált. A fehér feketébe. Nem kell, hogy a karakterek külön személyek alakjában jelenjenek meg, de még csak az sem, hogy külső személyekként. A mostoha és a vadász a tudatalattiból is előtörhet.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.coffin">
              <h3>A koporsó</h3>
              <div>
                <p />
                <p className="masonry">
                  <Image src={withPrefix('images/snowwhite/coffin/0f38ed0ae8ad39b83e59543d3f9cf182.jpg')} />
                  <Image src={withPrefix('images/snowwhite/coffin/209a14383420f1fe2c40169046d3ebc0.jpg')} />
                  <Image src={withPrefix('images/snowwhite/coffin/3c6cd48a6d7a018dea5063f0e1842c7a.jpg')} />
                  <Image src={withPrefix('images/snowwhite/coffin/5794221012224ca998d599f95e67ae67.jpg')} />
                  <Image src={withPrefix('images/snowwhite/coffin/1c99cffe99166a58302ece80defc5b8c.jpg')} />
                  <Image src={withPrefix('images/snowwhite/coffin/dc3e999bceb2ae6726e080ad0a7384c2.jpg')} />
                  <Image src={withPrefix('images/snowwhite/coffin/f83ac76f284011172e3d7d932a46ea97.jpg')} />
                </p>
                <p>Lássuk, hogyan pusztítja el a boszorka a Hófehérkét. Először is megöletné a vadásszal, és a bizonyítékul hozott szívet - avagy az eredeti Grimm verziókban májat és tüdőt - megfőzeti, és megeszi. (Nyersen talán még ijesztőbb lenne...) Megjegyezném, hogy nyugati nyelvekben van alapja a májnak mint szimbólumnak, hiszen ennek neve <i>Liver</i>, vagy <i>Leber</i>, ami <i>Élőt</i> jelent. Ez az esemény hasonlít Aranyhaj hajának levágásához, mindkét boszorka a lány szépségének forrását, avagy életerejét akarja elvenni, megszerezni, magáévá tenni.</p>
                <p>Mivel az akció nem jár sikerrel, a banya újabb eszközökhöz fordul, háromszor kísérli meg a gyilkosságot. Figyeljük meg, itt nem a hagyományos mesebeli három próbáról van szó, a kísérletek ugyan elbukni látszanak, de valójában egy folyamat stádiumait látjuk, ugyanazt a hármast, amire a mese fel van építve, a három szín -  mint jelenet - valóban kapcsolódik a vörös, fehér és fekete színhármashoz.</p>
                <p>Az első szín a fehér. A mostoha egy övvel elszorítja Hófehérke derekát, amíg az nem kap levegőt. Ez a szimbólum magyar nyelven a legérthetőbb, hiszen <i>lélek</i> és lélegzet (e: <i>lélekzet</i>) szavaink mutatják, a légzés és a bennünk élő lélek kapcsolatát. Mondjuk is: Kileheli lelkét - azaz meghal - akinek lelke, mint utolsó lélegzet elhagyja testét. A boszorka első támadása a lélek ellen irányul. Nem hiába, hiszen amikor a vadász megpróbálta megölni a lányt, abban volt annyi <i>lélekjelenlét</i>, hogy kérlelni kezdte gyilkosát, vagyis megoldást keresett az adott szituációban. A lányka szava hatott a vadász lelkére is, így futni hagyta a lányt, de előtte <i>lelkére kötötte</i>, hogy sose térjen vissza mostohájához. A boszorka viszont rátalált Hófehérkére, és ott támadta meg, ahol a legnagyobb kárt okozhatja: a lelkénél. Az első szint a lelki, erkölcsi, hitbéli szint, itt dől el minden. Ennek a funkciónak a kiiktatása elvágja az egyént a spiritualitástól, a transzcendenstől, az istenkapcsolatától, eltéríti azt a fény útjáról, innen a fehér szín.</p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/Biancaneve-28929.jpg')} className="ui fluid image" /></p>
                <p>Nagyon érdekes, hogy a görög nyelv ugyanerre az összefüggésre mutat rá: Atmoszféra azt jelenti légkör, avagy léggömb. De az is atmosz, amit az Isten az agyagfigurába lehelt, hogy az életre keljen. Német nyelven lélegezni: atmen (átmen), azaz a lehellet, lélekzet, levegő szavak más nyelveken is hasonlóan működnek, és összefüggésbe hozhatóak a lélekkel.</p>
                <p>Hófehérke feltámad, s bár a mese nem említi, én hozzáteszem, hogy valamit viszont elvesztett. A mostoha trükkje sikeres volt, és Hófehérke szeme elhomályosodott, nem látja többé önnön lelkét. Lélegzése megindult, de a szimbolikus elfojtás mutatja: lelkének fénye kihúnyt, kapcsolata legbelső önvalójával megszűnt.</p>
                <p>Nagyszerű, jöhet a második szint, az elme. A mesében a mérgezett fésű utal a fejre, a gondolatok helyére. A haj fésülése szintén nőiségi szimbólum, akár csak a karcsú derék, de emlékezzünk a fekete szín jelentéseire, pl.: tudatlanság, elmezavar. Az agy a koponyában foglal helyet, védett helyen van, viszont abszolút sötétségben. A szellem maga gyújt itt világosságot, már ha gyújt. Ezúttal a mostoha gondoskodott róla, hogy miközben szelíden, kedvesen fésülgette a lány haját, hogy az elaléljon, és ezalatt sötét gondolatokkal mérgezte elméjét.</p>
                <p>Hiszen gondoljunk csak bele, mire való a fésű? A hajkefétől a kender és len feldolgozásában használt gerebenig ugyanazt a célt szolgálják a fésűk: az összegubancolódott szálakat rendbe szedik, kiegyenesítik. Hasonlóképp a kusza gondolatok „kifésülése“, rendbe szedése alapvető fontosságú. Ezt ma úgy neveznénk: mentálhigiéné. <a href="https://www.dailymotion.com/video/x5528wr">The Comb (1990) The Quay Brothers</a></p>

                <p><Image src={withPrefix('images/snowwhite/biancaneve/23722789_869583743207516_2844328231479198420_n.jpg')} className="ui fluid image" /></p>

                <p>Hófehérke ismét feltámad, és ismét elveszít valamit, a józan eszét. A mostoha trükkje sikeres volt, és Hófehérke szemére újabb hályog telepedett: a hamis tudás, avagy a tudás illúziója. A második szint az ítélőképesség, a tudat szintje nélkülözhetetlen a helyes életvezetéshez, ehhez az igazság ismerete nélkülözhetetlen, és aki elhiszi a neki tanított valótlan dolgokat, annak életvezetése is megváltozik. Ellenségeit barátnak vélheti, barátait ellenségnek. Kell-e nagyobb átok egy ilyen összezagyvált elménél?</p>

                <p>Mint tudjuk, a mostoha visszatért, hogy kitegye az i-re a pontot.</p>

                <p><Image src={withPrefix('images/snowwhite/biancaneve/Biancaneve-281129.jpg')} className="ui fluid image" /></p>

                <p>Ezúttal az alma szimbólumával a test, pontosabban Hófehérke kibontakozó nőiessége ellen tör.</p>

                <Image src={withPrefix('images/snowwhite/biancaneve/Biancaneve-281529.jpg')} className="ui small left floated image" />
                <p>Hófehérke utolsó meghalása végzetesnek tűnik, bekerül az üvegkoporsóba, a hegytetőre viszik. Egy különleges dolog történik ekkor: eljönnek az erdei állatok megsiratni, először egy gerle, aztán egy holló, végül egy bagoly. A trikolór madarak az elszállt, elveszített tulajdonságok szimbólumai, melyek siratják egykori, immár kiüresedett gazdájukat. Most már kívül vannak, és jobb esetben onnan várják, hogy visszatérhessenek, visszaszálljanak a testbe.</p>
                <div className="clearfix" />
                <p>Az üvegkoporsó az illúzió. Hófehérke olyan, mintha élne de halott. Avagy olyan mintha halott lenne, de él. Különösen érdekes Michelangelo Rossato illusztrációja, ahol az üvegkoporsó ugyanúgy néz ki, mint az anyaméh, jelezve, hogy az anya felnövő gyermekét tulajdonképpen visszagyömöszölte magzati állapotába, egy olyan függő viszonyba, ahol a gyerek az anya segítsége nélkül életképtelen. A szimbólum másik értelmezése szerint a tetszhalott állapot valójában egy új születés kezdete.</p>

                <p style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: '10px' }}>
                  <Image className="ui fluid image" src={withPrefix('images/snowwhite/biancaneve/Biancaneve-28429.jpg')} />
                  <Image className="ui fluid image" src={withPrefix('images/snowwhite/biancaneve/Biancaneve-281429.jpg')} />
                </p>

                <p>Végezetül, modern társadalmunk üvegkoporsója a Mátrix, azaz szinte minden, ami minket körbevesz.</p>
                <p style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '10px' }}>
                  <Image className="ui fluid image" src={withPrefix('images/snowwhite/coffin/matrix/fgpvy.jpg')} />
                  <Image className="ui fluid image" src={withPrefix('images/snowwhite/coffin/matrix/the-matrix-power-plant-bodies.jpg')} />
                </p>
                <p>Csodálatosnak tartom a mese illusztrációja és a sci-fi képei közötti megdöbbentő egyezést. A történet mondanivalója semmit nem vesztett aktualitásából az évszázadok alatt, sőt. Minden eddiginél nagyobb igény lenne az eszmélésre - már ha lenne igénye az eszméletét vesztettnek az eszmélésre. Sajnos mindenkori gyámunk, a gonosz mostoha eszköztára kibővült, és az említett filmhez hasonló látványos „ébresztőfilmekkel“ taszít minket a kábulat egyre mélyebb bugyraiba. Mákonyos infúzión tartott társadalmainkkal azt álmodtatja, hogy felébredünk, és végre szabadon hozunk önálló döntéseket élesen látó friss elménk birtokában. Pedig ez csak a hallucináció újabb szintje, a szer szándékos mellékhatása. De ez már egy másik mese, a Csipkerózsika tárgyköre.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A szívtelen</h3>
              <div>
                <p>Hófehérke a mesében megmenekül. Elég rövid lenne a mese, ha a vadász nem enyhül meg, és sok tanulságról is lemaradnánk. Az életben viszont megtörténik, hogy a vadász a mostoha pártjára áll, és az áldozat ott marad, szív nélkül. Egy olyan, szimbolikus szív nélkül, ami nélkül élni igen, de szeretni nem lehet. A külsérelmi nyomok leplezhetőek, egy szívtelen nő is lehet nagyon szép, kedvesnek tűnő, magabiztos megjelenésű. Akit belül a fájdalom, csalódottság, reményvesztettség emészt, az idővel mégiscsak átalakul. A magány nem jó tanácsadó egy ilyen helyzetben, de egy hasonló társaság sem. A következtetés általában egyértelmű. A fájó hiány és a szomorúság okokat keres, majd vádaskodni kezd. Ha a vád külső személyeket ér el, az elme megnyugszik. Könnyebb beletörődni abba, hogy azonosítja azt a személyt, aki miatt szenvedett, mint önmagában vizsgálódni, és újabb kudarcokkal szembenézni. De ha megvan a bűnös, esetünkben a vadász, úgy nem kell tovább emésztenie magát, sőt, mint áldozatnak kijáró önnön vigasztalásába kezdhet.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/snowwhite/heartless/e138f748be95ecd199467ea4ed8f5220.jpg')} />
                  <Image src={withPrefix('images/snowwhite/heartless/e9b276e7b1ed1f28846e04f84f412858.jpg')} />
                  <Image src={withPrefix('images/snowwhite/heartless/b4c9e8c07e83a23d8b1464548b3afcd7.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A mostoha</h3>
              <div>
                <p>A szívtelen karakter vigasza sok minden lehet. Lehet az egy új cipő, a keserűség okozta ráncok kisimítása egy szépségszalonban, egy szép új ruha, a lehetőségek sora végtelen. Viszont azt az időt, amit a nő önmaga nőiességére fordít, az már nem tudja másra. Ez az idő nem együtt eltöltött idő, hanem egyedül eltöltött idő. Aki örömét leli abban hogy magával törődik, és nem mással, az a másik dolog nézőpontjából mostoha. Ha ez a dolog mindenki más, akkor egyre többen fogják komolyan gondolni, hogy az adott nő egy mostoha. A mese gonosz mostohája is nagyon szép volt, egyenesen a legszebb a világon.</p>
                <p>Az ilyen nő sikeresen eltemette magában szívtelenségének okozóját, elsiratta a múltját, elföldelte azt, aki miatt szenvedett, azokat akikben csalódnia kellett, avagy mindenkit, aki így vagy úgy boldogságának útjában állt. Az életet választja, a saját életét, és éli a nagybetűset, viszont nem veszi észre, hogy valami belül hiányzik. Hiszen élhet-e bárki is boldog életet a szíve nélkül?</p>
                <p className="masonry">
                  <Image src={withPrefix('images/witch/witchcraft/867c02d5f5aefb82fa1fb3dccc4dcb95.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/670491d9e82ac151b33138cd4d21ca07.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/tumblr_mw69d0RUIX1s32irio3_400.jpg')} />
                </p>

                <p>A nő egy lehetséges tévútja az ilyen fekete özvegy karakter. Könnyen itt találhatja magát akár az elvált szülők gyermeke is, aki a bizalmatlanságot még gyermekkorából hozta magával szülői példaként.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A boszorka</h3>
              <div>
                <p>A mese említi, hogy a gonosz mostoha jártas volt a boszorkányságban. Szerintem ez a lejegyzését megelőző korban általános vádpont volt igen sok esetben, így nem hitelességet kívánok adni annak, hogy valóban boszorka lett volna a karakter, de tételezzük fel. A lényeg az, hogy a szívtelen nő elveszíti fényét, ragyogása folyton halványul. Más eszközökhöz kell fordulnia céljai eléréséhez, máshol kell keresnie a sikert. A sötét oldal épp annyi energiával bír, mint a világos, csak tudni kell használni.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/witch/force/df15bf7c503bf9b7710e69a5288cc1ea.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/39f8c6109f31fab7ff2780d518c79574.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/75d498cb2b05cc9a2766e38849182c96.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/b4dc43ec794cb62725352867ec6b3699.jpg')} />
                  <Image src={withPrefix('images/witch/force/6560d4f51e85dbbf393887a2d685f6a6.jpg')} />
                  <Image src={withPrefix('images/witch/force/a779cb089ba00620f5c6a3efa2d17059.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/b13cade9ae6106e6539efdc35b7dc3dd.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/dd736127c4a3a22645cf37fbf26ee00a.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/4b7068d87fb279a30ec32523d19f1d54.jpg')} />
                </p>
                <p>A seprűnyelet lábai közé fogó boszorka ironikus példaképe az önkielégítő nőnek, akinek nincsen szüksége a férfire ahhoz, hogy vágyai kielégüljenek, avagy valamilyen okból kifolyólag nem tudta felépíteni kapcsolatát a férfivel, így maradt a pótlék. A boszorkány sztereotip jellemzői, hogy öreg, csúf és gonosz, csupa olyan tulajdonságok, amik eleve nem teszik szimpatikussá a férfiak számára. A boszorkány legfőbb hibája, hogy a sötét oldalhoz fordul, vélt vagy valós sérelmei avagy hátrányos tulajdonságai miatt meg sem próbálja a fény útját követni, hanem enged az éjszaka elhívásának, és karakterét sötét anyagból építi (pontosabban szólva bomlasztja).</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A belső tűz</h3>
              <div>
                <p>Megemlíteném a vörös szín szerepét, s noha a mese nem tesz erre kifejezett utalásokat, más meséken keresztül próbáltam feltárni ennek a színnek a jelentését, főképp az élet fonalának értelmezésével. Ez a fonal keresztül halad a nő testén, akaratától függetlenül. Van egy másik része ennek a vérmérsékletnek, ami viszont személyre szabott, amit mindenki sajátjának tudhat, ami kontroll alá vonható.</p>
                <p>A belső tűz mindenkiben ott rejlik, tűnjön akármilyen halvérűnek az adott egyén, a hamu alatt ott lapul a parázs. Aki már megégette magát, óvakodik a tűztől, de a belső tűz attól még ott rejtezik, és a felszítható. Háború idején körbehordják a vörös zászlót, ha harcolni kell, kell, ami felszínre hozza az indulatokat. A vér látványa kiváltja a harcolj vagy menekülj ösztönös reakcióját, a vörös mindazt szimbolizálja, ami megindító, ami lázba hoz, ami cselekvésre késztet. A vér mindannyiunk ereiben ott folyik, és az élet élni akar. Civilizált körülmények között érdemes fékezni az indulatokat, hiszen azok kontrollálatlan bevetése megnehezíti a közösségben való együttélést. Így kerül érzelmeink java a véka alá. Mivel nem vagyunk tisztában érzelemvilágunk működésével, nem kontrolláljuk, hanem elfolytjuk azt, így akár ellenünk is fordulhat, illetve szándékunk ellenére, hibásan működik. Önnön éltető erőnk megismerése életünk energetizálásának eszköze lehet.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/witch/force/fa14c771ff0c9f0ad4036cfcb40c84b0.jpg')} />
                  <Image src={withPrefix('images/witch/force/3f1f7fc8962c90074d1dc3eabe28f6aa.jpg')} />
                  <Image src={withPrefix('images/witch/force/9d29be85323d94386a3a375f386262ea.jpg')} />
                </p>
                <p>Előre bocsájtanám, hogy a vörös szín, mint szimbólum megosztó és-vagy összekötő jellegű, és a fekete és fehér színek között áll. Egészen pontosan a tamasz a legalsó szint, majd a radzsasz, lefgelül a szattva. A sötét oldalról felnézve a vörös szín a fénybe vezet, és pozitív változások elhozója lehet. Aki viszont a fényben él, arra már veszélyt jelent ez a változásokat erőszakoló alacsonyabb zóna, és a sötétség felé vezető utat jelzi.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A belső bölcsesség</h3>
              <div>
                <p>A nők veleszületett tehetsége a megérzés, egyfajta belső bölcsesség, amolyan érzelmi intelligencia, egy fogékonyság a túlvilági sugallatokra, kapcsolat az ősiséggel, magukkal az ősökkel. Ez egy olyan képesség, amit jobb titokban tartani, mivel a tudomány jelenlegi állása szerint ilyesmi nem létezik. Korunk legelelvetemültebb dogmája - és akár minden időké - a tudomány, olyannyira dogmatikus, hogy annak lehetőségét is elveti, hogy valaki megkérdőjelezze igazságát. Nem valamiféle hitre épül, hanem - szerinte - az igazságra. Számtalan ezt megelőző dogmatikus hitrendszer is ezt állította magáról, de a tudomány letagadja, hogy maga hitrendszer lenne. De ki látott már mitokondriális DNS-t? Nos senki. A mitokondriális DNS nagyon kicsi, túl kicsi ahhoz, hogy saját szemünkkel lássuk, és meggyőződjünk az igazságról. Elméletek vannak róla, meg vegyészeti eljárások, meg gépek képezte képalkotások. És a tudósok ezeknek hisznek, mi meg a tudósoknak. Ebből a szempontból a tudomány semmivel sem másabb az általa kritizált babonás dogmáktól, délibábos elképzelésektől.</p>
                <p>Álljon még itt egy szomorú példa, az ősrobbanás elmélete. Aki látott már robbanást, az tudja, hogy romokat és pusztítást hagy maga után. Az elmélet viszont azt állítja, hogy az egész ismert és ismeretlen világ egy, a semmiben történt robbanásból alakult ki, méghozzá x milliárd évvel ezelőtt. Maga az időtávlat is olyanná teszi a következtetéseket, mintha egy villámcsapás felvillanó fénye próbálna az adott időpillanatban látott képből történelmi következtetéseket levonni. De a robbanás is szép szimbólum, gondolhatjuk, kiknek a fejéből pattant ki. Mindenesetre kipattant, és az ilyen óriási felfedezésekért Nobel-díj jár, egy olyan díj, amit a dinamit feltalálójáról kapta nevét, és a dinamitból befolyt összegekből indult ki, ami maga is egy robbanószer. Az ilyen gondolatok láncreakció szerűen futnak végig a tudományos életen, és a láncreakció gyakorlati felhasználása például az atombomba. Csakis Amerika vetett be atombombát civil lakosság ellen, és ő az aki terrorveszélytől rettegve büntet minden olyan országot, ahol felmerül az atom gyanúja. Ezzel a hosszúra nyúlt példával szeretném bizonyítani, hogy attól hogy valami tudományos, még lehet iszonyú baromság, és az erkölcs nem képezi részét a tudománynak, de az érdek igen. Az említett tudományos gondolatok az amerikai filmre hasonlítanak, ami robbanással kezdődik, azzal végződik, és nem mellesleg tele van robbantásokkal. Ennél bármilyen más gondolat csak jobb lehet. Merjünk gondolkodni, merjünk az intuíciókra, az álmainkra hallgatni, és legfőképp a szívünkre. Merjünk egy szép, boldog, békés, szeretetteljes világot elképzelni, merjük elhinni a megérzéseket arról hogy honnan származunk és merre kell haladnunk.</p>
                <p>Ha egy nő szembemegy a tudományos tételekkel - amiket többségében mindmáig férfiak alkotnak és minősítenek - vagy olyan egyedi dolgokkal áll elő ami kívül esik a tudomány határain, akkor ma is ugyanazt a kirekesztést kapja, mint a középkorban, csak ma már nem égetik meg.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/witch/witchcraft/9a0e74737279a3c4dfc9c39d99b7ec54.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/218ec300f4513fea1b17ca2daf629e76.jpg')} />
                  <Image src={withPrefix('images/witch/force/0ec72b9142a6383141461c9aeae51f60.jpg')} />
                  <Image src={withPrefix('images/witch/force/3816d01ed18685c5b9cde31f83c392c0.jpg')} />
                  <Image src={withPrefix('images/witch/witchcraft/065b8a71b2c1c9c43abcf1075bd188ba.jpg')} />
                  <Image src={withPrefix('images/witch/force/5ff62575b1fb9de0738cc5f12e55d661.jpg')} />
                </p>
                <p>A nő egyik feladata, hogy belső bölcsességét kibontakoztassa, és logikusan, szeretettel, tisztességgel, de megfellebbezhetetlenül tudjon érvelni a boszorkányégetők vádjai ellen. Ehhez a tükör nagy segítségére lehet, csak helyes kérdéseket kell feltenni neki.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A legyőzhetetlen árnyékkirálynő</h3>
              <div>
                <p><Image src={withPrefix('images/witch/force/chao-huang-qq-20180131153402.jpg')} className="ui fluid image" /></p>
                <p>Direkt tettem be ezt a képet ilyen nagy méretben, nehéz lenne szavakkal ilyen szépen kifejeznem mondanivalóm, mint ahogyan a kép alkotója ezt már megtette. Azon képek közé tartozik ez is, melyek igen népszerűek, hiszen korunk egyik hőséről van szó, egy sikersztoriról, egy karrierről: a gonosz mostoháról.</p>
                <p>Idézzük fel mit is tudunk a gonosz mostoháról:</p>
                <ol>
                  <li>Ő a legszebb nő a világon. A mesében ezt a tényt az igazmondó tükör közli. Vágyik-e egy nő a szépségre? Naná, különben becsődölne a szépségipar. De a gonosz mostoha nem csak szép, ő szebb akar lenni másnál. Ö történetesen mindenki másnál szebb akart lenni. De miben is mérhető a szépség?</li>
                  <li>Jártas a boszorkányságban. Okos, értelmes nő, aki tudja, hogyan működnek a dolgok. Nem lehet átverni.</li>
                  <li>A király felesége, tehát a királynő. Hatalmi pozícióban van. Parancsot adhat a vadásznak, hogy pusztítsa el konkurenseit.</li>
                  <li>Szívtelen, kegyetlen. Akinek nincs szíve, annak semmi sem fáj, és akinek kegye nincs, annak nem lehet a kegyében tenni. Ezek a tulajdonságok pajzsként óvják egy nyílt, vagy akár álnok támadástól.</li>
                </ol>
                <p>Ha egy nőben egyesül a szépség, a tudás, a hatalom és ezt arra használja, hogy a sötét energiákkal, egyfajta fekete mágiával még többre tegyen szert, akkor egy felettébb démonikus karakter alakul ki. A férfiak a lába előtt hevernek, átgázolhat bárkin és bármin, hullák amerre jár, férfiak, nők vegyesen, ki ezért, ki azért.</p>
                <p>Egyetlen dolgot nem állhat, Hófehérkét. Csak a Hófehérke képes elpusztítani, mivel egy tiszta szívű, szeretetteljes és szerethető nő mindig szebben ragyog, mint egy elaljasult, önző dög. A vérszívó fekete özvegy nagyon sikeres tud lenni, de mindig csúf véget ér. Ezt nem tanítják a marketinges könyvek, a reklámoknak sem ez a mottója, és attól, hogy egy bálvány összetörik, még maradhat a vezérigazgatói székben. De ki szeretne magának ilyen életet?</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.heartless">
              <h3>A legyőzhetetlen fénykirálynő</h3>
              <div>
                <p><Image src={withPrefix('images/witch/witchcraft/b3766cc7410fee5754c328d72a63fb85.jpg')} className="ui fluid image" /></p>
                <p>Ide nem találtam jobb képet, de remélem megteszi. Ez a karakter nincs a mesében, viszont ez lenne a gonosz mostoha lehetséges alternatívája.</p>
                <p>Attól, hogy valaki szép, okos, és van hatalma, még nem kell, hogy gonosz legyen. Noha nehéz megállni, de minden megtanulható. Ez a karakter hagyatkozik a szépségére, ami megadatott neki, de nem erre építi fel az életét. Ha meg történetesen a lába előtt hevernek a férfiak, könyörögve, akkor mondjuk nem tapos át rájuk, hanem a mindenkit megillető tisztelettel és megértő szeretettel keres megoldást.</p>
                <p>A mesékben gyakran találkozunk királyokkal és királynőkkel. A nőt a férfi emeli királynői szerepbe amikor a lába elé teszi mindenét, és ezzel felmagasztalja. A nő ugyanígy magasztalhatja fel a férfit, amikor mindenét átadja.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.fate">
              <h3>A párka</h3>
              <div>
                <p>A mesebeli királynő valójában egy párka, vagyis egy ősanya karakter. Hófehérkét úgy hozza létre, akár egy szép textíliát, a semmiből fonja valamivé, az élet szálából szövi élő emberi szövetté. Meghalása szimbolikus lehet, jelezve hogy ő egy égi anyácska. Még tágabb értelemben ő maga a teremtő, aki az embert teremti, és midőn teremti, megadja annak tulajdonságait: legyen fehér, vörös és fekete. Fehér mint a lenfonal, fekete mint a rokka kereke, vagy a szövőszék kerete.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/queen/fates/87bbd392139ab439c63de878b70cb585.jpg')} />
                  <Image src={withPrefix('images/queen/fates/473e392b5465e101a98a7396c2e99e35.jpg')} />
                  <Image src={withPrefix('images/queen/fates/10baad9779af529bb5b56e701e270601.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.prince">
              <h2>A herceg átalakulása - a férfi jellemfejlődésének útja</h2>
              <div>
                <p><Image src={withPrefix('images/huntsman/transform/fa2a04d970a14491556259db4ab84051.jpg')} className="ui fluid image" /></p>
                <p>Azt is gondolhatnánk, hogy a férfi jelleméről, karakterének alakulásáról helyesebb képet adok majd, lévén én is az vagyok. De nem. Bevallom, a férfi mibenlétéről még annyi fogalmam sincs, mint a nőről. Csak szeretek írni róla, mint a Csernus doktor, mert elszórakoztat. De nem tudom, mit is írjak, nyilván mást kellene, mint a nőről... De miben más egy férfi, úgy értem mi olyat tud egy férfi, amit egy nő nem?</p>
                <p>Az az igazság, hogy a modern férfi puding. Lehet, hogy kigyúrt, de belül mégis puding és gyerek. Mit tud egy férfi ma, amit egy nő ne tudna? Ma már a nők a tökösek, büszkék az erejükre, a szellemi termékeikre, a karrierjükre, hogy önálló dzsungelharcosok a betondzsungelben. Mije van egy férfinek, ami a nőnek nincs? Nos, persze van egy szerve, fityeg rajta a bőr, és vannak nők akiket ez elszórakoztat, de mi mást tud nyújtani egy férfi a genetikai változékonyságon kívül, ami csak tőle kapható meg?</p>
                <p>Ez a téma nehéznek bizonyul, hisz a többi férfi gondolat és vágyvilágáról éppen úgy nincsen tudomásom, mint a nőkéről, illetve még kevesebb van (mivel ez nem érdekelt). Ráadásul akasztják a hóhért, ha leszólom a férfiakat, magamat is leminősítem. És egyáltalán, mi köze a Hófehérke mesének ehhez?</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.prince-appears">
              <h3>A herceg felbukkan</h3>
              <div>
                <p><Image src={withPrefix('images/prince/a835c5a48f2c5f3fbb26ec4f0c1328d9.jpg')} className="ui fluid image" /></p>
                <p>Amikor a férfi útját említem a Hófehérke mesével kapcsolatban, egy karakter mindenkinek eszébe jut, a herceg. Nagyon pozitív, hiszen megmenti Hófehérkét, feleségül veszi, és boldogan élnek, míg meg nem halnak. Fantasztikus. De ennyivel ennyi. A mese nem ad sokkal több eligazodási pontot, hiszen a herceg mégiscsak mellékszereplő, egyfajta kellék, nem tudjuk honnan jön, egyszer csak felbukkan, és mint hős megmenti a bajba jutott nőt. Nem hiába lett a nők ideálja az ilyen herceg, úgy tűnik, lehet rá számítani a bajban, hűséges, és odaadással imádja a Hófehérkét, figyeljük csak:</p>
                <blockquote>
                  <p>Így telt-múlt az idő nyárra tél
                  télre nyár, a lombok lehulltak meg újra kizsendültek,
                  a fészkekben madárfiókák csivogtak, és
                  zsenge kis őzgidák dörzsölgették bársonyos
                  nyakukat a vén tölgyek derekához, És egyszer
                  egy ilyen tavaszi napon egy királyfi vetődött az
                  erdőbe. Addig-addig bolyongott, míg ki nem bukkant a
                  tisztásra, ahol Hófehérke pihent az üvegkoporsóban.
                  Elolvasta az aranybetűs felírást, aztán
                  leült egy kidőlt fatörzsre, és csak nézte,
                  nézte a szépséges halottat. Ott ült, amíg
                  le nem szállt az este, akkor bekopogtatott a törpék
                  házába, és szállást kért
                  tőlük éjszakára. Azok szívesen befogadták,
                  megkínálták vacsorával is, de a királyfinak
                  nem volt kedve enni, csak ült szótlanul, maga elé
                  meredve, mint akinek a szívét nyomja valami.
                  </p>
                  <p>Végül aztán rászánta magát,
                    s így szólt a törpékhez:
                  </p>
                  <p>- Adjátok nekem ezt a koporsót. Megfizetek érte!</p>
                  <p>- De mi a világ minden kincséért sem válunk
                    meg tőle! - felelték a törpék.
                  </p>
                  <p>- Hát ha pénzért nem adjátok, adjátok
                    nekem ajándékba - kérte a királyfi -,
                    mert én nem tudok úgy élni tovább, hogy
                    ne lássam mindig Hófehérkét.
                  </p>
                  <p>Olyan esengve, oly búsan kérte, hogy a törpéknek
                    végül is megesett a szívük rajta, nekiadták
                    a halott Hófehérkét.
                  </p>
                  <p>Akkor a királyfi előszólította a szolgáit,
                    és megparancsolta nekik, vegyék vállukra, s úgy
                    vigyék haza kastélyába a koporsót. Azok
                    meg is indultak vele, s amint vitték, egyikük egyszer
                    csak megbotlott egy cserjeágban. A koporsó megbillent
                    a vállukon, s attól a rázkódástól
                    Hófehérke szájából kifordult a
                    mérges almadarab; mert amikor a gyümölcsbe belekóstolt,
                    túl nagyot harapott, és a falat megakadt a torkán.
                    Szeme felpattant; felemelte a koporsó üvegfedelét,
                    felkönyökölt a selyempárnán, és
                    csodálkozva felkiáltott:
                  </p>
                  <p>- Hol vagyok?</p>
                  <p>- Nálam! - felelte boldogan a királyfi. - Te vagy a
                    legdrágább nekem a világon; gyere velem édesapám
                    kastélyába, légy a feleségem!
                  </p>
                </blockquote>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.fallen-prince">
              <h3>A bukott herceg</h3>
              <div>
                <p>Nagyon szép az, amikor így ér véget a mese, csodálatra méltó, amikor két ember párkapcsolata első próbálkozásra tökéletesre sikerül. Viszont én most fekete varjúként azt károgom, hogy a válások statisztikája mást mutat, hogy egy olyan dologban, amiben nincs gyakorlata az embernek, abban egyszerűen gyakorlatlan, és a hiba lehetősége is fennáll. Nevezetesen, a herceg könnyen tesz ilyen ajánlatot, hiszen Hófehérke fiatal, csodaszép, és mi azt is tudjuk, hogy egyben királylány. (Egyetlen baj vele, hogy halott)</p>
                <p>A herceg azonban el fog bukni. Persze, majd egy másik mesében, például a Háromágú tölgyfa tündérében, és akkor Hófehérke mehet vissza a koporsóba. Miért olyan egyértelmű?</p>
                <p className="masonry">
                  <Image src={withPrefix('images/prince/transform/b17d24ac369c34a0da1da9f6da8749d2.jpg')} />
                  <Image src={withPrefix('images/prince/transform/fdd0b90328b044e66d8d103dcbb6030e.jpg')} />
                  <Image src={withPrefix('images/prince/transform/8daeeb008e81c950466fb7baa29be872.jpg')} />
                  <Image src={withPrefix('images/prince/transform/2297848269164c76b7d7d57dfc948132.jpg')} />
                  <Image src={withPrefix('images/prince/transform/a9e62abe1f07cfc1b5917313e1484a4a.jpg')} />
                  <Image src={withPrefix('images/prince/transform/d1e27a284feb8f5830c260e7139418bf.jpg')} />
                </p>
                <p>Azért, mert a herceg egy lárva. Semmi tapasztalata a palotán kinti életről, egyszer kiment sétálni talált egy Hófehérkét, és meghozta élete nagy döntését, hogy igen, a világ legszebb nője megfelel neki, elfogadja olyannak amilyennek megismerte, holtan fekve, hogy épp nem beszél, és a szolgákkal beviteti a palotába, nem is tudom, a mauzóleumba...</p>
                <p>Kicsit ironikus, de a bukás kódolva van. És mi lesz a bukott herceg útja?</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.huntsman">
              <h3>A vadász</h3>
              <div>
                <p>A vadász karakter nem lárva, ő nem puding, legalábbis a küzdelmét tekintve nem. A vadász nem első körútján van a palotából frissen kisétálva, naivan, tejbajusszal. Nem. A mesében épp Hófehérkét viszi ki az erdő sötétjébe, mint fehér nyuszit a vágóhídra, hogy kivéreztesse, és épp csak annyira esik meg a szíve, hogy nem vágja ki a Hófehérkéét, inkább ott hagyja a sötét éjszakában, had zabálják fel az erdei vadak. Ez rutinra vall. A vadász megfeleltethető a gonosz mostohának, hiszen azt teszi, amit a gonosz parancsol. Másfelől a vadász a mesékben állítólag segítő karakter, lásd Piroska és a farkas, ahol segítőként jelenik meg. (Mármint Piroska segítőjeként.) A Hófehérke mesében érdekes szerepet kap, nehéz megítélni, mi is történik vele, mert engedelmeskedik is a parancsnak, meg nem is, a királynő kegyeltje is meg nem is, szabadon kolbászol a sötét erdőben, aztán meg rabként sínylődik a sötét börtönben...</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/b3a9fe2484194a4707ff955f7df30587.jpg')} />
                  <Image src={withPrefix('images/huntsman/caff303f7d903719630909f238ea8899.jpg')} />
                  <Image src={withPrefix('images/huntsman/e90c121aa020b2faae63ccc50b8ebb0e.jpg')} />
                  <Image src={withPrefix('images/huntsman/ea835ccca4df39a02addb501cb47af44.jpg')} />
                  <Image src={withPrefix('images/huntsman/da029ca1f7bee01f61333f3d42cfc38c.jpg')} />
                  <Image src={withPrefix('images/huntsman/f8aa726249c8adbe60b61349ef0f8818.jpg')} />
                </p>
                <p>A vadász egykor herceg lehetett, aki elbukta előző szerepét, és másik utat választott magának. A mostohához hasonlóan áll át a sötét oldalra, és annak energiájából merítkezik. Korunk hőse a vadász, nemhiába lett a hollywoodi Hófehérke film címe A hercegnő és a vadász. Nem a herceg. A vadász. A Vadász a főhős, mert az ő karaktere testesíti meg a világot vezető ideológia házi-kedvencét, a kitenyészteni kívánt új embertípust, így érthető, miért invesztálnak annyi pénzt az ilyen filmek legyártásába.</p>
                <p>De a herceg javára legyen mondva, nem biztos, hogy a herceg egy gyanútlan kis kukacból lett csodálatos lepke. Lehet, hogy komolyabb átalakuláson esett át, így nem nevezhető tapasztalatlannak. Ez az az eset, amikor Hófehérkét a vadász viszi be az erdőbe, de a herceg hozza ki. Nem biztos, hogy ugyanazt a Hófehérkét, de lényeg, hogy a vadászból is válhat herceg.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.power">
              <h3>Az őserő</h3>
              <div>
                <p>...</p>
                <p className="masonry">
                  <Image src={withPrefix('images/king/transformation/0048cbaaf5489bb8b8e7f852e5d73bdf.jpg')} />
                  <Image src={withPrefix('images/huntsman/witchcraft/e7b816ed3ad861cae71b3a1df3bce245.jpg')} />
                  <Image src={withPrefix('images/huntsman/witchcraft/c826841cbbb20078cab3da8ee59f171b.jpg')} />
                  <Image src={withPrefix('images/huntsman/witchcraft/d2c3b80ffa881772adf95e2a245648f3.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.intellect">
              <h3>Intellektus</h3>
              <div>
                <p>...</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.management">
              <h3>Küzdelem - Uralom - Félelem</h3>
              <div>
                <p>Azt hiszem nem tévedek, ha azt állítom, hogy a férfi útja a küzdelmek útja. De hogy pontosan mivel kell megküzdeni, és miért, az nehéz kérdés. Talán a Thészeusz történeténél elmondottak mutatják be legjobban ezt a küzdelmet.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/transform/0f0b403c891079d0e994fbedb2e3aa2d.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/b325ab7aceae9d5895bcfd9be7ee68d1.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/d8f0f19f061255b3b2260bd293c9e59e.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/d9d6f8aeecdeb8c55a11de5f28f3a608.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/7b6b64de4a4d810f1a30f05a7dd06430.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/08f4287ba09fbc2742e67ae886f1effd.jpg')} />
                </p>
                <p>A legnagyobb ellenség maga a sötét felebarát, a jellem legmélyén szunnyadó gonosz karakter, az egó azon része, amely az egyed anyagi megmaradásáért küzd. Viszont az egyén másik része, a lelkek a szabadulásért küzd, a sötét anyag börtönéből a fény felé szeretne eljutni.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.other-half">
              <h3>A jobbik fél és a rosszabbik, Hófehérke és a vadász</h3>
              <div>
                <p>Hófehérke jellemzően a fehér, míg a Vadász jellemzően a fekete színnek feletethető meg, így kettejük közt igen erőteljes a kontraszt. A mese nem kettejük szerelméről szól, de az élet igen gyakran. Szokták mondani, hogy az ellentétek vonzzák egymást. Férfi és nő vonzala azonban nem tudja megmásítani a kettejük közötti ellentétet.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/transform/d267c62a643154db99635dcd067574f4.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/19ee7eaadc58e3ccfba06af9eb9d86c3.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/925c675b37e20345a2e6131eafea4bea.jpg')} />
                  <Image src={withPrefix('images/huntsman/transform/232ead3ade09157c20a874262613a127.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/3cfa95f84c5ef0666ecf5e5dd4c9c46c.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/4dc208a042867ed446c5060559bf35a6.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/5a9dce45bcfec099e66cd04d02f333b2.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/075b2ea01438236c2ac2362660ee1cd1.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/2814c94ab7c41d903cad66fe0d92996d.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/287007fd6a5eef425725ece77d008bcd.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/adc16e9e7e057d01668a578bd50f8937.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/db321f54244b0f1278297aded6483767.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/dbc8a538c2ec79965544d4b8f8548faa.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/eca70e4bea0ec69ea592fba52efd3d8b.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/f1d428cdb19de2c49d81130f24fc4b4c.jpg')} />
                  <Image src={withPrefix('images/huntsman/huntsman-and-snowwhite/f2b421c44f452504ddcdeb75222beb0d.jpg')} />
                </p>
                <p>Aki szerelmes, az valójában fél. Fájó lehet ezt belátni, de szükséges. Arra is mondjuk hogy fél, ami nem egész. A két-ség reciproka a fél-elem, amikor az ember nem egységként van jelen életében, hanem kétsége támad, és hiányzó felét próbálja pótolni. Mikor társát megtalálja és vele egyesül, ismét kialakul az egység. A szerelmi vágy azonban nem képes tartósan felemelni az embert a ragyogásba, hiszen alaptermészete a vágy, ami még az illúzió világa.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.transformations.fallen-king">
              <h3>A bukott király</h3>
              <div>
                <p>A Hófehérke mese király karaktere igen tutyimutyinak nevezhető. Végső soron ő is elbukta küldetését, hiszen nyilvánvalóan nagyobb körültekintéssel is végezhette volna feladatát. De most nem erről a királyról kívánok szólni. Ez a király nincs benne a mesében, de a szimmetria kedvéért megemlíteném, hogy ez a király lenne a gonosz mostoha férfi megfelelője, vagyis jó megjelenésű (a nők bálványa), hatalmi pozícióban lévő (gazdag), értelmes (a világot ismerő, abban eligazodó vagy akár azt irányító) és elaljasult.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/king/transformation/3ba3f8e6a8ac28e0a6a1d7d13ed6a122.jpg')} />
                  <Image src={withPrefix('images/king/transformation/551376cf511cc7bbc413f70c6f53f5e8.jpg')} />
                  <Image src={withPrefix('images/king/transformation/32e967f53aa10bfaf8bfd41f0c2ebe83.jpg')} />
                  <Image src={withPrefix('images/king/transformation/a9b341d1dd918457024853a1f857b595.jpg')} />
                  <Image src={withPrefix('images/king/transformation/9e8cbeea5d5c03a3f9a8b82770b09663.jpg')} />
                  <Image src={withPrefix('images/king/transformation/a85250af52f7c0f029d938b864150517.jpg')} />
                </p>
                <p>Ha a herceg elbukik, az belefér, hiszen próbaidős. De ha valaki odáig viszi, hogy a sötétség királyává válik, az már veszélyes. Az ilyen férfi nem indul a labirintusban lévő szörny legyőzésére, hanem kibontakoztatja azt, és másokat próbál legyőzni vele.</p>
                <p>Corruptio optimi pessima – a legjobbak romlása a legrosszabb.</p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/bluebarb/"
                content="Kékszakáll"
              />
              <NextButton
                to="/cosmic/"
                content="Kozmikus Hófehérhe"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
