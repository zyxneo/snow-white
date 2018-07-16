import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import Scrollspy from 'react-scrollspy'
import { Scrollbars } from 'react-custom-scrollbars'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import ContentSection from '../components/ContentSection'

import { graphData, StoryGraph } from '../components/StoryGraph'

const Sections = [
  {
    id: 'story.introduction',
  },
  {
    id: 'story.storyteller',
  },
  {
    id: 'story.storyteller.legacy',
  },
  {
    id: 'story.storyteller.commonLanguage',
  },
  {
    id: 'story.storyteller.philosophersStone',
  },
  {
    id: 'story.storyteller.historyOfStorytelling',
  },
  {
    id: 'story.storyteller.emptySymbols',
    images: [
      'fairytales/d9d1324cbeee4cb98d791a22d5ef8b3a.jpg',
    ],
  },
  {
    id: 'story.storyteller.symbols',
  },

  {
    id: 'story.asWeKnowIt',
  },

  {
    id: 'story.textil.historyOfIndustry',
  },
  {
    id: 'story.textil.clothing',
  },
  {
    id: 'story.textil.fates',
    images: [
      'fates/three-witches/507b2de3fd7820d7635379419b461e44.jpg',
      'fates/thread-of-life/37beef605e6b1147dda91067b37373a5.jpg',
      'fates/thread-of-life/ffa194d2f308ee1ca1d4460730df9bdc.jpg',
    ],
  },
  {
    id: 'story.textil.dna',
    images: [
      'dns/1e128f17a2754dbaacc515b9883f9bd1.jpg',
      'dns/jf14.reviews.prenatal.large.jpg',
    ],
  },
  {
    id: 'story.textil.umbilicalCord',
    images: [
      'dns/9a89fd44784303216a1ab156c7e37c14.jpg',
    ],
  },
  {
    id: 'story.textil.lifeBlood',
  },

  {
    id: 'character.queen',
  },
  {
    id: 'character.snowwhite',
  },
  {
    id: 'character.stepmother',
  },
  {
    id: 'character.king',
  },
  {
    id: 'character.prince',
  },
  {
    id: 'character.huntsman',
  },

  {
    id: 'symbol.color',
  },
  {
    id: 'symbol.color.white',
  },
  {
    id: 'symbol.color.black',
  },
  {
    id: 'symbol.color.red',
  },
  {
    id: 'symbol.color.redInWhite',
  },
  {
    id: 'symbol.color.redInBlack',
  },

  {
    id: 'symbol.paths',
  },
  {
    id: 'symbol.forest',
  },
  {
    id: 'symbol.home',
  },
  {
    id: 'symbol.mirror',
  },
  {
    id: 'symbol.jail',
  },
  {
    id: 'symbol.mine',
  },
]

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
          <Scrollbars>
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
          </Scrollbars>
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
                    <section id="story.asWeKnowIt" className="item">
                      <div className="ui hidden divider" />
                      <h3><FormattedMessage id="story.asWeKnowIt.title" /></h3>
                      <StoryGraph graphData={graphData} />
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
