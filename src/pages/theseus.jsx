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
            <ScrollSection onEnter={this.onEnterViewport} id="story.fairytales.theseus">
              <h1>Thészeusz</h1>
              <div>
                <p>Érdemesnek tartom megemlíteni Thészeusz történetét, ami Grimm gyűjtés formájában is fennmaradt. Thészeusz megküzd a félig bika, félig ember testű Minótaurosszal a Labirintusban. Több alkalommal, több formában is hallottam már a történetet, de az összefüggés a keresztényi kultúrával nem esett le. Pedig igen nyilvánvaló.</p>

                <p className="masonry">
                  <img src={withPrefix('images/theseus/minotaurus/dd201a52ca0536a3717a025c80f047ba.jpg')} />
                  <img src={withPrefix('images/theseus/minotaurus/26e310406d1bb2d4db4cd35b5f93e9b1.jpg')} />
                  <img src={withPrefix('images/theseus/minotaurus/14e313495ece917426f99fff7f6ecaa8.jpg')} />
                </p>

                <p>A keresztényi kultúra ördögképe egy szőrös emberforma szörny akinek patái és szarvai vannak. Persze lehetne szatír is, csakhogy az ördög a föld alatt, a pokolban lakik. És mi is tulajdonképpen a Labirintus? <cite>Egymásba mesterileg bonyolult tévutakból áll az egész. A ki belépett, úgy eltéved ösvényeinek kanyarulatos tömkelegében, hogy csak is csoda által menekülhet.</cite></p>

                <p className="masonry">
                  <img src={withPrefix('images/theseus/labyrinth/347a4ec8622d6f7369041162d307d04b.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/e4ed1bdd56fed47b9350751dea147b02.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/201120712127bf0af40e998401764a5a.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/5880e5d393838778a8453ef82fbef7fb.jpg')} />
                </p>

                <p>Véleményem szerint Thészeusz története egyértelműen összekapcsolható Holle anyó történetével, mégpedig <b>Ariadné fonalával</b>. Bevallom, ilyen részre nem emlékeztem, mintha sohasem hallottam volna.</p>


                <blockquote>
                  <p>Midőn a falhoz ért, fenn az erkélyről egy fának sűrű lombozatán keresztül ugyanazon szűznek bájos arcza mosolygott ki, a kit már egyszer látott, midőn a gyászhajón a koszorú fejére szállt. Ariadne volt.</p>
                  <p>— Nemes ifjú ! — szólitá meg őt gyöngéd hangon — midőn hajótokat jobban látni kívánván, kiebb hajoltam, a koszorú leesett fejemről s a szél nemtője úgy akarta, hogy az a te fejedre szálljon: ugyanazon perczben hallám bizalomtelt felkiáltásodat is s azonnal fogadást tettem magam­ ban, hogy meg foglak menteni. íme, vedd e czérnagombolyagot, szegezd le egyik végét a Labyrinth bejáratánál s a mint aztán beljebb hatolsz, a szerint ereszd folyvást magad után a czérnaszálat. Visszajövet ez leend majd útmutatód, ha ismét lépésről lépésre a leeregetett czérna­ szálat felgombolyítod.</p>
                </blockquote>

                <p className="masonry">
                  <img src={withPrefix('images/theseus/61ef46db660d2f84a5c306756cca6722.jpg')} />
                  <img src={withPrefix('images/theseus/76a8fa9aae928810bf0a20fb6128a924.jpg')} />
                  <img src={withPrefix('images/theseus/7c4ca8a5d69f31e3f11850fc4ca3eafe.jpg')} />
                </p>

                <p>A sötétségbe való leereszkedést tehát ez úttal is egy fonal segíti. Az alvilág alapvetően eltér a két történetben, viszont ugyanúgy próbát kell kiállni, majd visszatérni.</p>

                <blockquote>
                  <p>így haladt folyosókon, alagutakon, ösvényeken, csar­nokokon, szobákon keresztül; majd fel nehány lépcsőn, majd ismét le. Majd úgy rémlett előtte, mintha oly földalatti barlangban volna, melyet maga a természet alkotott; majd olyanban, melyben az emberi kéz nyomára akadt, s mely­ ben a magasabb művészet csínjára ismert. Sötétség azonban sehol sem uralkodott; hanem mindenütt bizonyos alkony­szerű világosság derengett, melynél a tárgyakat egymástól megkülönböztetheté. Azt észrevette ugyan, hogy a napfény felülről lövel alá, de semmikép sem tudta fölfedezni a nyílást, melyen a sugarak behatottak. Hosszú tévelygés után csakugyan meggyőződött, hogy nehéz s csaknem megold­hatatlan feladat: ezen oly csodásán össze-vissza bonyolult menetek, szobák, folyosók útvesztőjéből kibontakozni, mert mindezek épen megfoghatatlan hasonlóságuk által hozták a bennök járót tévedésbe s útját, úgyszólván, mindinkább megnehezíték.</p>
                </blockquote>

                <p className="masonry">
                  <img src={withPrefix('images/theseus/labyrinth/6fc13841c50f4ad3f26ee7f25f008864.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/7bf4b1fac670b13b1cfd4b2d48c3a46e.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/7518878b7a2f764406479354947395b2.jpg')} />
                </p>

                <p>A próbatétel ezúttal a szörny, az Őr-Dög, a Minota-Úr legyőzése. Férfiaknak való feladat, így a Holle anyó a női, míg Thészeusz <b>ugyanannak a belső utazásnak</b> a férfi alternatíváját mutatja be.</p>


                <p>Minótaurosz egy dologban mégis jelentősen eltér az európai ördög-ideáltól: abban hogy legyőzhető, sőt, legyőzésének mikéntje is bemutatásra kerül. A középkori európai ördög sokkal inkább ijesztgetés eszköze, mintsem egy fejlődési út mérföldköve.</p>

                <p>A szál, mely összeköti az alsó és felső világot, lehet egy orsó fonala, egy cérnagombolyag, vagy egy hegymászókötél, melynek segítségével a barlangba ereszkedünk, de akár égig érő paszuly is. De egyben lehet köldökzsinór, mely egyik világból másikba vezet, vagy ezüstszál ami az asztráltest finom fizikai lényét köti össze e durva fizikaival, de lehet ez a végső tudás vezérfonalának aktuális szakasza is.</p>

                <p>Míg a Holle anyó történetében a leány a saját orsóra tekert fonalával indul el, addig Thészeusz Ariadnétól kapja a fonalat. Úgy tűnik, a férfi útjához szükség van erre a külső segítségre. Egyes történetekben a fonál magától gurul végig a Labirintuson, megmutatva Minótaurosz hollétét, másokban Thészeusznak magának kell megtalálni ellenfelét, és a fonal az Ariadnéhoz vezető utat mutatja meg. Az viszont biztos, hogy a fonal két végpontján a nő és a bikatestű férfi állnak, Thészeusz mozgástere erre a vonalra korlátozódik. De mi is ez a Labirintus?</p>
                <p className="masonry">
                  <img src={withPrefix('images/theseus/labyrinth/5527207294aaaf570fc8d22d11ebff30.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/6f5f78b19a70fb4ac1f64428176a0c23.jpg')} />
                  <img src={withPrefix('images/theseus/labyrinth/7ba15119b982edded5c8e6a0a4dea745.jpg')} />
                </p>

                <p>Természetesen önnön belső kiismerhetetlen mélységeink, jellemünk sötétsége, a tudat és a tudatalatti, a kontrollált jellemünk és ösztöneink összessége, az útvesztő, melynek legmélyén ott lakik ő, a sötét felebarátunk, alantas ösztönlényünk, az állat-ember, az őshüllő. Ott mélyen lakik az a megtestesületlen személy, aki ha megtestesülne, mi magunk lennénk az. Ott a sötétben él az a lény, aki a legnagyobb ellenségünk, akit ember le nem győzhet, mert nem emberi lény ő, hanem egy felsőbb (avagy alsóbb) akarat teremtménye.</p>

                <p className="masonry">
                  <img src={withPrefix('images/theseus/f5717ae9a97e4d6e556102505c96b1e2.jpg')} />
                  <img src={withPrefix('images/theseus/minotaurus/085145d34c731261b80291ede7aa0d66.jpg')} />
                  <img src={withPrefix('images/theseus/3dfe21fdbeca8b7d3b17d37b9904ca71.jpg')} />
                  <img src={withPrefix('images/theseus/843e6523dd44c5e28d395ddb244d7d23.jpg')} />
                </p>

                <blockquote>
                  <p>— Hogy pedig a sorsot is tudjátok — folytatá — mely Krétában a hét ifjúra vár, elmondom. Szigetemen egy ret­tentő szörny van, melynek egyedüli tápláléka emberhús, mivel én látom el. A szörny neve: Minotaurus. Én őt azon földalatti épületben tartom elzárva, melyet a halhatatlan építész, Daedalus alkotott országomban. Bizonyosan hal­lottátok ez épületnek hírét, melyet Labyrinthnak neveznek. Egymásba mesterileg bonyolult tévutakból áll az egész. A ki belépett, úgy eltéved ösvényeinek kanyarulatos tömkelegében, hogy csak is csoda által menekülhet. Minden második ujholdkor egy ifjút vitetek a Labyrinthba, táplálékul Minotaurusnak, mert tovább nem tűri e szörny az éhséget s ha az ujholdra következő első napon nem kapja meg táplálékát: székvárosomra s a környékre, sőt gyakran egész Krétára is azonnal valami vészt zúdit.</p>
                </blockquote>

                <p>Amíg ez a lény el van zárva a komplex mélységben, addig biztonságban van mindenki. Csakhogy időről-időre feltámad étvágya, és ilyenkor ifjakat kebelez be, egyes források szerint szűzeket.</p>

                <p><img src={withPrefix('images/theseus/6253576fb2a004a8f012a1bb2d912e19.jpg')} className="ui fluid image" /></p>

                <p>A legenda értelmezése minden férfire éppúgy érvényes, de persze mindenkire személyre szabva. Vannak akik rettegnek ettől a mélységtől, próbálják létezését is eltitkolni, és nem mernek szembesülni a Minutaurusszal, még akkor sem, ha kiderülne, nincs is más ott a sötét mélységben, csak egy kis fehér gyáva nyuszi. Vannak akik küzdenek a mérhetetlen erejű szörnnyel, reggelre legyőzik, de estére a szörny ismét feltámad, és kezdődik a kilátástalan küzdelem újra meg újra. Vannak akik kalandos kedvükben elindultak felfedezni a Labirintust, és összetalálkoztak a hatalmas, szőrös állattal, de kiderült, hogy simán össze lehet haverkodni vele egy cigiért cserébe, nála meg történetesen sör van, és nem fukarkodik vele, így bekucorodva az útvesztő egy zugába egy egész életet is ki lehet bekkelni kártyázgatva, elvégre minek az a nagy felhajtás. Az ilyen tipusu Minótaurosszal rendelkező férfiakra aztán várhatnak az Ariadnék...</p>

                <p>Bizonyára rengeteg eltérő változat létezik, de az ideális esetet a történet szépen bemutatja. Nagyon érdekes, hogy a történet folytatásában a két leánytestvér közül Ariadné elvész. Szerintem ez azt is mutathatja, hogy Minótaurosz legyőzését követően a férfinek nincs többé szüksége a nő azon felére aki eligazítja őt a sötét mélységeiről.</p>

                <p><img src={withPrefix('images/theseus/622cfd87eeccc58aace5767cdcdb8ee1.jpg')} className="ui fluid image" /></p>

                <p>A Thészeusz mítosz feldolgozása a Kontroll című film is. Nem Minoszban, hanem a Metró területén játszódik, de a filmben gyakorta megjelenő M betű összeköti a két történetet. Minótaurosz megfelelője a  lökdösődő, aki szintén a föld alatti járatokban él, Bulcsúhoz hasonlóan, akinek épp meg kell vele küzdenie. Ebben egy lányka lesz segítségére, aki álmában megmutatja neki a szörny rejtekhelyét (vörös füstcsíkot húzva 46:00-nál).</p>

                <p className="ui embed">
                  <iframe title="Kontroll" width="640" height="360" src="//videa.hu/player?v=rtyfcXqc0eu4Jx77" allowFullScreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" frameBorder="0" />
                </p>

                <p>A Minótaurosz és Csipkerózsika különleges egyvelege a Hercegnő és a kobold történet. Thészeusz itt Kóficként jelenik meg, ellenfele pedig Takonypóc, a kobold, aki a bányák alatt a mélységben él. Csipkerózsikára hasonlít Angelika hercegnő, a mese másik főszereplője. A padlásszobában ő is egy fonónőt talál, csakhogy ez a fonó tulajdon őse, jóindulatú, és nem elaltatja, hanem pont hogy felébreszti a lányt. A misztikus nagymama különleges tudásba avatja be Angelikát, és egy fonalat ajándékoz neki. Ennek segítségével a lány szabadítja ki a sötét mélységben, árnyékszemélyisége fogságában ragadt fiút. Érdekes, hogy a fiú bukásának egyik oka, hogy a szüleitől szerzett fonal nem bizonyul használhatónak akciója során, mikor egymaga indul neki a sötét mélység felderítésének. Kófic és Angelika kapcsolata akkor rendeződik, mikor a fiú megismeri a leány nagymamáját, a misztikus női ősképet.</p>

                <p className="ui embed" data-source="youtube" data-id="ez192UDPNms">
                  <iframe title="A hercegnő és a kobold" width="560" height="315" src="https://www.youtube.com/embed/ez192UDPNms" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/holle/"
                content="Holle anyó"
              />
              <NextButton
                to="/bluebarb/"
                content="Kékszakáll"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
