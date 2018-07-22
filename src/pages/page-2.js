import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl } from '../i18n'
import Layout from '../components/layout'
import { StoryGraph } from '../components/StoryGraph'

const graphData = {
  characters: [
    {
      id: 'queen',
      name: <FormattedMessage id="character.queen.title" defaultMessage="Queen" tagName="tspan" />,
      gender: 'female',
      imageX: 0,
      imageY: 0,
      imageWidth: 100,
      imageHeight: 100,
      cx: 22.5,
      cy: 37.5,
      scale: 0.25,
    },
    {
      id: 'snowwhite',
      name: <FormattedMessage id="character.snowwhite.title" defaultMessage="Snow White" tagName="tspan" />,
      gender: 'female',
      imageX: 0,
      imageY: 0,
      imageWidth: 100,
      imageHeight: 100,
      cx: 52.5,
      cy: 67.5,
      scale: 0.25,
    },
    {
      id: 'witch',
      name: <FormattedMessage id="character.stepmother.title" defaultMessage="Stepmother" tagName="tspan" />,
      gender: 'female',
      imageX: -4,
      imageY: 20,
      imageWidth: 120,
      imageHeight: 120,
      cx: 82.5,
      cy: 97.5,
      scale: 0.25,
    },
    {
      id: 'king',
      name: <FormattedMessage id="character.king.title" defaultMessage="King" tagName="tspan" />,
      gender: 'male',
      imageX: 0,
      imageY: 0,
      imageWidth: 100,
      imageHeight: 100,
      cx: 37.5,
      cy: 22.5,
      scale: 0.25,
    },
    {
      id: 'prince',
      name: <FormattedMessage id="character.prince.title" defaultMessage="Prince" tagName="tspan" />,
      gender: 'male',
      imageX: 25,
      imageY: 10,
      imageWidth: 50,
      imageHeight: 100,
      cx: 67.5,
      cy: 52.5,
      scale: 0.25,
    },
    {
      id: 'huntsman',
      name: <FormattedMessage id="character.huntsman.title" defaultMessage="Huntsman" tagName="tspan" />,
      gender: 'male',
      imageX: 25,
      imageY: 10,
      imageWidth: 50,
      imageHeight: 100,
      cx: 97.5,
      cy: 82.5,
      scale: 0.25,
    },
  ],
}


const SecondPage = () => (
  <Layout>
    <StoryGraph graphData={graphData} />
  </Layout>
)

export default withIntl(SecondPage)
