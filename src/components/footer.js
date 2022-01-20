import React from "react"

import { socialMedia } from "../data"

const Footer = () => (
  <footer className="footer-main text-sm-center">
    {/* <p className="footer-icons">
      <a href={profileData.github} target="_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
      <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
      <a href={"mailto:" + profileData.email} rel="noopener noreferrer"><span className="fa fa-envelope-o fa-lg"></span></a>
    </p> */}
    <p><a href="https://github.com/MitulMistry/mm-webdev-portfolio-v3" target="_blank" rel="noopener noreferrer">Github repo for this site</a></p>
    <p className="footer-copyright">&copy; Mitul Mistry {new Date().getFullYear()}</p>
  </footer>
)

export default Footer