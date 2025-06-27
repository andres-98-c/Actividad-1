import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../logo/Logo.jsx';
import Cart from '../cart/Cart';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [showCart, setShowCart] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <nav className="navbar">
      <Logo />
      
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/marcas">Marcas</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>

      <div className="cart-container">
        <button
          className="cart-btn"
          aria-label="Ver carrito"
          onClick={() => setShowCart((prev) => !prev)}
        >
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
