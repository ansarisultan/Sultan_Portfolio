// components/sections/Projects.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'  // Add this import
import { FiArrowRight, FiExternalLink, FiGithub } from '../../utils/icons'
import GlassCard from '../ui/GlassCard'
import TiltCard from '../ui/TiltCard'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
  {
  id: 'lexachat',
  title: 'LexaChat Platform',
  description: 'Real-time AI chat platform built with MERN and Socket.IO, featuring dual-mode architecture for local and cloud-based data handling.',
  shortDescription: 'AI chat platform with local & cloud storage modes.',
  category: 'ai',
  tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Socket.IO'],
  icon: '💬',
  gradient: 'from-purple-500 to-pink-500',
  featured: true,
  github: 'https://github.com/ansarisultan/lexachat-client',
  live: 'https://lexachat.online',
  stats: {
    modes: '2',
    themes: '3+'
  }
},

{
  id: 'portfolio-v1',
  title: 'FuncLexa Workspace',
  description: 'AI workspace featuring real-time dashboards, API usage tracking, and live system data built using MERN and Socket.IO.',
  shortDescription: 'Real-time dashboard with API tracking and system insights.',
  category: 'web',
  tech: ['React', 'Tailwind CSS', 'Node.js', 'Socket.IO', 'MongoDB'],
  icon: '⚡',
  gradient: 'from-blue-500 to-cyan-500',
  github: 'https://github.com/ansarisultan/FuncLexaEco2.0',
  live: 'https://funclexat.vercel.app'
},

{
  id: 'flexa',
  title: 'Flexa AI Assistant',
  description: 'AI assistant supporting voice and text interaction with basic context handling and command execution.',
  shortDescription: 'Voice & text AI assistant with context awareness.',
  category: 'ai',
  tech: ['React', 'Web Speech API', 'Node.js', 'LLM'],
  icon: '🤖',
  gradient: 'from-green-500 to-emerald-500',
  github: 'https://github.com/ansarisultan/FLexa',
  live: 'https://flexaai-funclexa.vercel.app/',
  stats: {
    commands: '50+',
    languages: '5'
  },
  
},
{
  id: 'funflexa',
  title: 'FuncLexa',
  description: 'A developing AI ecosystem focused on real-time applications, virtual assistants, and modular system design. Currently in early development, with plans to evolve into an agentic AI platform.',
  shortDescription: 'AI ecosystem (currently in development) with real-time apps and modular architecture.',
  category: 'ecosystem',
  tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'LLM APIs'],
  icon: '🌐',
  gradient: 'from-blue-500 to-cyan-500',
  featured: false,
  github: 'https://github.com/ansarisultan/FuncLexaEco2.0',
  live: 'https://funclexa.me'
},
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'web', label: 'Web Dev' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm mb-4"
          >
            Featured Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Click on any project to explore detailed architecture, tech stack, and implementation insights.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard>
                  <GlassCard className="group h-full hover:border-primary-500/30 transition-all duration-500">
                    <div className="p-6">
                      {/* Project Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                            {project.featured && (
                              <span className="px-2 py-0.5 text-[10px] bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{project.shortDescription}</p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs glass rounded-md text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      {project.stats && (
                        <div className="flex gap-4 mb-4 text-xs">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-1">
                              <span className="text-gray-500 capitalize">{key}:</span>
                              <span className="text-primary-400 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        {/* Link to Detail Page - THIS IS THE KEY PART */}
                        <Link
                          to={`/project/${project.id}`}
                          className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:text-primary-400 transition-all group/link"
                        >
                          <span>View Details</span>
                          <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>

                        <div className="flex gap-2">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                          >
                            <FiGithub className="w-4 h-4" />
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
