import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Form.css'; // Asegúrate de tener un archivo CSS para estilos

const MySwal = withReactContent(Swal);

function Form() {
  const [form, setForm] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    switch (field) {
      case 'cedula':
        if (!/^\d{5,15}$/.test(value)) return 'Cédula inválida (solo números, mínimo 5 dígitos)';
        break;
      case 'nombre':
        if (value.trim().length < 2) return 'Debe tener al menos 2 caracteres.';
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) return 'Solo letras y espacios.';
        break;
      case 'apellido':
        if (value.trim().length < 2) return 'Debe tener al menos 2 caracteres.';
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) return 'Solo letras y espacios.';
        break;
      case 'email':
        if (!value.includes('@') || value.trim() === '') return 'Debe ser un email válido.';
        break;
      case 'password':
        if (value.length < 4) return 'Debe tener al menos 4 caracteres.';
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach(field => {
      const error = validate(field, form[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Guardar usuario en localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const exists = users.some(u => u.email === form.email || u.cedula === form.cedula);
      if (exists) {
        MySwal.fire({
          title: 'Error',
          text: 'Este correo o cédula ya está registrado.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        return;
      }
      users.push({
        cedula: form.cedula,
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        password: form.password
      });
      localStorage.setItem('users', JSON.stringify(users));
      MySwal.fire({
        title: '¡Registro exitoso!',
        text: 'Ya puedes iniciar sesión.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setForm({ cedula: '', nombre: '', apellido: '', email: '', password: '' });
    } else {
      MySwal.fire({
        title: 'Error',
        text: 'Por favor, corrige los errores en el formulario.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registro de usuario</h2>
      <label>
        Cédula:
        <input
          type="text"
          name="cedula"
          value={form.cedula}
          onChange={handleChange}
          required
        />
        {errors.cedula && <p className="error">{errors.cedula}</p>}
      </label>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
      </label>
      <label>
        Apellidos:
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          required
        />
        {errors.apellido && <p className="error">{errors.apellido}</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Form;
