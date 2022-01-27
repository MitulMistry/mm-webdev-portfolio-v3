import React, { useEffect, useRef } from "react"
import { scrollRevealConfig } from "../appData"
import scrollRevealUtil from "../util/scrollRevealUtil"

// Use like this:
// <H2Reveal>Text</H2Reveal>
const H2Reveal = ({ children, className }) => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollRevealUtil.reveal(revealContainer.current, scrollRevealConfig())
  }, [])

  return (
    <h2 className={className} ref={revealContainer}>{children}</h2>
  )
}

export default H2Reveal