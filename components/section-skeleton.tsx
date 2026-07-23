'use client'

export function SectionSkeleton() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-6 animate-pulse">
          <div className="h-12 w-64 bg-secondary rounded-lg" />
          <div className="h-1 w-12 bg-accent rounded-full" />
          <div className="h-6 w-96 bg-secondary rounded-lg" />
          
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <div className="h-32 bg-secondary rounded-lg" />
              <div className="h-20 bg-secondary rounded-lg" />
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-secondary rounded-lg" />
              <div className="h-20 bg-secondary rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
