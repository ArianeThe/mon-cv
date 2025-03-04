import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

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
        20 ans d'expériences professionnelles à mettre au service du développement et de la conception d'applications et/ou de solutions web et web mobile.

Le travail d'équipe, l'autonomie, la rigueur, le respect des délais n'ont pas de secret pour moi.
<p>

Concevoir, développer et mettre en oeuvre les technologies et méthodologies pour faire des idées de véritables projets utiles et viables font partie de ce qui me motive.

Ma curiosité et ma détermination m'a permis et me permet de m'auto former sur des frameworks, librairies ou langages qui me sont inconnus ou très peu connus.</p>

Junior dans cette nouvelle vie professionnelle, mais avec une expérience du monde de l'entreprise solide, je répondrai à toutes les questions que mon profil peut vous poser.
     </p>

        <p>
Java, Springboot, React, PHP, Symfony, SQL, sont loin d'être des inconnus. Et je les utilise chaque jour pour donner à vie à toutes les idées que je peux avoir.
<p>

J'ai développé un site pour une professionnelle en PHP Symfony et je l'ai déployé.
J'ai conçu et développé une application PWA en java springboot et react.
J'ai approché de langage ABAP de SAP.
J'ai développé des API.
J'ai développé une base de données, une API pour l'édition de factures.
</p>

<p>
J'ai des milliers d'idées en tête, et je travaille sur l'une d'entre elle actuellement, un projet qui fonctionne avec une base de données, 
une API, dans le but de créer une application simple d'utilisation et accessible à tous les publics. 
</p>

Curieuse et motivée, je suis intéressée par les challenges et opportunités qui peuvent se présenter à moi.
        </p>
        <p>
  Pour en savoir plus, {' '}
  <Link 
    to="/contact" 
    style={{ 
      color: '#000000', 
      textDecoration: 'none',
      fontWeight: 'bold'
    }}
  >
    contactez-moi
  </Link> !
</p>
      </div>
    </div>
  );
}

export default Home;