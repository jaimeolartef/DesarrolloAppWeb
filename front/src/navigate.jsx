import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Resource/logo.png'; // Asegúrate de que la ruta a la imagen es correcta

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo"/>
        &nbsp;&nbsp;&nbsp;
        <div className="logo-text">
          <h1>Actividades</h1>
          <p>Registro de actividades diarias</p>
        </div>
      </div>
      <nav className="navigation">
        <Link to="/">Página Principal</Link>
        <Link to="/register">Registro</Link>
        <Link to="/consult">Consultar</Link>
        <Link to="/activity">Registro de actividades diarias</Link>
      </nav>
    </header>
  );
};

export default Header;