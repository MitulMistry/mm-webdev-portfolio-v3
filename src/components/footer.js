import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { socialMedia } from "../appData"

const Footer = () => (
  <footer className="footer-main text-center">
    <p className="footer-icons">
      <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href={`mailto:${socialMedia.email}`} rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </p>
    <p>
      <a
        href="https://github.com/MitulMistry/mm-webdev-portfolio-v3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repo for this site
      </a>
    </p>
    <p>&copy; Mitul Mistry {new Date().getFullYear()}</p>
  </footer>
)

export default Footer
