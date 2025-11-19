"use client"

import {Bar, BarChart,CartesianGrid,XAxis} from "recharts"

import { ChartConfig,ChartTooltip,ChartTooltipContent, ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
interface PropType  {
  chartConfig: ChartConfig;
  chartData: any[];
  dataKey:string;

}
export function CustomBarChart(prop:PropType) {
  const {chartConfig,chartData,dataKey} = prop;
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid/>
        <XAxis
          dataKey={dataKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
            <ChartLegend content={<ChartLegendContent />} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

