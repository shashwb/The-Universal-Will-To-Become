import React from 'react'
import { Link } from 'gatsby'
import config from '../../data/SiteConfig'
import Categories from './Categories'
import styles from './Header.module.scss'

/** MATERIAL REACT UI */
import { makeStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import Dropdown from './Generic/Dropdown';

const headerStyles = makeStyles((theme) => ({
  header: {
    // display: 'inline-block',
    fontSize: '1.4rem',
    fontFamily: 'neutron',
    fontWeight: 'bold'
  },
  root: {
  }
}));


/** HELPER SUB COMPONENTS */
const SiteHeader = (props) => {

  const classes = headerStyles();
  const options = props.options;

  return (
    <div className={classes.root}>
      <Link to="/" activeClassName={styles.activeNav}>
        <div className={classes.header} >The Shape Of Stories</div>
      </Link>
    </div>
  )
}

const Header = (props) => {

  const classes = headerStyles();
  const options = config.shapesMappingToCategories;

  return (
    <header>
      {/* last thing I'm doing here is trying to create a better grid style and breakpoints on the blog */}
        <SiteHeader />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
          <nav style={{ 
            textAlign: 'center',
             display: 'inline-block'
          }}>
            <ul className={styles.mainNav}>
              <Categories activeClassName={styles.activeNav} />
            </ul>
          </nav>

          <nav style={{ 
            display: 'inline-block',
            textAlign: 'center', 
          }}>
            <ul className={styles.mainNav}>
              <li style={{
                textAlign: 'center'
              }}>
                <Link to="/about" activeClassName={styles.activeNav}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName={styles.activeNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header

export const pageQuery = graphql`
{
  allMarkdownRemark(
    filter: {
      frontmatter: {
        categories: {
          in: [
            "New York City",
            "Richmond",
          ],
        }
      }
    }
  ) {
    group(field: frontmatter___categories) {
          fieldValue
          totalCount
    }
  }
}
`
