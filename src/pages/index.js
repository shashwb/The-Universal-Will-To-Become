import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

/** COMPONENTS */
import PostTags from '../components/PostTags'

/** MATERIAL REACT UI */
import Paper from '@material-ui/core/Paper'

/** HELPER FUNCTIONS */
import { getAllTagsForSection } from '../Utility/Helpers'

/**
 * Main entry point for the DEFAULT state of the application. This is not rendered
 * when selecting a category
 * @param { all relevant data for the application passed down as props} data
 */
const Index = ({ data }) => { 

  /** get all overall tags for all posts (MAIN PAGE) */
  const allTagsForAllCategories = getAllTagsForSection(data.allMarkdownRemark.edges);

  return (
      <Layout>
        <main>
          <Helmet title={config.siteTitle} />
          <SEO />
          <Paper>
            <PostTags tags={allTagsForAllCategories} />
          </Paper>
          <Paper style={{ padding: '20px'}}>
            <PostListing postEdges={data.allMarkdownRemark.edges} />
          </Paper>
        </main>
      </Layout>
  )

}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`


//  export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [fields___date], order: DESC }
//       filter: {
//         frontmatter: {
//           categories: {
//             in: [
//               "New York City",
//               "Richmond",
//             ],
//           }
//         }
//       }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             date(formatString: "MMMM DD, YYYY")
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//             categories
//           }
//         }
//       }
//     }
//   }
// `
