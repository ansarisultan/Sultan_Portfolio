// components/sections/FeaturedProject.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi'
import GlassCard from '../ui/GlassCard'

const FeaturedProject = () => {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-display font-bold mb-2">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-gray-400">My flagship AI-powered ecosystem</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              <div>
                <div className="inline-block px-3 py-1 rounded-full glass text-primary-400 text-xs mb-4">
                  Featured Project
                </div>
                <h3 className="text-3xl font-display font-bold mb-3">FuncLexa Ecosystem</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  An AI-powered web ecosystem demonstrating advanced system architecture 
                  with integrated virtual assistants, real-time communication, and seamless 
                  AI service integration.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Node.js', 'MongoDB', 'Socket.IO', 'LLM APIs', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-3 py-1 glass rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/project/funflexa"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all group"
                  >
                    Explore Project
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://github.com/sultansalauddin/funflexa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-gray-300 hover:text-white transition-all"
                  >
                    <FiGithub />
                    Source Code
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-accent-purple/30 to-accent-cyan/30 rounded-xl blur-xl" />
                <div className="relative glass-premium rounded-xl p-2">
                  <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl mb-4 block">🌐</span>
                      <p className="text-gray-400">FuncLexa Architecture</p>
                      <Link 
                        to="/project/funflexa"
                        className="text-primary-400 text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        View Architecture Diagram
                        <FiArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject