'use client'

import { about } from '@/lib/data/about'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/brand-icons'

const socials = [
  { name: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'WhatsApp', href: about.whatsapp, icon: WhatsappIcon },
  { name: 'Email', href: `mailto:${about.email}`, icon: Mail },
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface border-t border-border">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-tr-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{about.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {about.title}
            </p>
            <p className="text-sm text-muted-foreground">{about.location}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {about.name}. All Rights Reserved.</p>
          <p>Built with vite.js, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
