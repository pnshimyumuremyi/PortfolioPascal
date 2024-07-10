import React from "react";
import "./stylesheets/Banner.css";
import "./stylesheets/Footer.css"

const Banner = () => {
  return (
    <div className="Banner">
      <div className="banner-container">
        <div className="photo-container">

          <div className="banner-content">
          <h2>Bienvenue sur mon portfolio</h2>
          <img
            src="Pascal.png.jpg"
            alt="Pascal NSHIMYUMUREMYI"
            className="photo"
          />

          <p>
            Je suis <strong>Pascal NSHIMYUMUREMYI</strong>, diplômé en
            programmation informatique avec une spécialisation en développement
            web et mobile. Passionné par les nouvelles technologies, j'ai acquis
            une solide expérience dans divers langages de programmation et
            frameworks. Explorez mon portfolio pour découvrir mes projets et
            compétences, et n'hésitez pas à me contacter pour toute
            collaboration ou opportunité professionnelle.
          </p></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
