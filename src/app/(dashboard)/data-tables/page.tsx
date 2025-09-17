
import { getTasks, getTasksSchema } from "@/lib/actions/tasks.actions";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

interface TasksPageProps {
  searchParams: unknown;
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
  const search = getTasksSchema.parse(searchParams);
  const { tasks, pageCount } = await getTasks(search);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <DataTable columns={columns} data={tasks} pageCount={pageCount} />
    </div>
  );
}
