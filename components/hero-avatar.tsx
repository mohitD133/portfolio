'use client'


interface HeroAvatarProps {
  src?: string
  name: string
}

export function HeroAvatar({ src, name }: HeroAvatarProps) {
  const imageSrc = src || '/avatar-default.png'
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      {/* Rotating gradient ring */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 blur-2xl opacity-60" />

      {/* Ring */}
      <div className="absolute inset-0 rounded-full border border-primary/30" />

      {/* Avatar */}
      <div className="absolute inset-3 rounded-full overflow-hidden bg-surface border border-border shadow-2xl">
        {src ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 to-accent/10">
            <span className="text-7xl font-bold text-gradient">{initials}</span>
          </div>
        )}
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full glass border border-primary/30 text-sm font-semibold text-foreground shadow-lg">
        Open to work
      </div>
    </div>
  )
}
