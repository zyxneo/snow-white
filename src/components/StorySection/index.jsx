import React from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import { FormattedHTMLMessage } from 'react-intl'

const emptyFn = () => {}

const StorySection = (props) => {
  const {
    id,
  } = props

  const onEnter = props.onEnter || emptyFn
  const onExit = props.onExit || emptyFn

  return (
    <ScrollTrigger onEnter={() => onEnter(id)} onExit={() => onExit(id)}>
      <section key={id} id={id} className="story item">
        <div className="story-desc">
          <FormattedHTMLMessage id={id} />
        </div>
      </section>
    </ScrollTrigger>
  )
}

export default StorySection
