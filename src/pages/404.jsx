import React from 'react'
import Layout from '../components/layout'
import PreviousButton from '../components/PreviousButton'

const NotFoundPage = () => (
  <Layout>
    <div className="content">
      <div className="ui text container list">
        <h1>404 - NOT FOUND</h1>
        <p>A keresett oldal nem található...</p>
        <PreviousButton
          to="/"
          content="Főoldal"
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
