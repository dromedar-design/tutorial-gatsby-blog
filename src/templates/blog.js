import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <Layout>
      <h2>{data.markdownRemark.frontmatter.title}</h2>

      <article
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
