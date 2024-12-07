import React from "react"

import { techSkillsText } from "../appData"

const TechSkills = () => {
  var paragraphs = []

  for (const header in techSkillsText) {
    paragraphs.push(
      <p key={header.toString()}>
        <strong>{header}:</strong> {techSkillsText[header]}
      </p>
    )
  }

  return (
    <div className="tech-skills">
      <h2>Technical Skills</h2>
      {paragraphs}
    </div>
  )
}

export default TechSkills
