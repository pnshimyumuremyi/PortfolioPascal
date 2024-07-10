import React from 'react'
import "./stylesheets/Project.css";
const Project = ({data}) => {
  return (
    <div className='Project'>
        <img src={data.image} alt="" />
        <p>Projet {data.id}: {data.title}</p>
        <p><strong>Technologies utilisées:</strong> {data.techno}</p>
        <p>{data.description}</p>
    </div>
  )
}

export default Project