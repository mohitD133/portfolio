'use client'

import { ThemeProvider } from '@/lib/theme-context'
import { Header } from '@/components/header'
import { ReactNode } from 'react'
import { useEffect, useState } from 'react'

export function RootClient({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider>
      {mounted && <Header />}
      <main>{children}</main>
    </ThemeProvider>
  )
}
