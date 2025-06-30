import React from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart, updateQuantity, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <div className="cart-modal">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-img" />
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price.toLocaleString()}</p>
                <div className="cart-qty">
                  <button
                    onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                    disabled={item.cantidad <= 1}
                  >-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => updateQuantity(item.id, item.cantidad + 1)}>+</button>
                </div>
                <p>Subtotal: ${(item.price * item.cantidad).toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Total: ${total.toLocaleString()}</strong>
      </div>
      <button className="checkout-btn">Ir a pagar</button>
    </div>
  );
}

export default Cart;