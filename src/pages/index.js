import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FeatureSection from "../components/sections/FeatureSection"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <FeatureSection />
    </Layout>
  )
}

export default IndexPage
