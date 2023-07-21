import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Consumer } from './Context';
import {v4 as uuid} from "uuid";


 class AddProject extends Component {
    state={
        imageUrl:"",
        title:"",
        excerpt:"",
        body:"",
        submitMessage:"",
        submitMessageTextColor:"",
    };

    onChange =(event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onBodyChange= (value) =>{
        this.setState({
            body: value,
        });
    };

    onSubmit =(addProjectsHandler,event) =>{
        event.preventDefault();
        let isSucessful=true;
        
        if (isSucessful){
            this.setState({
                submitMessage:"Project Added Sucessfully!!",
                submitMessageTextColor:"text-info",
            });
        }else{
            this.setState({
                submitMessage:"Something Went Wrong!! Please Try again later",
                submitMessageTextColor:"text-danger",
            });
        }

        
        const newProject={
            id: uuid(),
            imageUrl:this.state.imageUrl,
            title:this.state.title,
            excerpt:this.state.excerpt,
            body:this.state.body,
        };

        addProjectsHandler(newProject);
    };

        

  render() {
    return(
        <Consumer>
            {(value) =>{
    const {imageUrl,title,body,submitMessage ,submitMessageTextColor}= this.state;
    const {addProjectsHandler} = value;
    return (
      <div className='container-fluid py-5 my-5'>
        <h1 className='text-center my-5'>
            Add <span className='text-info'>Project</span>
        </h1>
         <div className='row px-3 px-lg-5'>
            <div className='col-12 col-lg-6 px-lg-5'>
                <form onSubmit={this.onSubmit.bind(this, addProjectsHandler)}>
                    <div className='form-group'>
                    <label htmlFor='iamgeUrl'>Image Url of the Project </label>
                    <input type='text' name='imageUrl' id='imageUrl' className='form-control' onChange={this.onChange} />
                    </div>

                    <div className='form-group'>
                    <label htmlFor='title'>Title *</label>
                    <input type='text' name='title' id='title' className='form-control' onChange={this.onChange} required />
                    </div>

                    <div className='form-group'>
                    <label htmlFor='excerpt'>Excerpt *</label>
                    <input type='text' name='excerpt' id='excerpt' className='form-control' onChange={this.onChange} required />
                    </div>
                    <SimpleMDE 
                    onChange={this.onBodyChange}
                    options={{hideIcons:["fullscreen","side-by-side"],}}/>
                    
                    <button 
                    type="submit"
                    className='btn btn-dark btn-block my-5'
                    style={{backgroundColor:'black'}}>Publish</button>
                </form>
                <div className='px-5 mx-2 text-center'>
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
            </div>
            </div>
            <div className='col-12 col-lg-6 markdown'>
                <div className='justify-content-center'>
                    <img src={imageUrl} alt={title} />
                </div>
                <h1 className='font-weight-light text-center my-5'>{title}</h1>
                <ReactMarkdown source={body}></ReactMarkdown>
            </div>
         </div>

      </div>
    );
            }}
            </Consumer>
    );
  }
}
export default AddProject;
