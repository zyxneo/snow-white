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

const NextButton = ({ to, content }: Props) => (
  <Button
    basic
    as={Link}
    to={to}
    content={content}
    icon="right arrow"
    labelPosition="right"
    floated="right"
    color="red"
  />
)

export default NextButton
