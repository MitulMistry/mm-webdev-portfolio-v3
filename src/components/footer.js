import * as React from "react"
import PropTypes from "prop-types"

const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © Mitul Mistry {new Date().getFullYear()}
  </footer>
)

export default Footer