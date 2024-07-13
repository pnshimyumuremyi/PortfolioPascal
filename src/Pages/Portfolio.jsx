import React from 'react';
import './stylesheets/Portfolio.css';


const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Mes Projets</h1>
      
      <div className="projet">
       
        <h2>Projet 1: Plateforme de Vente aux Enchères</h2>
        <p>
        Un site de vente aux enchères complet intégrant un système de gestion des utilisateurs, des produits, de soumission d'enchères et de dépôt de commentaires.
        </p>
        <p><strong>Technologies utilisées:</strong> Vue.js, Node.js, MYSQL, Stripe API</p>
      </div>

      <div className="projet">
       
        <h2>Projet 2: Application desktop de gestion d'inventaire de plantes de Cannnabis"eCanabis"</h2>
        <p>
        Une application desktop dédiée à la gestion des données liées aux plantes de cannabis, offrant les fonctionnalités suivantes : ajout de données sur les plantes, modification et suppression des informations, ainsi que la génération de QR Codes pour chaque plante.
        </p>
        <p><strong>Technologies utilisées:</strong> C#,SQLITE</p>
      </div>

      <div className="projet">
       
        <h2>Projet 3: BlogDB</h2>
        <p>
        Conception et implémentation de la structure de la base de données MongoDB pour une application de blog permettant aux utilisateurs de créer, éditer, supprimer des articles (posts), de récupérer tous les articles, d'afficher un article individuel, et de commenter les articles.
        </p>
        <p><strong>Technologies utilisées:</strong> Java, MongoDB</p>
      </div>
    </div>
  );
};

export default Portfolio;