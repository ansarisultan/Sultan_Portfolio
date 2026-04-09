import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
      }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
    />
  )
}

export default MouseGlow