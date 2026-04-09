import React from 'react'
import { motion } from 'framer-motion'

const GradientButton = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25",
    outline: "glass text-white border border-white/10 hover:border-primary-500/50",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  }

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
      {variant === 'outline' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
    </>
  )

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  )
}

export default GradientButton