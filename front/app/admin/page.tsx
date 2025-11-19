'use client'
import {CustomBarChart} from '@/components/custom/BarChart'
import { useIsMobile } from '@/hooks/useMobile'
import { ChartConfig } from "@/components/ui/chart"
export default function Admin() {
  const isMobiile = useIsMobile()
  const chartData1 = [
    { month: "January", desktop: 128, mobile: 80 },
    { month: "February", desktop: 1023, mobile: 200 },
    { month: "March", desktop: 43, mobile: 382 },
    { month: "April", desktop: 328, mobile: 483 },
    { month: "May", desktop: 301, mobile: 384 },
    { month: "June", desktop: 283, mobile: 33},
  ]
  const chartData2 = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 205, mobile: 300 },
    { month: "March", desktop: 233, mobile: 120 },
    { month: "April", desktop: 76, mobile: 103 },
    { month: "May", desktop: 209, mobile: 120 },
    { month: "June", desktop: 535, mobile: 340 },
  ]
  const chartData3 = [
    { month: "January", desktop: 136, mobile: 80 },
    { month: "February", desktop: 314, mobile: 200 },
    { month: "March", desktop: 242, mobile: 115 },
    { month: "April", desktop: 80, mobile: 182 },
    { month: "May", desktop: 203, mobile: 130 },
    { month: "June", desktop: 205, mobile: 140 },
  ]
  const chartData4 = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

 return(
    <>
      <div className ={isMobiile?'flex flex-col' : 'grid grid-cols-2  gap-4 '}>
      <  CustomBarChart chartConfig={chartConfig} chartData={chartData1} dataKey="month"  />
      <  CustomBarChart chartConfig={chartConfig} chartData={chartData2} dataKey="month"  />
      <  CustomBarChart chartConfig={chartConfig} chartData={chartData3} dataKey="month"  />
      <  CustomBarChart chartConfig={chartConfig} chartData={chartData4} dataKey="month"  />
      </div>
    </>
 ) 
}
