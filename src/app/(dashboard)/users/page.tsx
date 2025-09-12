import { getUsers } from '@/lib/api/users'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>A list of users from our system.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {users.map(user => (
            <li
              key={user.id}
              className="py-2 border-b"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
