'use client'

import { useState } from 'react'
import { projects, technologies } from '@/lib/data/projects'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects

  const featured = filteredProjects.filter((p) => p.featured)
  const others = filteredProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <Reveal className="space-y-4 max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground">
            Real client work — each project includes the business problem, the solution delivered, and the measurable result.
          </p>
        </Reveal>

        {/* Filter */}
        <Reveal className="mt-10 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Filter by technology</p>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setSelectedTech(null)}
              variant={selectedTech === null ? 'default' : 'outline'}
              size="sm"
            >
              All
            </Button>
            {technologies.map((tech) => (
              <Button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                variant={selectedTech === tech ? 'default' : 'outline'}
                size="sm"
              >
                {tech}
              </Button>
            ))}
          </div>
        </Reveal>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mt-12 space-y-6">
            {featured.map((project) => (
              <Reveal key={project.id}>
                <article className="group rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative min-h-64 md:min-h-full overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.description}</p>

                      <div className="mt-5 space-y-3 text-sm">
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wide">Problem</span>
                          <p className="text-muted-foreground mt-1">{project.problem}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wide">Solution</span>
                          <p className="text-muted-foreground mt-1">{project.solution}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wide">Result</span>
                          <p className="text-foreground/90 mt-1 font-medium">{project.result}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6 pt-1">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                              Live Demo <ArrowUpRight className="size-3.5" />
                            </Button>
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="gap-2">
                              <GithubIcon className="size-3.5" /> GitHub
                            </Button>
                          </a>
                        )}
                        {project.caseStudy && (
                          <a href={project.caseStudy} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="gap-2">
                              <FileText className="size-3.5" /> Case Study
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Others */}
        {others.length > 0 && (
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project) => (
                <Reveal key={project.id}>
                  <article className="rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-4">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
                            Live <ArrowUpRight className="size-3" />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
                            Code <GithubIcon className="size-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <p className="text-muted-foreground">No projects found with the selected technology.</p>
            <Button onClick={() => setSelectedTech(null)} variant="outline">Clear filters</Button>
          </div>
        )}
      </div>
    </section>
  )
}
