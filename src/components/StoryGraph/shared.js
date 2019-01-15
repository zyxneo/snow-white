// @flow

export const AvatarWidth = 100
export const AvatarHeight = 100
export const AvatarcircleR = 30
export const AvatarTitleHeight = 12

export const SvgWidth = 120
export const SvgHeight = 120

export const AvatarCenterD = (SvgWidth - AvatarWidth) / 2

export const trw = 30
export const trh = trw * Math.sqrt(3) / 2

// export const scale = percent => `scale(${percent} ${percent})`

export const translateCenterString = (cx, cy, scalePercent) => {
  const tx = (cx / scalePercent) - (AvatarWidth / 2)
  const ty = (cy / scalePercent) - (AvatarHeight / 2)
  return `translate(${tx}px, ${ty}px)`
}

export const scaleString = (scalePercentX, scalePercentY) => `scale(${scalePercentX}, ${scalePercentY})`

export const scaleAvatar = (cx, cy, scalePercent) => `${scaleString(scalePercent, scalePercent)} ${translateCenterString(cx, cy, scalePercent)}`

export const drawBezier = (x1, y1, x2, y2, vertical, strength = 0.5) => {
  if (vertical) {
    return `M ${x1},${y1} C ${x1},${y1 + (y2 - y1) * strength}, ${x2},${y2 - (y2 - y1) * strength}, ${x2},${y2}`
  }
  return `M ${x1},${y1} C ${x1 + (x2 - x1) * strength},${y1}, ${x2 - (x2 - x1) * strength},${y2}, ${x2},${y2}`
}

/* eslint-disable complexity */
export const drawCharacterBezier = (char1, fromSide, char2, toSide, padding = 0, strength = 0.5) => {
  // beginning
  let x1 = 1
  let y1 = 1
  // end
  let x2 = 1
  let y2 = 1

  // console.log(char.scale * (AvatarWidth / 2))
  x1 = char1.cx
  y1 = char1.cy
  if (fromSide === 'left') {
    x1 -= (char1.scale * AvatarcircleR)
  } else if (fromSide === 'right') {
    x1 += (char1.scale * AvatarcircleR)
  } else if (fromSide === 'top') {
    y1 -= (char1.scale * (AvatarcircleR + AvatarTitleHeight))
  } else {
    y1 += (char1.scale * AvatarcircleR)
  }

  x2 = char2.cx
  y2 = char2.cy
  if (toSide === 'left') {
    x2 -= (char2.scale * AvatarcircleR) + padding
  } else if (toSide === 'right') {
    x2 += (char2.scale * AvatarcircleR) + padding
  } else if (toSide === 'top') {
    y2 -= (char2.scale * (AvatarcircleR + AvatarTitleHeight)) + padding
  } else {
    y2 += (char2.scale * AvatarcircleR) + padding
  }


  // Control points
  let Cx1 = x1
  let Cy1 = y1
  let Cx2 = x2
  let Cy2 = y2

  if (fromSide === 'top') {
    if (toSide === 'top') {
      Cy1 = y1 - Math.abs(x2 - x1) * strength
      Cy2 = y2 - Math.abs(x2 - x1) * strength
    }
    if (toSide === 'right') {
      Cy1 = y1 - (y1 - y2) * strength
      Cx2 = x2 - (x2 - x1) * strength
    }
    if (toSide === 'bottom') {
      // vertical
      Cy1 = y1 - (y1 - y2) * strength
      Cy2 = y2 + (y1 - y2) * strength
    }
    if (toSide === 'left') {
      Cy1 = y1 - (y1 - y2) * strength
      Cx2 = x2 + (x1 - x2) * strength
    }
  }
  if (fromSide === 'right') {
    if (toSide === 'top') {
      Cx1 = x1 + (x2 - x1) * strength
      Cy2 = y2 + (y1 - y2) * strength
    }
    if (toSide === 'right') {
      // horizontal convex
      Cx1 = x1 + Math.abs(x2 - x1) * strength
      Cx2 = x2 + Math.abs(x2 - x1) * strength
    }
    if (toSide === 'bottom') {
      // vertical
      Cx1 = x1 + (x2 - x1) * strength
      Cy2 = y2 + (y1 - y2) * strength
    }
    if (toSide === 'left') {
      Cx1 = x1 + (x2 - x1) * strength
      Cx2 = x2 - (x2 - x1) * strength
    }
  }
  if (fromSide === 'bottom') {
    if (toSide === 'top') {
      // vertical
      Cy1 = y1 + (y2 - y1) * strength
      Cy2 = y2 - (y2 - y1) * strength
    }
    if (toSide === 'right') {
      Cy1 = y1 + (y1 - y2) * strength
      Cx2 = x2 - (x2 - x1) * strength
    }
    if (toSide === 'bottom') {
      // vertical
      Cy1 = y1 + Math.abs(y1 - y2) * strength
      Cy2 = y2 + Math.abs(y1 - y2) * strength
    }
    if (toSide === 'left') {
      Cy1 = y1 - (y1 - y2) * strength
      Cx2 = x2 - (x2 - x1) * strength
    }
  }

  if (fromSide === 'left') {
    if (toSide === 'top') {
      Cx1 = x1 + (x2 - x1) * strength
      Cy2 = y2 + (y1 - y2) * strength
    }
    if (toSide === 'right') {
      // horizontal convex
      Cx1 = x1 - (x1 - x2) * strength
      Cx2 = x2 + (x1 - x2) * strength
    }
    if (toSide === 'bottom') {
      // vertical
      Cx1 = x1 + (x2 - x1) * strength
      Cy2 = y2 + (y1 - y2) * strength
    }
    if (toSide === 'left') {
      Cx1 = x1 - Math.abs(x1 - x2) * strength
      Cx2 = x2 - Math.abs(x1 - x2) * strength
    }
  }

  return `M ${x1},${y1} C ${Cx1},${Cy1}, ${Cx2},${Cy2}, ${x2},${y2}`
}
