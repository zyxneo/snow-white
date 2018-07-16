import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class CustomScrollbar extends Component {
  renderThumb = ({ style, ...props }) => (
    <div
      className="scrollBar"
      {...props}
    />
  )

  render() {
    return (
      <Scrollbars
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        onUpdate={this.handleUpdate}
        {...this.props}
      />
    )
  }
}

export default CustomScrollbar
