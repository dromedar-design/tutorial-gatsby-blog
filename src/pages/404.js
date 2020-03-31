import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <h1>404</h1>
      <p>Sajnos az oldal nem található, amit keresel.</p>
      <p>
        <Link to="/">Vissza</Link>
      </p>
    </Layout>
  )
}
