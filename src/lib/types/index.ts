export type User = {
  id: string;
  name: string | null;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
};