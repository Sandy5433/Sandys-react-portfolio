import React from 'react';
import Card from "react-bootstrap/Card";
import "./style.css";


function Project(props){
    return (
        <ul className="list">
         {props.projects.map(item => (
             <Card className="styles">
             <Card.Header>{item.title}</Card.Header>
             <Card.Img variant="top" src={item.image}/>
             </Card>
          ))}
        </ul>
      );
}

export default Project;