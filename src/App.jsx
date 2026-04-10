import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import CustomCursor from './components/layout/CustomCursor'
import Preloader from './components/layout/PreLoader'
import ScrollProgress from './components/layout/ScrollProgress'

const About = lazy(() => import('./components/sections/About'))
const Ecosystem = lazy(() => import('./components/sections/Ecosystem'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Certifications = lazy(() => import('./components/sections/Certifications'))
const Contact = lazy(() => import('./components/sections/Contact'))
const MouseGlow = lazy(() => import('./components/effects/MouseGlow'))
const GradientBackground = lazy(() => import('./components/effects/GradientBackground'))
const NoiseOverlay = lazy(() => import('./components/effects/NoiseOverlay'))
const FloatingShapes = lazy(() => import('./components/3d/FloatingShapes'))
const NeuralNetwork = lazy(() => import('./components/3d/NeuralNetwork'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))

const PRELOADER_KEY = 'devport_preloader_seen'
const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|twitterbot|linkedinbot|whatsapp|discordbot|lighthouse/i
const SectionFallback = () => <section className="min-h-[40vh]" aria-hidden="true" />

function App() {
  const isBrowser = typeof window !== 'undefined'
  const hasSeenPreloader = isBrowser && sessionStorage.getItem(PRELOADER_KEY) === '1'
  const isCrawler = isBrowser && BOT_UA_PATTERN.test(window.navigator.userAgent || '')
  const showPreloader = isBrowser && !isCrawler && !hasSeenPreloader

  const [loading, setLoading] = useState(showPreloader)
  const [showContent, setShowContent] = useState(!showPreloader)
  const [enableHeavyEffects, setEnableHeavyEffects] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })
    let frameId = 0

    function raf(time) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    const preloaderTimer = showPreloader
      ? setTimeout(() => {
          sessionStorage.setItem(PRELOADER_KEY, '1')
          setLoading(false)
          setShowContent(true)
        }, 4200)
      : null

    const deferHeavyEffects = () => setEnableHeavyEffects(true)
    let idleCallbackId = 0
    const fallbackTimer = setTimeout(deferHeavyEffects, 1200)

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(deferHeavyEffects, { timeout: 1500 })
    }

    return () => {
      if (preloaderTimer) clearTimeout(preloaderTimer)
      clearTimeout(fallbackTimer)
      if ('cancelIdleCallback' in window && idleCallbackId) window.cancelIdleCallback(idleCallbackId)
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [showPreloader])

  return (
    <Router>
      <CustomCursor />
      <Suspense fallback={null}>
        {enableHeavyEffects && (
          <>
            <MouseGlow />
            <GradientBackground />
            <NoiseOverlay />
            <FloatingShapes />
            <NeuralNetwork />
          </>
        )}
      </Suspense>
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
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Suspense fallback={<SectionFallback />}>
                        <About />
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <Ecosystem />
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <Projects />
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <Skills />
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <Certifications />
                      </Suspense>
                      <Suspense fallback={<SectionFallback />}>
                        <Contact />
                      </Suspense>
                    </>
                  }
                />
                <Route
                  path="/project/:id"
                  element={
                    <Suspense fallback={<section className="min-h-screen" aria-hidden="true" />}>
                      <ProjectDetailPage />
                    </Suspense>
                  }
                />
              </Routes>
            </main>

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
