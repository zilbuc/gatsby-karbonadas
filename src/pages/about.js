import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import aboutBcg from '../images/bcg/aboutBcg.jpeg';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
  <PageHeader img={aboutBcg}>
    <Banner title='about us' subtitle='time to face reality'></Banner>
  </PageHeader>
  </Layout>
)

export default AboutPage
