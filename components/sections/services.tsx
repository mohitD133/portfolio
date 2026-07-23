'use client'

import { services } from '@/lib/data/services'
import { Reveal } from '@/components/motion'
import { Code as Code2, ShoppingCart, Package, Cloud, Server, Sparkles, Workflow } from 'lucide-react'

const iconMap: Record<string, typeof Code2> = {
  code: Code2,
  'shopping-cart': ShoppingCart,
  package: Package,
  cloud: Cloud,
  server: Server,
  sparkles: Sparkles,
  workflow: Workflow,
}

export function Services() {
  return (
    <section id="services" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">What I Can Do For You</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground">
            End-to-end engineering services — from idea to deployment to automation.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Code2
            return (
              <Reveal key={s.id} delay={i * 0.06}>
                <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 h-full group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
