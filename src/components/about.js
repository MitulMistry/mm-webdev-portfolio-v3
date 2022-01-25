import React, { useEffect, useRef } from "react"

import { Row, Col } from "reactstrap"
import Intro from "./intro"
import TechSkills from "./techSkills"
import { scrollRevealConfig } from "../appData"
import scrollRevealUtil from "../util/scrollRevealUtil"

const About = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollRevealUtil.reveal(revealContainer.current, scrollRevealConfig())
  }, [])

  return (
    <div id="about" ref={revealContainer}>
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
}

export default About