'use client';

import { type ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart } from 'recharts';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

const chartData = [
  { month: 'January', mobile: 80 },
  { month: 'February', mobile: 200 },
  { month: 'March', mobile: 120 },
  { month: 'April', mobile: 190 },
  { month: 'May', mobile: 130 },
];

const result = () => {
  return (
    <section className='p-10 h-screen'>
      <ChartContainer config={chartConfig} className='h-3/4 w-full'>
        <BarChart accessibilityLayer data={chartData}>
          {/* <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} /> */}
          <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
        </BarChart>
      </ChartContainer>
    </section>
  );
};

export default result;
