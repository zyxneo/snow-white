import React from 'react'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import lodash from 'lodash'
import ScrollTrigger from 'react-scroll-trigger'
import StorySection from '../components/StorySection'
import { StoryGraph } from '../components/StoryGraph'
import {
  AvatarWidth,
  AvatarHeight,
  SvgWidth,
  SvgHeight,
  AvatarCenterD,
  trw,
  trh,
  translateCenterString,
  scaleString,
  scaleAvatar,
  drawBezier,
} from '../components/StoryGraph/shared'
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
scene4.characters.queen.opacity = 0.5
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
move(scene6.characters.prince, { cx: 95, cy: 25 })
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
move(scene8.characters.witch2, CooBottomRightFemale)
scene8.arrows.queenAndWitch = {
  color: PURPLE,
  fromCharacter: 'snowwhite',
  fromSide: 'bottom',
  toCharacter: 'witch2',
  toSide: 'left',
}

const scene9 = lodash.cloneDeep(scene8)
scene9.characters.witch.opacity = 0
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
scene10.arrows.queenAndWitch.opacity = 0

const scene11 = lodash.cloneDeep(scene10)
scene11.arrows.witch2AndHuntsman.dashArray = '1'
scene11.arrows.witch2AndHuntsman.width = 0.5

const scene12 = lodash.cloneDeep(scene11)
scene12.arrows.princeAndHuntsman = {
  color: PURPLE,
  fromCharacter: 'prince',
  fromSide: 'right',
  toCharacter: 'huntsman',
  toSide: 'top',
}

const scene13 = lodash.cloneDeep(scene12)
scene13.arrows.huntsmanAndSnowwhite.toCharacter = 'center'
scene13.arrows.huntsmanAndSnowwhite.fromSide = 'top'
scene13.arrows.witch2AndSnowwhite.toCharacter = 'center'
scene13.arrows.kingAndPrince = {
  color: GREEN,
  fromCharacter: 'king',
  fromSide: 'bottom',
  toCharacter: 'prince',
  toSide: 'left',
  dashArray: '1',
  width: 0.5,
}
scene13.arrows.queenAndPrince = {
  color: GREEN,
  fromCharacter: 'queen',
  fromSide: 'right',
  toCharacter: 'prince',
  toSide: 'left',
  dashArray: '1',
  width: 0.5,
}
// scene7.characters.prince.scaprincele = 0.3
// move(scene7.characters.prince, CooCenterTop)

// scene3.characters.queen.scale = 0.3
// move(scene3.characters.queen, CooTopLeftFemale)
// scene3.characters.snowwhite.opacity = 1
// move(scene3.characters.snowwhite, CooCenterTop)
// scene3.characters.witch.opacity = 1
// move(scene3.characters.witch, CooBottomLeftFemale)
// move(scene3.characters.king, CooTopLeftMale)
// scene3.characters.prince.opacity = 1
// move(scene3.characters.prince, CooCenterBottom)
// scene3.characters.huntsman.opacity = 1
// move(scene3.characters.huntsman, CooTopRightMale)


class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      end: false,
      graphData: scene1,
    }
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
    } = this.state
    const {
      inViewport,
      onEnterViewport,
    } = this.props

    return (
      <section key="story.asWeKnowIt" id="story.asWeKnowIt" className="item">
        <div className="ui hidden divider" />
        <h3><FormattedMessage id="story.asWeKnowIt.title" /></h3>
        <div className={classNames('scrollable', { fixed: inViewport.lastIndexOf('story.scene') !== -1 }, { 'scroll-below': end })}>

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
          />
          <StorySection
            id="story.scene.beginning.queen"
            onEnter={() => {
              onEnterViewport('story.scene.beginning.queen')
              this.setState({
                graphData: scene2,
              })
            }}
          />
          <StorySection
            id="story.scene.beginning.snowwhite"
            onEnter={() => {
              onEnterViewport('story.scene.beginning.snowwhite')
              this.setState({
                graphData: scene3,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.beginning.witch"
            onEnter={() => {
              onEnterViewport('story.scene.beginning.witch')
              this.setState({
                graphData: scene4,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.beginning.huntsman"
            onEnter={() => {
              onEnterViewport('story.scene.beginning.huntsman')
              this.setState({
                graphData: scene5,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.beginning.prince"
            onEnter={() => {
              onEnterViewport('story.scene.beginning.prince')
              this.setState({
                graphData: scene6,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel1"
            onEnter={() => {
              onEnterViewport('story.scene.sequel1')
              this.setState({
                graphData: scene7,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel2"
            onEnter={() => {
              onEnterViewport('story.scene.sequel2')
              this.setState({
                graphData: scene8,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel3"
            onEnter={() => {
              onEnterViewport('story.scene.sequel3')
              this.setState({
                graphData: scene9,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel4"
            onEnter={() => {
              onEnterViewport('story.scene.sequel4')
              this.setState({
                graphData: scene9,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel5"
            onEnter={() => {
              onEnterViewport('story.scene.sequel5')
              this.setState({
                graphData: scene10,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel6"
            onEnter={() => {
              onEnterViewport('story.scene.sequel6')
              this.setState({
                graphData: scene11,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel7"
            onEnter={() => {
              onEnterViewport('story.scene.sequel7')
              this.setState({
                graphData: scene12,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel8"
            onEnter={() => {
              onEnterViewport('story.scene.sequel8')
              this.setState({
                graphData: scene13,
              })
            }}
            onExit={this.onExitEnd}
          />
          <StorySection
            id="story.scene.sequel9"
            onEnter={() => {
              onEnterViewport('story.scene.sequel9')
              this.setState({
                graphData: scene13,
              })
            }}
            onExit={this.onExitEnd}
          />
        </div>
        <ScrollTrigger onEnter={this.onEnterEnd} onExit={this.onExitEnd}>&nbsp;</ScrollTrigger>

      </section>
    )
  }
}

export default Graph
