import Person from '@/components/Person';
import data from '../../public/data.json';
import { getUserVote } from '@/actions';
import { auth } from '@/auth';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import { SessionProvider } from 'next-auth/react';

export default async function Home() {
  const session = await auth();
  const vote = await getUserVote(session?.user?.email);

  const [userVoted = null] = vote ?? [];

  return (
    <SessionProvider session={session}>
      <main className='flex min-h-screen flex-col items-center justify-between px-4 relative z-20 overflow-hidden'>
        <section className='z-20 flex flex-col items-center'>
          <h1 className='mb-10 text-7xl text-center font-stronger text-amber-300'>
            Vota al mejor disfraz
          </h1>
          {session?.user ? (
            <>
              <div className='flex items-center justify-center gap-4'>
                {session.user.image && (
                  <img
                    className='rounded-full w-12 h-12'
                    src={session.user.image}
                    alt={`Avatar de ${session.user.name}`}
                  />
                )}
                <p className='text-2xl font-mono text-center'>
                  Hola, {session.user.name}
                </p>
              </div>
              <Logout />
              <p className='font-mono mb-4 text-center'>
                A continuación selecciona el mejor disfraz:
              </p>
            </>
          ) : (
            <Login />
          )}
          <ul className='list-none gap-10 flex flex-col justify-center items-start'>
            {data.map(item => (
              <li key={item.id}>
                <Person person={item} userVoted={userVoted} />
              </li>
            ))}
          </ul>
        </section>
        <video
          autoPlay
          loop
          muted
          className='top-0 fixed -z-10 w-auto min-w-full h-screen max-w-none bg-cover opacity-20'
        >
          <source src='/vide-bg.mp4' type='video/mp4' />
        </video>
      </main>
    </SessionProvider>
  );
}
