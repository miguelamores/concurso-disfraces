'use client';

import { type ChartConfig, ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartConfig = {
  voteIdCount: {
    label: 'voteIdCount',
    color: '#fcd34d',
  },
} satisfies ChartConfig;

const ChartVotes = ({
  votes,
  totalVotes,
}: {
  votes: UserVoted[];
  totalVotes: number;
}) => {
  console.log('votes: ', totalVotes);
  if (!votes || votes.length === 0) {
    return (
      <div className='flex items-center justify-center font-stronger text-4xl'>
        No se encontraron votos.
      </div>
    );
  }

  return (
    <>
      <ChartContainer
        config={chartConfig}
        className='min-h-[200px] h-full w-full min-w-full'
      >
        <BarChart accessibilityLayer data={votes}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='voteId'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            angle={-10}
            className='z-40'
            tickFormatter={value => value.slice(0, 5)}
          />
          <YAxis
            dataKey={'voteIdCount'}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={value => `${value} votos`}
          />
          <Bar
            dataKey='voteIdCount'
            fill='var(--color-voteIdCount)'
            radius={4}
          />
        </BarChart>
      </ChartContainer>
      <p className='flex items-center justify-center font-stronger text-4xl'>
        Votos totales: {totalVotes}
      </p>
    </>
  );
};

export default ChartVotes;
