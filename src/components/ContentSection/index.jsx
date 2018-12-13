import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const emptyFn = () => {}

class ContentSection extends React.Component {
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
      images,
    } = this.props

    const onEnter = this.props.onEnter || emptyFn
    const onExit = this.props.onExit || emptyFn

    if (this.state.mounted) {
      const ScrollTrigger = this.ScrollTrigger
      return (
        <ScrollTrigger onEnter={() => onEnter(id)} onExit={() => onExit(id)}>
          <section key={id} id={id} className="item">
            <h3>
              <FormattedMessage id={`${id}.title`} />
            </h3>
            <FormattedHTMLMessage id={`${id}.desc`} />

            {
              images && images.map(image => <img key={image} src={`/images/${image}`} className="ui fluid image" />)
            }
            <div className="ui hidden divider" />
          </section>
        </ScrollTrigger>
      )
    }
    return null
  }
}

export default ContentSection
