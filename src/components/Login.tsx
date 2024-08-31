'use client';

import { login } from '@/actions';

const Login = () => {
  const handleSubmit = async () => {
    await login();
  };

  return (
    <form action={handleSubmit}>
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
};

export default Login;
