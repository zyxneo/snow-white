// @flow

import React from 'react'
import { withPrefix } from 'gatsby-link'
import classNames from 'classnames'
import lodash from 'lodash'
import Layout from '../components/layout'
import ScrollSection from '../components/ScrollSection'
import StorySection from '../components/StorySection'
import Footer from '../components/Footer'
import PreviousButton from '../components/PreviousButton'
import NextButton from '../components/NextButton'
import { StoryGraph } from '../components/StoryGraph'
import scene1 from '../components/StoryGraph/scene1'

const move = (char, coordinate) => {
  char.cx = coordinate.cx
  char.cy = coordinate.cy
  return char
}

const GridA = 15
const GridB = 35
const GridC = 48
const GridD = 72
const GridE = 85
const GridF = 105

const CooCenter = { cx: 60, cy: 60 }
const CooCenterTop = { cx: CooCenter.cx, cy: GridC }
const CooCenterBottom = { cx: CooCenter.cx, cy: GridD }
const CooTopLeftMale = { cx: GridB, cy: GridA }
const CooTopLeftFemale = { cx: GridA, cy: GridB }

const CooTopRightMale = { cx: GridE, cy: GridA }
const CooTopRightFemale = { cx: GridF, cy: GridB }

const CooBottomLeftMale = { cx: GridB, cy: GridF }
const CooBottomLeftFemale = { cx: GridA, cy: GridE }

const CooBottomRightMale = { cx: GridE, cy: GridF }
const CooBottomRightFemale = { cx: GridF, cy: GridE }

const RED = 'red'
const GREEN = 'green'
const PURPLE = 'purple'
const ORANGE = 'orange'
const TEAL = '#00ddff'

const scene2 = lodash.cloneDeep(scene1)
scene2.characters.king.scale = 0.3
move(scene2.characters.king, CooTopLeftMale)
scene2.characters.queen.opacity = 1
scene2.characters.queen.scale = 0.75
move(scene2.characters.queen, CooCenter)
scene2.arrows.queenAndKing = {
  color: TEAL,
  fromCharacter: 'king',
  fromSide: 'right',
  toCharacter: 'queen',
  toSide: 'top',
}

const scene3 = lodash.cloneDeep(scene2)
scene3.characters.queen.scale = 0.3
move(scene3.characters.queen, CooTopLeftFemale)
scene3.characters.snowwhite.opacity = 1
scene3.characters.snowwhite.scale = 0.75
move(scene3.characters.snowwhite, CooCenter)
scene3.arrows.kingAndSnowwhite = {
  color: GREEN,
  fromCharacter: 'king',
  fromSide: 'bottom',
  toCharacter: 'snowwhite',
  toSide: 'left',
  dashArray: '1',
  width: 0.5,
}
scene3.arrows.queenAndSnowwhite = {
  color: GREEN,
  fromCharacter: 'queen',
  fromSide: 'right',
  toCharacter: 'snowwhite',
  toSide: 'left',
  dashArray: '1',
  width: 0.5,
}

const scene4 = lodash.cloneDeep(scene3)
scene4.characters.queen.opacity = 0.2
scene4.characters.snowwhite.scale = 0.3
move(scene4.characters.snowwhite, CooCenterBottom)
scene4.characters.witch.opacity = 1
scene4.characters.witch.scale = 0.75
move(scene4.characters.witch, { cx: 25, cy: 70 })
scene4.arrows.queenAndWitch = {
  color: ORANGE,
  fromCharacter: 'queen',
  fromSide: 'bottom',
  toCharacter: 'witch',
  toSide: 'top',
}
scene4.arrows.huntsmanAndSnowwhite = {
  color: RED,
  fromCharacter: 'huntsman',
  fromSide: 'left',
  toCharacter: 'snowwhite',
  toSide: 'right',
  dashArray: '1',
  width: 0.5,
}

const scene5 = lodash.cloneDeep(scene4)
scene5.characters.witch.scale = 0.3
move(scene5.characters.witch, CooBottomLeftFemale)
scene5.characters.huntsman.opacity = 1
scene5.characters.huntsman.scale = 0.75
move(scene5.characters.huntsman, { cx: 95, cy: 75 })

const scene6 = lodash.cloneDeep(scene5)
scene6.characters.huntsman.scale = 0.3
move(scene6.characters.huntsman, CooBottomRightMale)
scene6.characters.prince.opacity = 1
scene6.characters.prince.scale = 0.75
move(scene6.characters.prince, { cx: 95, cy: 35 })
scene6.arrows.princeAndSnowwhite = {
  color: TEAL,
  fromCharacter: 'prince',
  fromSide: 'bottom',
  toCharacter: 'snowwhite',
  toSide: 'top',
}

