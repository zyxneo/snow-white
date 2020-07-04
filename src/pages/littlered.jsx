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
            <ScrollSection onEnter={this.onEnterViewport} id="story.little-red-riding-hood">

              <h1>Piroska és a farkas</h1>

              <div>
                <h3>(és a Piroska nagymamája)</h3>
                <p>A fekete-vörös-fehér színhármas más mesékben is megjelenik, noha kimondatlanul. Piroska színe egyértelmű, és a farkas színét is könnyű kitalálni. A nagymamáról az elképzelést önhatalmúlag pontosítanám: ősz, fehér hajú asszonyka frissen mosott fehér ágyneművel. Így már biztos előttünk van a kép, és remélem nem túlzok, ha egyenlőségjelet teszek a két mese <b>színei</b> közé.</p>

                <p><Image src={withPrefix('images/littlered/6f1d9da72350e4ba16dfb9541b2d69e0.jpg')} className="ui image" centered /></p>

                <p>A fekete, vörös és fehér színek jelentéseit már említettem, és a Piroska és a Farkas mese segít ennek további árnyalásában. Piroska, a hús-vér emberi lényke elindul, hogy eljusson az ősanya karakterhez, a fény világába. Az ősanya itt bármi olyat jelképezhet ami ősi, vagy a fehér fényhez köthető, magukat az ősöket, azok szellemiségét, vagy csak magát az ős-szellemiséget, valamiféle fénytudatot...</p>

                <p className="masonry">
                  <img src={withPrefix('images/littlered/2b211fe7e2f443d016e1817ad086a881.jpg')} />
                  <img src={withPrefix('images/littlered/5332c4917dd5521d89bff047d420d8a9.jpg')} />
                  <img src={withPrefix('images/littlered/e8e84bd809b296a149b096163ec6c2b9.jpg')} />
                </p>

                <p>Útja során neki is át kell vergődni a mesékből kihagyhatatlan erdőn, ami azt a kusza külső világot jelképezi, amiben élünk, pontosabban azt a kusza belső világot, amit magunk teremtünk, és ami bennünk is él. Itt ismerkedik meg Piroska a másik főszereplővel, aki a veszedelmes sötétség maga. Nagyon érdekes, hogy a farkas simán megehetné piroskát az erdőben. Hazai pályán van, Piroska meg tök egyedül, miért nem eszi hát meg? Mert analizálja, leszkenneli, kiértékeli. Alaposan kifaggatja, és úgy rendezi majd a szálakat, hogy totális nyereséget arasson. Nem éri be a kislánnyal. A sötétség ezen a ponton elhatározza, hogy magát a fényt nyeli el, és megteszi önmagát a lényke céljának...</p>

                <p className="masonry">
                  <img src={withPrefix('images/littlered/c976129664d521dbb5aa6c24aefe02d3.jpg')} />
                  <img src={withPrefix('images/littlered/b0c86e673596989011fd1b6e76bc6949.jpg')} />
                  <img src={withPrefix('images/littlered/fed10bc22332e5cb5b4f57f2f7f2b220.jpg')} />
                </p>

                <p>Miért is indult el a Piroska? Meglátogatni a nagymamát. Mit visz neki a kosárban? Bort és kalácsot, de én maradnék annál a hasonló verziónál amit sokaktól hallottam: kenyeret és bort. Ez az összeállítás pedig máshonnan is ismerős lehet:</p>

                <blockquote>
                  <p>23. Mert én az Úrtól vettem, a mit néktek előtökbe is adtam: hogy az Úr Jézus azon az éjszakán, melyen elárultaték, vette a kenyeret,</p>
                  <p>24. És hálákat adván, megtörte és ezt mondotta: Vegyétek, egyétek! Ez az én testem, mely ti érettetek megtöretik; ezt cselekedjétek az én emlékezetemre.</p>
                  <p>25. Hasonlatosképen a pohárt is vette, minekutána vacsorált volna, ezt mondván: E pohár amaz új testamentom az én vérem által; ezt cselekedjétek, valamennyiszer isszátok az én emlékezetemre.</p>
                  <p>26. Mert valamennyiszer eszitek e kenyeret és isszátok e pohárt, az Úrnak halálát hirdessétek, a míg eljövend. </p>
                </blockquote>

                <p className="masonry">
                  <img src={withPrefix('images/littlered/7415df759b462b82edf1385e214b1aab.jpg')} />
                  <img src={withPrefix('images/littlered/1f45f65d89bcd6bffccc8e2a43596f9b.jpg')} />
                  <img src={withPrefix('images/littlered/039f123fcb04002f8f1843cae9ae8fb9.jpg')} />
                  <img src={withPrefix('images/littlered/a3067dee27591b86b55602df48e1d93b.jpg')} />
                  <img src={withPrefix('images/littlered/3be632df4d8a87e2fb6962643093b081.jpg')} />
                  <img src={withPrefix('images/littlered/3fe43d0f39a41858be1f12355eb6fef6.jpg')} />
                </p>

                <p>Ez a mese szerintem arról szól, hogy a sötétség hogyan nyeli el a fényt, és az emberi lényke a maga gyermeki naívságával hogyan téved el, és döl be csalásnak. A sötétség ugyanis trükkök százait veti be már évezredek óta, és az emberi lény továbbra is tehetetlennek látszik e trükkök ellen. Szinte szánalmas, ahogyan a kis Piroska nem ismeri meg saját nagyanyját, és és összetéveszti azt egy farkassal, annak dacára, hogy látja is az eltéréseket. Piroskához hasonlóan nyilván mi is látjuk az eltéréseket, de a felismerés valahogy mégis elmarad... Elindulunk a fehér kenyérrel és a vörösborral, hogy a fehérbe öltözött emberfia emlékére áldozzunk, és egy feketeruhás alakkal kerülünk szembe. Jézus urunk kivéreztetésének történetét megírták az írástudók, könnyen lehet, hogy ugyanazok, akik a vádiratot írták elveszejtésénél. Ezt a könyvet tartjuk szentnek, amiben írva van, hogy hogy Jézus mennyei atyja azonos azzal a mennyi atyával akinek a kiválasztott népe felszegezte a mennyei prófétét a keresztre, és azóta is ott tartja, hogy így csalja be embertársait hatalmi hálójába.</p>


                <p className="masonry">
                  <img src={withPrefix('images/littlered/1e062620349e5d0ca79745b959ec3c7b.jpg')} />
                  <img src={withPrefix('images/littlered/9afe51306c76428193445f9ec575b038.jpg')} />
                  <img src={withPrefix('images/littlered/9c65c2dcce46b66b675c1968cf1e2828.jpg')} />
                  <img src={withPrefix('images/littlered/09fc60a21699e4ee56203763aab7f401.jpg')} />
                  <img src={withPrefix('images/littlered/024c7a2943a9a98d5dd012dbac603cef.jpg')} />
                  <img src={withPrefix('images/littlered/5f115971c040803519107642ab55c447.jpg')} />
                  <img src={withPrefix('images/littlered/5eb67ddf11a239beb0bbd087a276071c.jpg')} />
                  <img src={withPrefix('images/littlered/ac38e41f19e3b0474cfa29d231351fbf.jpg')} />
                  <img src={withPrefix('images/littlered/092cdc38591a446347913098d37d9ea3.jpg')} />
                  <img src={withPrefix('images/littlered/ed3e6e779686737b01918d882bba193c.jpg')} />
                  <img src={withPrefix('images/littlered/b0229ce8d186ae0be7bb09ebb6b432c3.jpg')} />
                  <img src={withPrefix('images/littlered/b2180a1187e375e95bc5906191f47e22.jpg')} />
                  <img src={withPrefix('images/littlered/dd5cb1b554050c1a1cb1ec3315fc4508.jpg')} />
                  <img src={withPrefix('images/littlered/ab37e51cdb096e5dcb6002e3adf15c39.jpg')} />
                  <img src={withPrefix('images/littlered/ac01fc502f2057adf824cc890f1da222.jpg')} />
                  <img src={withPrefix('images/littlered/39a6e1b0f099abb2eea99a3dae5c804b.jpg')} />
                </p>

                <p>
                  Nem kevesebbet állítok, mint hogy ez az állítólag világszerte megtalálható mese egy olyan történet, amely Európában túlélte a kereszténység térhódítását. Úgy értem, fennmaradt, annak ellenére, hogy az átalakuló és egyre inkább teret és hatalmat nyerő kereszténység üldözte és irtotta a pogányság szokásait, így a népi hagyományokat, kultikus történeteket is. A kereszténység Jézus tanaira épül, mégis, könyve a Biblia két különböző vallás &quot;házassága&quot;. A könyv ideológiájának története pedig maga az ismert nyugati történelem, inkvizíció, búcsúcédulák, kontinensek kiirtása, csupa olyan dolog, amit nem lelni meg Jézus reánk hagyott szavaiban sem.

                  Szerintem az egyetlen ok, hogy ez a történet ilyen sikeresen túlélte a máglyahalált, az a gyermeteg jellege, az hogy a mai napig is a 6-8 éves korosztály történeteihez sorolják, mint gyerekmesét, és rajtam kívül senki meg nem merné kockáztatni, hogy összefüggésbe hozza a keresztényi eszmék megszállásának, &quot;felfalásának&quot; folyamatával.
                </p>

                <p>Véleményem szerint az utolsó leki revolúció, vagyis az emberi lélek visszaszerzéséért folytatott szabadságharc 1500 körül lehetett Európában. Szép példája ennek amint Szavonarola felbújtó beszédeire jónéhány kiábrándult firenzei hatalmas máglyát rak a lélek vesztét szimbólizáló vagyontárgyaiból, melyek nem hozták meg a várt boldogságot. A lelki terheket okozó tárgyakból épített mágját elégették, remélve a megszabadulást. Pár évvel később maga Szavonarola ég el firenze főterén, a revolúció leverésének szimbólumaként. Azóta nem sok látványos próbálkozás volt, és véleményem szerint a sötétség megsemmisítő csapást mért a fényre, végleg bekebelezve azt, és önmagát kikiáltva fényként. A farkas megette a nagymamát. Megette Piroskát is, aztán meg a vadászt. Megette a mesemondót. Aztán azokat akik a mesét meghalgatták és így tovább. Igen, mind benn vagyunk a kis gömböcben, és innen bentről, így együtt akár teljesnek is tűnhet a világ. Eléggé okafogyottá vált ellenkezni.</p>

                <p>A Hófehérke mese elején kulcsfontosságú mondat hangzik el. A Hófehérkét teremtő anya - aki mint említettem ősanya illetve általános teremtő szimbólum - az alábbi óhajjal teremti meg Hófehérkét: Legyen fekete, vörös és fehér. És így is lesz. Nyíltan kimondásra kerül hogy a meggteremtett ember mindhárom tulajdonsággal fel lett ruházva. Ott van bennünk mindhárom szín, mind a fehér, vörös és a fekete jellemekkel rendelkezünk. Mégis nagyon érdekes, hogy ezekután Hófehérkét nem Rózsapirosnak nevezik a mesében, és nem is Ablakkeretfeketécskének. És nem csak azért, mert ez nagyon hülye név lenne, vagy mert a testfelszínt alkotó fehér bőr 80% fölötti részarány túlsúlyban van. Az, hogy pont ez a szín lett a kiválasztott, mutatja az ember valódi célját. A teremtő ebben a mesében a fehér színt választja ki kiválasztott színéül.</p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/cosmic/"
                content="Kozmikus Hófehérhe"
              />
              <NextButton
                to="/summary/"
                content="Összefoglaló"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
