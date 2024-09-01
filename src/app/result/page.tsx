import { getVotes } from '@/actions';
import ChartVotes from '@/components/ChartVotes';

const chartData = [
  { month: 'January', mobile: 80 },
  { month: 'February', mobile: 200 },
  { month: 'March', mobile: 120 },
  { month: 'April', mobile: 190 },
  { month: 'May', mobile: 130 },
];

const result = async () => {
  const votes = await getVotes();
  console.log(': ------ ', votes);
  return (
    <section className='p-10 h-screen'>
      <ChartVotes votes={votes} />
    </section>
  );
};

export default result;
