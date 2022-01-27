import React, { useEffect, useRef } from "react"
import { Row, Col, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { scrollRevealConfig } from "../appData"
import scrollRevealUtil from "../util/scrollRevealUtil"

import { socialMedia } from "../appData"

const Contact = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollRevealUtil.reveal(revealContainer.current, scrollRevealConfig())
  }, [])

  return (
    <div id="contact" ref={revealContainer}>
      <h2>Contact</h2>
      <Row>
        <Col sm="2">
          <Button href={`mailto:${socialMedia.email}`} color="primary" outline size="sm" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </Button>
        </Col>
        <Col sm="10" className="email-text">
          <p>Email me at:</p>
          <p>
            <a href={`mailto:${socialMedia.email}`} rel="noopener noreferrer">
              {socialMedia.email}
            </a>
          </p>
        </Col>
      </Row>
      <Row className="row-top-margin">
        <Col sm="2">
          <Button href={socialMedia.linkedin} target="_blank" color="primary" outline size="sm" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
          </Button>
        </Col>
        <Col sm="10" className="linkedin-text">
          <p>Or add me on LinkedIn at:</p>
          <p>
            <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
              {`LinkedIn.com/in/${socialMedia.linkedinUser}`}
            </a>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Contact