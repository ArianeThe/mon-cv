import React from 'react'
import '../styles/mentions.scss'

export default function Mentions() {
  return (
    <main className="mentions-page">
      <div className="legal-container">
        <h1>Mentions légales</h1>

        <section className="legal-section">
          <h2>1. Éditeur du site</h2>
          <address>
            <strong>Nom / Raison sociale :</strong> Click' N Access<br />
            <strong>Directeur de la publication :</strong> THEBAULT Ariane<br />
            <strong>Adresse e-mail :</strong> <a href="mailto:clicknaccess.fr@gmail.com">clicknaccess.fr@gmail.com</a><br />
            <strong>Numéro SIRET / RCS :</strong> 94328181600018
          </address>
        </section>

        <section className="legal-section">
          <h2>2. Hébergeur</h2>
          <p>
            Le site est hébergé par <strong>Netlify</strong>.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site (textes, images, graphismes, logo, vidéos, icônes, etc.)
            est protégé par le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation,
            modification, publication ou adaptation des éléments du site, quel que soit le moyen ou le procédé
            utilisé, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir des informations exactes et mises à jour, mais ne peut garantir l'absence
            d'erreurs ou d'omissions. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations
            disponibles sur le site. Le site peut contenir des liens vers des sites externes ; l'éditeur n'est pas
            responsable du contenu de ces sites tiers.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Données personnelles</h2>
          <p>
            Les données collectées via le site (formulaire de contact, cookies, etc.) sont traitées conformément au
            Règlement Général sur la Protection des Données (RGPD). Pour plus de détails, consultez la page
            "Politique de confidentialité".
          </p>
          <p>
            Conformément à la loi, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
            concernant vos données. Pour exercer vos droits, contactez : <a href="mailto:clicknaccess.fr@gmail.com">clicknaccess.fr@gmail.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Cookies</h2>
          <p>
            Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques
            de visite. Vous pouvez paramétrer votre navigateur pour refuser ou limiter l'utilisation des cookies.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, compétence exclusive
            est attribuée aux tribunaux français.
          </p>
        </section>
      </div>
    </main>
  )
}
