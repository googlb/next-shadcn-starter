'use client';

import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { useUIStore } from '@/lib/store/ui-store';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  const { isSidebarOpen } = useUIStore();

  return (
    <div className="flex h-screen overflow-hidden bg-muted/40">
      <Sidebar />
      <div
        className={cn(
          'flex flex-col flex-1 transition-all duration-300',
          isSidebarOpen ? 'ml-64' : 'ml-20'
        )}
      >
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
