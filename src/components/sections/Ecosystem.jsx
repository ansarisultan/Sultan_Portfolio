import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCpu, FiGlobe, FiBarChart2, FiActivity } from 'react-icons/fi'
import GlassCard from '../ui/GlassCard'

const Ecosystem = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const ecosystemFeatures = [
    {
      icon: FiGlobe,
   title: 'Smart Dashboard',
    description: 'Central control panel with real-time insights, quick actions, and system status monitoring.',
    features: ['Live Metrics', 'Quick Actions', 'System Status'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    },
    {
    icon: FiBarChart2,
    title: 'Usage Analytics',
    description: 'Visualize API usage, request volume, and performance trends through interactive graphs.',
    features: ['Usage Graphs', 'API Metrics', 'Trend Analysis'],
    gradient: 'from-cyan-500/20 to-teal-500/20',
    iconColor: 'text-cyan-400',
  },
    {
      icon: FiActivity,
      title: 'Realtime Activity System',
    description: 'Live tracking of user actions and events using Socket.IO for instant updates across the workspace.',
    features: ['Socket.IO Events', 'Live Activity Feed', 'Session Tracking'],
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    },
    {
      icon: FiCpu,
    title: 'Dual Mode Architecture',
    description: 'Flexible system design enabling secure local processing and scalable cloud integration.',
    features: ['Offline Capability', 'Cloud Sync', 'Secure Execution'],
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
    },
  ]

  return (
    <section id="ecosystem" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         <motion.div
  initial={{ scale: 0 }}
  animate={inView ? { scale: 1 } : {}}
  transition={{ duration: 0.5 }}
  className="inline-block mb-4"
>
  <span className="px-4 py-2 rounded-full glass text-primary-400 border border-primary-500/30 text-sm font-medium">
    Primary Projects & Workspace
  </span>
</motion.div>

<h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
  The <span className="gradient-text">FuncLexa</span> Workspace
</h2>

<p className="text-gray-400 max-w-2xl mx-auto">
  A collection of AI-focused web applications and tools built to demonstrate 
  real-time features, practical system design, and full-stack development using MERN and LLMs.
</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ecosystemFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full group hover:scale-[1.02] transition-transform duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs glass rounded-full text-gray-300 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
         <GlassCard className="p-8">
  <h3 className="text-2xl font-display font-semibold mb-4 text-center gradient-text">
    Tech Stack Behind FuncLexa
  </h3>

  <div className="flex flex-wrap justify-center gap-3">
    {[
      'React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO',
      'Tailwind CSS', 'LLM APIs', 'JWT', 'SSO Auth', 'Reverse Proxy', 'Vite'
    ].map((tech) => (
      <motion.span
        key={tech}
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-4 py-2 glass rounded-lg text-sm font-medium border border-white/10 hover:border-primary-500/30 transition-colors"
      >
        {tech}
      </motion.span>
    ))}
  </div>
</GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem
