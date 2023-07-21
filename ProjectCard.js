import React from 'react'
import { Link } from 'react-router-dom';

 function ProjectCard(props) {
    const {id,title,text,imageUrl}=props.project;
  return (
    <div className="card shadow h-100">
        <img
        className="card-img-top"
        src={imageUrl}
        alt="Projects"
         />
        <div className="card-body">
            <h4 className="card-title">
                {title}
            </h4>
            <p className="card-text">{text}</p>
            <Link to={'/project/${key}'} className="stretched-link"></Link>
        </div>
    </div>
  );
}

export default ProjectCard;