const scene7 = lodash.cloneDeep(scene6)
scene7.characters.prince.scale = 0.3
move(scene7.characters.prince, CooCenterTop)

const scene8 = lodash.cloneDeep(scene7)
scene8.characters.witch2.scale = 0.3
scene8.characters.witch2.opacity = 1
scene8.characters.witch2.name = 'Ex-Hófehérke'
move(scene8.characters.witch2, CooBottomRightFemale)
scene8.arrows.snowwhiteAndWitch = {
  color: PURPLE,
  fromCharacter: 'snowwhite',
  fromSide: 'bottom',
  toCharacter: 'witch2',
  toSide: 'left',
}

const scene9 = lodash.cloneDeep(scene8)
scene9.characters.witch.opacity = 0
scene9.arrows.queenAndWitch.opacity = 0
scene9.arrows.witch2AndHuntsman = {
  color: TEAL,
  fromCharacter: 'witch2',
  fromSide: 'bottom',
  toCharacter: 'huntsman',
  toSide: 'left',
}
scene9.arrows.witch2AndSnowwhite = {
  color: RED,
  fromCharacter: 'witch2',
  fromSide: 'left',
  toCharacter: 'snowwhite',
  toSide: 'right',
  dashArray: '1',
  width: 0.5,
}

const scene10 = lodash.cloneDeep(scene9)
scene10.arrows.witch2AndHuntsman.dashArray = '1'
scene10.arrows.witch2AndHuntsman.width = 0.5
scene10.arrows.snowwhiteAndWitch.opacity = 0

const scene11 = lodash.cloneDeep(scene10)
scene11.arrows.princeAndHuntsman = {
  color: PURPLE,
  fromCharacter: 'prince',
  fromSide: 'right',
  toCharacter: 'huntsman',
  toSide: 'top',
}

// A látomás, vagy dezsavű?
const scene12 = lodash.cloneDeep(scene11)
scene12.arrows.kingAndPrince = {
  color: GREEN,
  fromCharacter: 'king',
  fromSide: 'bottom',
  toCharacter: 'prince',
  toSide: 'left',
  dashArray: '1',
  width: 0.5,
}
scene12.arrows.queenAndPrince = {
  color: GREEN,
  fromCharacter: 'queen',
  fromSide: 'right',
  toCharacter: 'prince',
  toSide: 'left',
  dashArray: '1',
  width: 0.5,
}
scene12.arrows.huntsmanAndSnowwhite.toCharacter = 'center'
scene12.arrows.huntsmanAndSnowwhite.fromSide = 'top'
scene12.arrows.witch2AndSnowwhite.toCharacter = 'center'

// Nem várt fordulat, mindenki a Hóferkéből alakult ki
const scene13 = lodash.cloneDeep(scene12)
scene13.characters.queen2.scale = 0.3
scene13.characters.queen2.opacity = 1
move(scene13.characters.queen2, CooTopRightFemale)

scene13.arrows.queenAndPrince.opacity = 0
scene13.arrows.kingAndPrince.opacity = 0
scene13.arrows.queenAndSnowwhite.opacity = 0
scene13.arrows.kingAndSnowwhite.opacity = 0
scene13.arrows.kingAndPrince.opacity = 0
scene13.arrows.witch2AndSnowwhite.opacity = 0
scene13.arrows.huntsmanAndSnowwhite.opacity = 0
scene13.arrows.princeAndHuntsman.opacity = 0
scene13.arrows.snowwhiteAndQueen2 = {
  color: PURPLE,
  fromCharacter: 'snowwhite',
  fromSide: 'right',
  toCharacter: 'queen2',
  toSide: 'left',
}

// De a banyáról is ezt mondtuk, ez hogy lehet?
const scene14 = lodash.cloneDeep(scene13)
scene14.characters.witch.opacity = 1
scene14.arrows.queenAndWitch.opacity = 1
scene14.arrows.snowwhiteAndWitch.opacity = 1
scene14.arrows.queen2AndWitch2 = {
  color: ORANGE,
  fromCharacter: 'queen2',
  fromSide: 'bottom',
  toCharacter: 'witch2',
  toSide: 'top',
}

