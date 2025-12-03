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
          src='/photocv.jpg'
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
Développeuse web utilisant React et Java au quotidien, je suis prête à mettre mes compétences au service de votre équipe au poste de développeuse web.

Après une reconversion réussie il y a trois ans, j'ai obtenu le titre de Conceptrice Développeuse d'Applications grâce à une alternance chez Mismo, où j'ai conçu une PWA de gestion de notes de frais (Java / React / SQL Server).
<p>

Ce qui me motive ?
- Transformer des idées en projets utiles et viables grâce aux bonnes technos et méthodologies.

- Concevoir, développer et déployer des solutions qui tiennent la route.

- Explorer sans cesse de nouveaux frameworks, librairies et langages grâce à ma curiosité et ma détermination.
</p>

<p>
Mes expériences ?
Fondatrice de la micro-entreprise Click'N Access, avec des projets concrets pour des professionnels :

- Site vitrine pour une professionnelle de santé.

- Application web de facturation simplifiée.

Développement de projets personnels :

Application films/séries.  Ce projet m'a permis d'explorer de nouvelles stacks et de renforcer mes compétences fullstack.
</p>

<p>
Polyvalente, motivée et rigoureuse, j'aime suivre un projet de A à Z, du front au back, et livrer des solutions fiables et adaptées aux besoins des utilisateurs.

Curieuse et passionnée, je suis toujours prête à relever de nouveaux challenges et à mettre mon énergie et mon savoir faire au service de vos projets.
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