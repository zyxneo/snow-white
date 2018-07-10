import React from 'react'
import { Link } from '../i18n'
import Language from './language'

const Header = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <div>
      <Language />
    </div>
  </div>
)

export default Header
