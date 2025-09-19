import { z } from 'zod';

// Define the schema for fetching tasks
export const getTasksSchema = z.object({
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
  sort: z.string().optional(),
  // A generic string for keyword search
  filter: z.string().optional(),
});

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  label: z.enum(['BUG', 'FEATURE', 'DOCUMENTATION']).optional(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'DONE', 'CANCELED']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
});

export type CreateTaskValues = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required.').optional(),
  label: z.string().optional(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'DONE', 'CANCELED']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
});

export type UpdateTaskValues = z.infer<typeof updateTaskSchema>;

export const deleteTaskSchema = z.object({
  id: z.string(),
});
