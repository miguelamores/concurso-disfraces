'use client';

import { addVote, getData } from '@/actions';

const Person = ({ person }: { person: Person }) => {
  const handleClick = async () => {
    await getData();
    // const res = await addVote('migue', 'Jane Smith');
    // console.log('res: ', res);
  };

  return (
    <form action={handleClick}>
      <button type='submit'>
        <p className='text-xl'>
          {person.name} - {person.custom}
        </p>

        <img
          className='h-auto w-full'
          src={person.image}
          alt={`image of ${person.name}`}
        />
      </button>
    </form>
  );
};

export default Person;
