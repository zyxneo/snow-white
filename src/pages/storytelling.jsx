import React from 'react'
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
            <ScrollSection onEnter={this.onEnterViewport} id="story.storytelling">
              <h1>Egyszer volt, hol nem volt,<br /> ...a mesemondás</h1>
              <div>
                <img src={withPrefix('images/story/storytelling3.jpg')} className="ui medium left floated image" />
                <p>Hogy megtudjuk, honnan ered ez a mese, egy kis bevezetőként tekintsük át a meséket úgy nagy általánosságban. A mesét az idősebb generáció – szülők, nagyszülők – mondják el a legfiatalabb generációnak, a kisgyerekeknek. A gyermekek érdekes módon nagyon nyitottak ezekre a történetekre, saját maguk kérik, akár újra és újra ugyanazt a történetet, mint egyfajta szellemi táplálékot, a madárfiókához hasonlóan nyaggatva a szülőket. Élvezik a történeteket, legyenek azok bármennyire borzasztóan félelmetesek vagy bizarrak.</p>
              </div>

              <h3>A hagyaték</h3>
              <div>
                <img src={withPrefix('images/story/storytelling.jpg')} className="ui medium left floated image" />
                <p>A felnőttek tapasztaltak, az idősek még inkább. Túl vannak szerelmen, háborún, életen és halálon, szinte már mindent megtapasztaltak, amit csak lehet… Felnőttként, ha visszagondolunk, pár dologtól szívesen megkíméltük volna magunkat, az elszalasztott lehetőségekkel pedig szívesen élnénk – utólag már könnyen okos az ember. Szívesen elmondanánk a kicsiknek, hogy ezt így, azt meg amúgy… De hogyan?</p>
              </div>

              <h3>A közös nyelv</h3>
              <div>
                <p>Igen nehéz helyzet előtt áll az aki mindent el szeretne mondani, mert egy estébe nem fér bele 60 év. És hiába tanácsolná el az unokát a devizahitelektől, mert mire a kicsi felnő, újabb intézmények teszik majd próbára egy megváltozott világban “trükkök százaival”. A felmenői hibáját pedig egyébként is megtapasztalja, azt már nem fogja elkövetni, fog majd mást. Hogy adhatna az ember tanácsot valami olyanban, amivel maga sem boldogult, vagy nem is találkozott?</p>

                <p>A mese évezredek tanulságait összegzi, képes átívelni korszakokat, képes konzerválni a veszendő információkat. Ráadásul a felnőttek világát egy olyan virágnyelven tárgyalja, amit egy gyermek kezébe is oda lehet adni. A gyermeknek ez a forma tetszik, és úgy játszik vele, mint egy labdával, vagy babával, nem is sejtve a “veszélyes” összetevőket. Mert ebben a kis játékban bizony maró, irritáló anyagok vannak, a felnőtt világ kiszámíthatatlan vegyszerei. A mese különleges tulajdonsága a “gyerekzár”, a “védőkupak”, amit gyermek nem képes kinyitni, valljuk be, mi felnőttek pedig már nem is próbáljuk. Pedig most éppen erre fogunk kísérletet tenni. Kiszabadítjuk a szellemet a palackból.</p>
              </div>

              <h3>A mesemondás történelme</h3>
              <div>
                <p>Érdemes rámutatni, hogy a mesemondási szokások hogyan alakultak át az elmúlt időszakban, és legfőképp arra, hogy az exponenciális ütemben zajló átalakulás a szemünk láttára, épp most tetőzik be. A mesemondás kissé fiktív története tehát:</p>
                <ol>
                  <li>7 millió évvel ezelőttől az 1700-as évekig folyamatos, töretlen, élőszóval előadott mesemondás. Személyes emlékeken és megtapasztaláson alapuló történeteket adott elő az idősebb generáció az 1-2 generációval fiatalabbnak.</li>
                  <li>1700 – 1900 Nyomtatásban megjelent történetek több generációt is át tudtak ívelni. Hogy azért jelentek-e meg a nyomtatott mesék, hogy átmentsék a történeteket, mert az emberek leszoktak a mesemondásról, vagy az emberek azért szoktak le a mesemondásról, mert rendelkezésre állt a kényelmesebb, szórakoztatóbb módszer, nem tudni. De az biztos, hogy a személyre szabott, egyedi történetek elmaradtak, a folyamatosan alakuló, formálódó mesék sztenderdizálódtak, megmerevedtek, és lelkiségük illetve információtartalmuk egyre fogyatkozott, egyre nehezebben hozzáférhetővé vált.</li>
                  <li>1900 – 2000 Megjelenik a film, a mesék nem pusztán hallás, de szemléletes “mozi” formájában is elérhetőek, ami nagyon lenyűgöző, ám maximálisan konzum, és az eredeti mélyrétegtől mentes, vagy akár azzal ellentétes mondanivaló közlésére is alkalmas.</li>
                  <li>2000 – A digitáldiktatúra korában lehetővé vált, hogy nem csak elméleti, hanem gyakorlati értelemben is a világ teljes interneten megosztott információja egyidejűleg elérhetővé váljon minden korosztálynak. Ezzel párosul a választás látszólagos szabadsága, így kialakult egy, az elméért vívott információs-média háború. Ez a háború exponenciális ütemben gyűri maga alá globális szinten a teljesen védtelen tömegeket. A fogyasztói társadalom média-ipar-mágnásai szintetikus mesék tömegeit terhelik a felkészületlen emberekre, végső csapást mérve ezzel a mese ősi apjaira, gyökereire. Innentől a mesék pusztán eszközök, fegyverek azok kezében akiknek kellő anyagi forrás áll rendelkezésére, hogy egyfajta befektetésként, a szellemi és lelki szempontból lárvaállapotban lévő tömegek fejlődését olyan irányba alakítsák, hogy később befektetésük megtérüljön... „az első olyan században élünk, ahol a fiatal generáció oktatja ki az öreget“. A világ kifordult tengelyéből, és lassan nem marad már, ki utat mutasson.</li>
                </ol>
                <blockquote>
                  <p>A történelem mondává vált, a monda legendává...</p>
                  <cite>A gyűrűk ura</cite>
                </blockquote>
                <p>A legenda mesévé, a mese közröhej tárgyává - tenném hozzá...</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.storytelling.symbols">
              <h3>Szimbólumok</h3>
              <div>
                <p>A mesék értelmezését tovább nehezíti, hogy megváltozott világunkból eltűntek azok a használati tárgyak, melyek a régi mesékben szimbólumokként tűntek fel. Ha értelmezni kívánjuk őket, át kell helyeződnünk a középkor emberének világába, egy csendesebb, nyugodtabb, lassabb, természetközeli világba, amikor a léleknek sokkal több figyelem jutott.</p>
              </div>

              <h3>A szimbólumok kiüresedése</h3>
              <div>
                <p>A mese egy érdekes műfaj… Véresen komoly és egyben lágy. Az élet összes színterének valamennyi küzdelmét sűríti egy pontba, egy kicsi, kedves játékba, ami átadható egy gyermeknek, a nélkül, hogy az kárt okozna a gyermeknek, és a nélkül, hogy a gyermek tönkre tehetné… Az egyetlen mód ami ezt lehetővé teszi, egy egyezményes kódnyelv, a szimbólumok világa.</p>
              </div>

              <h3>Rekonstrukció</h3>
              <div>
                <p>Véleményem szerint ez a mese az idők folyamán <i>elkopott</i>, avagy <i>eldeformálódott</i>, így a megértése előtt vissza kell alakítanunk eredeti formájára, vagy jobban mondva vissza kell helyezni eredeti értelmezési közegébe. Nem egyszerű feladat, olyan ez, mint egy ásatás, abból kell kiindulni ami van, minden apró részlet számíthat, de az is lehet, hogy csak odavetődött piszok. Végül, a felállított elméletek mellett még mindig a hallgatóra hárul a feladat, hogy elhiggye, az szikkadt múmia egykor egy szép, életteli lény volt.</p>
                <blockquote>
                  <p>Ahogy a víz gömbölyűre mossa az éles, durva sziklát, úgy kerekíti helyre a tisztán látó elme az eltorzult történeteket</p>
                </blockquote>
                <p>Remélem az alábbi részletezéssel sikerül majd ezt a feltevésem bizonyítani.</p>
              </div>

              <h3>A Grimm fivérek</h3>
              <div>
                <img src={withPrefix('images/grimm/dorothea_viehmann.jpg')} className="ui medium left floated image" />
                <p>Lássuk, mit tudunk a meséről. Azt szinte mindenki tudja, hogy a mesét „grimm fivér“ írta. Szerintem ez az általánosan ismert legrégebbi eredet, ameddig a mesét vissza lehet vezetni. Ide van egy-két érdekes további részletem. A mesét természetesen nem a Grimm testvérek írták, ők „csak“ <a href="https://de.wikisource.org/wiki/Kinder-_und_Hausm%C3%A4rchen" target="_blank" rel="noopener noreferrer">összegyűjtötték</a>, akár csak a német nyelv szavait, szólásmondásait, nyelvtanát is.</p><p>Amikor azon ábrándoztam, hogy hogyan lehet „mesét gyűjteni“ valami nagyon misztikus dolgot képzeltem el. Nyilván ki kell menni az erdőbe érte, az a minimum, és ott mindenféle erdei manót megvesztegetni, hogy valami használhatóhoz jussunk. Nos egy német nyelvű <a href="https://www.youtube.com/watch?v=gaSE-g9wsww" target="_blank" rel="noopener noreferrer">dokumentumfilm</a> szerint a valóság ennél prózaibb volt. Az összegyűjtött dokumentumok azt bizonyítják, hogy a mesék jóval egyszerűbben és olcsóbban voltak hozzáférhetők a házuk közelében lévő piacon. <s>Ott ismerték meg</s> az egyik legismertebbé vált, legfontosabb és legmegbízhatóbb forrásukat, a képen látható Kathatina Dorothea Wiehman geb. Piersont, aki egy <s>teáért</s> cserébe betért Grimmékhez, és elmesélte amit ismert. Az egyik Grimm írta amit mond, <s>a másik lerajzolta</s>. Egy másik <a href="https://www.youtube.com/watch?v=yi8fD_WBnhM" target="_blank" rel="noopener noreferrer">riport</a> szerint Dorothea személye idővel meg lett szépítve, miszerint nem parasztasszony volt, hanem egy képzett nő, aki vendéglőt vezetett, és pusztán az apjától örökölt birtokán leszedett gyümölcsöket adta el a piacon. A „parasztasszony“ megnevezésre pusztán marketinges okokból volt szükség, a nép gyermeke jobban beleillet a kor ideáljába.</p><p>De lássuk inkább mit írnak maguk Grimmék Dorotheáról:</p>

                <blockquote>
                  <p>Különösen nagy szerencsénk volt, hogy a Kassel melletti Niederzwehren faluban megismertünk egy parasztasszonyt, aki elmesélte nekünk a második kötet javát képező és egyben legszebb meséit. Az alig több mint ötven éves Viehman még értelme és ereje teljében volt. Határozott arcvonásaiban volt valami őszinte, megértő nyugalom, és nagy szemeivel kellemes, élénk, tiszta pillantásokat vetett. ... Megfontoltan, magabiztosan mesélt, olykor rendkívüli átéléssel és sebességgel, örömét lelve benne, majd kérésünkre lassabban, így egy kis gyakorlattal le tudtuk jegyzetelni amit mond...</p>
                  <cite>Grimm fivérek</cite>
                </blockquote>

                <p>Arcképe bekerült a Grimm mesék második kötetébe, megnevezés helyett ezzel a felirattal: „a mesemondónő“ („<a href="https://upload.wikimedia.org/wikipedia/commons/3/36/Die_Maerchenfrau.jpg" target="_blank" rel="noopener noreferrer">Märchenfrau“</a>). Ő az egyik legjobban dokumentált forrás, megközelítőleg 40 mesét jegyeznek a nevéhez, és még biztos sok érdekes dolgot, egyvalamit azonban nem: a Hófehérkét. A mese eredete így még inkább a ködös múltba vész. Dorothea történetét azért akartam mindenképp megemlíteni, mert jól példázza a mesemondókat, így a mese útját. A mese átalakulását pedig a maguk a Grimm meséskönyvek bizonyítják 7 kortárs kiadáson keresztül, a mese u.i. több változatban került lejegyzésre, és végül maguk Grimmék csiszolták arra a formára ami jelenleg az interneten is a legelterjedtebb. Csakhogy egy nem az a forma, ami a gyűjtésekből származik, lefogadom, még csak nem is az, ahogyan ismerjük...</p>

                <p>Az első kép L. Katzenstein festménye, Grimmék a mesemondónőnél címmel, a második egy erről készült metszet. Ezeknek a képeknek később még szeretnék külön jelentőséget tulajdonítani...</p>
                <p style={{ columnCount: 2, columnGap: '10px' }}>
                  <img src={withPrefix('images/grimm/viehmann-1.jpg')} className="ui fluid image" />
                  <img src={withPrefix('images/grimm/viehmann-2.jpg')} className="ui fluid image" />
                </p>

                <p>Hófehérke a Grimm Kinder- und Hausmerchen első, 1812-es eredeti gótbetűs kiadásában: (Amúgy ha valakinek megvan ez a könyv engem nagyon érdekelne, szívesem meg is venném, de nem 42.000.000 Ft-ért, amennyiért legutóbb láttam...)</p>
                <img src={withPrefix('images/grimm/schneewittchen.jpg')} className="ui fluid image" />
                <p>Mint később megtudtamegyes részek téves információnak bizonyultak, így kihúztam őket. Nagyon részletes információkat a témával kapcsolatban „Nagy Ilona: A Grimm testvérek mesegyűjteményéről“ című tanulmányában lehet olvasni.</p>
              </div>

              <h3>A mese magyar vonatkozásai</h3>
              <div>
                <p>Az elemzés során - remélhetőleg - a magyar nyelv sajátos egyezéseire is kitérnék. Nem valamiféle nacionalizmus vezérel, pusztán úgy „magyarázom“ ahogy tudom, így ha magyar nyelvi hasonlatokkal élek, tudjátok be annak, hogy csak a megértést próbálom segíteni. Nem Dorothea írja most ezt az elemzést. Neki francia felmenői voltak, így az ő meséi szimbólumainak gyökereit is a francia kultúrában keresik, a fennmaradó rész pedig a Grimmek révén a germanisztika tárgykörét képezi. Szerintem a mesék egyetemes tudást képviselnek. Állítólag a mese alapszerkezete <a href="http://starling.rinet.ru/kozmin/tales/?index=types&searchnumber=709&numtype=" target="_blank" rel="noopener noreferrer">világszerte fellelhető</a>...</p>

                <p>Mielőtt kitérnék a mese történetére, javaslom annak elolvasását, mert mint kiderült, mindenkinek más-más emlékei vannak róla, és lényeges részletek hiányoznak ebből az emlékképből. Nagyon szomorú, hogy egyes óvónők sem tudják a mesét. Nem nevezem meg itt külön őket, úgyis tudják, hogy róluk van szó, elég baj az nekik, hogy szóvá kellett tegyem...</p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/"
                content="Bevezető"
              />
              <NextButton
                to="/hofejirke/"
                content="Hófejírke"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
