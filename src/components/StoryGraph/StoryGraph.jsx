// @flow

import React from 'react'
import * as d3 from 'd3'
import classNames from 'classnames'
import Avatar from './Avatar'
import graphData from './graphData'
import {
  AvatarWidth,
  AvatarHeight,
  SvgWidth,
  SvgHeight,
  AvatarCenterD,
  trw,
  trh,
  translateCenterString,
  scaleString,
  scaleAvatar,
  drawBezier,
} from './shared'

import './StoryGraph.scss'


const t = d3.transition().duration(750).ease(d3.easeLinear)

class StoryGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // if (!this.state.queen) {
    //   this.setState({
    //     queen: d3.select('#queen'),
    //     king: d3.select('#king'),
    //   })
    // }
    this.updateGraph()
  }

  componentDidUpdate() {
    this.updateGraph()
  }

  updateGraph = () => {
    console.log(this.props.graphData.characters)
    const data = this.props.graphData.characters
    const characters = d3.select('.storyGraph #characters')
      .selectAll('g.character')
      .data(data)

    characters.transition()
      .duration(1000)
      .ease(d3.easeElastic)
      .attr('opacity', d => d.opacity)
      .style('transform', d => scaleAvatar(d.cx, d.cy, d.scale))

    // Enter…
    const character = characters.enter()
      .append('g')
      .attr('id', d => d.id)
      .attr('class', 'character')

    character.append('circle')
      .attr('id', 'avatarCircle')
      .attr('cx', '50')
      .attr('cy', '50')
      .attr('r', '32')
      .attr('fill', 'none')
    character.append('circle')
      .attr('class', 'gender')
      .attr('cx', '50')
      .attr('cy', '50')
      .attr('r', '30')
      .attr('fill', d => d.color)
    character.append('circle')
      .attr('class', 'none#######')
      .attr('cx', '50')
      .attr('cy', '50')
      .attr('r', '25')
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', '.5')
    character.append('g')
    character.append('g')
      .attr('clip-path', 'url(#circleMask)')
      .append('image')
      .attr('x', d => d.imageX)
      .attr('y', d => d.imageY)
      .attr('width', d => d.imageWidth)
      .attr('height', d => d.imageHeight)
      .attr('href', d => `/avatars/${d.id}.jpg`)
    character.append('text')
      .attr('text-anchor', 'middle')
      .attr('class', 'avatar-title')
      .append('textPath')
      .attr('href', '#avatarCircle')
      .attr('startOffset', '75%')
      .text(d => d.name)

    // Exit…
    characters.exit().remove()
  }

  sceneBeginningKing = () => {
    const {
      queen,
      king,
    } = this.state

    queen.transition(t)
      .style('transform', 'scale(.25) translate(60px)')
      .style('opacity', 0)

    king.transition(t)
      .style('transform', `scale(1) translate(${AvatarCenterD}px, ${AvatarCenterD}px)`)
      .style('opacity', 1)
  }

  sceneBeginningQueen = () => {
    const {
      queen,
      king,
    } = this.state

    const {
      graphData,
    } = this.props

    queen.transition(t)
      .style('transform', `scale(1) translate(${AvatarCenterD}px, ${AvatarCenterD}px)`)
      .style('opacity', 1)

    king.transition(t)
      .style('transform', scaleAvatar(graphData.characters[3].cx, graphData.characters[3].cy, graphData.characters[3].scale))
      .style('opacity', 1)
  }

  sceneBeginningSnowwhite = () => {
    const {
      queen,
      king,
    } = this.state

    const {
      graphData,
    } = this.props

    queen.transition(t)
      .style('transform', `scale(1) translate(${AvatarCenterD}px, ${AvatarCenterD}px)`)
      .style('opacity', 1)

    king.transition(t)
      .style('transform', scaleAvatar(graphData.characters[3].cx, graphData.characters[3].cy, graphData.characters[3].scale))
      .style('opacity', 1)
  }

  sceneBeginningWitch = () => {
    const {
      queen,
      king,
    } = this.state

    const {
      graphData,
    } = this.props

    queen.transition(t)
      .style('transform', 'scale(1)')
      .style('opacity', 1)

    king.transition(t)
      .style('transform', scaleAvatar(graphData.characters[3].cx, graphData.characters[3].cy, graphData.characters[3].scale))
      .style('opacity', 1)
  }

  render() {
    const {
      graphData,
      className,
      inViewport,
    } = this.props
    /*
    switch (inViewport) {
      case 'story.scene.beginning.king':
        this.sceneBeginningKing()
        break

      case 'story.scene.beginning.queen':
        this.sceneBeginningQueen()
        break

      case 'story.scene.beginning.snowwhite':
        this.sceneBeginningSnowwhite()
        break

      case 'story.scene.beginning.witch':
        this.sceneBeginningWitch()
        break

      default:
        console.log('default')
        break
    }
    */
    return (
      <svg
        className={classNames('storyGraph', className)}
        xmlns="http://www.w3.org/2000/svg"
        xmlns-xlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${SvgWidth} ${SvgHeight}`}
      >

        <defs>
          <clipPath id="circleMask">
            <circle cx="50" cy="50" r="25" />
          </clipPath>
        </defs>


        <g id="characters" />

        {/*

        <rect x="0" y="0" width={SvgWidth} height={SvgHeight} fill="none" stroke="black" strokeWidth="1" />

        {
          graphData.characters.map(character => <Avatar key={character.id} character={character} />)
        }

        <path d="M 30,37.5 a 25,25,0,0,1,22.5,22.5" stroke="red" strokeWidth="1" fill="none" />

        <path id="huntsman-snowwhite" d="M 90,82.5 c -10,0, -20,-15, -30,-15" stroke="red" strokeWidth="1" fill="none" />
        <path id="witch-snowwhite" d="M 75,97.5 c -10,0, -5,-30, -15,-30" stroke="red" strokeWidth="1" fill="none" />

        <circle cx="24" cy="32" r="3" fill="orange" />
        <circle cx="91" cy="54" r="3" fill="orange" />
        <path d={drawBezier(24, 32, 91, 54)} stroke="red" strokeWidth="1" fill="none" />
        <path d={drawBezier(24, 32, 91, 54, true)} stroke="red" strokeWidth="1" fill="none" />

        <path d={drawBezier(graphData.characters[0].cx, graphData.characters[0].cy, graphData.characters[1].cx, graphData.characters[1].cy, true)} stroke="red" strokeWidth="1" fill="none" />

        <line x1="60" y1="60" x2={60 + trw / 2} y2={60 - trh} stroke="#000" strokeWidth="1" />
        */}
      </svg>
    )
  }
}

export default StoryGraph
