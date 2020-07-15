import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import _ from 'lodash'

const Categories = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.group.map(category => (
        <li key={category.fieldValue} style={{
          display: 'block',
          position: 'relative',
          float: 'left',
          textAlign: 'center',
          marginBottom: '0px',
          // fontFamily: 'neutron',
        }}>
          <Link
            to={`/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
            style={{ fontSize: '1em' }}
          >
            {category.fieldValue}
            <strong> ({category.totalCount})</strong>
          </Link>
        </li>
      ))}
    </>
  )
}

export default Categories

