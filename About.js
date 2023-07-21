import React from "react";
import Formals from "../Photos/Formals.jpeg";

function About(){
    return(
        <section id="about" class="py-5">
        <div className="container-fluid">
            <div className="row text-center align-items-center">
    
                <div className="col-4">
                    <img src={Formals} alt="My Image" className="img-fluid rounded-circle" />
                </div>
                <div className="col-7 text-justify">
                    <h2>About Me</h2><br />
                    <h3>Hi, Myself <span className="text-info">Darsh Khanna</span></h3><br />
                    <p>I live in Mumbai. I am a Cloud Computing Enthusiast.I have achieved many Google cloud badges and have also completed Google Cloud 
                    Facilitator Program. Furthermore, I have completed AWS foundations By AWS Academy. Recently, I have done two
                    global certifications in Azure Cloud.
                    I also have a interest in Data Analytics. I have done Data analytics course of google from coursera.
                    I am fond of doing web development and am doing a Full stack development course. I have hobbies like to 
                    watch movies , anime and cricket.</p>
            
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;