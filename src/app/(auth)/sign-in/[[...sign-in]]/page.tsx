// src/app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'
import { AuthLayout } from '@/components/auth/auth-layout'

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn
        appearance={{
          // 在这里进行精细的样式覆盖
          elements: {
            // 将整个卡片设置为无边框、无阴影、背景透明
            // 因为我们的 AuthLayout 已经提供了背景
            card: 'shadow-none border-none bg-transparent',

            // 确保 Logo 在卡片外部上方
            logoBox: 'mx-auto',

            // 让社交登录按钮看起来更像 Vercel 的样式
            socialButtonsBlockButton: {
              borderColor: '#E5E7EB', // 一个浅灰色边框
              '&:hover': {
                backgroundColor: '#F9FAFB', // 一个非常浅的悬停背景色
              },
            },

            // 分隔线 "OR" 的样式
            dividerLine: 'bg-gray-200',
            dividerText: 'text-gray-500',

            // "Don't have an account?" 部分的样式
            footerAction: 'mx-auto',
            footerActionText: 'text-gray-500',
            footerActionLink: 'text-black font-medium hover:text-gray-800',
          },
        }}
      />
    </AuthLayout>
  )
}
