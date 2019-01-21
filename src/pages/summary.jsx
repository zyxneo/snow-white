import React from 'react'
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
    <span>felízzó, begyulladó fény vagy<br />pislákoló, kialvó láng</span>,
    <span>a tiszta, teljes fény maga</span>,
  ],
  [
    <span>a szilánkjaira törött Nap az éjszakában</span>,
    <span>a félbevágott Napkorong a horizonton</span>,
    <span>a Nap a maga teljességében</span>,
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
    <span>kísértésbe esés (<i>kis-értés</i>) vagy <br />gyónás mint gyógyulás, jóvátétel javulás</span>,
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
                <p>...</p>
                <div className="summTable">
                  {
                    data.map(row => (
                      <Row key={row.toString()} row={row} />
                    ))
                  }
                </div>
                <p>A mesében</p>
                <div className="summTable">
                  {
                    mese.map(row => (
                      <Row key={row.toString()} row={row} />
                    ))
                  }
                </div>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
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
