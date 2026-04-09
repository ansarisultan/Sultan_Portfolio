import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Ecosystem from './components/sections/Ecosystem'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import CustomCursor from './components/layout/CustomCursor'
import Preloader from './components/layout/PreLoader'
import ScrollProgress from './components/layout/ScrollProgress'
import MouseGlow from './components/effects/MouseGlow'
import GradientBackground from './components/effects/GradientBackground'
import NoiseOverlay from './components/effects/NoiseOverlay'
import FloatingShapes from './components/3d/FloatingShapes'
import NeuralNetwork from './components/3d/NeuralNetwork'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Preloader timing
    setTimeout(() => {
      setLoading(false)
      setTimeout(() => setShowContent(true), 500)
    }, 2500)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <CustomCursor />
      <MouseGlow />
      <GradientBackground />
      <NoiseOverlay />
      <FloatingShapes />
      <NeuralNetwork />
      <ScrollProgress />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            color: '#fff',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            ref={containerRef}
          >
            <Navbar />
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Ecosystem />
                    <Projects />
                    <Skills />
                    <Certifications />
                    <Contact />
                  </>
                } />
                <Route path="/project/:id" element={<ProjectDetailPage />} />
              </Routes>
            </main>
            {/* Footer */}
            <footer className="relative z-10 py-8 border-t border-white/10 bg-gradient-to-r from-dark-950/80 via-dark-900/40 to-dark-950/80 backdrop-blur-xl">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <p className="text-gray-400 text-sm text-center md:text-left">
                    © 2025 Sultan Salauddin Ansari. All rights reserved.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/ansarisultan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/40 transition-all"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/SultanSAnsari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/40 transition-all"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/ansari_sultan07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-purple/40 transition-all"
                      aria-label="X"
                    >
                      <FiTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="inline-flex items-center gap-2 text-sm font-mono text-gray-500">
                    Made with
                    <FiHeart className="w-4 h-4 text-rose-400 animate-pulse" />
                    FuncLexa
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App
