import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <h2>404</h2>
      <p>Sajnos az oldal nem található, amit keresel.</p>
      <p>
        <Link to="/">Vissza</Link>
      </p>
    </Layout>
  )
}
