'use client'

import { about } from '@/lib/data/about'
import { Reveal } from '@/components/motion'
import { Target, Users, Rocket, Lightbulb } from 'lucide-react'

const pillars = [
  { icon: Target, title: 'Data-Driven Outcomes', text: 'I focus on data quality, useful KPIs, and measurable improvements to business processes.' },
  { icon: Lightbulb, title: 'Analytical Problem Solving', text: 'I turn ambiguous questions into structured data workflows, models, and visual insights.' },
  { icon: Users, title: 'Stakeholder Collaboration', text: 'I gather requirements and communicate findings clearly to build solutions people can use.' },
  { icon: Rocket, title: 'Technical Range', text: 'My toolkit spans Python, SQL, Power BI, machine learning, and full-stack development.' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10"><div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" /></div>
      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Turning data into confident decisions</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12 mt-14 items-start">
          <Reveal className="space-y-5">{about.longBio.map((paragraph, index) => <p key={index} className="text-lg text-muted-foreground leading-relaxed">{paragraph}</p>)}</Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => <Reveal key={pillar.title} delay={index * 0.08}><div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 h-full group"><div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><pillar.icon className="size-5 text-primary" /></div><h3 className="text-base font-semibold text-foreground mb-2">{pillar.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{pillar.text}</p></div></Reveal>)}
          </div>
        </div>
      </div>
    </section>
  )
}
