import React from 'react'
import Tilt from 'react-parallax-tilt'

const TiltCard = ({ children, className = '' }) => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#6366f1"
      glarePosition="all"
      glareBorderRadius="20px"
      scale={1.02}
      transitionSpeed={2000}
      className={className}
    >
      {children}
    </Tilt>
  )
}

export default TiltCard