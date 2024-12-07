import React, { useEffect } from "react"
import { Row, Col } from "reactstrap"
import Intro from "./intro"
import TechSkills from "./techSkills"
import { motionVariants } from "../appData"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) control.start("visible")
  }, [control, inView])

  return (
    <motion.div
      className="reveal-container"
      ref={ref}
      variants={motionVariants}
      initial="hidden"
      animate={control}
    >
      <div id="about">
        <Row>
          <Col md="6">
            <Intro />
          </Col>
          <Col md="6">
            <TechSkills />
          </Col>
        </Row>
      </div>
    </motion.div>
  )
}

export default About
