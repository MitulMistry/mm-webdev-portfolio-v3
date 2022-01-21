import React from "react"

import FeaturedProjects from "./featuredProjects"
import ProjectCards from "./projectCards"

import { featuredProjects, projectCards, webDesigns } from "../projectsData"

const Projects = () => (
  <div className="projects-section">
    <h2>Projects</h2>
    <div className="projects">
      <FeaturedProjects
        projects={featuredProjects}
      />
      <ProjectCards
        projects={projectCards}
      />
    </div>
    
    <h2>Web Design</h2>
    <div className="web-design">
      <ProjectCards
        projects={webDesigns}
      />
    </div>
  </div>
)

export default Projects