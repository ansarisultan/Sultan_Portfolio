import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiTailwindcss, SiJavascript, SiHtml5,
  SiGooglecloud, SiSocketdotio, SiVite, SiPostman
} from 'react-icons/si'
import { DiPython, DiCss3 } from 'react-icons/di'
import { BsShieldLock, BsRobot } from 'react-icons/bs'
import GlassCard from '../ui/GlassCard'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: SiReact,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: SiReact, level: 'Intermediate', color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, level: 'Intermediate', color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, level: 'Advanced', color: '#E34F26' },
        { name: 'CSS3', icon: DiCss3, level: 'Advanced', color: '#1572B6' },
      ]
    },
    {
      title: 'Backend & Database',
      icon: SiNodedotjs,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 'Intermediate', color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 'Intermediate', color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate', color: '#47A248' },
        { name: 'Socket.IO', icon: SiSocketdotio, level: 'Advanced', color: '#010101' },
      ]
    },
    {
      title: 'AI & Development',
      icon: BsRobot,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Generative AI', icon: BsRobot, level: 'Intermediate', color: '#8B5CF6' },
        { name: 'LLMs', icon: BsRobot, level: 'Intermediate', color: '#EC4899' },
        { name: 'Neural Networks', icon: DiPython, level: 'Basic', color: '#3776AB' },
      ]
    },
    {
      title: 'Tools & Security',
      icon: BsShieldLock,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'JWT Auth', icon: BsShieldLock, level: 'Advanced', color: '#EF4444' },
        { name: 'Cybersecurity Basics', icon: BsShieldLock, level: 'Intermediate', color: '#F59E0B' },
        { name: 'Vite', icon: SiVite, level: 'Intermediate', color: '#646CFF' },
        { name: 'Postman', icon: SiPostman, level: 'Intermediate', color: '#FF6C37' },
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical skills built through real-world projects, focusing on full-stack development and AI integration.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          className="flex items-center justify-between p-3 rounded-lg glass border border-white/5 hover:border-primary-500/20 transition relative"
                        >

                          {/* Colorful vertical bar */}
                          <span
                            className="absolute left-0 top-2 bottom-2 w-1.5 rounded-full"
                            style={{ background: skill.color }}
                          />
                          <div className="flex items-center gap-3 ml-3">
                            <SkillIcon className="w-5 h-5" style={{ color: skill.color }} />
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          </div>

                          {/* Level Badge */}
                          <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                            {skill.level}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>

                </GlassCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills