import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import Logo from "../Imagenes/CapLogo.png"
const Navbar = () => {
  const [categorias, setCategorias] = useState(["Tecnologia","Noticias"]);
  const [showMenu, setShowMenu] = useState(false);
  console.log(categorias)
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`URL_DEL_API_PARA_CATEGORIAS`);
        if (!response.ok) {
          throw new Error('Error al obtener las categorías');
        }
        const data = await response.json();
        setCategorias(data); // Ajusta esto según la estructura de datos del API
      } catch (error) {
        console.error('Error fetching categorias:', error);
      }
    };

    fetchCategorias();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className={`navbar-burger burger ${showMenu ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <img src={Logo} alt="CapLogo" />
          <div></div>
          <a className="navbar-item" href="/">
            Inicio
          </a>
          <a className="navbar-item" href="/about">
            Acerca de
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#">
              Categorías
            </a>
            
            <div className="navbar-dropdown">
              {categorias.map(categoria => (
                <a key={categoria.id} className="navbar-item" href={`/categoria/${categoria.id}`}>
                  {categoria}
                </a>
              ))}
            </div>
          </div>
          
          <a className="navbar-item" href="/revistas">
            Revistas
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
