'use client'

import { about } from '@/lib/data/about'
import { Reveal } from '@/components/motion'
import { Target, Users, Rocket, Lightbulb } from 'lucide-react'

const pillars = [
  { icon: Target, title: 'Business Impact', text: 'Every project is measured by the outcomes it drives — revenue, efficiency, and growth.' },
  { icon: Lightbulb, title: 'Problem Solving', text: 'I translate ambiguous business problems into clean, maintainable engineering solutions.' },
  { icon: Users, title: 'Client Delivery', text: 'Clear communication, predictable timelines, and reliable delivery on every engagement.' },
  { icon: Rocket, title: 'Technical Expertise', text: 'Deep experience across MERN, Angular, AWS, Docker, Redis, and AI integration.' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Engineering software that moves the business forward
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mt-14 items-start">
          <Reveal className="space-y-5">
            {about.longBio.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
