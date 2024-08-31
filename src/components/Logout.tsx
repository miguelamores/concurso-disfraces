'use client';

import { logout } from '@/actions';

const Logout = () => {
  const handleSubmit = async () => {
    await logout();
  };

  return (
    <form action={handleSubmit}>
      <button type='submit' className='text-amber-400 mb-10 font-mono'>
        Cerrar sesión
      </button>
    </form>
  );
};

export default Logout;
