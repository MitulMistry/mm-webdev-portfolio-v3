import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
