import React, { useState } from 'react';

function Contact() {
  // Usamos useState para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Función que actualiza los datos al escribir en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,              // copiamos lo que ya tiene
      [e.target.name]: e.target.value  // actualizamos solo el campo que cambia
    });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();  // evita que la página se recargue

    // Aquí podrías enviar los datos a un servidor o mostrar un mensaje
    alert(`Gracias, ${formData.name}. Tu mensaje ha sido enviado.`);

    // Limpiar el formulario después de enviar
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>

        <form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: '600px'}}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="4"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
