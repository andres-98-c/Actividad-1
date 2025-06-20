import React, { useState } from 'react';
import './Card.css';

function ProductQuantity({ foto, nombre, precio }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card">
      <img src={foto} alt={nombre} className="card-image" />
      <div className="card-content">
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <button className="comprar-btn">Agregar al carrito</button>
        <div className="quantity-controls">
          <button type="button" onClick={decreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductQuantity;
