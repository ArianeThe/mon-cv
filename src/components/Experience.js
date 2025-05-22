import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Experience.scss';

function Experience() {
  const experiences = [
       {
      id: 1,
      poste: "Conceptrice Développeuse d'Applications, Créatrice de micro entreprise",
      entreprise: "Click 'N Access",
      periode: "04/2025 - ce jour",
      lieu: "Casson",
      description: [
        "Conception, développement et déploiement de sites internet personnalisé",
        "Conception, développement et déploiement de sites de gestion de rdv",
        "Recueil du besoin et des attentes clients",
        "Rédaction cahier des charges et maquettes",
        "Projet d'application en cours de développement"
      ],
      technologies: ["Java", "React", "Javascript", "Netlify"]
    },
    {
      id: 2,
      poste: "Conceptrice Développeuse d'Applications",
      entreprise: "Personnel",
      periode: "02/2025 - 03/2025",
      lieu: "Casson",
      description: [
        "Conception d'un site d'édition de factures",
        "Mise en place d'un système de cryptage des données",
        "Mise en place d'une page de connexion",
        "Déploiement sur Netlify",
        "Projet d'application en cours de développement"
      ],
      technologies: ["React", "Javascript", "Netlify"]
    },
    {
      id: 3,
      poste: "Conceptrice Développeuse d'Applications",
      entreprise: "Mismo",
      periode: "12/2023 - 05/2024",
      lieu: "La Chapelle sur Erdre",
      description: [
        "Conception d'une application de gestion de notes de frais",
        "Maquettage avec Whimsical",
        "Mise en place d'une API",
        "Développement de la partie Front-End et Back End",
        "Collaboration avec une équipe"
      ],
      technologies: ["React", "Java", "Spring", "SQLServer"]
    },
    {
        id: 4,
        poste: "Conceptrice Développeuse d'Applications",
        entreprise: "Projet personnel",
        periode: "12/2024",
        lieu: "Casson",
        description: [
          "Refonte d'un site vitrine pour une professionnelle",
          "Recueil du besoin",
          "Maquettage et rédaction sur Figma",
          "Développement Front et back End"
        ],
        technologies: ["Java", "Spring", "Thymleaf"]
      },
    {
      id: 5,
      poste: "Conceptrice Développeuse d'Applications",
      entreprise: "Projet personnel",
      periode: "02/2024",
      lieu: "Casson",
      description: [
        "Conception et développement d'un site vitrine pour une professionnelle",
        "Recueil du besoin",
        "Maquettage et rédaction sur Figma",
        "Développement Front et back End"
      ],
      technologies: ["PHP", "Symfony", "CSS", "JS"]
    },
    {
        id: 6,
        poste: "Conceptrice Développeuse d'Applications",
        entreprise: "Projet personnel",
        periode: "01/2023 - 02/2023",
        lieu: "Casson",
        description: [
          "Conception et développement d'une API permettant la gestion d'une BDD et édition de factures",
          "Recueil du besoin",
          "Maquettage",
          "Création de la base de données",
          "Développeement du Back End",
          "Tests API avec Postman"
        ],
        technologies: ["PHP", "Symfony", "MySQL", "JS"]
      },
      {
        id: 7,
        poste: "Développeuse Web et Web Mobile",
        entreprise: "InterHop",
        periode: "10/2022 - 11/2022",
        lieu: "Casson",
        description: [
          "Développement d'un site permettant l'accès à diverses API",
          "Recueil du besoin",
          "Maquettage et rédaction sur Penpot",
          "Développement Front et back End"
        ],
        technologies: ["PHP", "Symfony", "MySQL", "GitLab"]
      },
      {
        id: 8,
        poste: "Assistante Administrative",
        entreprise: "Synergie - Anvolia - Océa Smart Building",
        periode: "10/2017 - 01/2022",
        lieu: "Saint Herblain et ces alentours",
        description: [
          "Gestionaire des marchés publics",
          "Assistante de maintenance",
          "Assistante d'exploitation"
        ],
        technologies: ["Word", "Excel", "ERP maison"]
      },
      {
        id: 9,
        poste: "Commis de cuisine et Assistante manager en restauration rapide",
        entreprise: "Quick - Stratto - La Cabane",
        periode: "1997 - 2014",
        lieu: "Nantes",
        description: [
          "Equipière",
          "Assistante manager",
          "Commis de cuisine"
        ],
        technologies: ["Drive", "Cuisine traditionnelle"]
      }

  ];

  return (
    <div className="experience">
      <Helmet>
        <title>Expérience - Votre Nom</title>
      </Helmet>

      <h2>Expérience Professionnelle</h2>
      
      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-item">
            <div className="experience-header">
              <h3>{exp.poste}</h3>
              <div className="company-info">
                <span className="company">{exp.entreprise}</span>
                <span className="period">{exp.periode}</span>
                <span className="location">{exp.lieu}</span>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;