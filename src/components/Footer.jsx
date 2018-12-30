
// @flow

import React from 'react'
import type { Node } from 'react'

// $FlowIgnore
import { Segment, Container } from 'semantic-ui-react'

type Props = {
  children: Node,
}

const Footer = ({ children }: Props) => (
  <Segment vertical style={{ padding: '5em 0em' }}>
    <Container>
      {children}
    </Container>
  </Segment>
)

export default Footer
