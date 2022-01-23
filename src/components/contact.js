import React from "react"

import { Row, Col, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { socialMedia } from "../appData"

const Contact = () => (
  <div id="contact">
    <h2>Contact</h2>
    <Row>
      <Col md="2">
        <Button href={`mailto:${socialMedia.email}`} color="primary" outline rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </Button>
      </Col>
      <Col>
        <p>Email me at</p>
        <p>
          <a href={`mailto:${socialMedia.email}`} rel="noopener noreferrer">
            {socialMedia.email}
          </a>
        </p>
      </Col>
    </Row>
    <Row className="row-top-margin">
      <Col md="2">
        <Button href={socialMedia.linkedin} target="_blank" color="primary" outline rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
        </Button>
      </Col>
      <Col>
        <p>Or add me on LinkedIn at</p>
        <p>
          <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            {`LinkedIn.com/in/${socialMedia.linkedinUser}`}
          </a>
        </p>
      </Col>
    </Row>
  </div>
)

export default Contact