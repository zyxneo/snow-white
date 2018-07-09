import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'

import './StoryGraph.css'

const Avatar = (props) => {
  const {
    id,
    color,
    title,
    x = 0,
    y = 0,
    width = 100,
    height = 100
  } = props

  return (
    <symbol id={id}>
      <circle id="avatarCircle" cx="50" cy="50" r="32" fill="none" />
      <circle cx="50" cy="50" r="30" fill={color} />
      <circle cx="50" cy="50" r="25" fill="none" stroke="black" strokeWidth=".5" />
      <g clipPath="url(#circleMask)">
        <image x={x} y={y} href={`/avatars/${id}.jpg
        `} width={width} height={height} >
        </image>
      </g>
      <text textAnchor="middle" className="avatar-title">
        <textPath href="#avatarCircle" startOffset="75%">
          {title}
        </textPath>
      </text>
    </symbol>
  )
}

const StoryGraph = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="400" height="400">

    <defs>
      <clipPath id="circleMask">
        <circle cx="50" cy="50" r="25" />
      </clipPath>
    </defs>

    <Avatar id="queen" color="pink" title={<FormattedMessage id="queen" defaultMessage="Queen" tagName="tspan" dy="-2" />} />
    <Avatar id="snowwhite" color="pink" title="Hófehérke" />
    <Avatar id="witch" color="pink" title="Mostoha" x="-4" y="20" width="120" height="120" />

    <g>
      <rect x="0" y="0" width="100" height="100" fill="none" stroke="black" strokeWidth="1"/>
      <use href="#queen" x="0" y="0" transform="scale(0.25 0.25) translate(10 10)" />
      <use href="#snowwhite" x="0" y="0" transform="scale(0.25 0.25) translate(100 10)" />
      <use href="#witch" x="0" y="0" transform="scale(0.25 0.25) translate(10 100)" />
    </g>
  </svg>
)

export default injectIntl(StoryGraph)
