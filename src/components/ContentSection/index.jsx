import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const ContentSection = ({ id }) => (
  <section key={id} id={id} className="item">
    <div className="ui hidden divider" />
    <h3>
      <FormattedMessage id={`${id}.title`} />
    </h3>
    <FormattedHTMLMessage id={`${id}.desc`} />
  </section>
)

export default ContentSection
