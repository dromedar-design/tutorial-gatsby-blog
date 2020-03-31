import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>

      <article
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />

      <p>
        <Link to="/">Vissza</Link>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(locale: "hu", formatString: "YYYY. MMMM DD.")
      }
    }
  }
`
