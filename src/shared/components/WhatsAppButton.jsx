import React from 'react';
import '../style/style.css';
import whatsappIcon from '../../assets/imagenes/whatsapp.webp'; // Importa la imagen

function WhatsAppButton() {
  const phoneNumber = '573001234567'; // Número con código de país
  const message = 'Hola, quiero más información sobre sus productos.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={whatsappIcon} // Usa la variable importada
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
}

export default WhatsAppButton;
