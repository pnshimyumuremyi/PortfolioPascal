import React from "react";
import Banner from "../components/Banner";

import "./stylesheets/Accueil.css";
import { project } from "../services/project";
import Project from "./Project";

const Accueil = ({setContent}) => {
  const handleProject = (data)=> {
    setContent(<Project data={data} />)
  }
  return (
    <div className="accueil">
      <Banner />
      {/*<div className="photo-container">
        <img src="Pascal.png.jpg" alt="Pascal NSHIMYUMUREMYI" className="photo"/>
      </div>
      <div className="presentation">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Je suis <strong>Pascal NSHIMYUMUREMYI</strong>, diplômé en programmation informatique avec une spécialisation en développement web et mobile. Passionné par les nouvelles technologies, j'ai acquis une solide expérience dans divers langages de programmation et frameworks.</p>
        <p>Explorez mon portfolio pour découvrir mes projets et compétences, et n'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle.</p>
      </div>*/}

      <div className="last-project">
        {project.map((element) => {
          return (
            <div className="project-content" onClick={()=> {handleProject(element)}}>
              <div className="img-content">
                <img src={element.image} alt="projet1" />
              </div>
              <div className="desc">
                <h3>{element.subtitle}</h3>
                <p>{element.techno}</p>
              </div>
            </div>
          );
        })}




      </div>
    </div>
  );
};

export default Accueil;
