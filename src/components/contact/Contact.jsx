import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Contact.css';

const MySwal = withReactContent(Swal);

function Contact() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');

  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorCelular, setErrorCelular] = useState('');

  const validateNombreApellido = (value) => {
    if (value.length < 5 || value.length > 30) {
      return 'Debe tener entre 5 y 30 caracteres.';
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(value)) {
      return 'No se permiten números ni símbolos.';
    }
    return '';
  };

  const validateCelular = (value) => {
    if (value.length < 7 || value.length > 10) {
      return 'Debe tener entre 7 y 10 dígitos.';
    }
    if (!/^[0-9]+$/.test(value)) {
      return 'Solo se permiten números.';
    }
    return '';
  };

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      return 'El email debe contener el carácter @.';
    }
    return '';
  };

  const handleNombreChange = (e) => {
    const value = e.target.value;
    setNombre(value);
    setErrorNombre(validateNombreApellido(value));
  };

  const handleApellidoChange = (e) => {
    const value = e.target.value;
    setApellido(value);
    setErrorApellido(validateNombreApellido(value));
  };

  const handleCelularChange = (e) => {
    const value = e.target.value;
    setCelular(value);
    setErrorCelular(validateCelular(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrorEmail(validateEmail(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorNombre && !errorApellido && !errorEmail && !errorCelular) {
      MySwal.fire({
        title: '¡Gracias!',
        text: `Gracias, ${nombre}. Te contactaremos a ${email} o al número ${celular}.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
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
          value={nombre}
          onChange={handleNombreChange}
          required
        />
        {errorNombre && <p className="error">{errorNombre}</p>}
      </label>
      <label>
        Apellidos:
        <input
          type="text"
          value={apellido}
          onChange={handleApellidoChange}
          required
        />
        {errorApellido && <p className="error">{errorApellido}</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errorEmail && <p className="error">{errorEmail}</p>}
      </label>
      <label>
        Celular:
        <input
          type="tel"
          value={celular}
          onChange={handleCelularChange}
          required
        />
        {errorCelular && <p className="error">{errorCelular}</p>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;
