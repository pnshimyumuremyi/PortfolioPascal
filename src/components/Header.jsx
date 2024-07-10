import React from 'react';
import './stylesheets/Header.css';
import Accueil from '../Pages/Accueil';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import Apropos from '../Pages/Apropos';
import Error from '../Pages/404';
import TemoignagesList from '../Pages/TemoignagesList';
import TemoignageForm from '../Pages/TemoignageForm';

const Header = ({ setContent }) => {
  const handleMenu = (select) => {
    switch (select) {
      case 1:
        setContent(<Accueil setContent={setContent} />);
        break;
      case 2:
        setContent(<Portfolio />);
        break;
      case 3:
        setContent(<Contact />);
        break;
      case 4:
        setContent(<Apropos setContent={setContent} />);
        break;
      case 5:
        setContent(<TemoignagesList />);
        break;
      case 6:
        setContent(<TemoignageForm />);
        break;
      default:
        setContent(<Accueil />);
        break;
    }
  };

  return (
    <div className="Header">
      <img onClick={() => handleMenu(1)} src="./logo20.png" alt="logo" />
      <div>
        <ul>
          <li onClick={() => handleMenu(1)}>Accueil</li>
          <li onClick={() => handleMenu(2)}>Portfolio</li>
          <li onClick={() => handleMenu(3)}>Contact</li>
          <li onClick={() => handleMenu(4)}>À propos</li>
          <li onClick={() => handleMenu(5)}>Témoignages</li>
          <li onClick={() => handleMenu(6)}>Ajouter Témoignage</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;