// Nos, itt belépünk a tudatalatti világába, elérkeztünk az archetípusokhoz
const scene15 = lodash.cloneDeep(scene14)
scene15.characters.king2.scale = 0.3
scene15.characters.king2.opacity = 1
scene15.characters.queen.opacity = 1
move(scene15.characters.king2, CooBottomLeftMale)
scene15.characters.huntsman2.scale = 0.3
scene15.characters.huntsman2.opacity = 1
move(scene15.characters.huntsman2, CooTopRightMale)

scene15.arrows.queen2AndWitch2.opacity = 0
scene15.arrows.snowwhiteAndWitch.opacity = 0
scene15.arrows.snowwhiteAndQueen2.opacity = 0
scene15.arrows.princeAndHuntsman.opacity = 1
scene15.arrows.princeAndKing2 = {
  color: PURPLE,
  fromCharacter: 'prince',
  fromSide: 'left',
  toCharacter: 'king2',
  toSide: 'top',
}
scene15.arrows.kingAndHuntsman2 = {
  color: ORANGE,
  fromCharacter: 'king',
  fromSide: 'right',
  toCharacter: 'huntsman2',
  toSide: 'left',
}

const scene16 = lodash.cloneDeep(scene15)

scene16.characters.king2.opacity = 0
scene16.characters.witch.opacity = 0
scene16.characters.huntsman2.opacity = 0
scene16.characters.queen2.opacity = 0

move(scene16.characters.queen, { cx: 30, cy: 20 })
move(scene16.characters.king, { cx: 90, cy: 20 })
scene16.arrows.queenAndKing = {
  color: TEAL,
  fromCharacter: 'queen',
  fromSide: 'left',
  toCharacter: 'king',
  toSide: 'right',
}

move(scene16.characters.snowwhite, { cx: 30, cy: 50 })
move(scene16.characters.prince, { cx: 90, cy: 50 })
scene16.arrows.princeAndSnowwhite = {
  color: TEAL,
  fromCharacter: 'snowwhite',
  fromSide: 'left',
  toCharacter: 'prince',
  toSide: 'right',
}

move(scene16.characters.witch2, { cx: 30, cy: 80 })
move(scene16.characters.huntsman, { cx: 90, cy: 80 })
scene16.arrows.witch2AndHuntsman = {
  color: TEAL,
  fromCharacter: 'witch2',
  fromSide: 'left',
  toCharacter: 'huntsman',
  toSide: 'right',
}

scene16.arrows.kingAndHuntsman2.opacity = 0
scene16.arrows.queenAndWitch.opacity = 0
scene16.arrows.princeAndHuntsman.opacity = 0
scene16.arrows.princeAndKing2.opacity = 0

