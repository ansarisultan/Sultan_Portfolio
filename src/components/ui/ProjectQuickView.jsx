// components/ui/ProjectQuickView.jsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiX, FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import GlassCard from './GlassCard'

const ProjectQuickView = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl sm:h-auto max-h-[90vh] overflow-y-auto z-50"
          >
            <GlassCard className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:text-primary-400 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 glass rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/project/${project.id}`}
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-sm font-medium"
                >
                  Full Details
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://github.com/sultansalauddin/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={`https://${project.id}.vercel.app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectQuickView