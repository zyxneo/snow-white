// @flow

import React from 'react'
import type { Node } from 'react'
// $FlowIgnore
import Helmet from 'react-helmet'

// $FlowIgnore
import 'sanitize.css/sanitize.css'
// $FlowIgnore
import 'semantic-ui-css/semantic.min.css'

// $FlowIgnore
import './layout.scss'

type Props = {
  children: Node,
  bodyClass: string,
}

const Layout = ({ children, bodyClass }: Props): Node => (
  <div>
    <Helmet
      title="Snow White"
      meta={[
        {
          name: 'description',
          content: 'Hófehérke mese elemzése',
        },
        {
          name: 'keywords',
          content: 'Hófehérke, mese, elemzés',
        },
        {
          name: 'og:image',
          content: '/snow-white/images/snowwhite/heartless/24020e0d4a4d1f87b9c0cda731c19251.jpg',
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

export default Layout
