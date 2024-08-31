import { signOut } from '@/auth';

const Logout = () => {
  const handleSubmit = async () => {
    'use server';
    await signOut();
  };

  return (
    <form action={handleSubmit}>
      <button type='submit'>Cerrar sesión</button>
    </form>
  );
};

export default Logout;
