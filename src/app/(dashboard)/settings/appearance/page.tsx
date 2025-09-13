// src/app/(dashboard)/settings/appearance/page.tsx
'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTheme } from 'next-themes' // 用于主题切换

export default function AppearancePage() {
  const { setTheme } = useTheme()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the app. Automatically switch between day and night themes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="font">Font</Label>
          <Select defaultValue="inter">
            <SelectTrigger id="font">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inter">Inter</SelectItem>
              <SelectItem value="geist">Geist</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Set the font you want to use in the dashboard.
          </p>
        </div>
        <div className="space-y-2">
          <Label>Theme</Label>
          <p className="text-sm text-muted-foreground">Select the theme for the dashboard.</p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div onClick={() => setTheme('light')}>
              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent cursor-pointer">
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-4/5 rounded-lg bg-[#ecedef]" />
                    <div className="h-2 w-full rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">Light</span>
            </div>
            <div onClick={() => setTheme('dark')}>
              <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:border-accent cursor-pointer">
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-2 w-4/5 rounded-lg bg-slate-400" />
                    <div className="h-2 w-full rounded-lg bg-slate-400" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">Dark</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Update preferences</Button>
      </CardFooter>
    </Card>
  )
}
