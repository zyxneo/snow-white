import React, { Children } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

const emptyFn = () => {}

const ScrollSection = (props) => {
  const {
    id,
  } = props

  const onEnter = props.onEnter || emptyFn
  const onExit = props.onExit || emptyFn

  return (
    <ScrollTrigger onEnter={() => onEnter(id)} onExit={() => onExit(id)}>
      <section key={id} id={id} className="item">
        {props.children}
      </section>
    </ScrollTrigger>
  )
}

export default ScrollSection
