import React, { useEffect } from "react"
import { motionVariants } from "../appData"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Use like this:
// <H2Reveal>Text</H2Reveal>
const H2Reveal = ({ children, className }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) control.start("visible");
  }, [control, inView]);

  return (
    <motion.h2
      className={className}
      ref={ref}
      variants={motionVariants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.h2>
  )
}

export default H2Reveal