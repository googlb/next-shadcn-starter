// src/app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'
import { AuthLayout } from '@/components/auth/auth-layout'

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignIn
        appearance={{
          elements: {
            // --- 保持之前的设置 ---
            card: 'shadow-none border-none bg-transparent',
            logoBox: 'mx-auto mb-6', // 增加了下边距 (margin-bottom) 来拉开距离

            // --- 以下是新的、解决布局问题的关键设置 ---

            // 1. 让社交登录按钮垂直排列
            socialButtons: 'flex flex-col gap-y-4', // 使用 flex-col 并增加垂直间距

            // 2. 调整社交登录按钮的大小和样式
            socialButtonsBlockButton: {
              borderColor: '#E5E7EB',
              '&:hover': {
                backgroundColor: '#F9FAFB',
              },
              // 增加垂直内边距，让按钮看起来更大气
              paddingTop: '0.875rem', // 14px
              paddingBottom: '0.875rem', // 14px
            },

            // 3. 调整 "or" 分隔线的样式
            dividerRow: 'my-2', // 增加垂直外边距

            // 4. 调整输入框和按钮的大小
            formFieldInput: {
              // 增加垂直内边距
              paddingTop: '0.875rem',
              paddingBottom: '0.875rem',
            },
            formButtonPrimary: {
              // 增加垂直内边距
              paddingTop: '0.875rem',
              paddingBottom: '0.875rem',
              // 让按钮内的文字和图标有间距
              gap: '0.5rem',
            },

            // --- 保持之前的页脚设置 ---
            footer: 'mt-8', // 增加上边距
            footerAction: 'mx-auto',
            footerActionText: 'text-gray-500',
            footerActionLink: 'text-black font-medium hover:text-gray-800',
          },
        }}
      />
    </AuthLayout>
  )
}
