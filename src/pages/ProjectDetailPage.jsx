// pages/ProjectDetailPage.jsx - Complete Version
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowLeft,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLayout,
  FiLock,
  FiServer,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineLightningBolt,
  SiExpress,
  SiGooglecloud,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiVite,
} from '../utils/icons'
import GlassCard from '../components/ui/GlassCard'
import GradientButton from '../components/ui/GradientButton'
import TiltCard from '../components/ui/TiltCard'
import toast from 'react-hot-toast'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [imageError, setImageError] = useState(false)

  // Complete project data
  const projectsData = {
//     'funflexa': {
//       id: 'funflexa',
//       title: 'FuncLexa Ecosystem',
//       subtitle: 'AI-Powered Web Ecosystem',
//       description: 'A comprehensive AI-integrated web ecosystem demonstrating advanced system architecture, real-time communication, and seamless AI service integration.',
//       longDescription: `FuncLexa started as a portfolio project but quickly evolved into a full-fledged AI-powered ecosystem. It showcases how multiple AI services can be integrated into a cohesive platform, providing users with intelligent assistants, real-time features, and scalable architecture patterns.

// The ecosystem demonstrates advanced concepts in system design, microservices communication, and AI orchestration. It serves as both a demonstration platform and a practical implementation of modern web technologies combined with cutting-edge AI capabilities.`,
//       banner: '/images/projects/funflexa-arch.png',
//       category: 'AI Ecosystem',
//       timeline: '6 months',
//       role: 'Lead Developer & Architect',
//       status: 'Active Development',
//       techStack: [
//         { name: 'React 18', icon: SiReact, color: '#61DAFB' },
//         { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
//         { name: 'Express', icon: SiExpress, color: '#000000' },
//         { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
//         { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
//         { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
//         { name: 'Vite', icon: SiVite, color: '#646CFF' },
//         { name: 'Docker', icon: SiDocker, color: '#2496ED' },
//         { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
//       ],
//       features: [
//         {
//           title: 'AI Virtual Assistant',
//           description: 'Integrated voice and text-based AI assistant with context awareness and multi-language support. Capable of handling complex queries and maintaining conversation context.',
//           icon: FiCpu,
//           details: ['Voice Recognition', 'Text-to-Speech', 'Context Memory', 'Multi-turn Conversations']
//         },
//         {
//           title: 'Real-time Communication',
//           description: 'WebSocket-based real-time features for instant updates, live collaboration, and seamless user interactions.',
//           icon: FiZap,
//           details: ['Live Chat', 'Collaborative Editing', 'Presence Indicators', 'Push Notifications']
//         },
//         {
//           title: 'Scalable Architecture',
//           description: 'Microservices-based architecture designed for horizontal scaling, high availability, and fault tolerance.',
//           icon: FiBox,
//           details: ['Microservices', 'Load Balancing', 'Service Discovery', 'Circuit Breakers']
//         },
//         {
//           title: 'Advanced Security',
//           description: 'Comprehensive security measures including JWT authentication, rate limiting, and data encryption.',
//           icon: FiShield,
//           details: ['JWT Auth', 'Rate Limiting', 'Data Encryption', 'XSS Protection']
//         }
//       ],
//       architecture: {
//         frontend: ['React 18', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Socket.IO Client', 'React Query'],
//         backend: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Socket.IO', 'Redis'],
//         ai: ['OpenAI API', 'Google Cloud AI', 'Custom LLM Integration', 'LangChain', 'Vector Embeddings'],
//         devops: ['Docker', 'Google Cloud Run', 'GitHub Actions', 'MongoDB Atlas', 'Redis Cloud'],
//         monitoring: ['Google Cloud Monitoring', 'Sentry', 'LogRocket', 'Custom Analytics']
//       },
//       github: 'https://github.com/sultansalauddin/funflexa',
//       live: 'https://funflexa.com',
//       demoCredentials: {
//         email: 'demo@funflexa.com',
//         password: 'Demo123!'
//       },
//       stats: [
//         { label: 'Active Users', value: '500+', icon: FiUsers },
//         { label: 'API Calls/Day', value: '10K+', icon: FiTrendingUp },
//         { label: 'Uptime', value: '99.9%', icon: FiCheckCircle },
//         { label: 'Response Time', value: '<200ms', icon: FiClock }
//       ],
//       challenges: [
//         {
//           title: 'AI Service Integration',
//           description: 'Integrating multiple AI services while maintaining consistent response times and handling rate limits across different providers.',
//           solution: 'Implemented a queue-based request system with intelligent caching, fallback mechanisms, and response streaming for optimal performance.',
//           impact: 'Reduced average response time by 40% and improved reliability with automatic failover.'
//         },
//         {
//           title: 'Real-time Synchronization',
//           description: 'Ensuring real-time updates across multiple clients without data inconsistency or race conditions.',
//           solution: 'Used Socket.IO with room-based architecture, optimistic UI updates, and conflict resolution strategies using Operational Transformation.',
//           impact: 'Achieved sub-100ms synchronization across distributed clients.'
//         },
//         {
//           title: 'Scalability at Peak Load',
//           description: 'Handling traffic spikes while maintaining performance and managing infrastructure costs.',
//           solution: 'Designed auto-scaling architecture with Google Cloud Run, implemented Redis caching layers, and optimized database queries.',
//           impact: 'Successfully handled 10x traffic spikes with zero downtime and 30% cost optimization.'
//         }
//       ],
//       screenshots: [
//         { title: 'Dashboard', description: 'Main dashboard with real-time analytics' },
//         { title: 'AI Assistant', description: 'Voice and text interaction interface' },
//         { title: 'Analytics', description: 'Detailed usage analytics and insights' }
//       ],
//       learnings: [
//         'Deep understanding of microservices architecture patterns',
//         'Practical experience with AI/LLM integration in production',
//         'Advanced WebSocket and real-time system design',
//         'Cloud-native deployment and scaling strategies'
//       ]
//     },
    'lexachat': {
      id: 'lexachat',
      title: 'LexaChat Platform',
      subtitle: 'SaaS-Ready Conversational AI Platform',
      description: 'Advanced chat platform with dual-mode architecture offering both privacy-focused local storage and cloud-synced sessions.',
      longDescription: `LexaChat is a sophisticated conversational AI platform designed with privacy and scalability at its core. The dual-mode architecture gives users complete control over their data - choose local storage for maximum privacy or cloud sync for accessibility across devices.

Built as a SaaS-ready solution, it includes enterprise-grade features like OTP verification, markdown rendering, and customizable themes. The platform is designed to scale from individual users to large organizations.`,
      banner: '/images/lexa.png',
      category: 'AI Chat Platform',
      timeline: '4 months',
      role: 'Full Stack Developer',
      status: 'Production',
      techStack: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
      features: [
        {
          title: 'Dual-Mode Architecture',
          description: 'Choose between local storage for complete privacy or cloud sync for multi-device accessibility.',
          icon: FiDatabase,
          details: ['Local Mode', 'Cloud Sync', 'Data Portability', 'Encryption']
        },
        {
          title: 'OTP Verification',
          description: 'Secure email-based OTP authentication with rate limiting and session management.',
          icon: FiLock,
          details: ['Email OTP', 'Rate Limiting', 'Session Timeout', '2FA Ready']
        },
        {
          title: 'Markdown Support',
          description: 'Full markdown and code syntax highlighting for rich content with live preview.',
          icon: FiCode,
          details: ['Syntax Highlighting', 'Live Preview', 'Code Blocks', 'Tables']
        },
        {
          title: 'Theme Customization',
          description: 'Multiple UI themes with system preference detection and custom theme builder.',
          icon: FiLayout,
          details: ['Dark Mode', 'Light Mode', 'Cyber Theme', 'Custom CSS']
        }
      ],
      architecture: {
        frontend: ['React', 'Context API', 'Tailwind CSS', 'React Markdown', 'Prism.js'],
        backend: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'Redis'],
        security: ['OTP Verification', 'JWT Authentication', 'Rate Limiting', 'Input Sanitization', 'CORS'],
        storage: ['LocalStorage', 'MongoDB Atlas', 'Redis Cache']
      },
      github: 'https://github.com/ansarisultan/lexachat-client',
      live: 'https://lexachat.online',
      stats: [
        { label: 'Message Capacity', value: 'Unlimited', icon: FiDatabase },
        { label: 'Storage Modes', value: '2', icon: FiBox },
        { label: 'Themes', value: '5+', icon: FiLayout },
        { label: 'Response Time', value: '<100ms', icon: FiClock }
      ],
      challenges: [
        {
          title: 'Data Synchronization',
          description: 'Seamlessly syncing data between local storage and cloud while handling offline scenarios.',
          solution: 'Implemented a sophisticated sync engine with conflict resolution and offline queue.',
          impact: '99.9% sync success rate with automatic conflict resolution.'
        }
      ],
      learnings: [
        'Advanced state synchronization patterns',
        'Offline-first architecture design',
        'Security best practices for authentication',
        'Performance optimization for real-time features'
      ]
    },
    'flexa': {
      id: 'flexa',
      title: 'Flexa AI Assistant',
      subtitle: 'Voice & Text Intelligent Assistant',
      description: 'An intelligent virtual assistant with voice and text interactions, contextual understanding, and multilingual capabilities.',
      longDescription: `Flexa AI Assistant is designed as a lightweight but capable assistant that supports both text-first and voice-first workflows. The project focuses on accessibility, low-latency response, and practical command handling for day-to-day productivity.

The assistant combines modern frontend UX with speech interfaces, prompt orchestration, and backend AI integrations. It is structured to be extensible, allowing new commands, tools, and contexts to be added without major refactors.`,
      banner: '/images/flexa.png',
      category: 'AI Assistant',
      timeline: '3 months',
      role: 'Frontend',
      status: 'Live',
      techStack: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Web Speech API', icon: FiCpu, color: '#4F46E5' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
      features: [
        {
          title: 'Voice + Text Interaction',
          description: 'Seamless switching between voice and text inputs for flexible user interaction.',
          icon: FiCpu,
          details: ['Speech Recognition', 'Text Input', 'TTS Output', 'Hands-free Flow']
        },
        {
          title: 'Context-Aware Responses',
          description: 'Maintains conversational context to answer follow-up queries naturally.',
          icon: FiZap,
          details: ['Conversation Memory', 'Follow-up Intent', 'Prompt Chaining', 'Smart Fallbacks']
        },
        {
          title: 'Command Utilities',
          description: 'Supports assistant commands for quick actions and productivity workflows.',
          icon: FiCode,
          details: ['Task Commands', 'Quick Actions', 'Custom Triggers', 'Workflow Hints']
        },
        {
          title: 'Responsive Experience',
          description: 'Mobile-friendly interface with smooth interactions and quick response rendering.',
          icon: FiLayout,
          details: ['Mobile Ready', 'Fast UI Feedback', 'Loading States', 'Accessible Controls']
        }
      ],
      architecture: {
        frontend: ['React', 'Framer Motion', 'Tailwind CSS', 'Custom Hooks'],
        backend: ['Node.js', 'Express', 'REST APIs'],
        ai: ['LLM API Integration', 'Prompt Engineering', 'Context Window Handling'],
        speech: ['Web Speech API', 'Speech Recognition', 'Speech Synthesis'],
        deployment: ['Vercel', 'Environment-based Config']
      },
      github: 'https://github.com/ansarisultan/FLexa',
      live: 'https://flexaai-funclexa.vercel.app/',
      stats: [
        { label: 'Voice Commands', value: '50+', icon: FiCpu },
        { label: 'Interaction Modes', value: '2', icon: FiLayout },
        { label: 'Languages', value: '5', icon: FiGlobe },
        { label: 'Avg Response', value: '<150ms', icon: FiClock }
      ],
      challenges: [
        {
          title: 'Reliable Voice Input',
          description: 'Handling inconsistent browser speech recognition behavior across environments.',
          solution: 'Implemented graceful fallbacks, retry flows, and clear state indicators for mic and transcript handling.',
          impact: 'Improved successful voice capture rate and reduced user confusion during speech input.'
        },
        {
          title: 'Context Retention',
          description: 'Maintaining coherent multi-turn answers while keeping latency low.',
          solution: 'Added compact conversation memory with selective summarization and token-aware prompt composition.',
          impact: 'Better answer relevance with stable response times.'
        }
      ],
      learnings: [
        'Practical speech interface design in web applications',
        'Latency-aware prompt and response orchestration',
        'Balancing assistant intelligence with UI clarity',
        'Building extensible command-driven assistant flows'
      ]
    },
    'portfolio-v1': {
      id: 'portfolio-v1',
      title: 'FuncLexa AI Workspace',
      subtitle: 'Integrated Multi-App AI Workspace',
      description: 'A scalable AI workspace featuring dashboard analytics, real-time features, and multi-app integration across the FuncLexa ecosystem.',
      longDescription: `FuncLexa AI Workspace is a centralized environment that unifies different AI experiences into one coherent product surface. It combines project modules, assistant tooling, and analytics into a single operational workspace.

The project demonstrates scalable frontend structure, modular backend integration, and real-time interactions while keeping the user experience intuitive. It is built to support growth from a personal workspace to a multi-user collaborative system.`,
      banner: '/images/workspace.png',
      category: 'AI Workspace',
      timeline: '5 months',
      role: 'Lead Full Stack Developer',
      status: 'Beta Testing',
      techStack: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
      features: [
        {
          title: 'Unified AI Workspace',
          description: 'Single dashboard experience for accessing multiple AI-powered modules and workflows.',
          icon: FiLayout,
          details: ['Modular Apps', 'Unified Navigation', 'Shared Context', 'Productive UX']
        },
        {
          title: 'Real-Time System',
          description: 'Live updates and event-driven UX for responsive collaboration and monitoring.',
          icon: FiZap,
          details: ['Live Events', 'Instant Updates', 'WebSocket Channels', 'Presence-aware UI']
        },
        {
          title: 'Analytics & Insights',
          description: 'Built-in workspace analytics to monitor usage and performance metrics.',
          icon: FiTrendingUp,
          details: ['Usage Trends', 'Activity Metrics', 'Performance Views', 'Insight Cards']
        },
        {
          title: 'Scalable Full-Stack Core',
          description: 'Structured architecture that supports modular growth and future feature expansion.',
          icon: FiBox,
          details: ['Service Modules', 'API Layering', 'Reusable Components', 'Scalable Patterns']
        }
      ],
      architecture: {
        frontend: ['React', 'Component-Driven UI', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js', 'Express', 'REST + Socket APIs'],
        database: ['MongoDB', 'Schema-based Modeling'],
        realtime: ['Socket.IO', 'Event-driven Updates'],
        deployment: ['Vercel', 'Cloud-ready Build Pipeline']
      },
      github: 'https://github.com/ansarisultan/FuncLexaEco2.0',
      live: 'https://funclexat.vercel.app',
      stats: [
        { label: 'Integrated Modules', value: '4+', icon: FiBox },
        { label: 'Realtime Features', value: '10+', icon: FiZap },
        { label: 'Core Screens', value: '15+', icon: FiLayout },
        { label: 'Avg Load Time', value: '<2s', icon: FiClock }
      ],
      challenges: [
        {
          title: 'Cross-Module Consistency',
          description: 'Maintaining consistent UX and data patterns across multiple app modules.',
          solution: 'Established shared component conventions, unified state patterns, and reusable UI primitives.',
          impact: 'Faster feature delivery with a more coherent user experience.'
        },
        {
          title: 'Real-Time Scaling',
          description: 'Keeping live interactions stable as module complexity increased.',
          solution: 'Segmented socket channels and optimized event payloads for targeted updates.',
          impact: 'Reduced unnecessary client updates and improved runtime responsiveness.'
        }
      ],
      learnings: [
        'Designing cohesive multi-app workspace architecture',
        'Scaling realtime features with maintainable event design',
        'Balancing analytics depth with UI performance',
        'Creating reusable patterns for rapid product iteration'
      ]
    }
  }

  useEffect(() => {
    setLoading(true)
    // Simulate data fetch
    setTimeout(() => {
      const projectData = projectsData[id]
      if (projectData) {
        setProject(projectData)
        document.title = `${projectData.title} | Sultan Ansari`
      } else {
        toast.error('Project not found')
        navigate('/')
      }
      setLoading(false)
    }, 500)
  }, [id, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (!project) return null

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiGlobe },
    { id: 'architecture', label: 'Architecture', icon: HiOutlineCollection },
    { id: 'features', label: 'Features', icon: HiOutlineLightningBolt },
    { id: 'technical', label: 'Tech Stack', icon: FiServer },
    { id: 'challenges', label: 'Challenges', icon: HiOutlineChartBar },
  ]

  const copyDemoCredentials = () => {
    if (project.demoCredentials) {
      navigator.clipboard.writeText(
        `Email: ${project.demoCredentials.email}\nPassword: ${project.demoCredentials.password}`
      )
      toast.success('Demo credentials copied!')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full glass text-primary-400 text-sm">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full glass text-accent-cyan text-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    {project.status}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400 mb-6">{project.subtitle}</p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <GradientButton href={project.live} target="_blank">
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </GradientButton>
                  <GradientButton href={project.github} variant="outline" target="_blank">
                    <FiGithub className="mr-2" />
                    View Source
                  </GradientButton>
                  {project.demoCredentials && (
                    <button
                      onClick={copyDemoCredentials}
                      className="px-6 py-3 glass rounded-xl text-sm hover:bg-white/5 transition-all"
                    >
                      Copy Demo Credentials
                    </button>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 glass rounded-xl">
                      <stat.icon className="w-4 h-4 text-primary-400 mx-auto mb-1" />
                      <div className="text-xl font-display font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-2xl blur-xl opacity-30 animate-gradient-fast" />
                <TiltCard>
                  <div className="relative glass-premium rounded-2xl p-2">
                    <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl flex items-center justify-center overflow-hidden">
                      {project.banner && !imageError ? (
                        <img 
                          src={project.banner} 
                          alt={project.title}
                          className="w-full h-full object-cover rounded-xl"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="text-center p-8">
                          <HiOutlineCollection className="w-20 h-20 text-primary-400/50 mx-auto mb-4" />
                          <p className="text-gray-400 text-lg font-medium">{project.title}</p>
                          <p className="text-gray-500 text-sm mt-2">Architecture Preview</p>
                        </div>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 p-1 glass rounded-2xl backdrop-blur-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                    <FiGlobe className="text-primary-400" />
                    Project Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {project.longDescription}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="glass-premium rounded-xl p-5">
                      <div className="text-sm text-gray-400 mb-1">Timeline</div>
                      <div className="font-semibold text-lg">{project.timeline}</div>
                    </div>
                    <div className="glass-premium rounded-xl p-5">
                      <div className="text-sm text-gray-400 mb-1">Role</div>
                      <div className="font-semibold text-lg">{project.role}</div>
                    </div>
                    <div className="glass-premium rounded-xl p-5">
                      <div className="text-sm text-gray-400 mb-1">Tech Stack</div>
                      <div className="font-semibold text-lg">{project.techStack.length}+ Technologies</div>
                    </div>
                  </div>

                  {/* Key Learnings */}
                  {project.learnings && (
                    <div className="mt-8">
                      <h3 className="text-xl font-display font-semibold mb-4">Key Learnings</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.learnings.map((learning, index) => (
                          <div key={index} className="flex items-start gap-3 glass rounded-xl p-4">
                            <FiCheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{learning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </GlassCard>
              </div>
            )}

            {/* Architecture Tab */}
            {activeTab === 'architecture' && (
              <div className="space-y-8">
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                    <HiOutlineCollection className="text-primary-400" />
                    System Architecture
                  </h2>
                  
                  <div className="glass-premium rounded-xl p-8 mb-8">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <FiGithub className="w-5 h-5" />
                      Architecture Diagram
                    </h3>
                    <pre className="text-sm font-mono text-gray-300 overflow-x-auto p-4 bg-dark-900/50 rounded-lg">
{`${project.id}/
|-- client/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- hooks/
|   |   |-- utils/
|   |   \`-- styles/
|-- server/
|   |-- routes/
|   |-- controllers/
|   |-- models/
|   |-- middleware/
|   \`-- config/
|-- shared/
|   |-- types/
|   \`-- constants/
|-- .env.example
|-- package.json
\`-- README.md`}
                    </pre>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div key={key} className="glass-premium rounded-xl p-5">
                        <h4 className="font-semibold capitalize mb-4 text-primary-400 text-lg">
                          {key}
                        </h4>
                        <div className="space-y-2">
                          {value.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </GlassCard>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TiltCard>
                      <GlassCard className="p-6 h-full">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4">
                          <feature.icon className="w-7 h-7 text-primary-400" />
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                        
                        {feature.details && (
                          <div className="flex flex-wrap gap-2">
                            {feature.details.map((detail, i) => (
                              <span key={i} className="px-2 py-1 text-xs glass rounded-md text-gray-300">
                                {detail}
                              </span>
                            ))}
                          </div>
                        )}
                      </GlassCard>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Tech Stack Tab */}
            {activeTab === 'technical' && (
              <GlassCard className="p-8">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <FiServer className="text-primary-400" />
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-3 px-5 py-3 glass-premium rounded-xl"
                    >
                      <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 glass-premium rounded-xl">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <FiGithub className="w-5 h-5" />
                    Repository Structure
                  </h3>
                  <pre className="text-sm font-mono text-gray-300 overflow-x-auto p-4 bg-dark-900/50 rounded-lg">
{`${project.id}/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
├── shared/
│   ├── types/
│   └── constants/
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── .env.example
├── package.json
└── README.md`}
                  </pre>
                </div>
              </GlassCard>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && project.challenges && (
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center flex-shrink-0">
                          <HiOutlineChartBar className="w-6 h-6 text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-semibold mb-3 text-primary-400">
                            {challenge.title}
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Challenge</p>
                              <p className="text-gray-300">{challenge.description}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Solution</p>
                              <p className="text-gray-300">{challenge.solution}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Impact</p>
                              <p className="text-accent-cyan">{challenge.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
          
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:bg-white/5 transition-all"
            >
              <FiGithub className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
