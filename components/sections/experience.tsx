'use client'

import { experience } from '@/lib/data/experience'
import { Reveal } from '@/components/motion'

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Career Journey</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground">
            A focused path from building web apps to architecting cloud and AI solutions.
          </p>
        </Reveal>

        <div className="relative mt-14 pl-8 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <Reveal key={exp.id}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${isLeft ? '' : ''}`}>
                    {/* Dot */}
                    <div className="absolute -left-8 md:left-1/2 top-1 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
                    </div>

                    {/* Year */}
                    <div className={`md:text-right ${isLeft ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <span className="text-2xl font-bold text-gradient">{exp.year}</span>
                    </div>

                    {/* Content */}
                    <div className={`mt-2 md:mt-0 ${isLeft ? 'md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
                      <div className="p-5 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-colors">
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
                        <ul className={`mt-3 space-y-1.5 ${isLeft ? '' : 'md:text-left'}`}>
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-muted-foreground/90 flex items-start gap-2">
                              <span className="text-primary mt-0.5">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
