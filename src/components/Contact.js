import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <title>Contact - Portfolio</title>
      </Helmet>

      <h2>Me Contacter</h2>

      <div className="contact-container">
        <div className="contact-methods">
          <div className="contact-method">
            <a 
              href= "https://www.linkedin.com/in/ariane-thebault-299470122/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>Mon profil LinkedIn</span>
            </a>
          </div>

          <div className="contact-method">
            <a 
              href="https://github.com/ArianeThe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Mes projets sur GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Envoyez-moi un message</h3>
          {/* Option 1: FormSubmit - remplacer YOUR_EMAIL par votre email */}
          <form action="https://formsubmit.co/thebault.ariane@gmail.com" method="POST">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
              />
            </div>

            {/* Champs de sécurité pour FormSubmit */}
            <input type="hidden" name="_subject" value="Nouveau message du portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button type="submit" className="submit-button">
              <FontAwesomeIcon icon={faEnvelope} />
              Envoyer
            </button>
          </form>
          

          {/* Option 2: Lien mailto direct */}
          {/*
          <a 
            href="mailto:thebault.ariane@gmail.com?subject=Contact depuis le portfolio"
            className="mailto-link"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            M'envoyer un email directement
          </a>
          */}
        </div>
      </div>
    </div>
  );
}

export default Contact; 