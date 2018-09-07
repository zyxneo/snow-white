import React from 'react'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import ScrollTrigger from 'react-scroll-trigger'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import ContentSection from '../components/ContentSection'
import StorySection from '../components/StorySection'

import { StoryGraph } from '../components/StoryGraph'
import scene1 from '../components/StoryGraph/scene1'
import scene2 from '../components/StoryGraph/scene2'
import scene3 from '../components/StoryGraph/scene3'
import scene4 from '../components/StoryGraph/scene4'
import Sections from '../components/sections'
import Introduction from '../sections/Introduction'
import Storytelling from '../sections/Storytelling'
import Textil from '../sections/Textil'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: '',
      end: false,
      graphData: scene1,
    }
  }

  onEnterViewport = (id) => {
    history.replaceState(undefined, undefined, `#${id}`)
    this.setState({
      inViewport: id,
    })
  }

  onExitViewport = (id) => {
    const { inViewport } = this.state
    if (id === inViewport) {
      this.setState({
        inViewport: '',
      })
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
      inViewport,
      end,
      graphData,
    } = this.state

    return (
      <Layout bodyClass={inViewport}>
        <div className="content">
          <div className="ui text container list">
            <h1><FormattedMessage id="site.title" /></h1>
            <h2>
              <FormattedMessage id="site.subtitle" />
            </h2>
            <img className="ui fluid image" src="/images/snowwhite/ec604b93f922dbb736628b8d5cdacfc9.jpg" />
            <Introduction onEnter={this.onEnterViewport} />
            <Storytelling onEnter={this.onEnterViewport} />
            {
              Sections.map((section) => {
                if (section.id === 'story.asWeKnowIt') {
                  return (
                    <section key={section.id} id="story.asWeKnowIt" className="item">
                      <div className="ui hidden divider" />
                      <h3><FormattedMessage id="story.asWeKnowIt.title" /></h3>
                      <div className={classNames('scrollable', { fixed: inViewport.lastIndexOf('story.scene.beginning') !== -1 }, { 'scroll-below': end })}>

                        <ScrollTrigger onEnter={() => this.setState({ inViewport: '' })}>
                          <br />
                        </ScrollTrigger>
                        <StoryGraph graphData={graphData} inViewport={inViewport} />
                        <div className="spacer" />
                        <StorySection
                          id="story.scene.beginning.king"
                          onEnter={() => this.setState({ graphData: scene1, inViewport: 'story.scene.beginning.king' })}
                        />
                        <StorySection
                          id="story.scene.beginning.queen"
                          onEnter={() => this.setState({ graphData: scene2, inViewport: 'story.scene.beginning.queen' })}
                        />
                        <StorySection
                          id="story.scene.beginning.snowwhite"
                          onEnter={() => this.setState({ graphData: scene3, inViewport: 'story.scene.beginning.snowwhite' })}
                        />
                        <StorySection
                          id="story.scene.beginning.witch"
                          onEnter={() => this.setState({ graphData: scene4, inViewport: 'story.scene.beginning.witch' })}
                        />
                      </div>
                      <ScrollTrigger onEnter={this.onEnterEnd} onExit={this.onExitEnd}>&nbsp;</ScrollTrigger>

                    </section>
                  )
                }
                return (
                  <ContentSection
                    key={section.id}
                    id={section.id}
                    images={section.images}
                    onEnter={this.onEnterViewport}
                  />
                )
              })
            }

            <Textil onEnter={this.onEnterViewport} />
          </div>
        </div>

      </Layout>
    )
  }
}

export default withIntl(IndexPage)
