import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'

const MainLayout = (props) => {
  // console.log('MAIN LAYOUT RENDERS HERE....children', children);
  console.log('MAIN LAYOUT RENDERS HERE....props', props);
  return (
    <>
      <Header
       parent_setShape={ props.parent_setShape }
       parent_shape={ props.parent_shape }
         />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      { props.children }
      <Footer />
    </>
  )
  
}

export default MainLayout
