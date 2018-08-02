// @flow

export const AvatarWidth = 100
export const AvatarHeight = 100

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
