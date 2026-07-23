'use client'

import { skills } from '@/lib/data/skills'
import { Reveal } from '@/components/motion'
import { LayoutGrid as Layout, Server, Cloud, Sparkles } from 'lucide-react'

const iconMap: Record<string, typeof Layout> = {
  layout: Layout,
  server: Server,
  cloud: Cloud,
  sparkles: Sparkles,
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground">
            A focused toolkit across frontend, backend, cloud, and AI — chosen for building production systems that scale.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {skills.map((group, idx) => {
            const Icon = iconMap[group.icon] ?? Layout
            return (
              <Reveal key={group.category} delay={idx * 0.08}>
                <div className="p-7 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 h-full group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-sm font-medium text-foreground/90 hover:bg-primary/15 hover:border-primary/40 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
