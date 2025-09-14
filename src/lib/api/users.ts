import { db } from "@/lib/db";

export async function createUser(email: string, password_hash: string) {
  const user = await db.user.create({
    data: {
      email,
      password: password_hash,
    },
  });

  return user;
}

export async function getUsers() {
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      // Don't return password or sensitive fields
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return users;
}
