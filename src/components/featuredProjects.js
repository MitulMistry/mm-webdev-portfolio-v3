import React from "react"
import PropTypes from "prop-types"

import FeaturedProject from "./featuredProject"

const FeaturedProjects = ({ projects }) => (
  <div className="featured-projects">
    {projects.map((project, i) => (
      <FeaturedProject key={`featured-project-${i}`} project={project} />
    ))}
  </div>
)

FeaturedProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FeaturedProjects
