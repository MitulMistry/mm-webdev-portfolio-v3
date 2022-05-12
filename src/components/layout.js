import * as React from "react"
import PropTypes from "prop-types"

import NavBar from "./navbar"
import Footer from "./footer"
import { Container } from "reactstrap"

// Load all Bootstrap styling
// import "bootstrap/scss/bootstrap.scss"

// Custom styles (Bootstrap elements are selectively imported)
import "../styles/default.scss"

// Manually import Font Awesome styles and disalbe logic to insert
// styles into DOM on page load, fixing bug with icons loading huge
// and then shrinking to appropriate size.
// https://medium.com/@fabianterh/fixing-flashing-huge-font-awesome-icons-on-a-gatsby-static-site-787e1cfb3a18
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="content mx-auto">
          <main>{children}</main>
        </div>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
