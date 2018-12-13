import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'

const emptyFn = () => {}

class StorySection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }
  componentDidMount() {
    if(!this.state.mounted) {
      try {
        this.ScrollTrigger = require("react-scroll-trigger").default;
        this.setState({
          mounted: true
        })
      } catch (e) {
        console.error(e);
      }
    }
  }

  render() {

    const {
      id,
    } = this.props

    const onEnter = this.props.onEnter || emptyFn
    const onExit = this.props.onExit || emptyFn

    if (this.state.mounted) {
      const ScrollTrigger = this.ScrollTrigger
      return (
        <ScrollTrigger onEnter={() => onEnter(id)} onExit={() => onExit(id)}>
          <section key={id} id={id} className="story item">
            <div className="story-desc">
              <FormattedHTMLMessage id={id} />
            </div>
          </section>
        </ScrollTrigger>
      )
    }
    return null
  }
}

export default StorySection
