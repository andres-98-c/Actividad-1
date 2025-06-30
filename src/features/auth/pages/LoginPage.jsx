import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirige al home, cambia la ruta si lo deseas
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={handleClose}>✖</button>
        <h1>Iniciar sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
