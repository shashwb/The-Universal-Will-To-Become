import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Let's Chat</h1>
      <p>theshapeof@gmail.com</p>
      <p></p><br/>
      <p>New York City</p>
    </main>
  </Layout>
)
export default ContactPage
