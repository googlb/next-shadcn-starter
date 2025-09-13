'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUIStore } from '@/lib/store/ui-store';
import Breadcrumbs from './breadcrumbs';
import { ThemeToggle } from '../theme/theme-toggle';
import { UserNav } from './user-nav';

export default function Header() {
  const { toggleSidebar } = useUIStore();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Button
        size="icon"
        variant="outline"
        className="md:hidden" // Visible on mobile
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      
      <div className="hidden md:flex">
        <Button
          size="icon"
          variant="outline"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      <Breadcrumbs />

      <div className="relative ml-auto flex items-center gap-2 md:grow-0">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}
