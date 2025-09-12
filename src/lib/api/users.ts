import { User } from '@/lib/types';

const mockUsers: User[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin', createdAt: new Date() },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'user', createdAt: new Date() },
  { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'user', createdAt: new Date() }
];

export const getUsers = async (): Promise<User[]> => {
  console.log('Fetching users...');
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockUsers;
};

export const getUserById = async (id: string): Promise<User | null> => {
  console.log(`Fetching user with id ${id}...`);
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = mockUsers.find((u) => u.id === id);
  return user || null;
};