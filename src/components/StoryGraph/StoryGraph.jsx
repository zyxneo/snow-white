// @flow

import React from 'react'
import { withPrefix } from 'gatsby-link'
import classNames from 'classnames'
import {
  AvatarWidth,
  AvatarHeight,
  SvgWidth,
  SvgHeight,
  scaleAvatar,
  drawCharacterBezier,
} from './shared'

export const RED = 'red'
export const GREEN = 'green'
export const PURPLE = 'purple'
export const ORANGE = 'orange'
export const TEAL = '#00ddff'
export const PINK = 'pink'
export const SKYBLUE = 'skyblue'

import './StoryGraph.scss'

const ARROW_COLORS = [RED, GREEN, PURPLE]
class StoryGraph extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    if(!this.state.mounted) {
      try {
        this.d3 = require("d3");
        this.setState({
          mounted: true
        })
      } catch (e) {
        console.error(e);
      }
    }

    this.updateGraph()
  }

  componentDidUpdate() {
    this.updateGraph()
  }

  updateGraph = () => {

    if (this.state.mounted) {
      const d3 = this.d3

      const t = d3.transition().duration(1000).ease(d3.easeExpInOut)
      // console.log(this.props.graphData.characters)
      const data = this.props.graphData
      const characters = d3.select('.storyGraph #characters')
        .selectAll('g.character')
        .data(d3.keys(data.characters) || [], d => d)

      characters.transition(t)
        .attr('opacity', d => data.characters[d].opacity)
        .style('transform', d => scaleAvatar(data.characters[d].cx, data.characters[d].cy, data.characters[d].scale))

      // Enter…
      const character = characters.enter()
        .append('g')
        .attr('id', d => d)
        .attr('class', 'character')

      character.append('circle')
        .attr('class', 'gender')
        .attr('cx', AvatarWidth / 2)
        .attr('cy', AvatarHeight / 2)
        .attr('r', '30')
        .attr('fill', (d) => {
          if (data.characters[d].gender === 'male') {
            return SKYBLUE
          }
          return PINK
        })
      character.append('circle')
        .attr('class', 'circle')
        .attr('cx', AvatarWidth / 2)
        .attr('cy', AvatarHeight / 2)
        .attr('r', '25')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', '.5')
      character.append('g')
      character.append('g')
        .attr('clip-path', 'url(#circleMask)')
        .append('image')
        .attr('x', d => data.characters[d].imageX)
        .attr('y', d => data.characters[d].imageY)
        .attr('width', d => data.characters[d].imageWidth)
        .attr('height', d => data.characters[d].imageHeight)
        .attr('href', d => withPrefix(`avatars/${data.characters[d].id}.jpg`))

      character.append('path')
        .attr('id', 'avatarCircle')
        .attr('fill', 'none')
        .attr('d', `M ${AvatarWidth / 2 - 32}, ${AvatarHeight / 2} a 32,32 0 1,1 ${32 * 2},0`)
      character.append('text')
        .attr('text-anchor', 'middle')
        .attr('class', 'avatar-title')
        .append('textPath')
        .attr('href', '#avatarCircle')
        .attr('startOffset', '50%')
        .text(d => data.characters[d].name)

      // Exit…
      characters.exit().remove()

      const arrows = d3.select('.storyGraph #arrows')
        .selectAll('path.arrow')
        .data(d3.keys(data.arrows) || [], d => d)

      arrows.transition(t)
        .attr('d', (d) => {
          let padding = 0
          if (ARROW_COLORS.includes(data.arrows[d].color)) {
            padding = 2
          }
          return drawCharacterBezier(data.characters[data.arrows[d].fromCharacter], data.arrows[d].fromSide, data.characters[data.arrows[d].toCharacter], data.arrows[d].toSide, padding)
        })
        .attr('stroke', d => data.arrows[d].color)
        .attr('stroke-width', d => data.arrows[d].width || '1')
        .attr('stroke-dasharray', d => data.arrows[d].dashArray || '')
        .attr('opacity', d => data.arrows[d].opacity)
        .attr('marker-end', d => `url(#arrow-${data.arrows[d].color})`)

      arrows.enter()
        .append('path')
        .attr('id', d => d)
        .attr('class', 'arrow')
        .attr('fill', 'none')

      arrows.exit().remove()
    }
  }

  render() {
    const {
      className,
    } = this.props

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
          {
            // ORANGE and TEAL has no direction
            ARROW_COLORS.map(color => (
              <marker
                key={color}
                id={`arrow-${color}`}
                markerWidth="4"
                markerHeight="3"
                refX="1"
                refY="1.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,3 L4,1.5 z" fill={color} />
              </marker>
            ))
          }
        </defs>

        <g id="arrows" />
        <g id="characters" />

      </svg>
    )
  }
}

export default StoryGraph
