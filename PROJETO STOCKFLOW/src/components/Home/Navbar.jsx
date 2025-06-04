import React from 'react';
import '../../styles/home-components/navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-stock-flow.png'; // ajuste o caminho se necessário

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="box-navbar">
      <img src={logo} alt="Logo Stockflow" className="navbar-logo" />
      <nav className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="http://127.0.0.1:5000/login" className="sistema-link">
    Sistema
  </Link>
        <a href="/#progress-section">Sobre</a>
        <a href="/#contact-section">Contato</a>
      </nav>
      
      </div>
    </header>
  );
};

export default Navbar;
