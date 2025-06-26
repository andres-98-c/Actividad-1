import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../contac/Contact.css'; 

const MySwal = withReactContent(Swal);

function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: ''
  });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    switch (field) {
      case 'nombre':
      case 'apellido':
        if (value.length < 5 || value.length > 30) return 'Debe tener entre 5 y 30 caracteres.';
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) return 'No se permiten números ni símbolos.';
        break;
      case 'email':
        if (!value.includes('@')) return 'El email debe contener el carácter @.';
        break;
      case 'celular':
        if (value.length < 7 || value.length > 10) return 'Debe tener entre 7 y 10 dígitos.';
        if (!/^[0-9]+$/.test(value)) return 'Solo se permiten números.';
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
      MySwal.fire({
        title: '¡Gracias!',
        text: `Gracias, ${form.nombre}. Te contactaremos a ${form.email} o al número ${form.celular}.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setForm({ nombre: '', apellido: '', email: '', celular: '' });
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
    <form className="contact-form" onSubmit={handleSubmit}>
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
        Celular:
        <input
          type="tel"
          name="celular"
          value={form.celular}
          onChange={handleChange}
          required
        />
        {errors.celular && <p className="error">{errors.celular}</p>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;
