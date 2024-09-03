'use client';
import { useSession } from 'next-auth/react';
import { addVote, insertFakeData } from '@/actions';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Person = ({
  person,
  userVoted,
}: {
  person: Person;
  userVoted: UserVoted | null;
}) => {
  const session = useSession();
  const [userAlreadyVoted, setUserAlreadyVoted] = useState(userVoted);

  const handleClick = async () => {
    // await insertFakeData();
    if (session.data?.user?.email == null) return;
    try {
      const res = await addVote(session.data?.user?.email, person.name);
      setUserAlreadyVoted(res[0]);
    } catch (error) {
      console.error('error: ', error);
      setUserAlreadyVoted(null);
    }
  };

  useEffect(() => {
    setUserAlreadyVoted(userVoted);
  }, [userVoted]);

  return (
    <form action={handleClick}>
      <button type='submit' disabled={!!userAlreadyVoted}>
        <p className='text-xl font-mono font-semibold'>
          {person.name} - {person.custom}
        </p>

        <picture className='relative block rounded-md overflow-hidden'>
          <Image
            width={250}
            height={250}
            className='h-auto w-screen'
            src={person.image}
            alt={`image of ${person.name}`}
          />
          {userAlreadyVoted?.voteId === person.name && session.data != null && (
            <p className='w-full font-stronger pointer-events-none z-50 absolute inset-0 text-center flex justify-center items-center text-5xl text-slate-100 bg-slate-700/80'>
              Votaste por: {person.name}
            </p>
          )}
        </picture>
      </button>
    </form>
  );
};

export default Person;
