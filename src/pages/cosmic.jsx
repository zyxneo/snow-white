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
                <p><Image src={withPrefix('images/snowwhite/cosmic/16590b724333bf444253a94dfc640c86.jpg')} className="ui image" centered /></p>
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

              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/transformations/"
                content="Átalakulások"
              />
              <NextButton
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
