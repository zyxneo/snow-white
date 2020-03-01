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
            <ScrollSection onEnter={this.onEnterViewport} id="story.cosmic">
              <h1>A kozmikus Hófehérke</h1>

              <div>

                <p><Image src={withPrefix('images/snowwhite/cosmic/acca2082fcdfe261cec1531f736e5524.jpg')} className="ui image" centered /></p>

                <p>A Hófehérke mese három fő színe kozmikus viszonylatban is értelmezhető. Földi körülmények közt a Nap a pályája mentén a három színt felölti. A felkelő nap vörös színű, majd delelőre jutva fehéren ízzik, a lenyugvó nap ismét vörös, éjjel pedig - jelenléte hiányában - fekete színre vált az égbolt. (Az égtájak neve magyarul viszonlyag egyértelű: keleten a nap kel, nyugaton nyugszik, dél irányában delel, északon pedig sosem jár, ahogy északa sincs fenn az égen.)</p>

                <p><Image src={withPrefix('images/snowwhite/cosmic/6e95fec0666d0f01609bc282a2b103da.jpg')} className="ui image" centered /></p>

                <p>A védikus filozófia segíthet a színek feltárásában.</p>
                <p>A tamasz fekete sötétjében csak kérdés van, de válasz nincs.</p>
                <p>A radzsasz vörös zónájában a kérdésre választ lelhetünk. A <b>válasz</b> a válaszút elágazásának egyik ága, egy választás, az eldöntendő kérdés igen-nem válasza. A <b>felelet</b> egy olyan speciális válasz, amely a kérdésnek fele-lett, azaz a másik fele, a <i>kér</i>dés és felelet így alkotnak egy egészet. (Kérjetek, s megadatik, kérd-és megkapod.)</p>
                <p>A szattva fehér fénytengerében nincs kérdés.</p>
                <p>A Nap fénye délben teljes, az egy igazság fehér fénye ragyogja be világunkat. Egyértelmű, hogy egy nap van az égen. A vörös szín megosztó, egyben a hajnal pírja, a születés reménysugara, és egyben az elmúlás, a kivérzés vörös színe. A kettősség egyértelmű, hiszen egy nap kétszer látható ez a jelenség. Éjjel, mikor a mi Napunk épp nem látható, az éj sötétjében milliónyi csillag ragyog az égen. Ezek a csillagok távoli naprendszerek napjai, önálló fénnyel rendelkező égitestek. Csakhogy ezek a napok nem a mi naprendszerünknek a napjai, hiába a milliónyi csillag, a Földre sötét, hideg éjszaka borul. Egyértelmű, hogy ezek a fények nem mérhetőek össze a Nap ragyogásával. (a sötét téli napokon a hópihék hasonlóképp ragyognak, mint a csillagok)</p>


                <p className="masonry">
                  <img src={withPrefix('images/snowwhite/cosmic/9c1fd8a42db55bebd0037db30cf1f728.jpg')} />
                  <img src={withPrefix('images/snowwhite/cosmic/862996236b86c60d0056ac8e41877d18.jpg')} />
                  <img src={withPrefix('images/snowwhite/cosmic/159e4d518c04e409223e1beabd1e89e5.jpg')} />
                </p>

                <p>A mesében az anyakirályné maga az ősanya, aki az ablak mellett az említett módon valamilyen textilipari elfoglatságot művel. A fekete keret így jobban megfeleltethető a szövőkeretnek, ami kozmikus értelemben az univerzum éjfeketéje, a mindent körülvevő semmi, és a királynő ebbe a fekete semmibe fonja, szövi bele fehér fénnyel a szövetét. A piros vér a vágy, ösztönszerű vágy az életre. Ilyen értelemben a királyné szövetre cseppentett vére ad életet a szövetnek, innentől nem szellemi szinten zajlik az alkotás, hanem elérkezünk az emberek világába, és a nő a gyermek testi szöveteit szövi méhében.</p>

                <p><Image src={withPrefix('images/snowwhite/biancaneve/Biancaneve-28429.jpg')} className="ui image" centered /></p>

                <blockquote>
                  <p>Kívül az idő siklásán mozdulatlan orsó pörög, / ime világot készítünk, túl minden ívbe-foghatón</p>
                  <cite>Weöres Sándor</cite>
                </blockquote>

                <p className="masonry">
                  <img src={withPrefix('images/snowwhite/cosmic/31f63048ede65b6c6cecdeb5c2a7cfc4.jpg')} />
                  <img src={withPrefix('images/snowwhite/cosmic/983e01c677d165f633e762850aa6605f.jpg')} />
                  <img src={withPrefix('images/snowwhite/cosmic/b1be0ab67247565e5a51ca14ba2a7241.jpg')} />
                  <img src={withPrefix('images/snowwhite/cosmic/96744822e8c0958ca19949478a6f98be.jpg')} />
                </p>

                <h3>Szerelem - félelem</h3>

                <p>A feketéből a fehérbe a vörösön át vezet az út. A szerelem érzése minden embert felemel, de a legnagyobb csalatkozások is ebben a zónában történnek. A szerelem képes az embert a fekete kilátástalanságból a megnyugvással teli fehér fénybe emelni, ha csak pillanatokra is. Csakhogy a szerelem maga nem a fény, csak egy lehetséges útmutatás a fény felé. Már említettem, hogy a nap vörös színben kétszer látható, hasonlóképp a két-ségek világa a vörös tartomány.</p>

                <h3>Piroska és a farkas (és a Piroska nagymamája)</h3>
                <p>A fekete-vörös-fehér színhármas más mesékben is megjelenik, noha kimondatlanul. Piroska színe egyértelmű, és a farkas színét is könnyű kitalálni. A nagymamáról az elképzelést önhatalmúlag pontosítanám: ősz, fehér hajú asszonyka frissen mosott fehér ágyneművel. Így már biztos előttünk van a kép, és remélem nem túlzok, ha egyenlőségjelet teszek a két mese <b>színei</b> közé.</p>

                <p>A fekete, vörös és fehér színek jelentéseit már említettem, és a Piroska és a Farkas mese segít ennek további árnyalásában. Piroska, a hús-vér emberi lényke elindul, hogy eljusson az ősanya karakterhez, a fény világába. Az ősanya itt bármi olyat jelképezhet ami ősi, vagy a fehér fényhez köthető, magukat az ősöket, azok szellemiségét, vagy csak magát az ős-szellemiséget, valamiféle fénytudatot...</p>

                <p>Útja során neki is át kell vergődni a mesékből kihagyhatatlan erdőn, ami azt a kusza külső világot jelképezi, amiben élünk, pontosabban azt a kusza belső világot, amit magunk teremtünk, és ami bennünk is él. Itt ismerkedik meg Piroska a másik főszereplővel, aki a veszedelmes sötétség maga. Nagyon érdekes, hogy a farkas simán megehetné piroskát az erdőben. Hazai pályán van, Piroska meg tök egyedül, miért nem eszi hát meg? Mert analizálja, leszkenneli, kiértékeli. Alaposan kifaggatja, és úgy rendezi majd a szálakat, hogy totális nyereséget arasson. Nem éri be a kislánnyal. A sötétség ezen a ponton elhatározza, hogy magát a fényt nyeli el, és megteszi önmagát a lényke céljának...</p>

                <p>Miért is indult el a Piroska? Meglátogatni a nagymamát. Mit visz neki a kosárban? Bort és kalácsot, de én maradnék annál a hasonló verziónál amit sokaktól hallottam: kenyeret és bort. Ez az összeállítás pedig máshonnan is ismerős lehet:</p>

                <blockquote>
                  <p>23. Mert én az Úrtól vettem, a mit néktek előtökbe is adtam: hogy az Úr Jézus azon az éjszakán, melyen elárultaték, vette a kenyeret,</p>
                  <p>24. És hálákat adván, megtörte és ezt mondotta: Vegyétek, egyétek! Ez az én testem, mely ti érettetek megtöretik; ezt cselekedjétek az én emlékezetemre.</p>
                  <p>25. Hasonlatosképen a pohárt is vette, minekutána vacsorált volna, ezt mondván: E pohár amaz új testamentom az én vérem által; ezt cselekedjétek, valamennyiszer isszátok az én emlékezetemre.</p>
                  <p>26. Mert valamennyiszer eszitek e kenyeret és isszátok e pohárt, az Úrnak halálát hirdessétek, a míg eljövend. </p>
                </blockquote>

                <p>Ez a mese szerintem arról szól, hogy a sötétség hogyan nyeli el a fényt, és az emberi lényke a maga gyermeki naívságával hogyan téved el, és döl be csalásnak. A sötétség ugyanis trükkök százait veti be már évezredek óta, és az emberi lény továbbra is tehetetlennek látszik e trükkök ellen. Szinte szánalmas, ahogyan a kis Piroska nem ismeri meg saját nagyanyját, és és összetéveszti azt egy farkassal, annak dacára, hogy látja is az eltéréseket. Piroskához hasonlóan nyilván mi is látjuk az eltéréseket, de a felismerés valahogy mégis elmarad... Elindulunk a fehér kenyérrel és a vörösborral, hogy a fehérbe öltözött emberfia emlékére áldozzunk, és egy feketeruhás alakkal kerülünk szembe. Jézus urunk kivéreztetésének történetét megírták az írástudók, könnyen lehet, hogy ugyanazok, akik a vádiratot írták elveszejtésénél. Ezt a könyvet tartjuk szentnek, amiben írva van, hogy hogy Jézus mennyei atyja azonos azzal a mennyi atyával akinek a kiválasztott népe felszegezte a mennyei prófétét a keresztre, és azóta is ott tartja, hogy így csalja be embertársait hatalmi hálójába.</p>
                <p>Látjuk, hogy bedőlnek a hitelesek? Persze. Kinél tartjuk a vagyonkánkat? A hitelteleneknél, azoknál, akik cinikusan röhögnek embertársaik nyomorúságán. És ahol a kincsünk, ott a szívünk.</p>
                <p>Véleményem szerint az utolsó leki revolúció, vagyis az emberi lélek visszaszerzéséért folytatott szabadságharc 1500 körül lehetett Európában. Szép példája ennek amint Szavonarola felbújtó beszédeire jónéhány kiábrándult firenzei hatalmas máglyát rak a lélek vesztét szimbólizáló vagyontárgyaiból, melyek nem hozták meg a várt boldogságot. A lelki terheket okozó tárgyakból épített mágját elégették, remélve a megszabadulást. Pár évvel később maga Szavonarola ég el firenze főterén, a revolúció leverésének szimbólumaként. Azóta nem sok látványos próbálkozás volt, és véleményem szerint a sötétség megsemmisítő csapást mért a fényre, végleg bekebelezve azt, és önmagát kikiáltva fényként. A farkas megette a nagymamát. Megette Piroskát is, aztán meg a vadászt. Megette a mesemondót. Aztán azokat akik a mesét meghalgatták és így tovább. Igen, mind benn vagyunk a kis gömböcben, és innen bentről, így együtt akár teljesnek is tűnhet a világ. Eléggé okafogyottá vált ellenkezni.</p>

                <p>A Hófehérke mese elején kulcsfontosságú mondat hangzik el. A Hófehérkét teremtő anya - aki mint említettem ősanya illetve általános teremtő szimbólum - az alábbi óhajjal teremti meg Hófehérkét: Legyen fekete, vörös és fehér. És így is lesz. Nyíltan kimondásra kerül hogy a meggteremtett ember mindhárom tulajdonsággal fel lett ruházva. Ott van bennünk mindhárom szín, mind a fehér, vörös és a fekete jellemekkel rendelkezünk. Mégis nagyon érdekes, hogy ezekután Hófehérkét nem Rózsapirosnak nevezik a mesében, és nem is Ablakkeretfeketécskének. És nem csak azért, mert ez nagyon hülye név lenne, vagy mert a testfelszínt alkotó fehér bőr 80% fölötti részarány túlsúlyban van. Az, hogy pont ez a szín lett a kiválasztott, mutatja az ember valódi célját. A teremtő ebben a mesében a fehér színt választja ki kiválasztott színéül.</p>
              </div>
            </ScrollSection>
            <ScrollSection onEnter={this.onEnterViewport} id="thanks">
              <h2>Köszönetnyilvánítás</h2>

              <div>

                <p>Itt szeretném köszönetemet kinyilvánítani Michelangelo Rossato-nak a csodásan illusztrált Biancaneve könyvéért, ami megmutatja, hogy a búvópatak időről időre a felszínre tör.</p>

                <p><Image src={withPrefix('images/snowwhite/biancaneve/12052578_509115469254347_8081025106734679266_o.jpg')} className="ui image" centered /></p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/14915528_669838763182016_3436921408753087924_n.jpg')} className="ui image" /></p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/13247737_592297310936162_8307970861860948396_o.jpg')} className="ui image" centered /></p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/23755330_869583669874190_1326789909525721786_n.jpg')} className="ui image" centered /></p>

                <p>Köszönet Bakos Attilának a védikus filozófia oktatásáért. Elnézést, ha az írásban a tanok eltorzítva jelennek meg. Köszönet Bakos Judit Eszternek a "relax jóga nidrák"-ért, látomásszerű felismeréseket ennek is köszönhetem. És annak, hogy nagyratötő szankalpám rendszeresen az, hogy "Lelkem gyémánt fénye világítsa meg elmémet".</p>

                <p>Köszönet a mesék ősi kincsét fenntartó neves és elfeledett nevű embereknek.</p>

                <p>És legfőképp köszönöm kedvesemnek, Juditnak, hogy több mint egy évtizedes kitartó munkával és sok-sok türelemmel segítette utamat személyes és közös céljaink eléréséhez.</p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/transformations/"
                content="Átalakulások"
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
