import React from 'react'
import { FormattedMessage } from 'react-intl'

const graphData = {
  characters: [
    {
      id: 'king',
      name: 'Király',
      gender: 'male',
      color: 'skyblue',
      imageX: 0,
      imageY: 0,
      imageWidth: 100,
      imageHeight: 100,
      cx: 37.5,
      cy: 22.5,
      scale: 0.25,
      opacity: 1,
    },
    {
      id: 'queen',
      name: 'Királynő',
      gender: 'female',
      color: 'pink',
      imageX: 0,
      imageY: 0,
      imageWidth: 100,
      imageHeight: 100,
      cx: 22.5,
      cy: 37.5,
      scale: 0.25,
      opacity: 1,
    },
    {
      id: 'snowwhite',
      name: 'Hófehérke',
      gender: 'female',
      color: 'pink',
      imageX: 0,
      imageY: 0,
      imageWidth: 100,
      imageHeight: 100,
      cx: 60,
      cy: 60,
      scale: 1,
      opacity: 1,
    },
  ],
  arrows: [
    {
      id: 'queenAndKing',
      color: 'orange',
      fromCharacter: 'king',
      fromSide: 'left',
      toCharacter: 'queen',
      toSide: 'top',
    },
  ],
}

export default graphData
