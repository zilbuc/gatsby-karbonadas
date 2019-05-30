import React from "react"
// import { Link } from "gatsby"
import { HomeHeader, Banner, BannerButton } from '../utils';
import homeBcg from '../images/bcg/homeBcg.jpeg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuickInfo from '../components/HomePageComponents/QuickInfo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={homeBcg}>
      <Banner title='face reality eatery' subtitle='420 main road - Tijuana, Mexico'>
        <BannerButton style={{ margin: '2rem auto'}}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage;
