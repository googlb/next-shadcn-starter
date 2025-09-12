import { db } from "@/lib/db";
import { hash } from "bcryptjs";

export async function createUser(email: string, password_hash: string) {
  const user = await db.user.create({
    data: {
      email,
      password: password_hash,
    },
  });

  return user;
}
