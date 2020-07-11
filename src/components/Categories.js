import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import _ from 'lodash'

const Categories = props => {
  console.log(':: Categories [ component ], props', props);
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

  // console.log('what is the category data?', data);

  const d = [
    'testing'
  ]

  return (
    <>
      {data.allMarkdownRemark.group.map(category => (
        <li key={category.fieldValue}>
          <Link
            to={`/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
            activeClassName={props.activeClassName}
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

// export const pageQuery = graphql`
// {
//   allMarkdownRemark(
//     filter: {
//       frontmatter: {
//         categories: {
//           in: [
//             "New York City",
//             "Richmond",
//           ],
//         }
//       }
//     }
//   ) {
//     group(field: frontmatter___categories) {
//           fieldValue
//           totalCount
//     }
//   }
// }
// `
