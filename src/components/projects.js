import * as React from "react"
import PropTypes from "prop-types"

import FeaturedProjects from "./featuredProjects"
import ProjectCards from "./projectCards"

const Projects = () => (
  <div>
    Projects
    <FeaturedProjects />
    <ProjectCards />
    Web Design
    <ProjectCards />
  </div>
)

export default Projects