import Person from '@/components/Person';
import data from '../../public/data.json';
import { getData } from '@/actions';
import { db } from '@/db/drizzle';
import { votesTable } from '@/db/schema';
import { auth, signOut } from '@/auth';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

export default async function Home() {
  // const result = await getData();
  const result = await db.select().from(votesTable).all();

  const session = await auth();
  console.log('result in page: ', result);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4'>
      <h1 className='mb-10 text-4xl text-center'>Concurso de disfraces</h1>
      {session?.user ? (
        <>
          {session.user.image && (
            <img
              className='rounded-full w-12 h-12'
              src={session.user.image}
              alt={`Avatar de ${session.user.name}`}
            />
          )}
          <p className='mb-10'>Hola, {session.user.name}</p>
          <Logout />
        </>
      ) : (
        <Login />
      )}
      {/* <p>{JSON.stringify(result)}</p> */}
      <ul className='list-none gap-10 flex flex-col justify-center items-start'>
        {data.map(item => (
          <li key={item.id} className='relative'>
            <Person person={item} />
            {/* <p className='pointer-events-none z-50 absolute inset-0 flex justify-center items-center text-5xl text-slate-100 bg-slate-700/80'>
              Votaste por: John Doe
            </p> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
