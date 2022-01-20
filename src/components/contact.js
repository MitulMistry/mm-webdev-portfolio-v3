import React from "react"

import { Row, Col, Button } from "reactstrap"

import { socialMedia } from "../data"

const Contact = () => (
  <div className="contact">
    <Row>
      <Col md="2">
        Button
        {/* <Button href={"mailto:" + socialMedia.email} className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-envelope-o fa-lg" aria-hidden="true"></span> Email</Button> */}
      </Col>
      <Col>
        <p>Email me at:</p>
        <p><a href={"mailto:" + socialMedia.email} rel="noopener noreferrer">{socialMedia.email}</a></p>
      </Col>
    </Row>
    <Row className="row-top-margin">
    <Col md="2">
      Button
        {/* <Button href={socialMedia.linkedin} target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg" aria-hidden="true"></span> LinkedIn</Button> */}
      </Col>
      <Col>
        <p>Or add me on LinkedIn at:</p>
        <p><a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">{"LinkedIn.com/in/" + socialMedia.linkedinUser}</a></p>
      </Col>
    </Row>
  </div>
)

export default Contact