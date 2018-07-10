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
        <image x={x} y={y} href={`/avatars/${id}.jpg`} width={width} height={height} />
      </g>
      <text textAnchor="middle" className="avatar-title">
        <textPath href="#avatarCircle" startOffset="75%">
          {title}
        </textPath>
      </text>
    </symbol>
  )
}
const Scale = 0.25
const scale = percent => `scale(${percent} ${percent})`
const setXY = (x, y) => `scale(${Scale} ${Scale}) translate(${x / Scale} ${y / Scale})`

const StoryGraph = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="800" height="800">

    <defs>
      <clipPath id="circleMask">
        <circle cx="50" cy="50" r="25" />
      </clipPath>
    </defs>

    <Avatar id="queen" color="pink" title={<FormattedMessage id="character.queen" defaultMessage="Queen" tagName="tspan" />} />
    <Avatar id="snowwhite" color="pink" title={<FormattedMessage id="character.snowwhite" defaultMessage="Snow White" tagName="tspan" />} />
    <Avatar id="witch" color="pink" title={<FormattedMessage id="character.stepmother" defaultMessage="Stepmother" tagName="tspan" />} x="-4" y="20" width="120" height="120" />
    <Avatar id="huntsman" color="skyblue" title={<FormattedMessage id="character.huntsman" defaultMessage="Huntsman" tagName="tspan" />} width="50" height="100" x="25" y="10" />
    <Avatar id="prince" color="skyblue" title={<FormattedMessage id="character.prince" defaultMessage="Prince" tagName="tspan" />} width="50" height="100" x="25" y="10" />
    <Avatar id="king" color="skyblue" title={<FormattedMessage id="character.king" defaultMessage="King" tagName="tspan" />} width="50" height="100" x="25" y="10" />

    <g>
      <rect x="0" y="0" width="100" height="100" fill="none" stroke="black" strokeWidth="1" />
      <use href="#queen" x="0" y="0" transform={setXY(0, 50)} />
      <use href="#snowwhite" x="0" y="0" transform="scale(0.25 0.25) translate(100 10)" />
      <use href="#witch" x="0" y="0" transform="scale(0.25 0.25) translate(10 100)" />
      <use href="#huntsman" x="0" y="0" transform="scale(0.25 0.25) translate(100 100)" />
      <use href="#prince" x="0" y="0" transform="scale(0.25 0.25) translate(100 200)" />
      <use href="#king" x="0" y="0" transform="scale(0.25 0.25) translate(10 200)" />
    </g>
    <rect x="5" y="5" width="30" height="30" fill="none" stroke="black" strokeWidth="1" />
    <rect x="65" y="5" width="30" height="30" fill="none" stroke="black" strokeWidth="1" />
    <rect x="35" y="35" width="30" height="30" fill="none" stroke="black" strokeWidth="1" />
  </svg>
)

export default injectIntl(StoryGraph)
