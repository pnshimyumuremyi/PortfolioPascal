import React, { useState, useEffect } from 'react';
import './stylesheets/TemoignagesList.css';

const TemoignagesList = ({ onEdit }) => {
  const [temoignages, setTemoignages] = useState([]);

  useEffect(() => {
    const fetchTemoignages = async () => {
      try {
        const response = await fetch('http://localhost:4000/comments');
        if (response.ok) {
          const data = await response.json();
          setTemoignages(data);
        } else {
          console.error('Erreur lors de la récupération des témoignages');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchTemoignages();
  }, []);

  return (
    <div className="temoignages-list">
      <h1>Liste des Témoignages</h1>
      <ul>
        {temoignages.map((temoignage, index) => (
          <li key={index}>
            <p><strong>Nom:</strong> {temoignage.name}</p>
            <p><strong>Message:</strong> {temoignage.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemoignagesList;
