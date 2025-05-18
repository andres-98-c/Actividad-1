import React from 'react';

function Header() {
  return (
    <header className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">Bienvenido a O_clock</h1>
        <p className="lead">Expertos en reparación de todo tipo de relojes!</p>
        <a href="#contact" className="btn btn-primary mt-3">Contáctanos</a>
      </div>
    </header>
  );
}

export default Header;

