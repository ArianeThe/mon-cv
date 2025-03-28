import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Experience.scss';

function Plus() {
  const plus = [
    {
      id: 1,
      site: "Movies et moi",
      theme: "cinéma et séries",
      description: [
        "Conception d'un site de présentation de films et de séries",
        "Projet personnel",
        "Bac à sable pour montée en compétences"
      ],
      technologies: ["Java", "Spring", "Thymleaf"],
      lien: "https://moviesetmoi.onrender.com/"
    },

    {
      id: 2,
      site: "Easy Factures",
      theme: "Gestion relation client",
      description: [
        "Conception d'un site permettant de remplir une facture en quelques clics et de l'éditer en format pdf",
        "Projet personnel",
        "Recherche de simplicité d'utilisation, travail sur la sécurisation des données"
      ],
      technologies: ["React", "JS", "CSS"],
      lien: "non disponible pour l'instant"
    }

  ];

  return (
    <div className="experience">
      <Helmet>
        <title>Productions - Votre Nom</title>
      </Helmet>

      <h2>Productions</h2>
      
      <div className="experience-list">
        {plus.map(exp => (
          <div key={exp.id} className="experience-item">
            <div className="experience-header">
              <h3>{exp.site}</h3>
              <div className="company-info">
                <span className="company">{exp.theme}</span>
              </div>
            </div>

            <ul className="responsibilities">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="technologies">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className='technologies'>
                <a href={exp.lien} target='_blank' rel='noopener noreferrer'>Visiter le site</a>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plus;