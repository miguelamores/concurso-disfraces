import Person from '@/components/Person';
import data from '../../public/data.json';
import { getUserVote } from '@/actions';
import { auth, signOut } from '@/auth';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import { SessionProvider } from 'next-auth/react';

export default async function Home() {
  const session = await auth();
  const vote = await getUserVote(session?.user?.email);

  const userVoted = vote[0];

  return (
    <SessionProvider session={session}>
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
        <ul className='list-none gap-10 flex flex-col justify-center items-start'>
          {data.map(item => (
            <li key={item.id} className='relative'>
              <Person person={item} userVoted={userVoted} />
            </li>
          ))}
        </ul>
      </main>
    </SessionProvider>
  );
}
