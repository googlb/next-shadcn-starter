// src/components/auth/AuthLayout.tsx

'use client'

import React from 'react'
import ColourfulText from '@/components/ui/colourful-text'

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-slate-950">
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative z-10 flex w-full  flex-col items-center">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Next Shadcn <ColourfulText text="Starter" />
            </h1>
            <p className="mt-4 text-sm text-neutral-300">
              The ultimate starter kit for modern web applications.
            </p>
          </div>

          {children}
        </div>
      </div>
    </main>
  )
}
