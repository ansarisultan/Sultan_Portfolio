// components/layout/Preloader.jsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing')
  const [animationPhase, setAnimationPhase] = useState('nameEnter')
  const [isComplete, setIsComplete] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const loadingTexts = [
    'Initializing',
    'Loading Assets',
    'Preparing Experience',
    'Almost Ready'
  ]

  const fullName = 'Sultan Salauddin Ansari'
  const nameParts = ['Sultan', 'Salauddin', 'Ansari']

  useEffect(() => {
    // Loading text rotation
    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length
      setLoadingText(loadingTexts[textIndex])
    }, 600)

    // Phase 2: Start progress after name animation
    setTimeout(() => {
      setAnimationPhase('loading')
    }, 1000)

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsComplete(true)
          return 100
        }
        return prev + 2
      })
    }, 10)

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
    }
  }, [])

  // Animation Variants
  const animations = {
    container: {
      initial: { opacity: 1 },
      exit: { 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }
    },
    // Each part of the name animates separately but stays inline
    namePartFirst: {
      initial: { opacity: 0, scale: 1.2, x: -30 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        x: 0,
        transition: { 
          duration: 1, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }
      }
    },
    namePartMiddle: {
      initial: { opacity: 0, scale: 1.2, y: 20 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { 
          duration: 1, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.5
        }
      }
    },
    namePartLast: {
      initial: { opacity: 0, scale: 1.2, x: 30 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        x: 0,
        transition: { 
          duration: 1, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.8
        }
      }
    },
    loadingText: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: 1.4
        }
      }
    },
    progressBar: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: 1.8
        }
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={animations.container}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Radial gradient that pulses */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent"
          />
          
          {!isMobile && (
            <>
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary-500/8"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent-purple/8"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-accent-cyan/8"
              />

              {/* Floating particles */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1.5 h-1.5 bg-gradient-to-r from-primary-400 to-accent-purple rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </>
          )}

          {/* Particle explosion on complete */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: '50%', 
                    y: '50%', 
                    scale: 0 
                  }}
                  animate={{ 
                    x: `${50 + (Math.random() - 0.5) * 250}%`,
                    y: `${50 + (Math.random() - 0.5) * 250}%`,
                    scale: [0, 1.5, 0],
                    opacity: [1, 0.6, 0]
                  }}
                  transition={{ 
                    duration: 1 + Math.random() * 0.5,
                    ease: "easeOut"
                  }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan"
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          {/* NAME - All in one line with staggered animations */}
          <div className="overflow-visible mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
              <motion.span
                variants={animations.namePartFirst}
                initial="initial"
                animate="animate"
                className="inline-block gradient-text-fast"
                style={{ textShadow: '0 0 40px rgba(99, 102, 241, 0.3)' }}
              >
                Sultan
              </motion.span>
              
              <motion.span
                variants={animations.namePartMiddle}
                initial="initial"
                animate="animate"
                className="inline-block gradient-text-fast"
                style={{ textShadow: '0 0 40px rgba(139, 92, 246, 0.3)' }}
              >
                Salauddin
              </motion.span>
              
              <motion.span
                variants={animations.namePartLast}
                initial="initial"
                animate="animate"
                className="inline-block gradient-text-fast"
                style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.3)' }}
              >
                Ansari
              </motion.span>
            </h1>
          </div>

          {/* Decorative line under name */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '120px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-6"
          />

          {/* Loading Text with Animation */}
          {animationPhase === 'loading' ? (
            <>
              <motion.div
                variants={animations.loadingText}
                initial="initial"
                animate="animate"
                className="mb-4"
              >
                <motion.p
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-base sm:text-lg font-mono tracking-wide"
                >
                  <span className="inline-block">
                    {loadingText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-1"
                    >
                      ...
                    </motion.span>
                  </span>
                </motion.p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                variants={animations.progressBar}
                initial="initial"
                animate="animate"
                className="max-w-sm mx-auto"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-xs uppercase tracking-widest">
                    Progress
                  </span>
                  <span className="text-primary-400 font-mono text-xs">
                    {progress}%
                  </span>
                </div>
                
                <div className="relative h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan blur-sm"
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </div>

                {/* Status indicator dots */}
                <div className="flex justify-center gap-1 mt-3">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: progress >= (i + 1) * 25 ? 1 : 0.3,
                        scale: progress >= (i + 1) * 25 ? 1 : 0.8,
                      }}
                      className={`w-1.5 h-1.5 rounded-full ${
                        progress >= (i + 1) * 25 
                          ? 'bg-primary-400' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            // Initial loading text before progress bar appears
            <motion.div
              variants={animations.loadingText}
              initial="initial"
              animate="animate"
            >
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-gray-500 text-sm font-mono tracking-wider"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                  MERN STACK DEVELOPER
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                </span>
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Corner decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-6 left-6 text-white/10 font-mono text-xs tracking-wider"
        >
          SULTAN_PORTFOLIO_v2.0
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 right-6 text-white/10 font-mono text-xs tracking-wider"
        >
          MERN_AI_DEV // FUNLEXA
        </motion.div>

        {/* Animated border corners */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-500/20 rounded-tl-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary-500/20 rounded-tr-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary-500/20 rounded-bl-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary-500/20 rounded-br-3xl"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default Preloader
