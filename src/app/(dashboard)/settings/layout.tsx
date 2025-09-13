// src/app/(dashboard)/settings/layout.tsx
import React from 'react'
import { SettingsSidebar } from './_components/settings-sidebar'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and e-mail preferences.
        </p>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SettingsSidebar />
        </aside>
        <main className="flex-1 lg:max-w-3xl">{children}</main>
      </div>
    </div>
  )
}
