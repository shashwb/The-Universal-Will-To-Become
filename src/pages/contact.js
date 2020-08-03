import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Let's Chat!</h1>
      <p>
        <a href="theshapesofstories@gmail.com">theshapeofstories@gmail.com</a>
      </p>
      <p></p><br/>
    </main>
  </Layout>
)
export default ContactPage
