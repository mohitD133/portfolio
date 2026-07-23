'use client'

import { motion } from 'framer-motion'
import { about } from '@/lib/data/about'
import { Button } from '@/components/ui/button'
import { HeroAvatar } from '@/components/hero-avatar'
import { ArrowRight, Download, Mail } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '40+', label: 'Products Managed' },
  { value: '100%', label: 'Client Focus' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 w-[36rem] h-[36rem] bg-primary/15 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 -left-32 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-secondary/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-7"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-foreground/80">Available for new projects</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {about.name}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gradient">
                {about.tagline}
              </p>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Building scalable applications, cloud solutions, and e-commerce platforms that help businesses grow.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all gap-2">
                  View Projects <ArrowRight className="size-4" />
                </Button>
              </a>
              <a href={about.resumeUrl} download>
                <Button size="lg" variant="outline" className="font-semibold gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                  <Download className="size-4" /> Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="ghost" className="font-semibold gap-2">
                  <Mail className="size-4" /> Contact Me
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl glass border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroAvatar src={about.heroImage} name={about.name} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/70">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </div>
      </div> */}
    </section>
  )
}
