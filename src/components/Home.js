import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="profile-section">
        <div className="profile-image">
          {/* Ajoutez votre photo ici */}
          <img 
          src='/me.jpg'
          alt='THEBAULT Ariane'></img>
        </div>
        <h1>THEBAULT Ariane</h1>
        <h2>Conceptrice Développeuse d'Applications</h2>
        <div className="social-links">
        <a href="https://github.com/ArianeThe" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/ariane-thebault-299470122/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ArianeTHEB" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="about-section">
        <h3>À propos de moi</h3>
        <p>
        Forte de mes deux titres professionnels de Concepteur Développeur d'Application et de Développeur Web et Web Mobile, je pars à la conquête du monde de dév ! </p>

        <p>
Java, Springboot, React, PHP, Symfony, SQL, sont loin d'être des inconnus.
<p>

J'ai développé un site pour une professionnelle en PHP Symfony et je l'ai déployé.
J'ai conçu et développé une application PWA en java springboot et react.
J'ai approché de langage ABAP de SAP.
</p>

<p>
J'ai des milliers d'idées en tête, et je travaille sur l'une d'entre elle actuellement. 
</p>

Je reste disponible pour un poste de développeuse et pour mettre mon énergie, ma motivation et ma bonne humeur au service de votre entreprise !
        </p>
      </div>
    </div>
  );
}

export default Home;