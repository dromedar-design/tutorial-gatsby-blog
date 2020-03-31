const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const data = await graphql(`
    query CreatePages {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve('src/templates/blog.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
