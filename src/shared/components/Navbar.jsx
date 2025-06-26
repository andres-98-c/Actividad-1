import React, { useState } from 'react';
import '../style/Navbar.css';
import Logo from './Logo';
import Cart from './Cart';

function Navbar({ cart, removeFromCart, updateQuantity }) {
  const [showCart, setShowCart] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Marcas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>

      <div className="cart-container">
        <button className="cart-btn" onClick={() => setShowCart(true)}>
          🛒
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </button>
        {showCart && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            onClose={() => setShowCart(false)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
