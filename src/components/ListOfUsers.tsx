'use client';

import React, { useState } from 'react';
import Person from './Person';

const ListOfUsers = ({
  data,
  userVoted,
}: {
  data: Person[];
  userVoted: UserVoted | null;
}) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.custom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className='flex items-center justify-between gap-2 font-mono'>
        Buscar:{' '}
        <input
          type='search'
          className='rounded-sm text-black px-4 py-2 w-full'
          onChange={handleSearch}
        />
      </div>
      <ul className='list-none gap-10 flex flex-col justify-center items-start mt-10'>
        {filteredData.map(item => (
          <li key={item.id}>
            <Person person={item} userVoted={userVoted} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListOfUsers;
