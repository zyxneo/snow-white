// @flow

import React from 'react'
import type { Node } from 'react'
import { Link } from 'gatsby'

// $FlowIgnore
import {
  Button,
  List,
  Icon,
} from 'semantic-ui-react'
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
type State = {
  menuVisible: boolean,
}

class Layout extends React.PureComponent<Props, State> {
  showMenu = this.showMenu.bind(this)

  constructor(props: Props) {
    super(props)
    this.state = {
      menuVisible: true,
    }
  }

  showMenu() {
    const { menuVisible } = this.state
    this.setState({
      menuVisible: !menuVisible,
    })
  }

  render() {
    const {
      children,
      bodyClass,
    } = this.props

    const {
      menuVisible,
    } = this.state

    const inverted = bodyClass && (bodyClass.includes('story.textil.fates') || bodyClass.includes('symbol.color.white') || bodyClass.includes('story.bluebarb.key'))

    return (
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
            class: bodyClass + (inverted ? ' inverted' : ''),
          }}
        />
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&amp;subset=latin-ext" rel="stylesheet" />
        <Button
          basic
          icon
          onClick={this.showMenu}
          className="mainMenu__toggler"
        >
          <Icon name="bars" />
        </Button>
        <div className="layout">
          <List
            className="mainMenu"
            hidden={menuVisible}
            size="large"
            relaxed
            animated
            selection
            inverted={inverted}
          >
            <List.Item
              as={Link}
              activeClassName="active"
              to="/"
              icon="home"
              content="Bevezető"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/storytelling"
              icon="book"
              content="Egyszer volt, hol nem volt..."
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/hofejirke"
              icon="apple"
              content="Hófejírke"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/graph"
              icon="code branch"
              content="Grafikon"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/textil"
              icon="chess board"
              content="Textil"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/symbols"
              icon="heartbeat"
              content="Szimbólumok"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/colors"
              icon="tint"
              content="Szín-szimbolika"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/characters"
              icon="users"
              content="Karakterek"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/terminal"
              icon="microchip"
              content="Terminal"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/holle"
              icon="snowflake outline"
              content="Holle annyó"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/theseus"
              icon="compass outline"
              content="Thészeusz"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/bluebarb"
              icon="key"
              content="Kékszakáll"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/transformations"
              icon="recycle"
              content="Átalakulások"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/cosmic"
              icon="star outline"
              content="Kozmikus Hófehérhe"
            />
            <List.Item
              as={Link}
              activeClassName="active"
              to="/summary"
              icon="sort alphabet down"
              content="Összefoglaló"
            />
          </List>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
