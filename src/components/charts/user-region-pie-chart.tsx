'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Label, Pie, PieChart, Cell } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { region: 'East', value: 400 },
  { region: 'South', value: 300 },
  { region: 'West', value: 300 },
  { region: 'North', value: 200 },
]

const chartConfig = {
  value: { label: 'Value' },
  East: {
    label: 'East',
    theme: {
      light: 'oklch(0.6 0.15 250)', // New --chart-1 light
      dark: 'oklch(0.488 0.243 264.376)', // --chart-1 dark
    },
  },
  South: {
    label: 'South',
    theme: {
      light: 'oklch(0.65 0.18 210)', // New --chart-2 light
      dark: 'oklch(0.696 0.17 162.48)', // --chart-2 dark
    },
  },
  West: {
    label: 'West',
    theme: {
      light: 'oklch(0.7 0.2 140)', // New --chart-3 light
      dark: 'oklch(0.769 0.188 70.08)', // --chart-3 dark
    },
  },
  North: {
    label: 'North',
    theme: {
      light: 'oklch(0.75 0.15 280)', // New --chart-4 light
      dark: 'oklch(0.627 0.265 303.9)', // --chart-4 dark
    },
  },
} satisfies ChartConfig

export function UserRegionPieChart() {
  const { theme } = useTheme()
  const colors = {
    East: theme === 'dark' ? chartConfig.East.theme.dark : chartConfig.East.theme.light,
    South: theme === 'dark' ? chartConfig.South.theme.dark : chartConfig.South.theme.light,
    West: theme === 'dark' ? chartConfig.West.theme.dark : chartConfig.West.theme.light,
    North: theme === 'dark' ? chartConfig.North.theme.dark : chartConfig.North.theme.light,
  }

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[300px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie data={data} dataKey="value" nameKey="region" innerRadius={60} strokeWidth={5}>
          {data.map((entry) => (
            <Cell key={entry.region} fill={colors[entry.region as keyof typeof colors]} />
          ))}
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {data
                        .reduce((acc, curr) => acc + curr.value, 0)
                        .toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="region" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  )
}