import { getTasks } from '@/lib/actions/tasks.actions'
import { getTasksSchema } from '@/lib/schemas/task.schemas'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'

interface TasksPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
  const { page, pageSize, sort, filter } = searchParams
  const search = getTasksSchema.parse({ page, pageSize, sort, filter })
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
