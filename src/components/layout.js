// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Header from './header'
import '../../node_modules/sanitize.css/sanitize.css'

const Layout = ({ children, data, intl }) => (
  <div>
    <Helmet
      title={intl.formatMessage({ id: 'site.title' })}
      meta={[
        {
          name: 'description',
          content: intl.formatMessage({ id: 'site.description' })
        },
        {
          name: 'keywords',
          content: intl.formatMessage({ id: 'site.keywords' }),
        },
      ]}
    />
    <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&amp;subset=latin-ext" rel="stylesheet" />
    <Header siteTitle={intl.formatMessage({ id: 'site.title' })} />
    <div>
      {children}
    </div>
  </div>
)

export default injectIntl(Layout)
