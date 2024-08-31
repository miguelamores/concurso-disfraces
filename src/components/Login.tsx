import { signIn } from '@/auth';

const Login = () => {
  const handleSubmit = async () => {
    'use server';
    await signIn();
  };

  return (
    <form action={handleSubmit}>
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
};

export default Login;
