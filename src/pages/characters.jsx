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
            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters">
              <h1>Karakterek</h1>
              <div>
                <p>A mesében feltünő különböző karakterek felfoghatók szimbólumokként. Elemzésem célja, hogy bizonyítsam, hat fő karakterre épít a mese, 3 női, 3 férfi karakterre. A 3-3 karakter azonban egyugyanazon ember különböző állapotát hivatott szimbolizálni, a nőét és a férfiét. Mivel az eltérő nemi karakterek egymással párhuzamba állíthatók, egymásnak megfeleltethetők, így végső soron egy általános <i>emberi</i> jellem-átalakulást is ki lehet domborítani a részletek felhasználásával.</p>
                <p>Az amerikai tipusú filmektől megszokhattuk, hogy a karaktereik u.n. <i>egydimenziós</i> karakterek, azaz vagy nagyon jók, vagy nagyon rosszak. Ezek a történetek már nem adják meg annak a lehetőségét, hogy az ember elgondolkodjon a közöttük lévő kapcsolaton, és tanulságokat vonjon le saját jellemi fejlődését illetően. A hollywoodi történetek megkönnyítik az állásfoglalást, mindenki a jó karakterrel azonosul, a rossz pedig mindig a másik ember. A Hófehérke mese karakterei ezzel szemben ugyanazon személy fejlődésének állapotait mutatják be. A mese célja, hogy a gyermeket erre felkészítse, ezért rejtett szálakkak összeköti őket, rámutat hogyan formálódik egyik jellemből a másik. Az ilyen ősi jellemkaraktereket Jung <i>archetipusnak</i> nevezte.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters.queen">
              <h3>A királynő</h3>
              <div>
                <p>Milyennek képzeljük el?</p>
                <p className="masonry">
                  <img src={withPrefix('images/queen/idea/1e6e6779f973504102f61969aedadb18.jpg')} />
                  <img src={withPrefix('images/queen/idea/a7262d8d41f7de8ca9fb4fb82f0226c2.jpg')} />
                  <img src={withPrefix('images/queen/idea/9ed2a07402204947cd6267e64fd4c0a0.jpg')} />
                  <img src={withPrefix('images/queen/idea/1082db67dbc21af4490d9efec62a4ae5.jpg')} />
                  <img src={withPrefix('images/queen/idea/cb7cbc35f3f4ce778768ec9279d243bb.jpg')} />
                  <img src={withPrefix('images/queen/idea/813335d1062d950276507007c625a30b.jpg')} />
                </p>
                <p>A nő ragyogó oldala.</p>
                <p>Az ablak szimbólum mutatja, hogy befogadó. Belső világa nyitott a külvilág felé. A fény beáramlása. Fényből sző.</p>
                <p>Illuzórikus. Az ábrándjai vezérlik, annyira elábrándozik, hogy nem figyel oda a valóságra így megsebesíti magát. Önfeláldozó, túlságosan is. A szülésbe belepusztul, később helyét a sötét oldal veszi át.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters.snowwhite">
              <h3>Hófehérke</h3>
              <div>
                <p>Milyennek képzeljük el?</p>
                <p className="masonry">
                  <img src={withPrefix('images/snowwhite/cartoon/serious_snow_white.jpg')} />
                  <img src={withPrefix('images/snowwhite/painture/662a77b9cd5cde5e65fb2de6ac427d01.jpg')} />
                  <img src={withPrefix('images/snowwhite/cartoon/b83ce7fcb018653eba2b1e788424765c.jpg')} />
                  <img src={withPrefix('images/snowwhite/witch/ca9ed2762cfd92497fc4f1847abb9633.jpg')} />
                  <img src={withPrefix('images/snowwhite/cartoon/disney/Snow_White_and_the_Seven_Dwarfs_Concept_Art_Illustration_02-680x508.jpg')} />
                  <img src={withPrefix('images/snowwhite/cartoon/80b503566551de0552417081d25a2181.jpg')} />
                </p>
                <p>A női út lárvaállapota.</p>
                <p>Naiv de tiszta.</p>
                <p>Oktondi: újonc a világban, mit sem sejt a mostoha és a vadász ármánykodásáról. Világnézetileg felkészületlen, sok tanulás vár még rá.</p>
                <p>Gyönge: Az útjáról, sorsáról nem ő, hanem nagyobb erők és érdekek döntenek. Létének beteljesedése a Királynő karakter, ennek eléréséhez meg kell találnia a herceget. De oda a sötét erdőn keresztül vezet az út. Az egy dolog, hogy sikerülhet felnőnie, de ha elbukik az élet kihívásai során, mint látni fogjuk, maga is mostohává válhat.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters.stepmother">
              <h3>A gonosz mostoha</h3>
              <div>
                <p>Milyennek képzeljük el?</p>
                <p className="masonry">
                  <img src={withPrefix('images/witch/cartoon/6b13e96450293a5ffcfad142a346803a.jpg')} />
                  <img src={withPrefix('images/witch/2c7d64cef528029c225330fd06d745a0.jpg')} />
                  <img src={withPrefix('images/witch/witchcraft/438e226c1915d88de4077f8837f701ed.jpg')} />
                  <img src={withPrefix('images/witch/cartoon/9bb02902fd00772a957f1c21edbc15c9.jpg')} />
                  <img src={withPrefix('images/witch/painture/e3e1235c9ef78449696b5e9c7fc10f2e.jpg')} />
                  <img src={withPrefix('images/witch/force/chao-huang-qq-20180131153402.jpg')} />
                  <img src={withPrefix('images/witch/witchcraft/76c323ecf766d66b631f7e96d2a8d4ed.jpg')} />
                  <img src={withPrefix('images/witch/fbe480768790ed12e4e550f3ae475fb0.jpg')} />
                  <img src={withPrefix('images/witch/witchcraft/32f5f6e8966fdeff50784a7f374736d7.jpg')} />
                  <img src={withPrefix('images/witch/witchcraft/852b6d7d7823ee2b686d345b5fc60408.jpg')} />
                  <img src={withPrefix('images/witch/cartoon/810417ed86a037da0a289df05abf482b.jpg')} />
                  <img src={withPrefix('images/witch/painture/6ce011640fee8eed613efeb3f3268158.jpg')} />
                  <img src={withPrefix('images/witch/cartoon/cbb9381777ed4eec960bc7223703ff5d.jpg')} />
                  <img src={withPrefix('images/witch/painture/78f81c25f95f66f5db58ac9cb8a510b0.jpg')} />
                  <img src={withPrefix('images/witch/force/2410683a9fa357a9a3e3b4ee4a305e2b.jpg')} />
                </p>
                <p>A nő sötét oldala.</p>
                <p>A mese kimondja, hogy szép, ő a legszebb. Ezt idővel elveszíti.</p>
                <p>Okos, a tudományokban (“boszorkányságban”) jártas. Ezt a tudását gonosz célokra használja.</p>
                <p>Hatalmi pozícióban van (ő lesz a királynő).</p>
                <p>Nyilván való, hogy már nem naiv, teljesen tisztában van az igazsággal (igazmondó tükre van). De amikor változnak a tények, nem néz szembe velük, (összetöri tükrét), illúziókba ringatja magát (a vadász átveri) vagy szembemegy a valósággal (hófehérkét mérgezi) Vannak boldog pillanatai, de összességében nem lehet boldognak nevezni.</p>
                <p>Fő hibája, hogy gonosz, önző, magával törődő, minden mással “mostoha”.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters.king">
              <h3>Az öreg király</h3>
              <div>
                <p>Milyennek képzeljük el?</p>

                <p className="masonry">
                  <img src={withPrefix('images/king/499e5c07e71e96f09bf9b598f5222717.jpg')} />
                  <img src={withPrefix('images/king/dd97b495842417228eb83146ae86b48a.jpg')} />
                  <img src={withPrefix('images/king/e26103b5f93dd395e038ded3a5dc1cb2.jpg')} />
                </p>
                <p>Szeretetteljes.</p>
                <p>Az örök hó, a fény birodalmának királya.</p>
                <p>Megvilágosodottként tudhatja, mi történik hófehérkével (a világosság szimbólumával) Tudhatja, hogy a fényt épp készül elnyelni a sötétség, mégsem tesz semmit. Nem harcol, mégis győz.</p>
                <p>Nagyon érdekes, hogy ehhez a karakterhez egyáltalán nem találtam kifejező képet, míg a bosziból, avagy a fekete istennőből annyi van a neten, hogy Dunát lehet rekeszteni vele. Ugyanez igaz a vadászra... rossz helyen kerestem volna...</p>

                <p>Judit megjegyzései:</p>
                <p>Ez mutat valamit. A megvilágosodott, tiszta, fénytől ragyogó férfi kinek lenne érdekes? Az annyira életidegen, hogy nem lenne érdekes a materiális világnak. A királynő még használható, mert nő. De a férfi veszélyes. Ez sokat elárul korunkról.</p>

                <p>A mesében a király végtelenül gyenge, nem megvilágosodott. Elcsavarja a fejét a mostoha, a saját gyermeke sorsáról már nem ő dönt. Nem azt a sorsot éli, amit kellene neki, de nem tölti be szerepét, nem ad szellemi útmutatást. Tipikusan az a férfi aki bele van bódulva a nőbe, mint az élvezet tárgyába.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters.prince">
              <h3>A herceg</h3>
              <div>
                <p>Milyennek képzeljük el?</p>
                <p className="masonry">
                  <img src={withPrefix('images/prince/idea/45b7bfdccd7aaf7b7f215ce263fd7236.jpg')} />
                  <img src={withPrefix('images/prince/idea/3cb70bebca96750c35af203876754bc9.jpg')} />
                  <img src={withPrefix('images/prince/idea/6e522e40109937fa2bef2853a9641ac2.jpg')} />
                  <img src={withPrefix('images/prince/idea/9e295931e001009eb083027860ab964f.jpg')} />
                  <img src={withPrefix('images/prince/idea/43c499eb46b60c3ec4cb5c3bf7803944.jpg')} />
                  <img src={withPrefix('images/prince/idea/702b1027d2db00af3bc619f69bf31be8.jpg')} />
                  <img src={withPrefix('images/prince/idea/0778a55330c610fe3ee3827789df0bf8.jpg')} />
                  <img src={withPrefix('images/prince/idea/860ca3c627da775a2752c6179c5d81f0.jpg')} />
                  <img src={withPrefix('images/prince/idea/32123e6327745c6c5131aba75fa11c88.jpg')} />
                  <img src={withPrefix('images/prince/idea/89767fe586580339acac50ff2bb073b5.jpg')} />
                  <img src={withPrefix('images/prince/idea/752675e4fcc739f84ce0b411ac1f3751.jpg')} />
                  <img src={withPrefix('images/prince/idea/bbc0aa8dd7f67a0fb8f82d0dd411e780.jpg')} />
                  <img src={withPrefix('images/prince/idea/cae931335ea7e78284847f53ddd4c151.jpg')} />
                  <img src={withPrefix('images/prince/idea/e622fea5833680508de9942c9747fe4d.jpg')} />
                  <img src={withPrefix('images/prince/idea/f9be3c5f76923c1290bfc6d84a647533.jpg')} />
                </p>
                <p>Férfi út lárvaállapota</p>
                <p>A mese említést sem tesz róla, mintha nem is létezne. Csak a mese végén az erdőben bukkan fel, abban az erdőben ahol a vadász hófehérkét helyben hagyta. Felmerülhet a gyanú, hogy mit keresett a herceg az erdőben. Nyilván egy hófehérkét, de akkor mi különbözteti meg a vadásztól?</p>
                <p>Úgy is mondhatnám, Hófehérke a vadásszal megy be az erdőbe, de a herceggel jön ki. Persze közben sok minden történik...</p>

                <p>Judit megjegyzései:</p>
                <p>Nem egy megjavult kékszakáll hozza ki hercegként. Nem lárva, csak a királyi lét előzménye, a herceg a fiú archetípus, a király pedig az atya, az Isten archetípus. Azért tudja kimenteni hófehérkét, mert maga nem rabja az erdőnek, eleve nem fél benne, ismeri az erdőt, és uralja azt, azokat a folyamatokat amik a sötétben, a háttérben zajlanak.</p>
                <p>A földi királyság a radzsasz, de átvitt értelemben a szattva.</p>
                <p>Ez nagyon jól megmutatja a férfi útját, ahogy saját magát uralnia kell, és amikor felékesíti magát az önuralommal akkor kézen fogja a nőt és kivezeti a sötétségből és utat mutat neki. Ö ébreszti fel az üvegkoporsóból, az illúzió világából. Ő tölti be azt a szerepet, amit a lány apja nem tudott, és ő foglalja majd el a legmagasabb szintjét a létezésnek.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.characters.huntsman">
              <h3>A vadász</h3>
              <div>
                <p>Milyennek képzeljük el?</p>
                <p className="masonry">
                  <img src={withPrefix('images/huntsman/idea/6fec224defadb5d75cd3f149c82246c6.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/08f0942dd745d665d999293c3b29473b.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/236d53e6d42a3384729828515d50c3f2.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/758e19e54ece63ab95ce167fb655b441.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/af3cb0b06d1ed48b935a1bc7596e9e0c.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/b8b9ed151dea18e7d5dd3737916be7e6.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/ba95589b9e8fa6343e38667d8c72cd41.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/cb8fad468d1dc5a3d5a4a95748cfcb28.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/ccc680dcaa56245fd96ee4f4fc0ffb15.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/d9644eb337ffb361e4448b40d6329c46.jpg')} />
                  <img src={withPrefix('images/huntsman/idea/e359569ec992d0b0a47be1603d61c6cd.jpg')} />
                </p>
                <p>A férfi sötét oldala. Szintén “mostoha”.</p>
                <p>Tapasztalt, úttalan utakon jár, eligazodik a sötét erdőben, az alvilágban. Mégis, egy nő zárja végül börtönbe. Ott is marad, a sötétség rabja lesz.</p>
                <p>Férfias: vadakkal küzd meg, fegyvere van (phallikus szimbólumként) Sajnos ezúttal nem méltó ellenfelet választ, védtelen gyermeket is majdnem megsebesít, mert nem áll azonnal ellen a gonosz felkérésnek.</p>
                <p>Ámor nyila: szerelemben járatos, mégis úgy tűnik, egyedül van, senkinek sem hiányzik se felbukkanása előtt, se utána. Csak egy “disznó” szívét tudja megszerezni.</p>
                <p>Boldogtalan fantom, kósza kísértet.</p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/colors/"
                content="Szín-szimbolika"
              />
              <NextButton
                to="/terminal/"
                content="Terminal"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
