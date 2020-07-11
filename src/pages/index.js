import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'


/**
 * Main entry point for the DEFAULT state of the application. This is not rendered
 * when selecting a category
 * @param { all relevant data for the application passed down as props} data
 */
const Index = ({ data }) => {
  alert('LOAD THE MAIN INDEX');

  const [shape, setShape] = React.useState('Stories');

  const mappings = config.shapesMappingToCategories;
  const shape_mapping = mappings[shape];

  console.log('>>> FRONT PAGE :: index component...what is the data?', data, 'mapping', mappings, 'SHAPE MAPPING', shape_mapping);
  
  // filter the blog posts to only show valid from mapping
  const validPostsFromQueryData = data.allMarkdownRemark.edges.filter((element) => { 
    const categories = element.node.frontmatter.categories;
    return shape_mapping.some(v=> categories.indexOf(v) !== -1)
  });

  console.log('    :: <validPostsFromQueryData>', validPostsFromQueryData);

 // create a new object and copy over the old markdown
  let dataFromQuery = Object.assign({}, data);
  console.log('   :: <dataFromQuery> (should be a copy from the normal data', dataFromQuery);

 // update the old markdown with our new filtered content
  dataFromQuery.allMarkdownRemark.edges = validPostsFromQueryData;
  console.log('update dataFromQuery with the new information...(what is the final value?)', dataFromQuery);


  return (
    <Layout parent_setShape={ setShape } parent_shape={ shape }>
      <main>
        <Helmet title={config.siteTitle} />
        <SEO />
        {/* <PostListing postEdges={data.allMarkdownRemark.edges} /> */}
        <PostListing
          parent_setShape={ setShape }
          parent_shape={ shape }
          postEdges={dataFromQuery.allMarkdownRemark.edges}
        />
      </main>
    </Layout>
  )

}

export default Index



/**
 * TODO :: we have to create different queries depending on which 'Story" is selected
 * 
 * we use the config file to determine which things we query for
 * 
 * 
 */
/* eslint no-undef: "off" */

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
