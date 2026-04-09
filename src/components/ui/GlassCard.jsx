import React from 'react'
import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`relative backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl shadow-2xl overflow-hidden ${className}`}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlassCard

