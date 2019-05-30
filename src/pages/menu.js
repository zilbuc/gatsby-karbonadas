import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils';
import menuBcg from '../images/bcg/menuBcg.jpeg';

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
  <PageHeader img={menuBcg}>
    <Banner title='menu' subtitle={`let's dig in`}></Banner>
  </PageHeader>
  </Layout>
)

export default MenuPage
