import React from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const emptyFn = () => {}

const ContentSection = (props) => {
  const {
    id,
    images,
  } = props

  const onEnter = props.onEnter || emptyFn
  const onExit = props.onExit || emptyFn

  return (
    <ScrollTrigger onEnter={() => onEnter(id)} onExit={() => onExit(id)}>
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
    </ScrollTrigger>
  )
}

export default ContentSection
