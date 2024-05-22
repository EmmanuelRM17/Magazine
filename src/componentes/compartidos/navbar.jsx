import React from 'react';
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Magazine
        </a>
        <div className="navbar-burger burger" data-target="navbarBasicExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Inicio
          </a>
          <a className="navbar-item" href="/about">
            Acerca de
          </a>
          <a className="navbar-item" href="/collections">
            Colecciones
          </a>
          <a className="navbar-item" href="/categories">
            Categorías
          </a>
          <a className="navbar-item" href="/revistas">
            Revistas
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  