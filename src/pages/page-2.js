import React from 'react'
import * as d3 from 'd3'


class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myArray: [14, 18, 24, 42, 8, 15],
    }
  }

  componentDidMount() {
    this.myFn()
  }

  componentDidUpdate() {
    this.myFn()
  }

  myFn = () => {
    const { myArray } = this.state
    d3.select('body')
      .style('background-color', '#ddd')
    const p = d3.select('body')
      .selectAll('p')
      .data(myArray)

    p.transition()
      .duration(750)
      .ease(d3.easeElastic)
      .delay((d, i) => i * 1000)
      .style('font-size', d => `${d}px`)
      .style('color', () => `hsl(${Math.random() * 360},${Math.random() * 100}%,50%)`)

    // Enter…
    p.enter()
      .append('p')
      .text(d => `I’m number ${d}!`)

    // Exit…
    p.exit().remove()
  }

  clickHandler = () => {
    this.setState({
      myArray: [20, 20, 20],
    })
  }

  render() {
    console.log('render')
    return (
      <div onClick={this.clickHandler}>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
    )
  }
}

export default SecondPage
