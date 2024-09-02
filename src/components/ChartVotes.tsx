'use client';

import { type ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartConfig = {
  voteIdCount: {
    label: 'voteIdCount',
    color: '#fcd34d',
  },
} satisfies ChartConfig;

const ChartVotes = ({ votes }: { votes: UserVoted[] }) => {
  console.log('votes: ', votes);
  if (!votes || votes.length === 0) {
    return <div>No se encontraron votos.</div>;
  }

  return (
    <ChartContainer
      config={chartConfig}
      className='min-h-[200px] h-full w-full min-w-full'
    >
      <BarChart accessibilityLayer data={votes}>
        <CartesianGrid vertical={false} x1={2} />
        <XAxis
          dataKey='voteId'
          tickLine={false}
          tickMargin={20}
          axisLine={false}
          className='text-neutral-100'
          // tickFormatter={value => value}
        />
        <YAxis
          dataKey={'voteIdCount'}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={value => `${value} votos`}
        />
        <Bar dataKey='voteIdCount' fill='var(--color-voteIdCount)' radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartVotes;
