import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'
import Layout from '../components/layout'
import StoryGraph from '../components/StoryGraph'

const SecondPage = () => (
  <Layout>
    <StoryGraph />
  </Layout>
)

export default withIntl(SecondPage)
