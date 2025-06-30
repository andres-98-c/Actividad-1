import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      if (!form.email || !form.password) {
        setError('Completa todos los campos');
        return;
      }

      // Obtener usuarios registrados de localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (!user) {
        setError('Usuario o contraseña incorrectos, o no registrado');
        MySwal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos, o no registrado',
        });
        return;
      }

      // Guardar sesión en localStorage
      localStorage.setItem('session', JSON.stringify({ email: user.email }));
      window.dispatchEvent(new Event('custom-session'));
      
      MySwal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: `Bienvenido, ${user.email}`,
      });
      // window.location.href = '/'; // Descomenta si quieres redirigir al home
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar sesión'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
