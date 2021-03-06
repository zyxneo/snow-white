import React from 'react'
import { withPrefix } from 'gatsby-link'
import { Image } from 'semantic-ui-react'
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
            <ScrollSection onEnter={this.onEnterViewport} id="story.bluebarb">
              <h1>Kékszakáll</h1>
              <div>
                <p>
                  <Image src={withPrefix('images/huntsman/bluebarb/d65907abc8d03d63a456cb66126d5718.jpg')} className="ui centered image" />
                </p>
                <p>Kékszakáll története külön fejezetet érdemel. Emlékszem, hogy C.P.Estes Farkasokkal futó asszonlyok c. könyve taglalja ezt a mesét, mert ebben a könyvben olvastam először a történetet, előtte nem is ismertem. Elemzés is volt róla, de odáig vagy nem jutottam, vagy kiesett. De úgy rémlik, hogy ebben a nőknek szóló könyvben az elemzéssel egyértelműen a női psziché rejtelmei lettek feltárva, melyben Kékszakáll akár a nő saját tudatalattijában élő árnyékszemélyiségnek is felfogható.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/bluebarb/76f5a2919efd439117fc5a025e616dac.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/80a49b783ceb8cffab05dd4495f8165d.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/178794e05692530bcf0e73a78c01647e.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/4493416ea4eedd2483e222979bfd39d5.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/a7e4cd1800f4e89f368dc65a0f1a5867.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/d4c00ba8eada2b5bd88a783d492aeee3.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/c779abcae840a0b9b11d1667b7afda0f.jpg')} />
                </p>
                <p>Én közönségesebb okok miatt említeném meg ezt a történetet a Hófehérke mese kapcsán. Számomra elég nyilvánvaló, hogy igenis, vannak Kékszakáll jellegű férfiak, és a Hófehérke mese Vadász karakterét szeretném - önkényesen - összekötni Kékszakállal.</p>
                <p>A hivatalos pszichoalazízis ezen a ponton joggal hördülhetne fel, mondván, hogy pont ellentkezőleg, a Vadász egy segítő karakter, aki a sötét erőket segít legyőzni, Kékszakáll pedig maga a sötét erő. Nos ezzel az általánosítással szeretnék szembemenni, és férfitársaimnak kiutat mutatni Kékszakáll - Vadász - (Herceg) - Király fejlődési út ezen pontjának bemutatásával. E szerint Kékszakáll igenis férfi karakter, méghozzá egy mészáros, egy kíméletlen nőfaló, aki csúful végzi. Hacsak nem tesz életében egy pálfordulást, és a Vadászhoz hasonlóan meg nem könyörül egy szép napon.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/bluebarb/5e7227c99c860c00d8b6944ef438a1f1.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/b506692b7ae9d41a2c734e84daa0b563.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/b3d104557d35d6feb4a2223657fcdea1.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/1de9666961c0067e7188a576d6e0b81b.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/Hermann Vogel.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/28d3a911e5df5d035d2d467e6bea89f6.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.bluebarb.key">
              <h3>A kulcs</h3>
              <div>
                <p>A kulcs szimbólum nyilván a titok nyitja. Csakhogy ennek a titoknak a felfedése lethális.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/bluebarb/3a9cf682f4c313ac05cfc3f286b236f1.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/c7c1dd0b1d6eaac1476f605371af08f5.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/63583c5e28762f64b09a04cca7737e26.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/3b1e9706aa67de65491cfd0f8fbd1281.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/a0e1b2ba0343f4dd261668606f1781e4.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/ae8671676be4d203c0fab981a1577e28.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/142c906510a42b5d0e6f13c4566ba39a.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/barba-azul.jpg')} />
                </p>
                <p>Egy kissé elhajolva a szexuális perverzió irányába, másként is értelmezhető a kulcs. Már maga a kék szakáll szimbólum is furcsa, mivel az ilyen szőrzet szín igen ritka. Inkább a viszerekre jellemző a kékes szín, a szakál pedig amolyan alulról növő szőrzet, lelógó, himbálózó. Amikor a kulcs a zárba kerül, vérezni kezd. Az elmondottak alapján megkockáztatok egy olyan értelmezést is, miszerint az utolsó szoba a nővé válás szimbóluma, a megmásíthatatlan megismerkedés a kékszakállal, a szűzesség elveszítése.</p>
                <p>
                  <Image src={withPrefix('images/huntsman/bluebarb/3123ecf8fa26d7efe00eaeeb62a59193.jpg')} className="ui fluid image" />
                </p>

                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/bluebarb/7e0574662845bc74a18c67787ba333a9.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/212dc07637e8ca4fdb1244b6e69762d1.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/841e7ae1e9e330ab2da282d71dc08481.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/a944736888fd3bbf02b161da1534f88a.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="story.bluebarb.last-room">
              <h3>Az utolsó szoba</h3>
              <div>
                <p>Az aranykulcs egy szobát nyit, méghozzá a legutolsót. A szoba a kastély legmélyebb pontján van, az ide vezető lépcsőfokok lefelé vezetnek. Tulajdonképpen mindegy, hogy hányadik szoba ez, vagy hogy milyen mélyen van, a lényeg, hogy a nő számára végzetes, így az ő szempontjából az utolsó.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/bluebarb/31d4b84310ff222fcc77177283fd7088.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/ericBattut2002.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/eab0a523261b2bedb73f956f1acdf9ba.jpg')} />
                </p>
                <p>Véleményem szerint, ami itt történik, az nem más, mint amikor Thészeusz a helyett, hogy megküzdene a fenevaddal, szimplán felzabáltatja vele kedvesét. Nem próbál meg szembenézni és megküzdeni a bikával, hanem kulcsokat ad a nő kezébe, és a nőt küldi be a labirintusba, külön felhívva a figyelmét arra a szobára, ahol a szörny rejtőzik. Az első szobák csodálatosak, a bika itt még azon tulajdonságait mutatja csak meg, amely lenyűgözi a nőt, az első szobában fennséges, a másodikban izmos és erőteljes, a harmadikban érzékien állatias, és így tovább.</p>
                <p className="masonry">
                  <Image src={withPrefix('images/huntsman/bluebarb/e454031d63ef49d60ab06fee78e1df2a.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/de30e8a69650232adc19cd2a083e9ade.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/4282085a19cbb182cff8d0a3987e6343.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/178ef49638e7d3c0d2a20d44c588ad1b.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/9cb703fb474ab9328c5c9debe2913494.jpg')} />
                  <Image src={withPrefix('images/huntsman/bluebarb/206008a33cf6a6cff18bc2cfc4516def.jpg')} />
                </p>
                <p>Nagyon érdekes, hogy az egymást kiegészítő ellentétpárok itt is megjelennek. Férfi és nő között a vonzódás kölcsönös, szinte minden stimmel, az egyetlen pathológikus részlet a végkifejlet, de ez a történet így kerek. Még szerencse, hogy a nő kíváncsi természetű volt, a férfinek meg történetesen volt titka, ami kiderülhetett. Szóval jól egymásra találtak. Ha a nő megfogadta volna férjeura tanácsát és nem kutakodik, az nagyon unalmas lett volna. Egy idő után valószínűleg a Kékszakáll is megunja az ilyen nőt, kiszeret belőle és elhagyja, mondván, hogy nem tud elég izgalmat vinni a kapcsolatukba. Mert igenis izgibizgi amikor az állatias férfi áldozatául ragadja a naív, ártatlan nőt, magával rántja az alvilágba és és életveszélyes beavatásban részesíti. Nemhiába keresgél a nő a férfi sötét rejtekeben, viszont a naív nő azt reméli, hogy a kíméletlen vadállat vele majd kíméletes és érzéki lesz. ...hát nem.</p>

                <p className="ui embed" data-source="youtube" data-id="X92BQM2HD40">
                  <iframe title="Kékszakáll" width="560" height="315" src="https://www.youtube.com/embed/X92BQM2HD40" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen />
                </p>

                <p>A történet végén a nő megszabadul, Kékszakáll pedig belehal sérüléseibe. És mi a tanulság?...</p>
                <p>
                  <Image src={withPrefix('images/huntsman/bluebarb/8147c44f0755a6adea3e78d0f94b64bf.jpg')} className="ui fluid image" />
                </p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/theseus/"
                content="Thészeusz"
              />
              <NextButton
                to="/transformations/"
                content="Átalakulások"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
