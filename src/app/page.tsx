import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  // Check both Clerk and NextAuth sessions
  const { userId } = await auth();
  const session = await getServerSession(authOptions);

  if (session || userId) {
    redirect("/dashboard");
  } else {
    redirect("/auth");
  }
}
