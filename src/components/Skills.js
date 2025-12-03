import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faPalette, 
  faTools,
  faServer,
  faStar as faStarSolid, 
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import '../styles/Skills.scss';

function Skills() {
  // Fonction pour rendre les étoiles
  const renderStars = (level) => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(
        <FontAwesomeIcon 
          key={i}
          icon={i < level ? faStarSolid : faStarRegular}
          className={i < level ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  const skillCategories = [
    {
      id: 1,
      name: "Technologies Frontend",
      icon: faPalette,
      skills: [
        { name: "React", level: 3, description: "Bonne maîtrise" },
        { name: "HTML5/CSS3", level: 3, description: "Bonne maîtrise" },
        { name: "JavaScript", level: 2, description: "Pratique régulière" }
      ]
    },
    {
      id: 2,
      name: "Technologies Backend",
      icon: faServer,
      skills: [
        { name: "Java", level: 3, description: "Bonne maîtrise" },
        { name: "PHP", level: 2, description: "Pratique régulière" },
        { name: "API REST", level: 2, description: "Bonne compréhension" }
      ]
    },
    {
      id: 3,
      name: "Base de données",
      icon: faDatabase,
      skills: [
        { name: "MySQL", level: 2, description: "Pratique régulière" },
        { name: "SQLServer", level: 2, description: "Pratique régulière" }
      ]
    },
    {
      id: 4,
      name: "Outils & Méthodes",
      icon: faTools,
      skills: [
        { name: "Git/GitHub", level: 2, description: "Utilisation quotidienne" },
        { name: "VS Code", level: 3, description: "Maîtrise avancée" },
        { name: "AWS", level: 1, description: "En cours d'apprentissage" }
      ]
    },
    {
      id: 5,
      name: "Frameworks",
      icon: faTools,
      skills: [
        { name: "Spring", level: 3, description: "Framework Java - Maîtrise avancée" },
        { name: "Symfony", level: 3, description: "Framework PHP - Maîtrise avancée" }
      ]
    },
    {
      id: 6,
      name: "Soft Skills",
      icon: faUsers,
      skills: [
        { name: "Travail d'équipe", level: 3, description: "Excellente capacité de collaboration" },
        { name: "Communication", level: 3, description: "Communication claire et efficace" },
        { name: "Résolution de problèmes", level: 3, description: "Approche analytique et créative" },
        { name: "Adaptabilité", level: 3, description: "Grande capacité d'adaptation aux changements" }
      ]
    }
  ];

  return (
    <div className="skills">
      <Helmet>
        <title> THEBAULT Ariane</title>
      </Helmet>

      <h2>Compétences Techniques</h2>

      <div className="skills-container">
        {skillCategories.map(category => (
          <div key={category.id} className="skill-category">
            <div className="category-header">
              <FontAwesomeIcon icon={category.icon} />
              <h3>{category.name}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-rating">
                      {renderStars(skill.level)}
                    </div>
                  </div>
                  <div className="skill-description">
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;