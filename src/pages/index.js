// @flow

import React from 'react'
import { withPrefix } from 'gatsby-link'
import NextButton from '../components/NextButton'
import Layout from '../components/layout'
import ScrollSection from '../components/ScrollSection'
import Footer from '../components/Footer'

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
            <ScrollSection onEnter={this.onEnterViewport} id="story.introduction">
              <img className="ui fluid image" src="images/snowwhite/62a696d7acdd0997a10658a42666ff5f2.jpg" />
              <h1>Hófehérke, avagy első találkozásom a Mesével</h1>
              <small>avagy</small>
              <h2>Hófehérke - újratöltve</h2>
              <h3>Egész estés meseelemzés felnőtteknek</h3>
              <p>avagy Csipkerózsika orsója Holle anyónál... Szóval nem csak Hófehérke...</p>
              <p>Sok képpel, hogy ne unjátok halálra magatokat... (jobb egérgomb, kép megjelenítése a kinagyításhoz, minden kép lopott) Firefox böngésző használata ajánlott.</p>
              <p>Bármilyen visszajelzésnek örülök, kérlek továbbá, hogy jelezzétek a hejesirási hibákat.</p>

              <h3>Tudtad?</h3>
              <div>
                <p>Hogy a Hófehérke a legősibb mese, a mesék Alfája és Ómegája, a mesenaprendszer központi csillaga, hogy innen kezdődik és ide tér vissza minden mese? Hogy a Hófehérke mese valójában az egyik legősibb kulturális emlékünk, amelynek fő témája a párkapcsolaton és a szexualitáson keresztül bemutatni az élet misztikus körforgásának alapszerkezét?</p>
                <div className="masonry">
                  <img src={withPrefix('images/queen/window/2e8e4615e12a06154b3bca33921cb40e.jpg')} />
                  <img src={withPrefix('images/witch/cartoon/1a90eb023c350a5a4fa67d6532c3bbbb.jpg')} />
                  <img src={withPrefix('images/snowwhite/witch/4bffcf9e69f1f6817d7ffbdc6ecaf78b.jpg')} />
                  <img src={withPrefix('images/snowwhite/heartless/2d892f886b57f3b0f25b516cc3f81109.jpg')} />
                  <img src={withPrefix('images/heart/fcc8518950ac34ea195026dae7786cdf.jpg')} />
                  <img src={withPrefix('images/witch/cartoon/762f5b582d12327b49444c96440f5794.jpg')} />
                  <img src={withPrefix('images/witch/cartoon/b4078f3008218f5f34210bf6f763dd25.jpg')} />
                  <img src={withPrefix('images/witch/e5de5899130f7a02e128fc77eac3f469.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/f73ecaa0fa7fae7668fde46cb08f5e66.jpg')} />
                </div>
                <p>Én nem tudtam, és ha valaki ilyet mondott volna nekem pár hónappal ezelőtt, nem tudtam volna komolyan venni. Ugyan, hogy is lehet odáig lenni egy ilyen elcsépelt történettől? Mindenki ismeri, nem nagy szám, lejárt lemez...</p>
                <p><img src={withPrefix('images/snowwhite/cartoon/c284f1eb1bf6d5caaafc4b3f6d281216.jpg')} className="ui fluid image" /></p>
                <p>De amikor feltárult előttem a történet mélyrétege, valójában egy ajtó nyílt meg. Egy megdöbbentő személyes megtapasztalás-sorozat vette kezdetét, egyszeriben megnyílt a világnak egy eddig elzárt része, egy párhuzamos Hófehérke univerzum. Egyszerűen nem tudtam leállni, az életem része lett és én az övé. A felismerés ereje akkora volt, hogy úgy döntöttem, el kell mondanom. El kell mondanom barátaimnak, ismerőseimnek, mindenkinek aki felkészült rá, mert ez az a dolog, amivel hozzájárulhatok ehhez a csodához, a mese valódi misztériumához, hogy fenntartsam, hogy továbbvigyem az ősi szálat. Simán beillik ez egy életcélnak, amit meg kell tennem mielőtt meghalok. És íme, elkezdtem megírni. De más egy írás és más a megélés. Csak remélni tudom, hogy sikerül tálcán kínálni, szépen illusztrálva mindazt, amire &quot;rájöttem&quot;, ami megnyílt előttem. De sajnos nem. Miközben írok, látom, mennyit jelent egy-egy kép, egy egy elfuserált mondat, egy-egy utólagos módosítás. Ez már nem az a folyamat, amit én éreztem, csak erőlködés, hogy megpróbáljam kívül láttatni azt ami csak belül látható. Így az olvasót kell arra kérnem, értse meg, hogy ez a &quot;tanulmány&quot; pusztán segítséget próbál adni a felismeréshez, de a felismerést mindenkinek magának kell megtennie. További aggodalmam volt, hogy a személyes felismerésem túlságosan messzire tolódott az eredeti történettől egy igen bizarr, olykor perverz irányba. Igazán nem kívánnék ilyen színben feltűnni, zavarna, ha a következtetés annyi lenne, hogy baj van az agyammal. De mint későbbi kutatásaim során kiderült - sajnos - nem én vagyok az első és egyetlen aki ilyen következtetésre jutott. Számtalan ehhez hasonló elemzés készült már, számtalan szempontrendszer szerint. Úgy tűnik, nincs új a nap alatt. Minden nap tanultam valami újat, és ezáltal olykor megdőlt előző elképzelésem bizonyos részleteket illetően. Mégis, a hihetetlen átélés hevétől fűtve megpróbálom e-papírra vetni gondolataimat, hátha pont ez az egyedi szemléletmód válik valakinek hasznára. És ez a lényeg, profitálni. Alább megpróbálom privatizálni a mesét, és a lehető legtöbbet kifacsarni belőle, ha az átélés örömét már nem adhatom. Végtére is a történetet mindenki ugyanúgy ismeri mint én...</p>
                <p>De az tudtad, hogy...</p>
              </div>
            </ScrollSection>

            <Footer>
              <NextButton
                to="/storytelling/"
                content="Egyszer volt, hol nem volt..."
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
