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
  drawCharacterBezier,
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

const scene2 = lodash.cloneDeep(scene1)
scene2.characters.king.scale = 0.3
move(scene2.characters.king, CooCenter)

scene2.characters.queen.opacity = 1
scene2.characters.queen.scale = 0.75

const scene3 = lodash.cloneDeep(scene2)
scene3.characters.queen.scale = 0.3
move(scene3.characters.queen, CooTopLeftFemale)
scene3.characters.snowwhite.opacity = 1
move(scene3.characters.snowwhite, CooCenterTop)
scene3.characters.witch.opacity = 1
move(scene3.characters.witch, CooBottomLeftFemale)
move(scene3.characters.king, CooTopLeftMale)
scene3.characters.prince.opacity = 1
move(scene3.characters.prince, CooCenterBottom)
scene3.characters.huntsman.opacity = 1
move(scene3.characters.huntsman, CooTopRightMale)

const scene4 = lodash.cloneDeep(scene3)

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
        <div className={classNames('scrollable', { fixed: inViewport.lastIndexOf('story.scene.beginning') !== -1 }, { 'scroll-below': end })}>

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
        </div>
        <ScrollTrigger onEnter={this.onEnterEnd} onExit={this.onExitEnd}>&nbsp;</ScrollTrigger>

      </section>
    )
  }
}

export default Graph
