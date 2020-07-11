import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'

/**
 * MATERIAL REACT UI
 */
import { makeStyles } from '@material-ui/core/styles';

const CategoryStyles = makeStyles({
  tag: {
    color: '#4f647d',
  }
})

const CategoryTemplate = ({ data, pageContext }) => {

  const classes = CategoryStyles();
  console.log(':: CategoryTemplate [template component], data', data, 'pageContext', pageContext);
  return (
    <Layout>
    <main>
      <Helmet title={` "${pageContext.category}" - ${config.siteTitle}`} />
      <h1>
        Regarding...
        {' '}
        <div className={classes.tag}>{pageContext.category}</div>
      </h1>
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
  )
  
}

export default CategoryTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
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
