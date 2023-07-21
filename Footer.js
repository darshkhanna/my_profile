import React from "react";



function Footer(){
    let url ="https://www.linkedin.com/in/darsh-khanna-93127a276/";
    let email= "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXPtHNTmVdBRxwSFrQsQSlrxxmcCgJLVGvGCRkLFfgPQgTVHXDMRWSKwtZVzTsxbtXWrL";
    let insta= "https://www.instagram.com/darshkhanna/";
    return(
        <footer className="py-2">
            <div className="container-fluid text-light " style={{backgroundColor:"rgb(45, 42, 42)"}}>
                <div className="py-4 ">
                    <h2 className="text-center">Get touch with me Here!</h2>
                </div>
                <div className="col-6">
                    <div className= "px-5">  
                        <h5 className="d-block"> Mobile : <a href='/'>9167778889</a></h5>
                        <h5 className="py-2 d-block">Email Id  : <a href={email}> darshk035@gmail.com</a></h5>   
                    </div> 
                </div>
                <div className="col-6">
                    <div className="px-5">
                        <h4 className="text-justify text-info ">Social Media</h4>
                            <a href={url} className="px-2  "> <i className="fab fa-linkedin text-light h1  "></i>
                            </a>
                            <a href="https://www.instagram.com/darshkhanna/" > 
                            <i class="fab fa-instagram text-light h1 px-2"></i>
                            </a>
                     </div>
                </div>                
                <div className="col-3"> 
                    <div className="px-5 py-3">
                         <p className="text-muted"> Designed by Darsh Khanna  <i class="fas fa-heart text-light"></i>
                        </p>
                    </div>
                </div>     
            </div>
        </footer>
    );
}
export default Footer;