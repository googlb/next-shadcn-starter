import { SignUp } from '@clerk/nextjs'
import { ChartLine, Clock, ShieldCheck, Sparkles } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className=" grid flex-1 lg:grid-cols-2 rounded-lg ">
      <div className="hidden flex-1 items-center justify-end p-6 md:p-10 lg:flex">
        <ul className="max-w-sm space-y-8">
          <li>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <p className="font-semibold">Modern Tech Stack</p>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Built with Next.js 15, React 19, TypeScript, and Tailwind CSS for optimal performance.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <ChartLine className="size-4" />
              <p className="font-semibold">Full-Stack Ready</p>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Includes Prisma ORM, Supabase integration, and comprehensive authentication system.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4" />
              <p className="font-semibold">Production Ready</p>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Enterprise-grade security with Clerk authentication and best practices built-in.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <p className="font-semibold">Beautiful UI</p>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Powered by shadcn/ui components with dark mode support and responsive design.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 md:p-10 lg:justify-start">
        <SignUp
          appearance={{
            elements: {
              // --- 保持之前的设置 ---
              card: 'shadow-none border-none bg-transparent',
              logoBox: 'mx-auto mb-8', // 增加了下边距 (margin-bottom) 来拉开距离

              // 1. 让社交登录按钮垂直排列
              // socialButtons: 'flex flex-col gap-y-4', // 使用 flex-col 并增加垂直间距

              // 2. 调整社交登录按钮的大小和样式
              socialButtonsBlockButton: {
                borderColor: '#E5E7EB',
                '&:hover': {
                  backgroundColor: '#F9FAFB',
                },
                paddingTop: '0.875rem', // 14px
                paddingBottom: '0.875rem', // 14px
              },

              // 3. 调整 "or" 分隔线的样式
              dividerRow: 'my-6', // 增加垂直外边距

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
              footerAction: 'mx-auto',
              footerActionText: 'text-gray-500',
              footerActionLink: 'text-black font-medium hover:text-gray-800',
            },
          }}
        />
      </div>
    </div>
  )
}
