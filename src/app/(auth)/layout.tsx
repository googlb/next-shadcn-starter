// src/app/(auth)/layout.tsx
import { AuthLayout as AuthLayoutComponent } from '@/components/auth/auth-layout'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayoutComponent>{children}</AuthLayoutComponent>
}
