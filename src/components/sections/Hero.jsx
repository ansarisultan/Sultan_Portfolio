import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiGithub,
  FiGrid,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMessageSquare,
  FiTwitter,
} from '../../utils/icons'
import GradientButton from '../ui/GradientButton'

const ParticleField = lazy(() => import('../3d/ParticleField'))

const rolePhrases = [
  'MERN Stack Developer',
  'AI Enthusiast',
  'Creator of FuncLexa',
  'Building AI-Powered Systems',
]

const Hero = () => {
  const containerRef = useRef(null)
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const [showParticleField, setShowParticleField] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setActiveRoleIndex((currentIndex) => (currentIndex + 1) % rolePhrases.length)
    }, 2200)

    return () => clearInterval(textInterval)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCompactViewport = window.innerWidth < 1280

    if (prefersReducedMotion || isCompactViewport) return undefined

    let cancelled = false
    let idleCallbackId = 0
    const enableParticles = () => {
      if (!cancelled) setShowParticleField(true)
    }
    const timeoutId = window.setTimeout(enableParticles, 1800)

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(enableParticles, { timeout: 2200 })
    }

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      if ('cancelIdleCallback' in window && idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId)
      }
    }
  }, [])

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ansarisultan', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/SultanSAnsari', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/ansari_sultan07', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:sultansalauddinansari490@gmail.com', label: 'Email' },
  ]

  const stats = [
    { value: '5+', label: 'Projects', icon: FiGrid },
    { value: '2+', label: 'Years Experience', icon: FiBarChart2 },
    { value: '15+', label: 'Technologies', icon: FiCpu },
  ]

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Suspense fallback={null}>{showParticleField ? <ParticleField /> : null}</Suspense>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary-400/40 bg-gradient-to-r from-primary-500/20 via-accent-purple/15 to-accent-cyan/20 text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.22)] backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-primary-300 to-accent-cyan" />
                </span>
                <span className="bg-gradient-to-r from-primary-200 via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient-fast bg-[length:200%_200%]">
                  Available for opportunities
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.95]"
            >
              <span className="block">Sultan</span>
              <span className="block gradient-text-fast">Salauddin</span>
              <span className="block">Ansari</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-6 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={rolePhrases[activeRoleIndex]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary-200 via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient-fast bg-[length:200%_200%] drop-shadow-[0_0_14px_rgba(99,102,241,0.35)]"
                >
                  {rolePhrases[activeRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl text-gray-400 mb-8 text-base sm:text-lg leading-relaxed"
            >
              B.Tech CSE student at Presidency University, Bengaluru. I build{' '}
              <span className="text-primary-400 font-medium">AI-powered real-time applications</span>{' '}
              including chat systems, virtual assistants, and scalable MERN platforms.
              Currently developing <span className="gradient-text font-semibold">FuncLexa</span> - a
              modular ecosystem integrating LLMs, Socket.IO, and full-stack architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <GradientButton href="#projects" size="lg" className="group">
                <span>Explore My Work</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">-&gt;</span>
              </GradientButton>
              <GradientButton href="#contact" variant="outline" size="lg">
                Get In Touch
              </GradientButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-[30px] blur-xl opacity-50 animate-gradient-fast" />

                <div className="relative w-full h-full rounded-[30px] overflow-hidden border-2 border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-cyan/20" />
                  <img
                    src="/images/dp1.jpeg"
                    alt="Sultan Salauddin Ansari"
                    width="380"
                    height="380"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-dark-800/80 backdrop-blur-xl border border-primary-500/30 flex items-center justify-center animate-float">
                  <FiLayers className="w-5 h-5 text-primary-300" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-xl bg-dark-800/80 backdrop-blur-xl border border-accent-purple/30 flex items-center justify-center animate-float animation-delay-1000">
                  <FiMessageSquare className="w-5 h-5 text-accent-purple" />
                </div>
                <div className="absolute top-1/2 -right-6 w-10 h-10 rounded-xl bg-dark-800/80 backdrop-blur-xl border border-accent-cyan/30 flex items-center justify-center animate-float animation-delay-500">
                  <FiActivity className="w-4 h-4 text-accent-cyan" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.08, x: -5 }}
                  className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center text-gray-400 hover:text-white transition-all group relative"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute right-full mr-3 px-2 py-1 glass rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors group"
          >
            <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border border-primary-500/30 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-primary-400 rounded-full"
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
