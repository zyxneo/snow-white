import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import Graph from '../sections/Graph'
import Introduction from '../sections/Introduction'
import Storytelling from '../sections/Storytelling'
import Textil from '../sections/Textil'
import Symbols from '../sections/Symbols'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: '',
    }
  }

  onEnterViewport = (id) => {
    history.replaceState(undefined, undefined, `#${id}`)
    this.setState({
      inViewport: id,
    })
  }

  render() {
    const {
      inViewport,
    } = this.state

    return (
      <Layout bodyClass={inViewport}>
        <div className="content">
          <div className="ui text container list">
            <Introduction onEnter={this.onEnterViewport} />
            <Storytelling onEnter={this.onEnterViewport} />
            <Graph
              onEnter={this.onEnterViewport}
              inViewport={inViewport}
              onEnterViewport={this.onEnterViewport}
            />
            <Textil onEnter={this.onEnterViewport} />
            <Symbols onEnter={this.onEnterViewport} />
          </div>
        </div>

      </Layout>
    )
  }
}

export default withIntl(IndexPage)
