import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Row, Col, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { motionVariants } from "../appData"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const FeaturedProject = ({ project }) => {
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
      <Row className="row-featured-project">
        <Col md="6" className="col-image">
          <a
            href={project.url || project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              className="img-fluid img-rounded img-app"
              alt="App screenshot"
            />
          </a>
        </Col>
        <Col md="6" className="col-description">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="fa-ul app-bullets">
            {project.bullets.map((bullet, i) => (
              <li key={`blt-${i}`}>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="btn-group">
            {project.url && (
              <Button
                href={project.url}
                target="_blank"
                color="primary"
                outline
                size="sm"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo Site
              </Button>
            )}
            {project.github && (
              <Button
                href={project.github}
                target="_blank"
                color="primary"
                outline
                size="sm"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </Button>
            )}
            {project.tags && (
              <div className="tag-group">
                {project.tags.map((tag, i) => (
                  <span key={`tag-${i}`} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </motion.div>
  )
}

FeaturedProject.propTypes = {
  project: PropTypes.object,
}

FeaturedProject.defaultProps = {
  project: {},
}

export default FeaturedProject
