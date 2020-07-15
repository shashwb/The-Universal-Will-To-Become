import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'
import header_styles from '../components/Header.module.scss'

/** COMPONENTS */
import Categories from '../components/Categories'

/** MATERIAL REACT UI */
import Paper from '@material-ui/core/Paper'

const MainLayout = (props) => {
  return (
    <>
      <div style={{
        // backgroundColor: '#07635e14',
      }}>
        <Header />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        { props.children }
        <Footer />

      </div>
      
    </>
  )
  
}

export default MainLayout
