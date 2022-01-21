import React from "react"

import { profileText } from "../appData"

const Intro = () => (
  <div className="intro">
    <h1>{ profileText.name }</h1>
    <h2>{ profileText.title }</h2>
    <h3>{ profileText.subtitle }</h3>
    {profileText.bio && profileText.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
  </div>
)

export default Intro