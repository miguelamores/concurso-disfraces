import { getVotes } from '@/actions';
import ChartVotes from '@/components/ChartVotes';

const result = async () => {
  const votes = await getVotes();
  console.log(': ------ ', votes);
  return (
    <section className='p-10 h-[90dvh]'>
      <ChartVotes votes={votes} />
    </section>
  );
};

export default result;
