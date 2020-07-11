import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import Bio from '../components/Bio'
import PostTags from '../components/PostTags'
import SocialLinks from '../components/SocialLinks'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import styles from './post.module.scss'
import './prism-okaidia.css'

// lodash
import _ from 'lodash'

export default ({ data, pageContext }) => {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const date = postNode.fields.date

  // WE may have to reverse engineer the Shape based on the current category
  const this_post_category = data.markdownRemark.frontmatter.categories;
  //figure out which "shape" this calls into
  const mappings = config.shapesMappingToCategories;
  console.log('what is this post category?', this_post_category, 'and what are the mappings?', mappings);


  let shape_key = Object.keys(mappings).filter(element => {
    let valuesOfObjectAtKey = mappings[element];
    return valuesOfObjectAtKey.includes('Television');
  });

  /** SET HOOKS */
  // const [postShape, setPostShape] = React.useState(shape_key);


  /**
   * we also need to be able to setShape from here...
   */
  if (!post.id) {
    post.id = slug
  }
  return (
    <Layout
      parent_setShape={ setPostShape }
      parent_shape={ postShape } 
    >
      <main>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          <p className={styles.postMeta}>
            {date} &mdash; {postNode.timeToRead} Min Read{' '}
          </p>
          <div className={styles.postMeta}>
            <PostTags tags={post.tags} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

          <hr />
          <Bio config={config} />
          <div className={styles.postMeta}>
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
        </div>
        <nav>
          <ul className={styles.pagination}>
            <li>
              <Link to={prevslug} rel="prev">
                ← {prevtitle}
              </Link>
            </li>
            <li>
              <Link to={nextslug} rel="next">
                {nexttitle}→
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        categories
        tags
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
