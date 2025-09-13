'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/store/ui-store';
import {
  LayoutGrid,
  Users,
  Settings,
  ChevronDown,
  User,
  Shield,
  Palette,
} from 'lucide-react';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
  { name: 'Users', href: '/users', icon: Users },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    subLinks: [
      { name: 'Profile', href: '/settings/profile', icon: User },
      { name: 'Appearance', href: '/settings/appearance', icon: Palette },
      { name: 'Security', href: '/settings/security', icon: Shield },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen } = useUIStore();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    Settings: pathname.startsWith('/settings'),
  });

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 hidden h-screen flex-col border-r bg-background transition-all duration-300 md:flex',
        isSidebarOpen ? 'w-64' : 'w-20'
      )}
    >
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="">Logo</span>
        </Link>
      </div>
      <nav className="flex flex-col space-y-1 p-2">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          if (link.subLinks && isSidebarOpen) {
            return (
              <Collapsible
                key={link.name}
                open={openMenus[link.name]}
                onOpenChange={() => toggleMenu(link.name)}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <button
                    className={cn(
                      'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                      isActive && 'text-primary'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openMenus[link.name] && 'rotate-180'
                      )}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 mt-1 space-y-1 border-l pl-4">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                        pathname === subLink.href && 'text-primary bg-muted'
                      )}
                    >
                      <subLink.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{subLink.name}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname === link.href && 'text-primary bg-muted',
                !isSidebarOpen && 'justify-center'
              )}
            >
              <link.icon className="h-4 w-4" />
              <span
                className={cn(
                  'text-sm font-medium transition-opacity',
                  !isSidebarOpen && 'hidden'
                )}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
