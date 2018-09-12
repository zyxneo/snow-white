import React from 'react'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import lodash from 'lodash'
import ScrollTrigger from 'react-scroll-trigger'
import StorySection from '../components/StorySection'
import { StoryGraph } from '../components/StoryGraph'
import scene1 from '../components/StoryGraph/scene1'

const scene2 = lodash.cloneDeep(scene1)
scene2.characters.king.cx = 52.5
scene2.characters.king.cy = 77.5
scene2.characters.king.scale = 0.25

scene2.characters.queen.opacity = 1
scene2.characters.queen.cx = 22.5
scene2.characters.queen.cy = 37.5
scene2.characters.queen.scale = 0.75

const scene3 = lodash.cloneDeep(scene2)
const scene4 = lodash.cloneDeep(scene3)


class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      end: false,
      graphData: scene1,
      inViewport: '',
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
      // end: false,
    })
  }

  render() {
    const {
      end,
      graphData,
      inViewport,
    } = this.state

    return (
      <section key="story.asWeKnowIt" id="story.asWeKnowIt" className="item">
        <div className="ui hidden divider" />
        <h3><FormattedMessage id="story.asWeKnowIt.title" /></h3>
        <div className={classNames('scrollable', { fixed: inViewport.lastIndexOf('story.scene.beginning') !== -1 }, { 'scroll-below': end })}>

          <ScrollTrigger onEnter={() => this.onEnterViewport('')}>
            <br />
          </ScrollTrigger>
          <StoryGraph graphData={graphData} inViewport={inViewport} />
          <div className="spacer" />
          <StorySection
            id="story.scene.beginning.king"
            onEnter={() => {
              this.setState({
                graphData: scene1,
                inViewport: 'story.scene.beginning.king',
              })
            }}
          />
          <StorySection
            id="story.scene.beginning.queen"
            onEnter={() => {
              this.setState({
                graphData: scene2,
                inViewport: 'story.scene.beginning.queen',
              })
            }}
          />
          <StorySection
            id="story.scene.beginning.snowwhite"
            onEnter={() => {
              this.setState({
                graphData: scene3,
                inViewport: 'story.scene.beginning.snowwhite',
              })
            }}
          />
          <StorySection
            id="story.scene.beginning.witch"
            onEnter={() => {
              this.setState({
                graphData: scene4,
                inViewport: 'story.scene.beginning.witch',
                end: false,
              })
            }}
          />
        </div>
        <ScrollTrigger onEnter={this.onEnterEnd} onExit={this.onExitEnd}>&nbsp;</ScrollTrigger>

      </section>
    )
  }
}

export default Graph
