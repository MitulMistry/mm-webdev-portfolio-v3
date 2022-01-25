import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Row, Col, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { scrollRevealConfig } from "../appData"
import scrollRevealUtil from "../util/scrollRevealUtil"

const FeaturedProject = ({ project }) => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollRevealUtil.reveal(revealContainer.current, scrollRevealConfig())
  }, [])

  return (
    <div ref={revealContainer}>
      <Row className="row-featured-project">
        <Col className="col-image">
          <a href={project.url || project.github} target="_blank" rel="noopener noreferrer">
            <img src={project.image} className="img-fluid img-rounded img-app" alt="App screenshot" />
          </a>
        </Col>
        <Col className="col-description">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="fa-ul app-bullets">
            {project.bullets.map((bullet, i) =>
              <li key={i}><span className="fa-li"><FontAwesomeIcon icon={faCaretRight} /></span>{bullet}</li>
            )}
          </ul>
          <p>
            {project.url &&
              <Button href={project.url} target="_blank" color="primary" outline size="sm" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo Site
              </Button>
            }
            {project.github &&
              <Button href={project.github} target="_blank" color="primary" outline size="sm" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Github
              </Button>
            }
          </p>
        </Col>
      </Row>
    </div>
  )
}

FeaturedProject.propTypes = {
  project: PropTypes.object,
}

FeaturedProject.defaultProps = {
  project: {},
}

export default FeaturedProject