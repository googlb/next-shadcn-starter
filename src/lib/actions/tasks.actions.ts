'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { Task } from '@prisma/client';

// Define the schema for fetching tasks
export const getTasksSchema = z.object({
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
  sort: z.string().optional(),
  // A generic string for keyword search
  filter: z.string().optional(),
});

type GetTasksInput = z.infer<typeof getTasksSchema>;

/**
 * Fetches tasks from the database with pagination, sorting, and filtering.
 * @param input - The validated input for fetching tasks.
 * @returns An object containing the tasks for the current page and the total page count.
 */
export async function getTasks(input: GetTasksInput) {
  const { page, pageSize, sort, filter } = getTasksSchema.parse(input);

  const [sortField, sortOrder] = sort?.split('.') ?? [];

  const where = filter
    ? {
        OR: [
          { title: { contains: filter, mode: 'insensitive' } },
          { code: { contains: filter, mode: 'insensitive' } },
        ],
      }
    : {};

  const [tasks, totalTasks] = await db.$transaction([
    db.task.findMany({
      where,
      orderBy: {
        [sortField ?? 'createdAt']: sortOrder ?? 'desc',
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    db.task.count({ where }),
  ]);

  return {
    tasks,
    pageCount: Math.ceil(totalTasks / pageSize),
  };
}

// Placeholder for a more specific task type if needed later
export type TaskWithDetails = Task;
