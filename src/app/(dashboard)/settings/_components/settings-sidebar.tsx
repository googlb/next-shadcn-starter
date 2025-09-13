// src/app/(dashboard)/settings/_components/settings-sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { User, Palette, Shield } from 'lucide-react' // 引入新图标

// 定义我们的设置页面链接
const navLinks = [
  { href: '/settings/profile', label: 'Profile', icon: User },
  { href: '/settings/appearance', label: 'Appearance', icon: Palette },
  { href: '/settings/security', label: 'Security', icon: Shield },
]

export function SettingsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 px-2 lg:px-0">
      {navLinks.map(link => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              buttonVariants({ variant: isActive ? 'secondary' : 'ghost' }),
              'justify-start'
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
