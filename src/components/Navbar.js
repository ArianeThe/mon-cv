import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="nav-brand">
          THEBAULT Ariane
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Accueil
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
            Expériences
          </NavLink>
          <NavLink to="/competences" className={({ isActive }) => isActive ? 'active' : ''}>
            Compétences
          </NavLink>
          <NavLink to="/formation" className={({ isActive }) => isActive ? 'active' : ''}>
            Formations
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;