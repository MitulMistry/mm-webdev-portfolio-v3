import React from "react"
import PropTypes from "prop-types"

import { Row } from 'reactstrap';
import ProjectCard from "./projectCard"

const ProjectCards = ({ projects }) => {
  let total = []
  let row = []
  const numberOfColumns = 3

  projects.forEach((project, i) => {
    row.push(
      <ProjectCard
        key={`project-card-${i}`}
        project={project}
      />
    )

    if (row.length === numberOfColumns || i === projects.length - 1) {
      total.push(<Row className="row-app" key={total.length}>{row}</Row>)
      row = [] // Empty the row
    }
  })

  return (
    <div className="project-cards">
      {total}
    </div>
  )
}

ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProjectCards