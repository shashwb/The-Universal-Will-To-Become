import React from 'react'
import { Link } from 'gatsby'
import styles from './PostsListing.module.scss'

const PostListing = ( props ) => {
  const postEdges = props.postEdges;
  const getPostList = () => {
    const postList = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  const postList = getPostList();

  return (
      <div className={styles.articleList}>
      {
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <article className={styles.articleBox}>
              <div className={styles.right}>
                <h3>{post.title}</h3>
                <div className={styles.meta} style={{ marginBottom: '10px' }} >
                  {post.date} &mdash; <span>{post.categories.join(' / ')}</span>{' '}
                  &mdash; {post.timeToRead} Min Read{' '}
                </div>
                <div 
                  style={{ 
                    display: 'inline-block',
                     marginBottom: '10px' 
                    }}
                >
                  {
                    post.tags.map(tag => {
                      return (
                        <span
                          style={{
                              fontSize: '0.5rem',
                              padding: '0.3rem .6rem',
                              margin: '0.3rem',
                              borderRadius: '3px',
                              border: '1px solid #17171714',
                              color: 'rgba(0, 0, 0, 0.54)',
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })
                  }
                </div>
                <p>{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))
      }
    </div>
  )
}

export default PostListing
