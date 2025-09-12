import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
]);

const isClerkRoute = createRouteMatcher([
  "/auth/clerk(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Handle Clerk protected routes
  if (isClerkRoute(req)) {
    return NextResponse.next();
  }

  // Handle dashboard routes - check both Clerk and NextAuth
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    
    // If no Clerk user, redirect to auth choice page
    if (!userId) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};