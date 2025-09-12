import { SignUp } from '@clerk/nextjs'
import { ChartLine, Clock, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="bg-muted flex flex-1 flex-col lg:grid lg:grid-cols-2">
      <div className="lg:hidden p-6">
        <Link href="/auth">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to auth options
          </Button>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-end p-6 md:p-10 lg:flex">
        <div className="absolute top-6 left-6">
          <Link href="/auth">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to auth options
            </Button>
          </Link>
        </div>
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
              formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
              card: 'bg-background',
              headerTitle: 'text-foreground',
              headerSubtitle: 'text-muted-foreground',
              socialButtonsBlockButton: 'bg-background border border-input hover:bg-accent hover:text-accent-foreground',
              formFieldInput: 'bg-background border border-input',
              footerActionLink: 'text-primary hover:text-primary/90'
            }
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </div>
  )
}
