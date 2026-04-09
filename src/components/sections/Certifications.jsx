import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiGooglecloud,
  SiInfosys,
  SiMicrosoft
} from 'react-icons/si'
import { FiAward, FiExternalLink, FiDatabase, FiServer, FiBookOpen } from 'react-icons/fi'
import GlassCard from '../ui/GlassCard'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      provider: 'Oracle',
      icon: FiDatabase,
      color: '#F80000',
      certifications: [
        {
          title: 'Oracle Certified Generative AI Professional',
          year: '2025',
          description: 'Advanced certification in Generative AI technologies and implementation strategies.',
        },
        {
          title: 'APEX Cloud Certified Developer Professional',
          year: '2025',
          description: 'Expert-level certification in Oracle APEX cloud development and deployment.',
        }
      ]
    },
    // {
    //   provider: 'Google Cloud',
    //   icon: SiGooglecloud,
    //   color: '#4285F4',
    //   certifications: [
    //     {
    //       title: 'Innovating with Google Cloud AI',
    //       year: '2024',
    //       description: 'Comprehensive training in Google Cloud AI services and innovation strategies.',
    //     }
    //   ]
    // },
 
    {
      provider: 'Infosys Springboard',
      icon: SiInfosys,
      color: '#007CC3',
      certifications: [
        {
          title: 'Advanced MERN Development',
          year: '2024',
          description: 'Advanced concepts in MongoDB, Express, React, and Node.js development.',
        },
        {
          title: 'Full Stack Developer Certification',
          year: '2024',
          description: 'Comprehensive full-stack development covering modern web technologies.',
        }
      ]
    },
       {
      provider: 'IBM',
      icon: FiServer,
      color: '#052FAD',
      certifications: [
        {
          title: 'Cybersecurity Fundamentals',
          year: '2024',
          description: 'Core cybersecurity principles, threat detection, and security best practices.',
        },
        {
          title: 'Front End Web Development',
          year: '2024',
          description: 'Modern frontend development practices and responsive web design.',
        }
      ]
    },
  ]

  const badgePlatforms = [
    {
      name: 'Credly',
      href: 'https://www.credly.com/users/sultan-salauddin-ansari/',
      icon: FiAward,
      color: '#FF6B00',
    },
    {
      name: 'MS Learn',
      href: 'https://learn.microsoft.com/en-us/users/ansarisultan/',
      icon: SiMicrosoft,
      color: '#00A4EF',
    },
    {
      name: 'Skillsoft',
      href: 'https://skillsoft.digitalbadges.skillsoft.com/profile/sultansalauddinansari451931/wallet',
      icon: FiBookOpen,
      color: '#22C55E',
    },
  ]

  return (
    <section id="certifications" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-400 border border-primary-500/30 mb-6"
          >
            <FiAward className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Certifications</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Industry <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Verified certifications from leading technology organizations.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            {badgePlatforms.map((platform) => {
              const PlatformIcon = platform.icon
              return (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-sm text-gray-300 hover:text-white transition-colors"
                  aria-label={`Open ${platform.name} badges`}
                  title={`Open ${platform.name} badges`}
                >
                  <PlatformIcon className="w-4 h-4" style={{ color: platform.color }} />
                  <span>{platform.name}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((provider, providerIndex) => {
            const ProviderIcon = provider.icon
            const isIbmProvider = provider.provider === 'IBM'
            return (
              <motion.div
                key={provider.provider}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: providerIndex * 0.1 }}
                className={isIbmProvider ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <ProviderIcon className="w-7 h-7" style={{ color: provider.color }} />
                    </div>
                    <h3 className="text-xl font-display font-semibold">{provider.provider}</h3>
                  </div>

                  <div className="space-y-4">
                    {provider.certifications.map((cert, certIndex) => (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (providerIndex * 0.1) + (certIndex * 0.1) }}
                        className="group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FiAward className="w-4 h-4 text-primary-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                                {cert.title}
                              </h4>
                              <span className="text-xs px-2 py-1 glass rounded-full text-gray-400">
                                {cert.year}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400">{cert.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <GlassCard className="inline-block px-8 py-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">View all credentials on</span>
              <motion.a
                href="https://linkedin.com/in/sultansansari"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                LinkedIn
                <FiExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
