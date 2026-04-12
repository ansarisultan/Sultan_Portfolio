// components/sections/Contact.jsx
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiTwitter,
} from '../../utils/icons'
import GlassCard from '../ui/GlassCard'
import GradientButton from '../ui/GradientButton'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formRef = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured. Missing EmailJS environment keys.')
      }

      const trimmedData = {
        from_name: formData.from_name.trim(),
        from_email: formData.from_email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      }

      if (!trimmedData.from_name || !trimmedData.from_email || !trimmedData.subject || !trimmedData.message) {
        throw new Error('Please fill all required fields.')
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          // Send multiple common keys so template mapping mismatch doesn't trigger 400.
          from_name: trimmedData.from_name,
          name: trimmedData.from_name,
          user_name: trimmedData.from_name,
          from_email: trimmedData.from_email,
          reply_to: trimmedData.from_email,
          email: trimmedData.from_email,
          subject: trimmedData.subject,
          title: trimmedData.subject,
          message: trimmedData.message,
          to_email: 'Sultansalauddinansari490@gmail.com',
          to_name: 'Sultan Salauddin Ansari',
        },
        publicKey
      )

      if (result.status === 200) {
        setSubmitted(true)
        setFormData({ from_name: '', from_email: '', subject: '', message: '' })
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        
        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Email error:', {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      })
      toast.error(
        error?.text
          ? `Failed to send message (${error.text}).`
          : 'Failed to send message. Please try again or email me directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'Sultansalauddinansari490@gmail.com',
      href: 'mailto:sultansalauddinansari490@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 912218 9160',
      href: 'tel:+919122189160',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ansarisultan', label: 'GitHub', color: '#6e5494' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/SultanSAnsari', label: 'LinkedIn', color: '#0077b5' },
    { icon: FiTwitter, href: 'https://x.com/ansari_sultan07', label: 'Twitter', color: '#1da1f2' },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <GlassCard className="p-6 h-full">
              <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary-500/30 transition-all group"
                    >
                      <social.icon 
                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <FiSend className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-white placeholder-gray-500"
                        placeholder="Aman"
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-white placeholder-gray-500"
                        placeholder="funclexa.app@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-white placeholder-gray-500"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all text-white placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="flex justify-center sm:justify-end">
                    <GradientButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <FiLoader className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </GradientButton>
                  </div>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
