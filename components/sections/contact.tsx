'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { about } from '@/lib/data/about'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/brand-icons'

const projectTypes = [
  'Full Stack Development',
  'E-commerce Solution',
  'AWS Cloud Deployment',
  'API Development',
  'AI Integration',
  'Business Automation',
  'Other',
]

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        setMessage({ type: 'error', text: 'The contact form is not configured yet. Please try again later.' })
        return
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_email: about.email,
      }, {
        publicKey,
      })

      setMessage({ type: 'success', text: "Message sent successfully! I'll get back to you soon." })
      setFormData({ name: '', email: '', projectType: '', message: '' })
    } catch {
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' })
    } finally {
      setIsLoading(false)
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: about.email, href: `mailto:${about.email}` },
    { icon: WhatsappIcon, label: 'WhatsApp', value: 'Chat on WhatsApp', href: about.whatsapp },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com' },
    { icon: GithubIcon, label: 'GitHub', value: 'View my code', href: 'https://github.com' },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <Reveal className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let&apos;s Build Something Great Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Tell me about it — I usually respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          {/* Contact info */}
          <Reveal className="space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium text-foreground mt-0.5">{item.value}</div>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="text-sm font-medium text-foreground mt-0.5">{about.location}</div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="p-7 rounded-2xl bg-surface border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectType" className="block text-sm font-medium text-foreground">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                >
                  <option value="" disabled>Select a project type</option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                />
              </div>

              {message && (
                <div
                  className={`p-3.5 rounded-lg text-sm ${
                    message.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-red-500/10 border border-red-500/30 text-red-300'
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 gap-2"
              >
                {isLoading ? 'Sending...' : 'Send Message'} <Send className="size-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
