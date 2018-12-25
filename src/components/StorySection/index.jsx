import React from 'react'

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
          {this.props.children}
        </ScrollTrigger>
      )
    }
    return null
  }
}

export default StorySection
