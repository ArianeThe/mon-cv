import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.scss';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-content">

          <Link to="/" className="nav-brand" onClick={closeMenu}>
          Mon CV
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>

          <NavLink to="/" onClick={closeMenu}>
            Accueil
          </NavLink>

          <NavLink to="/experience" onClick={closeMenu}>
            Expériences
          </NavLink>

          <NavLink to="/competences" onClick={closeMenu}>
            Compétences
          </NavLink>

         <NavLink to="/formation" onClick={closeMenu}>
            Formations
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;