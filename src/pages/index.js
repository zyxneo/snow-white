import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import Scrollspy from 'react-scrollspy'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import ContentSection from '../components/ContentSection'


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
  },
  {
    id: 'story.storyteller.symbols',
  },

  {
    id: 'story.textil.historyOfIndustry',
  },
  {
    id: 'story.textil.clothing',
  },
  {
    id: 'story.textil.fates',
  },
  {
    id: 'story.textil.dna',
  },
  {
    id: 'story.textil.umbilicalCord',
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
          <Scrollspy
            items={Sections.map(section => section.id)}
            currentClassName="is-current"
            onUpdate={this.handleScroll}
            className="menu"
          >
            {Sections.map(section => (
              <li key={section.id} className="item">
                <a href={`#${section.id}`} className="link">
                  <FormattedMessage id={`${section.id}.title`} />
                </a>
              </li>
            ))}
          </Scrollspy>
        </div>

        <div className="content ui text container list">
          <h2>
            <FormattedMessage id="site.subtitle" />
          </h2>
          {Sections.map(section => <ContentSection key={section.id} id={section.id} />)}
        </div>

      </Layout>
    )
  }
}

export default withIntl(IndexPage)
