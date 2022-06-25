import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    // loader
    //   .add({
    //     targets: '#logo path',
    //     delay: 300,
    //     duration: 1500,
    //     easing: 'easeInOutQuart',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //   })
    //   .add({
    //     targets: '#logo #B',
    //     duration: 700,
    //     easing: 'easeInOutQuart',
    //     opacity: 1,
    //   })
    //   .add({
    //     targets: '#logo',
    //     delay: 500,
    //     duration: 300,
    //     easing: 'easeInOutQuart',
    //     opacity: 0,
    //     scale: 0.1,
    //   })
    //   .add({
    //     targets: '.loader',
    //     duration: 200,
    //     easing: 'easeInOutQuart',
    //     opacity: 0,
    //     zIndex: -1,
    //   })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate()
    return () => clearTimeout(timeout);
  }, [])


}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Loader