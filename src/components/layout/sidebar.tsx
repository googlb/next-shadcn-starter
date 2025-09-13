'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/lib/store/ui-store'
import { LayoutGrid, Users } from 'lucide-react'

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  { name: 'Users', href: '/users', icon: Users },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { isSidebarOpen } = useUIStore()

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 hidden h-screen flex-col border-r bg-background transition-all duration-300 md:flex',
        isSidebarOpen ? 'w-64' : 'w-20'
      )}
    >
      <div className="flex h-14 items-center border-b px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
        >
          <span className="">Logo</span>
        </Link>
      </div>
      <nav className="flex flex-col space-y-2 p-4">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              pathname === link.href && 'text-primary bg-muted',
              !isSidebarOpen && 'justify-center'
            )}
          >
            <link.icon className="h-5 w-5" />
            <span className={cn('transition-opacity', !isSidebarOpen && 'opacity-0')}>
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
