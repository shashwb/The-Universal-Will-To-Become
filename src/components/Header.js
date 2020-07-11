import React from 'react'
import { Link } from 'gatsby'
import config from '../../data/SiteConfig'
import Categories from './Categories'
import styles from './Header.module.scss'

/**
 * MATERIAL REACT UI
 */
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * COMPONENTS
 */
import Dropdown from './Generic/Dropdown';

const headerStyles = makeStyles((theme) => ({
  header: {
    display: 'inline-block',
    fontSize: '1.4rem',
    fontFamily: 'neutron',
    fontWeight: 'bold'
  },
  root: {
    // flexGrow: 1,
  }
}));


/**
 * HELPER SUB COMPONENTS
 */
const SiteHeader = (props) => {

  console.log('moment of truth...what is SiteHeader props?', props);

  const classes = headerStyles();

  const options = props.options;

  // const [ shape, setShape ] = React.useState('Stories');

  return (
    <div className={classes.root}>
      <Link to="/" activeClassName={styles.activeNav}>
        <div className={classes.header} >The Shape Of </div>
      </Link>
      <Dropdown 
        style={{ marginTop: '30px' }}
        options={ Object.keys(options) }
        parent_setShape={props.parent_setShape}
        parent_shape={props.parent_shape}
          />
    </div>
  )
}

const Header = (props) => {

  console.log('WHAT IS HEADER DATA?...within the props', props);

  const classes = headerStyles();

  const options = config.shapesMappingToCategories;

  return (
    <header>
      {/* last thing I'm doing here is trying to create a better grid style and breakpoints on the blog */}
            <SiteHeader 
              parent_shape={ props.parent_shape }
              parent_setShape={ props.parent_shape }
              options={ options } 
             />
            <nav>
              <ul className={styles.mainNav}>
                <li>
                  <Link to="/about" activeClassName={styles.activeNav}>
                    About
                  </Link>
                </li>
                <Categories 
                  optionsMap={options}
                  activeClassName={styles.activeNav}
                />
                {/* <li>
                  <Link to="/contact" activeClassName={styles.activeNav}>
                    Contact
                  </Link>
                </li> */}
              </ul>
          </nav>
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
