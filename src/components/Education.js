import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faCalendarAlt, 
  faMapMarkerAlt,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Education.scss';

function Formation() {
  const formations = [
    {
      id: 1,
      diplome: "TITRE PRO CONCEPTRICE DEVELOPPEUSE D'APPLICATIONS",
      niveau: "Bac +4 / RNCP Niveau VI",
      etablissement: "ENI Ecole Informatique",
      lieu: "Nantes",
      periode: "Sept 2023 – Mai 2024",
      description: "Formation approfondie en conception et développement d'applications",
      competences: [
        "Conception et développement d'applications",
        "Architecture logicielle",
        "Développement full-stack"
      ]
    },
    {
      id: 2,
      diplome: "TITRE PRO DEVELOPPEUSE WEB ET WEB MOBILE",
      niveau: "Bac +2 / RNCP Niveau V",
      etablissement: "ENI Ecole Informatique",
      lieu: "Nantes",
      periode: "Avril – Nov 2022",
      description: "Formation spécialisée en développement web et mobile",
      competences: [
        "Développement front-end et back-end",
        "Création d'applications web responsive",
        "Développement mobile",
        "Intégration web"
      ]
    },
    {
      id: 3,
      diplome: "TIGAD",
      niveau: "Technicienne en Informatique Architecturale et Design",
      etablissement: "ARINFO",
      lieu: "Nantes",
      periode: "2000",
      description: "Formation en informatique appliquée à l'architecture et au design"
    },
    {
        id: 4,
        diplome: "BACCALAURÉAT L",
        etablissement: "Lycée Jean Perrin",
        lieu: "Rezé",
        periode: "1995-1996",
        description: "Formation générale littéraire"
      }
  ];

  return (
    <div className="formation">
      <Helmet>
        <title>Formation - Votre Nom</title>
      </Helmet>

      <h2>
        <FontAwesomeIcon icon={faGraduationCap} />
        Formation
      </h2>

      <div className="formations-timeline">
        {formations.map(formation => (
          <div key={formation.id} className="formation-item">
            <div className="formation-header">
              <h3>{formation.diplome}</h3>
              <div className="formation-meta">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {formation.periode}
                </span>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {formation.lieu}
                </span>
              </div>
            </div>

            <div className="formation-content">
              <h4>{formation.etablissement}</h4>
              
              {formation.description && (
                <p className="formation-description">
                  {formation.description}
                </p>
              )}

              {formation.competences && (
                <div className="competences-acquises">
                  <h5>Compétences acquises :</h5>
                  <ul>
                    {formation.competences.map((competence, index) => (
                      <li key={index}>{competence}</li>
                    ))}
                  </ul>
                </div>
              )}

              {formation.certifications && (
                <div className="certifications">
                  <h5>
                    <FontAwesomeIcon icon={faCertificate} />
                    Certifications obtenues :
                  </h5>
                  <ul>
                    {formation.certifications.map((cert, index) => (
                      <li key={index}>
                        {cert.nom} - {cert.organisme} ({cert.annee})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formation;