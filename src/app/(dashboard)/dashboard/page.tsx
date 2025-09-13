'use client'

import { Overview } from '@/components/charts/overview'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>+20.1% from last month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
            <CardDescription>+180.1% from last month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2350</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>+19% from last month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Now</CardTitle>
            <CardDescription>+573 since last hour</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
