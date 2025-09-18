'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { Task, Prisma } from '@prisma/client';
import { getTasksSchema } from '@/lib/schemas/task.schemas';
import { revalidatePath } from 'next/cache';

type GetTasksInput = z.infer<typeof getTasksSchema>;

/**
 * Fetches tasks from the database with pagination, sorting, and filtering.
 * @param input - The validated input for fetching tasks.
 * @returns An object containing the tasks for the current page and the total page count.
 */
export async function getTasks(input: GetTasksInput) {
  const { page, pageSize, sort, filter } = getTasksSchema.parse(input);

  const [sortField, sortOrder] = sort ? sort.split('.') : [];

  const where: Prisma.TaskWhereInput = filter
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

export async function deleteTask(id: string) {
  const taskId = z.string().cuid().parse(id);

  try {
    await db.task.delete({
      where: {
        id: taskId,
      },
    });

    revalidatePath('/data-tables');

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete task.' };
  }
}
