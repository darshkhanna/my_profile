import React from 'react'
import ProjectCard from './ProjectCard';
import { Consumer } from './Context';
import { Link } from 'react-router-dom';

 function Project() {
    return(
    <Consumer>
        {value =>{
            const {projects}=value;
            return (
                <section id="project" className="py-5">
                    <div className="container text-center my-5">
                        <h1 className="font-weight-dark">
                            My <span className="text-info">Projects</span>
                        </h1>
                        <div className="lead">Projects made by me, just like this website!</div>
                            <div className="row my-5 pt-3">
                               { projects.slice(0,3).map((project) =>
                                (
                                    <div key={project.id} className="col-12 col-md-4 my-2">
                                        <ProjectCard project={project} />
                                    </div>
                               ))  
                            }                                                                          
                            </div>
                            <div className="my-5">
                                <Link to="/allprojects" className="text-dark text-right">
                                    <h5>
                                        See my projects
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                        </svg>
                                    </h5>
                                </Link>
                            </div>
                    </div>
                </section>
          );
        }}
    </Consumer>
    );  
}

export default Project;