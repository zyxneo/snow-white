import React from 'react'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import ScrollTrigger from 'react-scroll-trigger'
import Scrollspy from 'react-scrollspy'
import CustomScrollbar from '../components/CustomScrollbar'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import ContentSection from '../components/ContentSection'

import { graphData, StoryGraph } from '../components/StoryGraph'
import Sections from '../components/sections'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection: 'none',
      inViewport: '',
      end: false,
    }
  }

  handleScroll = (props) => {
    const id = props && props.id ? props.id : 'none'

    history.replaceState(undefined, undefined, `#${id}`)
    this.setState({
      activeSection: id,
    })
  }


  onEnterViewport = (id) => {
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

  showQueen = (id) => {
    graphData.characters[0].cx += 10
    this.onEnterViewport(id)
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
      activeSection,
      inViewport,
      end,
    } = this.state

    return (
      <Layout bodyClass={activeSection}>

        <div className="sidebar">
          <CustomScrollbar>
            <Scrollspy
              items={Sections.map(section => section.id)}
              currentClassName="is-current"
              onUpdate={this.handleScroll}
              className="menu"
              offset={-200}
            >
              {Sections.map(section => (
                <li key={section.id} className="item">
                  <a href={`#${section.id}`} className="link">
                    <FormattedMessage id={`${section.id}.title`} />
                  </a>
                </li>
              ))}
            </Scrollspy>
          </CustomScrollbar>
        </div>

        <div className="content">
          <div className="ui text container list">
            <h1><FormattedMessage id="site.title" /></h1>
            <h2>
              <FormattedMessage id="site.subtitle" />
            </h2>
            <img className="ui fluid image" src="/images/snowwhite/ec604b93f922dbb736628b8d5cdacfc9.jpg" />
            {
              Sections.map((section) => {
                if (section.id === 'story.asWeKnowIt') {
                  return (
                    <section key={section.id} id="story.asWeKnowIt" className="item">
                      <div className="ui hidden divider" />
                      <h3><FormattedMessage id="story.asWeKnowIt.title" /></h3>
                      <div className={classNames('scrollable', { fixed: inViewport }, { 'scroll-below': end })}>

                        <StoryGraph graphData={graphData} inViewport={inViewport} />
                        <div className="spacer" />
                        <ContentSection
                          id="story.scene1"
                          onEnter={() => this.showQueen('story.scene1')}
                          onExit={this.onExitViewport}
                        />
                        <ContentSection
                          id="story.scene2"
                          onEnter={this.onEnterViewport}
                          onExit={this.onExitViewport}
                        />
                        <ContentSection
                          id="story.scene3"
                          onEnter={this.onEnterViewport}
                          onExit={this.onExitViewport}
                        />
                        <ContentSection
                          id="story.scene4"
                          onEnter={this.onEnterViewport}
                          onExit={this.onExitViewport}
                        />
                      </div>
                      <ScrollTrigger onEnter={this.onEnterEnd} onExit={this.onExitEnd}>&nbsp;</ScrollTrigger>

                    </section>
                  )
                }
                return (<ContentSection key={section.id} id={section.id} images={section.images} />)
              })
            }
          </div>
        </div>

      </Layout>
    )
  }
}

export default withIntl(IndexPage)
