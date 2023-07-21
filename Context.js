import React,{Component} from "react";

const Context = React.createContext();

export class Provider extends Component{
    addProjectsHandler =(newProject) => {
        this.setState({
            projects:[newProject, ...this.state.projects],
        });
    };
    state={
        addProjectsHandler: this.addProjectsHandler,
        projects:[
            {
                id:1,
                title:"Brain Tumor Classification & Detection",
                imageUrl:require("../Photos/Brain-Tumor.jpg"),
                text:"This is my project about...",
                body: "Body 1",
            },
            {
                id:2,
                title:"Heart Stroke Prediction",
                imageUrl:require("../Photos/Heart-Disease.jpg"),
                text:"This is my project about...",
                body: "Body 1",
            },
            {
                id:3,
                title:"Musical Note Detection",
                imageUrl:require("../Photos/Music-Detection.jpg"),
                text:"This is my project about...",
                body: "Body 1",
            },
        ],
    };

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    };
}

export const Consumer=Context.Consumer;