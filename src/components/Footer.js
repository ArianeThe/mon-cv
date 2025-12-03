import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.scss'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Click N Access</p>
        <nav className="footer-nav">
          <Link to="/mentions" className="footer-link">Mentions légales</Link>
          <span className="sep">|</span>
          <Link to="/confidentialite" className="footer-link">Politique de confidentialité</Link>
        </nav>
      </div>
    </footer>
  )
}
