import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../logo/Logo.jsx';
import Cart from '../cart/Cart.jsx';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [session, setSession] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  useEffect(() => {
    const ses = JSON.parse(localStorage.getItem('session'));
    setSession(ses);

    // Escucha cambios en localStorage para actualizar sesión sin recargar
    const handleStorage = () => {
      const updatedSession = JSON.parse(localStorage.getItem('session'));
      setSession(updatedSession);
    };
    window.addEventListener('storage', handleStorage);

    // Escucha cambios manuales de sesión (por ejemplo, después de iniciar sesión)
    const handleCustomSession = () => {
      const updatedSession = JSON.parse(localStorage.getItem('session'));
      setSession(updatedSession);
    };
    window.addEventListener('custom-session', handleCustomSession);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('custom-session', handleCustomSession);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('session');
    setSession(null);
    setMenuOpen(false);
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/marcas">Marcas</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        {!session ? (
          <li className="login-li">
            <Link to='/login' className="login-link">
              Iniciar Sesión
            </Link>
          </li>
        ) : (
          <li className="user-menu">
            <span className="user-icon-container">
              <span className="user-emoji">👤</span>
              <span className="user-status"></span>
            </span>
            <span className="user-email">{session.email}</span>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              &#8801;
            </button>
            {menuOpen && (
              <div className="user-dropdown">
                <button onClick={handleLogout}>Cerrar sesión</button>
                <button>Editar perfil</button>
              </div>
            )}
          </li>
        )}
        {/* Carrito dentro de nav-links */}
        <li>
          <div className="cart-container">
            <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
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
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>
    </nav>
  );
}

export default Navbar;
