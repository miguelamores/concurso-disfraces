'use client';
import { useSession } from 'next-auth/react';
import { addVote } from '@/actions';
import { useState } from 'react';

const Person = ({
  person,
  userVoted,
}: {
  person: Person;
  userVoted: UserVoted;
}) => {
  const session = useSession();
  const [userAlreadyVoted, setUserAlreadyVoted] = useState(userVoted);

  const handleClick = async () => {
    if (session.data?.user?.email == null) return;
    try {
      const res = await addVote(session.data?.user?.email, person.name);
      setUserAlreadyVoted(res[0]);
    } catch (error) {
      console.error('error: ', error);
    }
  };

  return (
    <form action={handleClick}>
      <button type='submit' disabled={!!userVoted}>
        <p className='text-xl'>
          {person.name} - {person.custom}
        </p>

        <img
          className='h-auto w-full'
          src={person.image}
          alt={`image of ${person.name}`}
        />
      </button>
      {userAlreadyVoted?.voteId === person.name && (
        <p className='pointer-events-none z-50 absolute inset-0 text-center flex justify-center items-center text-5xl text-slate-100 bg-slate-700/80'>
          Votaste por: John Doe
        </p>
      )}
    </form>
  );
};

export default Person;
