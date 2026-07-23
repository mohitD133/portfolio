'use client'

import { techStack } from '@/lib/data/tech-stack'
import { Reveal } from '@/components/motion'
import {
  Atom,
  Bot,
  Boxes,
  Braces,
  Cloud,
  Database,
  GitBranch,
  HardDrive,
  Hexagon,
  Server,
  type LucideIcon,
} from 'lucide-react'

const techIcons: Record<string, LucideIcon> = {
  react: Atom,
  angular: Hexagon,
  node: Server,
  mongodb: Database,
  mysql: HardDrive,
  redis: Boxes,
  aws: Cloud,
  docker: Braces,
  github: GitBranch,
  openai: Bot,
}

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technologies I Work With</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground">
            A modern, production-tested stack chosen for scalability, performance, and maintainability.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-12">
          {techStack.map((tech, i) => {
            const Icon = techIcons[tech.icon]

            return (
            <Reveal key={tech.name} delay={i * 0.05}>
              <div className="relative h-full min-h-32 overflow-hidden rounded-xl bg-surface/80 border border-border p-5 transition-all duration-300 group hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div
                  className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: tech.color }}
                />
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-5">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color, backgroundColor: `${tech.color}14`, borderColor: `${tech.color}38` }}
                  >
                    <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{tech.name}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{tech.category}</p>
                  </div>
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
