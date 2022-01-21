import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const FeaturedProject = ({ project }) => (
  <Row className="row-app">
    <Col>
      <a href={project.url || project.github} target="_blank" rel="noopener noreferrer">
        <img src={project.image} className="img-fluid img-rounded img-app" alt="App screenshot" />
      </a>
    </Col>
    <Col>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="app-bullets">
        {project.bullets.map((bullet, i) =>
          <li key={i}>{bullet}</li>
        )}
      </ul>
      <p>
        {project.url &&
          <Button href={project.url} target="_blank" color="primary" outline rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site
          </Button>
        }
        {project.github &&
          <Button href={project.github} target="_blank" color="primary" outline rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Github
          </Button>
        }
      </p>
    </Col>
  </Row>
)

FeaturedProject.propTypes = {
  project: PropTypes.object,
}

FeaturedProject.defaultProps = {
  project: {},
}

export default FeaturedProject