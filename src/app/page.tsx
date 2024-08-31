import Person from '@/components/Person';
import data from '../../public/data.json';
import { getData } from '@/actions';
import { db } from '@/db/drizzle';
import { votesTable } from '@/db/schema';

export default async function Home() {
  // const result = await getData();
  const result = await db.select().from(votesTable).all();
  console.log('result in page: ', result);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4'>
      <h1 className='mb-10 text-4xl text-center'>Concurso de disfraces</h1>
      <p>{JSON.stringify(result)}</p>
      <ul className='list-none gap-10 flex flex-col justify-center items-start'>
        {data.map(item => (
          <li key={item.id}>
            <Person person={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
