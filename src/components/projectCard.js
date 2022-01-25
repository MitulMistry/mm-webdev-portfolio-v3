import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Col, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { scrollRevealConfig } from "../appData"
import scrollRevealUtil from "../util/scrollRevealUtil"

const ProjectCard = ({ project }) => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollRevealUtil.reveal(revealContainer.current, scrollRevealConfig())
  }, [])

  return (
  <Col md="4" className="col-project-card">
    <div ref={revealContainer}>
      <a href={project.url || project.github} target="_blank" rel="noopener noreferrer">
        <img src={project.image} className="img-fluid img-rounded img-app" alt="App screenshot" />
      </a>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
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
    </div>
  </Col>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
}

ProjectCard.defaultProps = {
  project: {},
}

export default ProjectCard