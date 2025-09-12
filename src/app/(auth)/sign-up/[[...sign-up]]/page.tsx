import { SignUp } from '@clerk/nextjs'
import { ChartLine, Clock, ShieldCheck, Sparkles } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="bg-muted grid flex-1 lg:grid-cols-2">
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
        <SignUp />
      </div>
    </div>
  )
}
