import React from 'react'
import Layout from '../components/layout'
import { withIntl } from '../i18n'
import Graph from '../sections/Graph'
import Introduction from '../sections/Introduction'
import Storytelling from '../sections/Storytelling'
import Textil from '../sections/Textil'
import Symbols from '../sections/Symbols'
import Terminal from '../sections/Terminal'
import Holle from '../sections/Holle'
import SleepingBeauty from '../sections/SleepingBeauty'

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
            <Terminal onEnter={this.onEnterViewport} />
            <Holle onEnter={this.onEnterViewport} />
            <SleepingBeauty onEnter={this.onEnterViewport} />
          </div>
        </div>

      </Layout>
    )
  }
}

export default withIntl(IndexPage)
