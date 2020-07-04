import React from 'react'
import { Image } from 'semantic-ui-react'
import { withPrefix } from 'gatsby-link'
import Layout from '../components/layout'
import ScrollSection from '../components/ScrollSection'
import Footer from '../components/Footer'
import PreviousButton from '../components/PreviousButton'

const data = [
  [
    <span>Fekete</span>,
    <span>Vörös</span>,
    <span>Fehér</span>,
  ],
  [
    <span>(Tamasz)</span>,
    <span>(Radzsasz)</span>,
    <span>(Szattva)</span>,
  ],
  [
    <span>(Nigredo)</span>,
    <span>(Rubedo)</span>,
    <span>(Albedo)</span>,
  ],
  [
    <span>a fény abszolút hiánya</span>,
    <span>felízzó, begyulladó fény vagy<br />pislákoló, kialvó láng (650 – 750nm)</span>,
    <span>a tiszta, teljes fény maga, mely valamennyi színt magába foglalja, törése során válik láthatóvá a szivárvány 7 színe</span>,
  ],
  [
    <span>a szilánkjaira törött Nap az éjszakában</span>,
    <span>a félbevágott Napkorong a horizonton</span>,
    <span>a Nap a maga teljességében az égbolt közepén (a zeniten)</span>,
  ],
  [
    <span>éjszaka</span>,
    <span>pirkadat, hajnal, vagy<br />napnyugta, alkonyat</span>,
    <span>nappal</span>,
  ],
  [
    <span>∞</span>,
    <span>2</span>,
    <span>1</span>,
  ],
  [
    <span>sokság</span>,
    <span>kétség vagy félelem</span>,
    <span>egység</span>,
  ],
  [
    <span>semmi</span>,
    <span>valami</span>,
    <span>minden</span>,
  ],
  [
    <span>halál (mint birodalom)</span>,
    <span>születés vagy elhalálozás</span>,
    <span>élet (a beteljesedett)</span>,
  ],
  [
    <span>pokol</span>,
    <span>kísértésbe esés (<i>kis-értés</i>) vagy <br />gyónás mint gyógyulás, jóvátétel, javulás</span>,
    <span>mennyország</span>,
  ],
  [
    <span>betegség</span>,
    <span>megbetegedés vagy gyógyulás</span>,
    <span>egészség</span>,
  ],
  [
    <span>tudat, elme (test-tudat)</span>,
    <span>testiség, érzékiség, megérzés, hús-vér, eszmélés vagy felejtés</span>,
    <span>lélek</span>,
  ],
  [
    <span>megválaszolatlan kérdések</span>,
    <span>kérdés-felelet, válaszok, válaszutak</span>,
    <span>nincs többé kérdés</span>,
  ],
  [
    <span>statikus gravitáció az anyag tömegközéppontja felé</span>,
    <span>dinamizmus, pulzálás</span>,
    <span>statikus elhivatottság az istenihez</span>,
  ],
  [
    <span>a fa gyökere</span>,
    <span>a fa törzse</span>,
    <span>a fa koronája</span>,
  ],
  [
    <span>
      Hangja az <b>M</b>
    </span>,
    <span>
      Hangja a <b>V</b>
    </span>,
    <span>...
    </span>,
  ],
]

const mese = [
  [
    <span>a mostoha és a vadász</span>,
    <span>Hófehérke és a herceg</span>,
    <span>a kiály és a királyné</span>,
  ],
  [
    <span>a fésű</span>,
    <span>az alma</span>,
    <span>az öv</span>,
  ],
  [
    <span>a holló</span>,
    <span>a bagoly</span>,
    <span>a galamb</span>,
  ],
  [
    <span>Farkas</span>,
    <span>Piroska</span>,
    <span>Nagymama</span>,
  ],
]
const Row = ({ row }) => (
  <div className="summRow">
    {
      row.map(cell => (
        <div key={cell.toString()} className="summCell">{cell}</div>
      ))
    }
  </div>
)

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
            <ScrollSection onEnter={this.onEnterViewport} id="story.summary">
              <h1>Összefoglaló</h1>

              <div>
                <h3>A három szín</h3>
                <p>Az alábbi táblázatban megpróbáltam összefoglalni az említett mesékre jellemző három szín egyéb előfordulásait, jellemzőit és az elemzésem során alkalmazott önkényes asszociációimat.</p>
                <div className="summTable">
                  {
                    data.map(row => (
                      <Row key={row.toString()} row={row} />
                    ))
                  }
                </div>

                <h3>A mesében</h3>
                <div className="summTable">
                  {
                    mese.map(row => (
                      <Row key={row.toString()} row={row} />
                    ))
                  }
                </div>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="thanks">
              <h2>Köszönetnyilvánítás</h2>

              <div>

                <p>Itt szeretném köszönetemet kinyilvánítani <a href="https://www.facebook.com/michelangelorossatoart" target="_blank" rel="noopener noreferrer">Michelangelo Rossato</a>-nak a csodásan illusztrált Biancaneve könyvéért, ami megmutatja, hogy a búvópatak időről időre a felszínre tör.</p>

                <p><Image src={withPrefix('images/snowwhite/biancaneve/12052578_509115469254347_8081025106734679266_o.jpg')} className="ui image" centered /></p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/14915528_669838763182016_3436921408753087924_n.jpg')} className="ui image" /></p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/13247737_592297310936162_8307970861860948396_o.jpg')} className="ui image" centered /></p>
                <p><Image src={withPrefix('images/snowwhite/biancaneve/23755330_869583669874190_1326789909525721786_n.jpg')} className="ui image" centered /></p>

                <p>Köszönet <a href="https://www.danvantara.hu/" target="_blank" rel="noopener noreferrer">Bakos Attilának</a> a védikus filozófia oktatásáért. Elnézést, ha az írásban a tanok eltorzítva jelennek meg. Köszönet Bakos Judit Eszternek a „relax jóga nidrák“-ért, látomásszerű felismeréseket ennek is köszönhetem. És annak, hogy nagyratötő szankalpám rendszeresen az, hogy „Lelkem gyémánt fénye világítsa meg elmémet“.</p>

                <p>Köszönet a mesék ősi kincsét fenntartó neves és elfeledett nevű embereknek.</p>

                <p>És legfőképp köszönöm kedvesemnek, Juditnak, hogy több mint egy évtizedes kitartó munkával és sok-sok türelemmel segítette utamat személyes és közös céljaink eléréséhez.</p>
              </div>
            </ScrollSection>
            <ScrollSection onEnter={this.onEnterViewport} id="links">
              <h2>Ajánlott linkek</h2>

              <div>
                <ul>
                  <li>
                    Snow White and the Seven Dwarfs - Joseph Alexander <a href="http://mythicspiral.blogspot.com/2012/07/snow-white-and-seven-dwarfs.html" target="_blank" rel="noopener noreferrer">http://mythicspiral.blogspot.com</a>
                  </li>
                  <li>
                    Snow White and the Seven Chakras - <a href="https://www.anne-marie.eu/en/snow-white-and-the-seven-chakras" target="_blank" rel="noopener noreferrer">www.anne-marie.eu</a>
                  </li>
                </ul>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/littlered/"
                content="Piroska és a farkas"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
