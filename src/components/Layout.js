import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/tailwindcss@1.2.0/dist/base.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <header>
        <h1>programozz.dev blog</h1>
        <nav>
          <ul>
            <li>
              <Link activeClassName="active" to="/">
                Főoldal
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about">
                Rólam
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
