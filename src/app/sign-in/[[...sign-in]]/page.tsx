import { SignIn } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="bg-muted flex w-full flex-1 flex-col p-6 md:p-10">
      <div className="mb-4">
        <Link href="/auth">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to auth options
          </Button>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <SignIn 
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
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </div>
  )
}