'use client';

import { logout } from '@/actions';

const Logout = () => {
  const handleSubmit = async () => {
    await logout();
  };

  return (
    <form action={handleSubmit}>
      <button type='submit'>Cerrar sesión</button>
    </form>
  );
};

export default Logout;
