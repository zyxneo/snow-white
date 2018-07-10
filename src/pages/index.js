import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import { withIntl, Link } from '../i18n'

const IndexPage = () => (
  <Layout>
    <h1>
      <FormattedMessage id="title" />
    </h1>
    <Link to="/page-2/">
      link
    </Link>
  </Layout>
)

export default withIntl(IndexPage)
