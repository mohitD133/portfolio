'use client'

import { testimonials } from '@/lib/data/testimonials'
import { Reveal } from '@/components/motion'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Client Feedback</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground">
            Results that founders, CTOs, and product leaders have experienced firsthand.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.07}>
              <figure className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                <Quote className="size-7 text-primary/40 mb-3" />
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {t.review}
                </blockquote>
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-border"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
