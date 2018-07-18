import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
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
    }
  }

  handleScroll = props => (
    this.setState({
      activeSection: props && props.id ? props.id : 'none',
    })
  )

  render() {
    return (
      <Layout bodyClass={this.state.activeSection}>

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
            <h2>
              <FormattedMessage id="site.subtitle" />
            </h2>
            {
              Sections.map((section) => {
                if (section.id === 'story.asWeKnowIt') {
                  return (
                    <section key={section.id} id="story.asWeKnowIt" className="item">
                      <div className="ui hidden divider" />
                      <h3><FormattedMessage id="story.asWeKnowIt.title" /></h3>
                      <StoryGraph graphData={graphData} />
                      <div className="trigger" id="sec1" />
                      <div className="trigger" id="sec2" />
                      <div className="trigger" id="sec3" />
                      <div className="trigger" id="sec4" />
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
