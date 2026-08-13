'use client'

import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Contact } from '@/components/sections/contact'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { TechStack } from '@/components/sections/tech-stack'
import { Footer } from '@/components/sections/footer'
import { siteConfig } from '@/lib/data/site'

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      {siteConfig.showTestimonials && <Testimonials />}
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}
