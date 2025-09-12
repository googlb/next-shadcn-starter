'use client';

import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
