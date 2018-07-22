import React from 'react'
import classNames from 'classnames'

import './StoryGraph.scss'

const AvatarWidth = 100
const AvatarHeight = 100
// const scale = percent => `scale(${percent} ${percent})`

const translateCenterString = (cx, cy, scalePercent) => {
  const tx = (cx / scalePercent) - (AvatarWidth / 2)
  const ty = (cy / scalePercent) - (AvatarHeight / 2)
  return `translate(${tx} ${ty})`
}

const scaleString = (scalePercentX, scalePercentY) => `scale(${scalePercentX} ${scalePercentY})`

const scaleAvatar = (cx, cy, scalePercent) => `${scaleString(scalePercent, scalePercent)} ${translateCenterString(cx, cy, scalePercent)}`

const drawBezier = (x1, y1, x2, y2, vertical, strength = 0.5) => {
  if (vertical) {
    return `M ${x1},${y1} C ${x1},${y1 + (y2 - y1) * strength}, ${x2},${y2 - (y2 - y1) * strength}, ${x2},${y2}`
  }
  return `M ${x1},${y1} C ${x1 + (x2 - x1) * strength},${y1}, ${x2 - (x2 - x1) * strength},${y2}, ${x2},${y2}`
}


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
    <g id={id} transform={scaleAvatar(cx, cy, scale)}>
      <circle id="avatarCircle" cx="50" cy="50" r="32" fill="none" />
      <circle cx="50" cy="50" r="30" fill={color} />
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

const StoryGraph = (props) => {
  const { graphData, className } = props

  return (
    <svg
      className={classNames('storyGraph', className)}
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 120 120"
    >

      <defs>
        <clipPath id="circleMask">
          <circle cx="50" cy="50" r="25" />
        </clipPath>
      </defs>


      <rect x="0" y="0" width="120" height="120" fill="none" stroke="black" strokeWidth="1" />

      <symbol id="scene">
        {
          graphData.characters.map(character => <Avatar key={character.id} character={character} />)
        }

        <path d="M 30,37.5 a 25,25,0,0,1,22.5,22.5" stroke="red" strokeWidth="1" fill="none" />

        <path id="huntsman-snowwhite" d="M 90,82.5 c -10,0, -20,-15, -30,-15" stroke="red" strokeWidth="1" fill="none" />
        <path id="witch-snowwhite" d="M 75,97.5 c -10,0, -5,-30, -15,-30" stroke="red" strokeWidth="1" fill="none" />
      </symbol>

      <use href="#scene" x="0" y="0" />
      {/*
      <use href="#scene" x="60" y="0" />
      <use href="#scene" x="-60" y="0" />
      <use href="#scene" x="0" y="90" />
      <use href="#scene" x="60" y="90" />
      <use href="#scene" x="0" y="-90" />
      <use href="#scene" x="-60" y="-90" />

      <circle cx="24" cy="32" r="3" fill="orange" />
      <circle cx="91" cy="54" r="3" fill="orange" />
      <path d={drawBezier(24, 32, 91, 54)} stroke="red" strokeWidth="1" fill="none" />
      <path d={drawBezier(24, 32, 91, 54, true)} stroke="red" strokeWidth="1" fill="none" />
      */}

      <path d={drawBezier(graphData.characters[0].cx, graphData.characters[0].cy, graphData.characters[1].cx, graphData.characters[1].cy, true)} stroke="red" strokeWidth="1" fill="none" />
    </svg>
  )
}
export default StoryGraph