class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: '',
      end: false,
      graphData: scene1,
      mounted: false,
    }
  }

  componentDidMount() {
    if (!this.state.mounted) {
      try {
        this.ScrollTrigger = require("react-scroll-trigger").default;
        this.setState({
          mounted: true,
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  onEnterViewport = (id) => {
    history.replaceState(undefined, undefined, `#${id}`)
    this.setState({
      inViewport: id,
    })
  }

  onEnterEnd = () => {
    this.setState({
      end: true,
    })
  }

  onExitEnd = () => {
    this.setState({
      end: false,
    })
  }

  render() {
    const {
      end,
      graphData,
      inViewport,
    } = this.state
    // const {
    //   inViewport,
    //   onEnterViewport,
    // } = this.props
    const { onEnterViewport } = this

    if (this.state.mounted) {
      const ScrollTrigger = this.ScrollTrigger
      return (
        <Layout bodyclassName={inViewport}>
          <div className="content">
            <div className="ui text container list">
              <section key="story.asWeKnowIt" id="story.asWeKnowIt" className="item">
                <div className="ui hidden divider" />
                <div className={classNames('scrollable', { fixed: inViewport.lastIndexOf('story.scene') !== -1 }, { 'scroll-below': end })}>
                  <ScrollSection onEnter={this.onEnterViewport} id="story.storytelling.autopsie">
                    <h1>A grafikon</h1>
                    <div>
                      <p>A mese elemzése során a boncasztalra kívánom fektetni a hófehérkét, hogy minden rétegét alaposan megismerhessük. Ez az elemzés ennyiben egyedülálló lesz, ebben eltér minden más értelmezéstől. Hozzávalók: Hófehérke, boncasztal, szike, <s>vödör a vérnek, vödör a hányáshoz</s>. Az egyetlen probléma ezzel a megközelítéssel, hogy nem <i>in vivo</i> azaz nem természetes élőhelyén figyeljük meg a Hófehérkét, ahogy éjszaka szaladgál az erdőben, hanem kimerevítve, élettől mentesen.</p>

                      <p>A mesét több, különböző szinten kívánom értelmezni. Az alábbi eleven grafikonon azt a gondolatmenetet szeretném felvázolni, ami elsőként pattant ki fejemből. Akkoriban nagyon érdekesnek találtam, most már látom, hogy sántít és ezer sebből vérzik, de mégis, ez volt a kapu, mely a hétköznapokból átvezetett engem a mesék varázslatos birodalmába, avagy, amin keresztül a mese szörnyei kiszabadultak ebbe a világba, attól függ merről nézzük. Valószínűleg zagyvának fog tűnni, ahogy most így visszanézve már nekem is az, de remélem később kicsit tisztázódik.</p>

                      <p>Ahogy munkába menet a vonatot várom reggelente, a szemközti peronon összegyűlnek az iskolások. Kilence éve járok már ezen a vonalon, minden reggel látom őket. De volt egy lányka, aki igen nagy változáson ment keresztül. Kezdetben nagyon szolid volt, mind megjelenésében, mind öltözködésében. De - valószínűleg a környezet vélt elvárásainak megfelelően - egyre vagányabb külsőre váltott. Szép hosszú haját bedauerolta, majd rövidebbre, majd igen rövidre vágta, néhol felkopaszítva. Öltözéke is fekete bőrdzsekire váltott, melyen ezüstös szegecsek csillogtak. Kicsit sajnáltam, hiszen tucatjával hallani történeteket azokról a felnőtt nőkről, akik hasonlóan vagány megjelenésűek, de a kemény külső megtört, megkeseredett szívet rejt, a válások, és az élet egyéb kudarcait. Nem okszerűen jár a kettő együtt, de abban a pillanatban úgy véltem, hogy a lányka a szemem láttára alakult át Hófehérkéből gonosz mostohává. Ez megdöbbentett, hiszen eltűnt a határ a karakterek között. Teljesen nyilvánvalóvá vált, hogy ez nem egy egyedi átalakulás, hanem egy mindenkit érintő, általános (még ha nem is járunk mind szegecses bőrdzsekiben). Minden kislány Hófehérke volt. Minden nő volt kislány, tehát Hófehérke is. Kortól, megjelenéstől, bőrdzsekitől teljesen függetlenül. A púpos, a lapos, a szőrös, a külleme miatt a társadalom peremére vetett gnóm is ugyanolyan joggal érezte gyermekkorában, hogy ez a mese róla szól, hogy ő a főszereplője, a Hófehérke, aki a legszebb a világon.</p>
                      <p>Halvány emlékeim a meséről új értelmezést nyertek, mivel a mesében lévő férfi karakterek is megelevenedtek, és innentől egy olyan világban jártam, ahol mindenki ennek a mesének volt valamely szereplője.</p>
                    </div>
                  </ScrollSection>
                  <ScrollTrigger onEnter={() => onEnterViewport('')}>
                    <br />
                  </ScrollTrigger>
                  <StoryGraph graphData={graphData} inViewport={inViewport} />
                  <div className="spacer" />
                  <StorySection
                    id="story.scene.beginning.king"
                    onEnter={() => {
                      onEnterViewport('story.scene.beginning.king')
                      this.setState({
                        graphData: scene1,
                      })
                    }}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        Egyszer volt, holnem volt, volt egyszer egy király... [a babakék keret a férfi karaktert jelöli]
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.beginning.queen"
                    onEnter={() => {
                      onEnterViewport('story.scene.beginning.queen')
                      this.setState({
                        graphData: scene2,
                      })
                    }}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      ...és egy  királyné... [pink keretben a női karakterek láthatóak]
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.beginning.snowwhite"
                    onEnter={() => {
                      onEnterViewport('story.scene.beginning.snowwhite')
                      this.setState({
                        graphData: scene3,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      ...És született egy gyermekük, Hófehérke. [A kék összekötő vonal az összetartozást jelöli]
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.beginning.witch"
                    onEnter={() => {
                      onEnterViewport('story.scene.beginning.witch')
                      this.setState({
                        graphData: scene4,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      A királyné meghalt, helyét a gonosz mostoha vette át. Ez a nő pont az ellentéte volt a királynőnek, ezért nemigen szeretjük. [a zöld szaggatott vonal a lérehozást, a piros az elpusztítást jelzi]
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.beginning.huntsman"
                    onEnter={() => {
                      onEnterViewport('story.scene.beginning.huntsman')
                      this.setState({
                        graphData: scene5,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      A gonosz mostoha felbérli a vadászt, hogy ölje meg Hófehérkét. A vadász kivételt tesz, megszegve ezzel munkaköri kötelességét.
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.beginning.prince"
                    onEnter={() => {
                      onEnterViewport('story.scene.beginning.prince')
                      this.setState({
                        graphData: scene6,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      Hófehérke elmenekül, jön a törpés jelenet, aztán meg a herceg. A herceg kiszabadítja Hófehérkét a gonosz törpék közül, és frigyre kelnek. Ennyit a meséről dióhéjban.
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel1"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel1')
                      this.setState({
                        graphData: scene7,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A folytatás</h3><h4>Bárminemű hasonlóság valóságos személyekkel csak a véletlen műve...</h4><p>A mese elemzése során olykor végletesen eltávolodunk az eredeti történettől, majd onnan visszatekintve szemlélhetjük a történetet egy új nézőpontból. Ebben a grafikonos részben humorosnak szánt stílusban első gondolataimat vetettem le.</p>
                        <img src={withPrefix('images/snowwhite/problems/14030ffbdff1b5a0761ba0b1c5af82d5.jpg')} className="ui small left floated image" />
                        <p>Nos, a mese véget ért, de egy másik elkezdődött. Hófehérke hosszú éveken át élt a herceg (a férje) mellett, főzött, mosott, takarított, és ezért cserébe... nem sok mindent kapott. Már nem szólították hófehérkének, noha királynő volt, meg egyben feleség, a jegyző “Karsainé Horváth Gizella” nevet jegyezte be a házassági anyakönyvbe, ahogy az lenni szokott. A hosszú évek alatt elveszítette bőre hófehér jellegét, plusz az utazások egzotikus országokba, meg az a rengeteg nikotin a cigiből... A tündérmese lassan-lassan szociodrámává alakult. És egy nap jött az igazi trauma:</p><p>egy másik királyságban megszületett “Hófehérke”</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel2"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel2')
                      this.setState({
                        graphData: scene8,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <p>Az elemzés egy kritikus törésponthoz jutott. Mostantól nem egy de több mese vázlatát látjuk egyazon ábrán. Az Ex-Hófehérke kisodródik az eredeti mese fókuszából, és másik karakterként, u.n. Mostohaként tűnik fel újból. És a kör bezárul. És hogy mit történik ezután a mostohával – úgy értem ex-hófehérkével? Ugyanaz amit a mesében már hallottunk. De hogyan történhetett ez? [a lila vonal az átalakulást jelzi]</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel3"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel3')
                      this.setState({
                        graphData: scene9,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A kör, A tükör</h3><img src={withPrefix('images/mirror/4588eeda48a4fb1310f23aca6cec6696.jpg')} className="ui small left floated image" /><p>A tükör, amely az előző tulajdonosát oly hűségesen szolgálta – és oly kegyetletlen dolgokra vette rá – Karsainé tulajdonában maradt, mivel apja élettársi viszonyban élt a banyával – mármint az ex-... mindegy. Egyszóval Hófehérke megörökölte a tükröt a gonosz mostohától. A tükör, amely a banyát őrületbe kergette, a fürdőszobában kapott helyet, sok örömet szerezve Hófehérkének. Legalábbis eleinte. Amikor a másik Hófehérke megszületett, a tükör detektálta a változást - mivel erre programozták, s mondta az igazat. Az egyetlen tökéletes Hófehérke illúziója ezzel végleg megszűnt létezni, kiderült, hogy csak mese volt az egész...</p><img src={withPrefix('images/mirror/e2821a1da5469f09320aadcbd3c73e06.jpg')} className="ui small right floated image" /><p>Senkinek nem esik jól, ha kiesik a kényelmes központi szerepből, hogy ő a világ közepe, a történet főhőse, a szeretett, a megbecsült, a jó karakter, akire csak csodálatos dolgok várhatnak. De megesik, és ha így adódik az fájó. A reakció általános: Csalódottság, féltékenység, düh, egyfajta gonoszság. És már kész is a banya. Hát még ha a tükör – a külvilágból érkező folyamatos megítélés is megerősíti... ördögi kör. A csapdába rekedt “gonosz királynő” úgy ítéli meg, hogy az “új jövevény” a bajok forrása, hisz amíg az nem volt, minden rendben volt. Úgy próbálja feloldani a konfliktust, hogy elpusztítaná azt a lényt, aki mit sem sejt arról, hogy ő bárkit bármiben akadályozna... Tudatán kívül egykori önmagát pusztítja el ezzel, ezáltal is egyre jobban eltávolodva a “Hófehérkétől” és közeledve a “banyához”.</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel4"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel4')
                      this.setState({
                        graphData: scene9,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A vadász</h3><p>A vadászról nem sokat mond a mese. Egyetlen feladata, hogy a “Gonosz királyné” parancsára ölje meg hófehérkét és hozza el annak kivágott szívét bizonyítékul. Nos egy szívről nehéz bárkit is azonosítani, így ez is szimbólikus: “törje össze a szívét”. Vegye el szépsége forrását, a naív, romlatlan szeretetet, lelke belső fényét, amely a szépségének valódi forrása.</p><p>Hogyan törje össze a szívét? Éjjel vigye ki az erdőbe, és ott... vegye elő a fegyverét, és döfje le, avagy célozzon és lőjön. Aztán vegye el a szívét, és tegye a gonosz elé bizonyítékul.</p><p>A vadász tehát nem afféle vadgazdálkodó szerepben jelenik meg, hanem inkább olyanban aki másra vadászik, úgy is mondhatnánk, p!#@vadász, hogyha nagyon egyértelműen be akarjuk sorolni... Így mindjárt jobban összeáll a kép:</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel5"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel5')
                      this.setState({
                        graphData: scene10,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <p>Figyeljük meg, hogy kialakult 3 pár. Innen már nagyjából minden egyenesen következik majd. Középen a Hófehérke mese főszereplői, jobbra és balra másik 2 mese főszereplői. Balról fenn a “jó” karakterek, akik segítenek, jobbról lenn az ellenlábasok.</p><h3>Hárman párban?</h3><p>Jogosan lehetne mondani, hogy a mese nem így van, a király ott egyedül van a királyné halála okán, a vadász és a gonosz mostoha között pedig még csak élettársi kapcsolat sincs... Véleményem szerint a karakterek kibontása mégis erre az eredményre vezet, a szerepeket így lehet párosítani.</p><p>A vadász és a gonosz királyné kapcsolatára egyik legjobb bizonyíték, hogy a mese, mint egy jobb hollywoodi film, direkt nem tesz említést a köztük lévő kapcsolatról, hogy ne is sejtsük, ezáltal növelve a felismerés megdöbbentő erejét – ha eljön az ideje. Annyit tudni, hogy a gonosz tettben együttműködés kezdődik, de a vadász nem engedelmeskedik, ezért a gonosz királyné börtönbe zárja.</p><p>A feltételezés szerint a gonosz mostoha maga egykor Hófehérke volt. Akkor hát volt neki férje, a herceg, de férj nélkül érkezik a történetbe...</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel6"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel6')
                      this.setState({
                        graphData: scene10,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A válás</h3>
                        <img src={withPrefix('images/snowwhite/problems/8752394c5dd922383cf9e39cfc52e67b.jpg')} className="ui medium left floated image" />
                        <p>Tiszta sor, Hófehérke és a herceg elváltak. Így még érthetőbb miért olyan gonosz a mostoha. Hogy ő akart-e válni, vagy a herceg, azt nem tudni. Mindkettőjüknek volt oka rá bőven.</p><p>A herceg nem volt egy egyszerű eset... Eleinte odaadó volt, a csillagokat is odaígérte, de végül maradt egy lakótelepi lakás. A hétvégéket eleinte együtt töltötték, majd a herceg szívesebben sörözött a barátaival, és néha sokáig elmaradt... Már nem volt aki dícsérje Hófehérke csodás jellemvonásait, melyeket mind jól ismerünk, mert amikor együtt vacsoráztak, a herceg csak bámult maga elé a tányérba, és ha Hófehérke kérdezte valamiről, a válasz általában az volt, “most szeretnék nyugodtan enni, ha nem probléma”. Aztán volt, hogy több pénzt vitt, mint amennyit hozott, iszákosság, szerencsejáték, további kimaradások...</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel7"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel7')
                      this.setState({
                        graphData: scene11,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A herceg transzformációja</h3>
                        <img src={withPrefix('images/snowwhite/girlfriends/8fb991217a3562df7e0750a697eae6d5.jpg')} className="ui medium left floated image" />
                        <p>De Hófehérke sem volt egy egyszerű eset... Az csak természetes, hogy neki kellet lenni a középpontban, és a fő téma ezzel kellett hogy kapcsolatos legyen: ruhák, pipere, udvarhölgyek, csupa olyan téma ami a herceget hidegen hagyta.</p><p>Amikor a herceg a barátaival szeretett volna találkozni, Hófehérke nem repesett az örömtől, és ez a hercegben lelkifurdalást ébressztett. Bánatossá tette, hogy ő nem tudja úgy elszórakoztatni aráját, mint pl. a többi herceg a legutóbbi zenés estén, akik bezzeg felsorolták Hófehérke minden báját... Enyhe depresziójában, mikor egy keményen végigdolgozott nap után kedvese a vacsoránál kérdőre vonta, már azon merengett, hogy valóban ez-e az a Hófehérke, akit neki a mesében megírt módon feleségül kellett vennie. Mivel nem sikerült meggyőznie magát, és ebben Hófehérke sem volt segítségére, bánatában, hogy mekkora egy hülye, elvesztette a kontrollt életmódja felett, italba folytotta bánatát, Hófehérke mérhetetlen költekezését szerencsejátékból próbálta fedezni, és...</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel8"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel8')
                      this.setState({
                        graphData: scene11,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      Amint az már majdnem nyilvánvaló volt, a herceg áttért – egyes források és rossz nyelvek szerint visszatért régi szokásához, és eleinte alkalomszerűen, majd mind gyakrabban vadászatra indult, mígnem ez az életmód rendszeressé vált, és végül úgy maradt. Így lett az egykor hercegből egy másik törénetben vadász. A nyíl jól szemlélteti a lezüllésének folyamatát.
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel9"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel9')
                      this.setState({
                        graphData: scene12,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      Az ábra ezen a ponton korrekcióra szorul. A herceget is nyilván anya szülte, és apja is kellett, hogy legyen. Úgy vélem, hogy a mesében a támadás Hófehérke ellen szimbólikus, tágabb értelemben véve pedig nem pusztán ellene irányul, hanem a boldog szeretetkapcsolat ellen, amit a sötét karakterek sikeresen el is pusztítottak, és ezáltal vehették fel jelenlegi formájukat. A mostoha és a vadász kapcsolata a válás, hogy nincs kapcsolat, ami pedig van, az bár ne is lenne inkább...
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel10"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel10')
                      this.setState({
                        graphData: scene12,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A látomás, vagy dezsavű?</h3><p>A királynővel kezdődik a mese, de nem sokat tudunk meg róla. Szeretnivaló, szép, egyetlen hibája csak hogy meghal. De ez is csak szimbólum, suprise-suprise: a királynő nem hal meg! Feláldozza önmagát, szerepébe temetkezik, ezért a tetszhalott állapot. Egyetlen szerepe pedig: létrehozni Hófehérkét</p><p>A királynő elábrándozik, avagy később álmot lát. Megfogalmazódik benne leendő gyemeke több tulajdonága: Hajszín, bűrszín, ajkainak színe. Genetikailag azonban csak olyan tulajdonságok örökölhetőek, amelyet az egyén – valamilyen formában -  maga is birtokol. A királynő – feltehetően maga is rendelkezett a hófehérkére jellemző tulajdonságokkal, elképzelhető, hogy azokat sorolta el, melyeket maga is kedvelt – egykori önmagában, amikor még ! Ö is Hófehérke volt!!!</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel11"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel11')
                      this.setState({
                        graphData: scene13,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      Nem várt fordulat, mindenki a Hóferkéből alakult ki, még a Hófehérke is a Hófehérkéből lett...
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel12"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel12')
                      this.setState({
                        graphData: scene14,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      De a banyáról is ezt mondtuk, ez hogy lehet?
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel13"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel13')
                      this.setState({
                        graphData: scene14,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      Nos, itt belépünk a tudatalatti világába, elérkeztünk az archetípusokhoz, meg az ezotériához. A két ellentétes személyiség skizoid módon parallel evolvál, olykor transzlokálódik, vagy expressziója szuszpendálódik. (világos, nem?) [narancssárga vonal jelöli az alternatívákat, vagyis a követendő pozitív karaktereket, és azok ellenlábasait, más szóval sötét felebarátait, amolyan árnyékszemélyiségeket]
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel14"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel14')
                      this.setState({
                        graphData: scene14,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A szív</h3><p>Milyen volt a királynő? - Szivélyes. Milyen volt a mostoha? - Szívtelen. Mit akart tenni Hófehérkével? - Szívteleníttetni akarta.</p><h3>A szívtelen</h3><p>Miért volt szívtelen a mostoha? - Valószínűleg, mikor még ő is Hófehérke volt, a vadász őt is kicsalta az erdőbe, elővette fegyverét, és... ezt a szív bánta. Az is lehet, hogy további vadászok is megpróbálták megszerezni a szívét, mire már semmi sem maradt... Sőt, lehet, hogy arra a következretésre jutott, hogy ez így normális, és végül maga csalta ki a vadászokat az erdőbe. De ez nem tette boldoggá. A szépségért sok mindenre képes egy nő, még sebészeti beavatkozásokra is, nos, ő szívleszívást csináltatott magán, remélve, hogy sikeresebb lesz a férfiaknál, és valóban, a mese nem említi hogy csúf lett volna...</p><h3>Az öreg király</h3><p>A király még kimaradt, szerepvállalása, jellemzői megkérdőjelezhetőek. Hófehérke szerető apjaként, a királyné özvegyeként szeretnivaló, de amikor összeáll a gonosz mostohával, és hagyja, hogy  az Hófehérke ellen keljen, szánalmas áldozattá, tutyimutyi papucsférjjé válik. Ki ő valójában és honnan származik?</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel15"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel15')
                      this.setState({
                        graphData: scene15,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                      Ahogy az már várható volt, a maszkulin perszonák a  feminimekhez hasonlóan divergálnak. A vertikális a maszkulin, a horizontális direkció a feminim transzformációkat prezentálja. (Kérem, ez egy komoly, tudományos cikk...)
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel16"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel16')
                      this.setState({
                        graphData: scene15,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc">
                        <h3>A hűs</h3><p>A király - az egykori herceg - egy példamutató karakter a szeretet megvalósításában. Ő nem vált el, mint a vadász, nem lett hős, hanem maradt hűs, hűséges. Jegelte vágyait, fékezte érzelmeit. (A mese télen kezdődik). Volt mit fékeznie, végig kellett néznie, ahogyan Hófehérke átalakul, feleségül vette a szeretett nőt, és azon találja magát, hogy a gonosz mostohával él. Mit tehet egy férfi egy szívtelen nő társaként? El kell érnie, hogy újból legyen szíve... szeretnie kellett.</p><h3>A szeretet</h3><p>Hogy tudta szeretni azt a gonosz banyát? A szeretet tisztán lát, nem dől be a felszínes jellemeknek, nem a pillanatnyi szereposztás alapján ítél, hogy éppen kinek mi jutott. A király karakter példát mutat türelmével, hogy akkor is szerepében marad, és fenntartja a szeretetét amikor körülötte minden összeomlik. Bánatos a viszontagságok miatt, de nem zavarja el a gonosz mostohát, majd csak akkor, mikor Hófehérke visszatért, célt ért tehát, a nélkül, hogy maga is gonosszá válna.</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel17"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel17')
                      this.setState({
                        graphData: scene15,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc" style={{ marginBottom: '100vh' }}>
                        <h3>Gonosz mostoha – Öreg király pár</h3><p>Az ábra egyik sarkába az “özvegyen maradt” király új kapcsolata került. Nehezen lehetne jó kapcsolatnak nevezni, de a történet határozott említést tesz a pár tagjainak összetartozásáról.</p><p>Amint a mostoha megjelenik, beköszönt a konfliktusos rész, a sötét időszak semmilyen szempontból nem termékeny. A királyné halott.</p><p>A király jelenléte irreleváns, sakkba szorul.</p><p>Hófehérke száműzve, a herceg még sehol.</p><p>A vadász pedig börönbe zárva...</p><p>De erre majd visszatérünk.</p>
                      </div>
                    </section>
                  </StorySection>
                  <StorySection
                    id="story.scene.sequel18"
                    onEnter={() => {
                      onEnterViewport('story.scene.sequel18')
                      this.setState({
                        graphData: scene16,
                      })
                    }}
                    onExit={this.onExitEnd}
                  >
                    <section className="story item">
                      <div className="story-desc" style={{ marginBottom: '100vh', padding: 0 }} />
                    </section>
                  </StorySection>
                </div>
                <ScrollTrigger onEnter={this.onEnterEnd} onExit={this.onExitEnd}>&nbsp;</ScrollTrigger>
              </section>

              <Footer>
                <PreviousButton
                  to="/hofejirke/"
                  content="Hófejírke"
                />
                <NextButton
                  to="/textil/"
                  content="Textil"
                />
              </Footer>
            </div>
          </div>

        </Layout>
      )
    }
    return null
  }
}

export default Graph
