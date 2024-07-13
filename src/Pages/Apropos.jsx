import React from 'react';
import './stylesheets/Apropos.css';
import Contact from './Contact';

const Apropos = ({ setContent }) => {
  return (
    <div className="apropos">
      <h1>À propos de moi</h1>
      <p>
        Bonjour, je suis <strong>Pascal NSHIMYUMUREMYI</strong>, diplômé en programmation informatique. J'ai suivi des cours de programmation web, C#, Java, JavaScript, CSS, bases de données, et développement d'applications mobiles pour Android et iOS. 
        Passionné par les nouvelles technologies et le développement de solutions innovantes, je suis toujours à la recherche de nouvelles opportunités pour appliquer mes compétences et apprendre de nouvelles choses.
      </p>
      <p>
        Je suis particulièrement intéressé par le développement web et mobile, et j'ai travaillé sur divers projets qui m'ont permis de renforcer mes compétences dans ces domaines. Lorsque je ne suis pas en train de coder, j'aime lire des livres sur le développement personnel, participer à des hackathons et explorer de nouvelles technologies.
      </p>
      <h2>Compétences</h2>
      <ul>
        <li>Développement web : HTML, CSS, JavaScript, React</li>
        <li>Programmation : C#, Java</li>
        <li>Développement mobile : Android, iOS</li>
        <li>Bases de données : MySQL, MongoDB</li>
        <li>Outils et frameworks : Git, Node.js</li>
      </ul>
      <p>
        Je suis actuellement à la recherche de nouvelles opportunités de collaboration et de projets freelance. 
        N'hésitez pas à me <a href="#" onClick={() => setContent(<Contact />)}>contacter</a> pour discuter de votre projet.
      </p>
    </div>
  );
};

export default Apropos;
