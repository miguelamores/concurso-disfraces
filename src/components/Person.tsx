'use client';

const Person = ({ person }: { person: Person }) => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button onClick={handleClick}>
      <p className='text-xl'>
        {person.name} - {person.custom}
      </p>

      <img
        className='h-auto w-full'
        src={person.image}
        alt={`image of ${person.name}`}
      />
    </button>
  );
};

export default Person;
