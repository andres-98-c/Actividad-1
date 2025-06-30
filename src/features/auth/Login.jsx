import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './slices/authSlice'; 

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { name: 'Andrés', email: 'test@example.com' };
    dispatch(login(user));
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
