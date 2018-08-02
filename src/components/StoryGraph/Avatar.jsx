// @flow

import React from 'react'
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

const Avatar = (props) => {
  const { character } = props

  const {
    id,
    gender,
    name,
    imageX = 0,
    imageY = 0,
    imageWidth = 100,
    imageHeight = 100,
    cx,
    cy,
    scale,
    opacity,
  } = character

  let color
  switch (gender) {
    case 'female':
      color = 'pink'
      break

    case 'male':
      color = 'skyblue'
      break

    default:
      color = 'gray'
      break
  }

  return (
    <g id={id} style={{ transform: scaleAvatar(cx, cy, scale) }} opacity={opacity}>
      <circle id="avatarCircle" cx="50" cy="50" r="32" fill="none" />
      <circle className="gender" cx="50" cy="50" r="30" fill={color} />
      <circle cx="50" cy="50" r="25" fill="none" stroke="black" strokeWidth=".5" />
      <g clipPath="url(#circleMask)">
        <image x={imageX} y={imageY} href={`/avatars/${id}.jpg`} width={imageWidth} height={imageHeight} />
      </g>
      <text textAnchor="middle" className="avatar-title">
        <textPath href="#avatarCircle" startOffset="75%">
          {name}
        </textPath>
      </text>
    </g>
  )
}

export default Avatar
