import React from "react"

import { Row, Col } from "reactstrap"
import Intro from "./intro"
import TechSkills from "./techSkills"

const About = () => (
  <div id="about">
    <Row>
      <Col>
        <Intro />
      </Col>
      <Col>
        <TechSkills />
      </Col>
    </Row>
  </div>
)

export default About