import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import Scrollspy from 'react-scrollspy'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import ContentSection from '../components/ContentSection'

const ListItem = ({ id }) => (
  <li>
    <a href={`#${id}`}>
      <FormattedMessage id={`${id}.title`} />
    </a>
  </li>
)


const Sections = [
  'story.introduction',

  'story.storyteller',
  'story.storyteller.legacy',
  'story.storyteller.commonLanguage',
  'story.storyteller.philosophersStone',
  'story.storyteller.historyOfStorytelling',
  'story.storyteller.emptySymbols',
  'story.storyteller.symbols',
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
    console.log(this.state.activeSection)
    return (
      <Layout bodyClass={this.state.activeSection}>

        <div className="sidebar">
          <Scrollspy
            items={Sections}
            currentClassName="is-current"
            onUpdate={this.handleScroll}
          >
            {Sections.map(section => <ListItem key={section} id={section} />)}
          </Scrollspy>
        </div>

        <div className="content">
          <h2>
            <FormattedMessage id="site.subtitle" />
          </h2>
          {Sections.map(section => <ContentSection key={section} id={section} />)}
        </div>

      </Layout>
    )
  }
}

export default withIntl(IndexPage)
