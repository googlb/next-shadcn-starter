import { getTasks } from '@/lib/actions/tasks.actions'
import { getTasksSchema } from '@/lib/schemas/task.schemas'
import { DataTable } from '@/components/data-table/data-table'
import { columns } from './_components/columns'

interface TasksPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
  const query = await searchParams;
  const search = getTasksSchema.parse(query);
  const { tasks, pageCount } = await getTasks(search)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <DataTable
        columns={columns}
        data={tasks}
        pageCount={pageCount}
      />
    </div>
  )
}
