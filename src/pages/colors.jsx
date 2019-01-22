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
            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.color">
              <h1>Szín-szimbolika</h1>
              <div>
                <img src={withPrefix('images/color/f45122644bfb6b126e0035c22375a506.jpg')} className="ui medium right floated image" />
                <p>Külön kiemelném a mesében elhangzó színeket, mivel szerintem kulcsfontosságúak. A német Grimm változat nem is asszociál úgy mint a magyar, pusztán így fogalmaz: „Hófehérke fehér volt és vörös és fekete“. Ez a megfogalmazás külön nyomatékot ad a színeknek, és annak elhallgatása, hogy mi volt fehér vörös és fekete, misztikusabbá is teszi ezeket a színeket. Az értelmezésben a történet fonala lehet segítségünkre, fontos hogy az egyes szereplőit (<b>szín</b>észeit) és a hely<b>szín</b>eket megfelelő színben lássuk.</p>
                <div className="clearfix" />

                <p>Ez a három szín (<a href="https://en.wikipedia.org/wiki/Albedo_(alchemy)">albedo</a>, <a href="https://en.wikipedia.org/wiki/Rubedo">rubedo</a>, <a href="https://en.wikipedia.org/wiki/Nigredo">nigredo</a>) képezi az u.n. <b>alkímia</b> tudományának alappillérét is, Jung a jellem fejlődésének stádiumaival felelteti meg őket. Nem túlzás, ha a teljes mesét e három kulcsfontosságú színnel színezzük ki, ha a színészeket, helyszíneket lecseréljük pusztán az őket szimbolizáló színekre, pontosabban azoknak ősi, természeti jelentésére.</p>

                <p style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '10px' }}>
                  <img className="ui fluid image" src={withPrefix('images/alchemy/c3e58e02a541466fe04c3fe1f33c3155.jpg')} />
                  <img className="ui fluid image" src={withPrefix('images/alchemy/fdbc382d7be3eb09544e3111373c278c.jpg')} />
                </p>

                <img src={withPrefix('images/sybmol/triguna.gif')} className="ui small left floated image" />
                <p>A színek pontos jelentésére talán az indiai védikus kultúra adja meg a legjobb választ, ami 6000 éves történetével minden bizonnyal a legősibb forrása ennek a hármas tagolódásnak. A védákban a három kötőerőt (gunát) avagy a három <i>létszintet</i> a <b>tamasz</b>, <b>radzsasz</b> és <b>szattva</b> nevekkel említik.</p>
                <div className="clearfix" />
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.white">
              <h3>Fehér</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p className="masonry">
                  <img src={withPrefix('images/queen/idea/8ca556273fb212b40469c59c5f4e235e.jpg')} />
                  <img src={withPrefix('images/queen/idea/3b0533bc9fd85bbaad659e658d3bc8e5.jpg')} />
                  <img src={withPrefix('images/king/white-gandalf/18550501fa0e50bf04a648e29da89d22.jpg')} />
                  <img src={withPrefix('images/heart/2a272b50d6b4c4e5cc2e9941f43b26a1.jpg')} />
                  <img src={withPrefix('images/queen/idea/3b3097965a5f431b73a4a6e927a77dde.jpg')} />
                  <img src={withPrefix('images/queen/idea/cc48a57b48ad26bfbf678776cec68ea5.jpg')} />
                </p>

                <p>Hó, hófedte téli táj, fehér márvány kastély, ősz haj, szakáll. Hidegség, higgadtság, fagyott idő. Fény, világosság, tudatosság. Tisztaság. Tej, fehér bőr. Élet a halálon túl - mennyország.</p>
                <p>Szattva, az örök ragyogás, a lélek birodalma, „az egyensúly, kiegyenlítés, a rend, tisztaság, világosság, nyugalom, könnyűség, jóság sajátossága“.</p>
                <p>A király és a királyné színe, a lakhelyük színe, az évszak (időszak, idő) színe.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.black">
              <h3>Fekete</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p className="masonry">
                  <img src={withPrefix('images/jail/66ee69fe21c7fa2441e506b91189bce4.jpg')} />
                  <img src={withPrefix('images/color/black/8b00b2377e0d432ee0a59ed003ae3074.jpg')} />
                  <img src={withPrefix('images/fates/three-witches/59055b35262f74c0a7ff6bd39123ded6.jpg')} />
                  <img src={withPrefix('images/forest/dark-forest/b9ece34d886dce6fbbe361b6a9721a81.jpg')} />
                  <img src={withPrefix('images/forest/dark-forest/9232e0166dba4a36c6c9840b16d5c8b5.jpg')} />
                  <img src={withPrefix('images/huntsman/d55dfc2284013fb3d7821236e032febf.jpg')} />
                </p>

                <p>Sötét, gonosz, alattomos, rejtőzködő, rejtett. Kiismerhetetlen mélységek. Sötét látásmód, tudatlanság, elmezavar. Tisztátalanság. A test halála, a feketére alvadt vér, hullafolt.</p>
                <p>Tamasz, a rossz karma, a tehetetlenség létállapota. Rossz annak aki benne van, annak aki csinálja, annak aki látja...</p>
                <p>A mostoha és a vadász színe, a mostoha egykori (özvegyi) várának színe, az éjszaka (éj időszaka, idő) színe amikor operálnak, a szándékaik színe, a sorsuk színe. A börtön sötétjének színe. Valamint az erdő mélyének, a bánya kiismerhetetlen mélységének színe.</p>

                <p>A tamasz, tehetetlenség világát nagyon szépen írja le a Három kívánság című mese. A sötétben, üresen kongó üst mellett tehetetlenül és éhesen ülő pár egyszer csak kiugrási lehetőséget kap, és hármat kívánhat. Az első kívánság elmegy a pillanatnyi ösztönök kielégítésére egy kolbász képében. A második kívánság az első visszacsapása, a vágy okozta szenvedés. Itt egy káromkodás hangzik el, ami maga is egy kívánság, hisz aki káromkodik, az a káromat kívánja, és a visszahatás miatt, ha én káromkodok, akkor a saját káromat kívánom. Egyszóval nem jó ez senkinek, nekik sem volt az. A harmadik kívánság ebből következően a belátás és a kármentés, tűnjön el az a kolbász. Így a nevetségessé és szánalmassá váló párocska oda jut, ahol eredetileg is volt, ahol a part szakad, a sötét, üres, kilátástalan életébe. Pedig a csoda nekik is ugyanúgy megadatott...</p>
                <div className="ui embed" data-source="youtube" data-id="5RKUUis-R78">
                  <iframe title="?" width="560" height="315" src="https://www.youtube.com/embed/5RKUUis-R78?start=4137&end=4191" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.red">
              <h3>Vörös</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p className="masonry">
                  <img src={withPrefix('images/witch/force/050e942ece00f702bdfad4485a982309.jpg')} />
                  <img src={withPrefix('images/witch/force/8ba7129dafee2e6e504cf2f2151c988f.jpg')} />
                  <img src={withPrefix('images/color/red/c172016bf5a11d2cf765cae1fec5218d.jpg')} />
                  <img src={withPrefix('images/witch/force/c1d5e420f3ed62a5f9c74be285902236.jpg')} />
                  <img src={withPrefix('images/witch/force/855eb5f16d2cd0a5edaddbcd0f35b95b.jpg')} />
                  <img src={withPrefix('images/heart/6b5e64e20feeb2a1c48ab70b99c3d661.jpg')} />
                  <img src={withPrefix('images/snowwhite/apple/08db9f037ebe1ac724ec3a453c9941f1.jpg')} />
                </p>

                <p>Tűz: fűt, feltüzel, belső energia. Forróság, forrongás, hőség, hős. A lüktető, oxigéndús vér színe, életerő, vágy az életben maradásra, az Élet maga. Vér-vonal, test-vér-, háború.</p>
                <p>Radzsasz, az érzékiség világa. (noha a szó „királyit“ jelent, a mesében a király és királynő szimbolikusan a szattva létszintjéhez tatozik) „a mozgás, erőkifejtés, lendület, nyughatatlanság, szenvedélyesség sajátossága“.</p>
                <p>A szerelmespár színe, a szív színe, mely egymásért dobog, és mely veszélyben van. A vágy színe, „a vágy hozza létre a mennyországot és a poklot“ (Bakos Attila - A Duna evangéliuma). </p>
                <p>A napfelkelte és a naplemente színe, vagyis a napkorong azon színe, amely félúton közötte áll a delelő, vakító fehér fénynek és az éjszaka fekete sötétjének. A párkák által font élet fonalának a színe, mely születés és halál között húzódik. A vörös áll a fekete és a fehér között, a jellem alakulása innen két irányba történhet.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.redInWhite">
              <h3>Vörös a fehérben</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p className="masonry">
                  <img src={withPrefix('images/color/redInWhite/61f200ce5d1cbfa1b372587ed53b274d.jpg')} />
                  <img src={withPrefix('images/color/redInWhite/adf2ed7ca19303e56101a90fe3b35851.jpg')} />
                  <img src={withPrefix('images/snowwhite/apple/c6586df26d90555f2b71b5ea524c637b.jpg')} />
                  <img src={withPrefix('images/snowwhite/heartless/7afa7274e69aa04461aa118fff448083.jpg')} />
                  <img src={withPrefix('images/snowwhite/heartless/24020e0d4a4d1f87b9c0cda731c19251.jpg')} />
                  <img src={withPrefix('images/color/redInWhite/12e9208cc45a3ca1079a1c35f617aa5a.jpg')} />
                  <img src={withPrefix('images/color/redInWhite/db0590d3facf4ff93fe7b58eeaf4e159.jpg')} />
                </p>

                <p>Melegség, belső tűz, áldozati vér fájdalma. Hamu alatt lapuló parázs. A fehér bőr alatt lüktető oxigéndús vér. Lángoló szerelem. Tisztaság és érzelmek, tiszta érzelmek. Hófehérke a mérgezett alma piros felével.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.redInBlack">
              <h3>Vörös a feketében</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p className="masonry">
                  <img src={withPrefix('images/color/black/90873d4004395b90e48c834fb13ed82a.jpg')} />
                  <img src={withPrefix('images/color/redInBlack/8f73b470d8d8b179455f204e3a35de4e.jpg')} />
                  <img src={withPrefix('images/color/redInBlack/206ea10d8ed432874d379be8d1df000c.jpg')} />
                  <img src={withPrefix('images/witch/force/e56116d42dd5ae36a1dea54b6c38b5d9.jpg')} />
                  <img src={withPrefix('images/color/redInBlack/9b141f41db3ad4ab79a1dc351c2a89f8.jpg')} />
                  <img src={withPrefix('images/color/black/d39b33f1987f4328efd24483aab4d0b5.jpg')} />
                </p>

                <p>Kioltott megalvadó vér, bűn, a sötét gyűlölet heve, “pír-per”. Pusztító tűz, ami fekete üszköt és romokat hagy hátra. A rég elaludt tűz után maradt hamu alatt lapuló parázs.</p>
                <p>A három kívánság karaktereinek fejlődési útvonala ez, a tehetetlen sötétségből az érzékkielégítés vágya ide vonzza őket, számukra a teli has is státusszimbólum, az ösztönök megélésének és az anyagi függetlenségnek világa is komoly cél, mely számukra elérhetetlen marad, hiszen visszaesnek a sötétségbe.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.redInBlack">
              <h3>Fehér a feketében</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p>...</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.color.phonetics">
              <h3>Fonetika</h3>
              <div>
                <p>Alább az egyes színekhez tartozó beszédhangokat kísérelem meg megadni. A feltevésemet Dr. Balla Zoltán - A szemléletes gondolkozás logikája (természetes a-b-c) című művére alapozom, melyet zseniálisnak tartok. A V hang teljes egészében, és nyilvánvaló tisztasággal írja le a vörös zóna fogalomkörét - tehát nem magát a színt, hanem annak jelentéstartalmát a mese és életünk kontextusában - így a hang leírása többet mond, mint bármi más amit a színről mondhatnék.</p>
              </div>

              <h4>A fekete hangja az <b><a href="http://www.osnyelv.hu/osny0/zzz/bz_szgl.web.html#m" target="_blank" rel="noopener noreferrer">M</a></b></h4>
              <p>A tömbösség, tömeg vagy belső üreg hangja</p>
              <ul>
                <li>Kérdéseink M hangja az adott téma nem értését jelzi, azt, hogy az adott fogalmommal kapcsolatban kérdésünk van: ért(em|elem) - Miért?, (ek|ak)kor - Mikor, erre - Merre? Valamint az elgondolkodás, kétkedés általános hmmm... indulathangja.</li>
                <li>tömeg, tömegvonzás, gravitáció</li>
                <li>minosz - mínusz (negatív létmód)</li>
                <li>Masonry, 3M, xMas, Matrix</li>
              </ul>

              <h4>A vörös Hangja a <b><a href="http://www.osnyelv.hu/osny0/zzz/bz_szgl.web.html#v" target="_blank" rel="noopener noreferrer">M</a></b></h4>
              <ul>
                <li>vág, (el)válik, (ketté)válik, (össze)vegyít</li>
                <li>V for Vandetta (V mint vérbosszú)</li>
                <li>változás</li>
                <li>verés, vádlás, védekezés (pír, per)</li>
                <li>vélemény (megosztó) tév(edés) (TV - tév[é])</li>
                <li>világ világossága, vak, (való világ)</li>
                <li>(meg)világít, visszaverődik</li>
                <li>vírus - város</li>
                <li>virul, virágzik</li>
                <li>vörös, véres</li>
                <li>vég</li>
                <li>vad(ász) veszély</li>
                <li>víg</li>
              </ul>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/symbols/"
                content="Szimbólumok"
              />
              <NextButton
                to="/characters/"
                content="Karakterek"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
