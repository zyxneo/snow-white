// @flow

import React from 'react'
// $FlowIgnore
import { Link } from 'gatsby'
// $FlowIgnore
import { Button } from 'semantic-ui-react'

type Props = {
  to: string,
  content: string,
}

const PreviousButton = ({ to, content }: Props) => (
  <Button
    basic
    as={Link}
    to={to}
    content={content}
    icon="left arrow"
    labelPosition="left"
    floated="left"
    color="red"
  />
)

export default PreviousButton
