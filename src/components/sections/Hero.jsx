import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  FiGrid,
  FiMessageSquare,
  FiActivity,
  FiCpu,
  FiBarChart2,
  FiLayers,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter
} from 'react-icons/fi'
import Tilt from 'react-parallax-tilt'
import GradientButton from '../ui/GradientButton'
import ParticleField from '../3d/ParticleField'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  // Fade later so mobile users don't lose the hero/photo immediately on slight scroll
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ansarisultan', label: 'GitHub', color: '#6e5494' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/SultanSAnsari', label: 'LinkedIn', color: '#0077b5' },
    { icon: FiTwitter, href: 'https://x.com/ansari_sultan07', label: 'Twitter', color: '#1da1f2' },
    { icon: FiMail, href: 'mailto:sultansalauddinansari490@gmail.com', label: 'Email', color: '#ea4335' },
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
      <ParticleField />
      
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary-400/40 bg-gradient-to-r from-primary-500/20 via-accent-purple/15 to-accent-cyan/20 text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.22)] backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-70"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-primary-300 to-accent-cyan"></span>
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
              className="mb-6"
            >
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Creator of FuncLexa',
                  2000,
                  'Building AI-Powered Systems',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary-200 via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient-fast bg-[length:200%_200%] drop-shadow-[0_0_14px_rgba(99,102,241,0.35)]"
                cursor={true}
              />
            </motion.div>

          <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="max-w-xl text-gray-400 mb-8 text-base sm:text-lg leading-relaxed"
>
  B.Tech CSE student at Presidency University, Bengaluru. 
  I build <span className="text-primary-400 font-medium">AI-powered real-time applications</span> including chat systems, 
  virtual assistants, and scalable MERN platforms. Currently developing 
  <span className="gradient-text font-semibold"> FuncLexa</span> — a modular ecosystem integrating LLMs, 
  Socket.IO, and full-stack architecture.
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

            {/* Stats */}
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

          {/* Right Content - Profile Photo with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#6366f1"
                glarePosition="all"
                glareBorderRadius="30px"
                scale={1.05}
                transitionSpeed={2000}
                className="relative"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Animated border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-[30px] blur-xl opacity-50 animate-gradient-fast" />
                  
                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden border-2 border-white/10">
                    {/* Placeholder gradient - Replace with actual image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-cyan/20" />
                    
                    {/* Profile Image - Replace src with actual photo */}
                    <img
                      src="/images/dp1.png"
                      alt="Sultan Salauddin Ansari"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = 'none'
                      }}
                    />
                    
                   

                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 via-transparent to-transparent" />
                  </div>

                  {/* Floating tech icons around profile */}
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
              </Tilt>
            </motion.div>

            {/* Social links */}
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
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center text-gray-400 hover:text-white transition-all group relative"
                  style={{ 
                    ['--hover-color']: social.color 
                  }}
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors group"
          >
            <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border border-primary-500/30 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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

