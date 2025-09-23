'use client'

import { useTheme } from 'next-themes'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

// Generate mock data for the last 30 days
const data = Array.from({ length: 30 }, (_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (29 - i))
  return {
    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    users: Math.floor(Math.random() * 200) + 500, // Random users between 500 and 700
  }
})

const chartConfig = {
  users: {
    label: 'Users',
    theme: {
      light: 'oklch(0.65 0.18 210)', // New --chart-2 light
      dark: 'oklch(0.696 0.17 162.48)', // --chart-2 dark
    },
  },
} satisfies ChartConfig

export function DailyActiveUsersLineChart() {
  const { theme } = useTheme()
  const strokeColor = theme === 'dark' ? chartConfig.users.theme.dark : chartConfig.users.theme.light

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.split(' ')[1]}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="users"
          type="natural"
          stroke={strokeColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
