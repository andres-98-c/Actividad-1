import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

const LoginPage = () => (
  <div className="login-overlay">
    <div className="login-modal">
      <h1>Iniciar sesión</h1>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
