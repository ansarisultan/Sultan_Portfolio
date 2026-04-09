import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiShield, FiCloud, FiLayers } from 'react-icons/fi'
import GlassCard from '../ui/GlassCard'
import AnimatedText from '../ui/AnimatedText'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
  icon: FiCode,
  title: 'MERN Stack',
  description: 'Build full-stack applications using MongoDB, Express.js, React, and Node.js with focus on real-time features and scalable architecture.',
},
{
  icon: FiCpu,
  title: 'AI Integration',
  description: 'Integrate LLMs and Generative AI into web apps, including chat systems, assistants, and intelligent features.',
},
{
  icon: FiLayers,
  title: 'Real-Time Systems',
  description: 'Develop real-time applications using Socket.IO for live messaging, activity tracking, and event-driven systems.',
},
{
  icon: FiShield,
  title: 'Authentication & Security',
  description: 'Implement secure authentication systems using JWT, protected routes, and backend validation.',
},
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
  <h3 className="text-2xl font-display font-semibold mb-4 gradient-text">
  Sultan Salauddin Ansari
</h3>

<div className="space-y-4 text-gray-300">
  <p>
    I'm a <span className="text-primary-400">MERN Stack Developer</span> and 
    <span className="text-primary-400"> AI Builder</span> pursuing my B.Tech in 
    Computer Science and Engineering at Presidency University, Bengaluru.
  </p>

  <p>
    My primary project, 
    <span className="gradient-text font-semibold"> LexaChat</span>, is a real-time 
    AI chat platform built using MERN and Socket.IO, designed with a dual-mode 
    architecture supporting both local and cloud-based data handling.
  </p>

  <p>
    I also develop 
    <span className="text-primary-400"> AI-driven web applications</span> and 
    virtual assistants through 
    <span className="text-primary-400 font-semibold"> FuncLexa</span> — currently a 
    growing workspace featuring real-time dashboards, API usage monitoring, and 
    live system data. I aim to extend it further with agentic AI capabilities.
  </p>
</div>
  <div className="mt-6 flex flex-wrap gap-2">
    {['React', 'Node.js', 'MongoDB', 'Express', 'LLMs', 'Tailwind CSS', 'Socket.IO'].map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 text-sm glass rounded-full text-gray-300 border border-white/10"
      >
        {tech}
      </span>
    ))}
  </div>
</GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <GlassCard className="p-6 h-full hover-glow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About