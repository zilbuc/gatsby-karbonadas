import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import contactBcg from '../images/bcg/contactBcg.jpeg';

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
  <PageHeader img={contactBcg}>
    <Banner title='contact us' subtitle={`let's get in touch`}></Banner>
  </PageHeader>
  </Layout>
)

export default ContactPage
