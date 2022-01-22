import * as React from "react"
import PropTypes from "prop-types"

import NavBar from "./navbar"
import Footer from "./footer"
import { Container } from "reactstrap"

// import "./layout.css"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/default.scss"

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
