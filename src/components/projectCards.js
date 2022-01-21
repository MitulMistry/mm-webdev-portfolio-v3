import React from "react"
import PropTypes from "prop-types"

const ProjectCards = ({ projects }) => (
  <div className="project-cards">
    ProjectCards
  </div>
)

ProjectCards.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProjectCards