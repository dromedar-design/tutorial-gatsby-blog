import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query BlogList {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 160)
            frontmatter {
              date(locale: "hu", fromNow: true)
              slug
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog lista</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article className="teaser">
          <header>
            <h3>{node.frontmatter.title}</h3>
            <span>{node.frontmatter.date}</span>
          </header>

          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}
