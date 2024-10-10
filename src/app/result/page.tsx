import { getTotalVotesCount, getVotes } from '@/actions';
import ChartVotes from '@/components/ChartVotes';
import { revalidatePath } from 'next/cache';

const result = async () => {
  revalidatePath('/result');
  const votes = await getVotes();
  const [totalVotes] = (await getTotalVotesCount()) ?? [];
  const { total = 0 } = totalVotes ?? {};
  console.log(': ------ ', totalVotes);
  return (
    <section className='p-10 h-[90dvh]'>
      <ChartVotes votes={votes} totalVotes={Number(total)} />
    </section>
  );
};

export default result;
