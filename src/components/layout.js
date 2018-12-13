// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import '../../node_modules/sanitize.css/sanitize.css'
// $FlowIgnore
import 'semantic-ui-css/semantic.min.css'
import './layout.scss'

const Layout = ({
  children, data, intl, bodyClass,
}) => (
    <div>
      <Helmet
        title={intl.formatMessage({ id: 'site.title' })}
        meta={[
          {
            name: 'description',
            content: intl.formatMessage({ id: 'site.description' }),
          },
          {
            name: 'keywords',
            content: intl.formatMessage({ id: 'site.keywords' }),
          },
        ]}
        bodyAttributes={{
          class: bodyClass,
        }}
      />
      <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&amp;subset=latin-ext" rel="stylesheet" />
      <div className="layout">
        {children}
      </div>
    </div>
)

export default injectIntl(Layout)
