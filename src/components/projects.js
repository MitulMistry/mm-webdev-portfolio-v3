import React from "react"
import FeaturedProjects from "./featuredProjects"
import ProjectCards from "./projectCards"
import H2Reveal from "./H2Reveal"

import { featuredProjects, projectCards, webDesigns } from "../projectsData"

const Projects = () => (
  <div id="projects">
    <H2Reveal>Projects</H2Reveal>
    <div className="projects-main">
      <FeaturedProjects
        projects={featuredProjects}
      />
      <ProjectCards
        projects={projectCards}
      />
    </div>
    
    <H2Reveal>Web Design</H2Reveal>
    <div className="web-design">
      <ProjectCards
        projects={webDesigns}
      />
    </div>
  </div>
)

export default Projects