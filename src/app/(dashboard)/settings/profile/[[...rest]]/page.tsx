'use client'

import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {
  return (
    <UserProfile
      path="/settings/profile"
      appearance={{
        variables: {
          colorPrimary: 'hsl(var(--primary))',
          colorText: 'hsl(var(--foreground))',
          colorBackground: 'hsl(var(--card))', // <-- 背景使用 card 颜色
          colorInputBackground: 'hsl(var(--input))',
          borderRadius: 'var(--radius)',
        },
        elements: {
          rootBox: 'w-full',

          card: 'shadow-none bg-transparent border-none',

          navbar: {
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
            boxShadow: 'none',
            width: '250px', // 固定宽度
          },
          navbarButton: {
            '&.cl-active': {
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
            },
            '&:hover': {
              backgroundColor: 'hsl(var(--accent))',
            },
          },

          // 右侧内容面板
          profilePage: {
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
            backgroundColor: 'hsl(var(--card))',
            boxShadow: 'none',
            width: '100%',
          },
        },
      }}
    />
  )
}

export default UserProfilePage
