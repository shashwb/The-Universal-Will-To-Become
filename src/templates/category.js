import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'

import PostTags from '../components/PostTags';

/** STYLES */
import styles from "./templates_styles.css";


/** MATERIAL REACT UI */
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/** HELPERS */
import { getAllTagsForSection } from '../Utility/Helpers'

const CategoryStyles = makeStyles({
  tag: {
    color: '#4f647d',
  }
})

const CategoryTemplate = ({ data, pageContext }) => {

  const classes = CategoryStyles();

  //current selected category
  const currentCategory = pageContext.category;

  //helper function
  const unique_tagsForAllCategories = getAllTagsForSection(data.allMarkdownRemark.edges, currentCategory);

  console.log('::: what is unique_tagsForAllCategories', unique_tagsForAllCategories);


  return (
    <Layout>
      <main>
        <Helmet title={` "${pageContext.category}" - ${config.siteTitle}`} />
        <h1>
          Regarding...
          {' '}
          <div className={classes.tag}>{pageContext.category}</div>
        </h1>
        <Paper>
          <PostTags tags={unique_tagsForAllCategories} />
        </Paper>
        <Paper style={{ padding: '20px' }} >
          <PostListing postEdges={data.allMarkdownRemark.edges} />
        </Paper>
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
