import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const ContentSection = ({ id, images }) => (
  <section key={id} id={id} className="item">
    <div className="ui hidden divider" />
    <h3>
      <FormattedMessage id={`${id}.title`} />
    </h3>
    <FormattedHTMLMessage id={`${id}.desc`} />

    {
      images && images.map(image => <img key={image} src={`/images/${image}`} className="ui fluid image" />)
    }
  </section>
)

export default ContentSection
