import { z } from 'zod';

// Define the schema for fetching tasks
export const getTasksSchema = z.object({
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
  sort: z.string().optional(),
  // A generic string for keyword search
  filter: z.string().optional(),
});
