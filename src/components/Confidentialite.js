import React from 'react'
import '../styles/confidentialite.scss'

export default function Confidentialite() {
  return (
    <main className="confidentialite-page">
      <div className="legal-container">
        <h1>Politique de confidentialité</h1>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            La protection de vos données personnelles est une priorité pour Click 'n Access. Cette politique explique
            quelles informations nous collectons, comment nous les utilisons et quels sont vos droits.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Données collectées</h2>
          <p>Nous pouvons collecter les informations suivantes :</p>
          <ul>
            <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées.</li>
            <li><strong>Données de contact :</strong> nom, adresse e-mail, messages envoyés via le formulaire de contact.</li>
            <li><strong>Données liées aux services :</strong> informations nécessaires pour accéder aux fonctionnalités proposées par Click 'n Access.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Finalités de l'utilisation</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes via le formulaire de contact.</li>
            <li>Améliorer l'expérience utilisateur et la sécurité du site.</li>
            <li>Gérer l'accès aux services proposés.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Partage des données</h2>
          <p>
            Vos données ne sont jamais vendues. Elles peuvent être partagées uniquement avec :
          </p>
          <ul>
            <li>Nos prestataires techniques (hébergement, maintenance).</li>
            <li>Les autorités légales si la loi l'exige.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Conservation des données</h2>
          <ul>
            <li>Les données de contact sont conservées pendant 3 ans après le dernier échange.</li>
            <li>Les données de navigation sont conservées de manière anonymisée à des fins statistiques.</li>
            <li>Les données liées aux services sont conservées le temps nécessaire à leur utilisation, puis supprimées.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de :
          </p>
          <ul>
            <li>Droit d'accès, rectification et suppression de vos données.</li>
            <li>Droit d'opposition au traitement.</li>
            <li>Droit à la portabilité de vos données.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à : <a href="mailto:clicknaccess.fr@gmail.com">clicknaccess.fr@gmail.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Cookies</h2>
          <p>Le site peut utiliser des cookies pour :</p>
          <ul>
            <li>Améliorer la navigation.</li>
            <li>Réaliser des statistiques de visite.</li>
          </ul>
          <p>
            Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Sécurité</h2>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données contre la perte,
            l'accès non autorisé ou la divulgation.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Modifications</h2>
          <p>
            Cette politique peut être mise à jour. La version la plus récente sera toujours disponible sur cette page.
          </p>
        </section>
      </div>
    </main>
  )
}
