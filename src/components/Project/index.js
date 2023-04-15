import React from 'react';
import Card from "react-bootstrap/Card";
import "./style.css";
import ghIcon from "../../images/git.png"

function Project(props){
    return (
        <ul className="cards">
         {props.projects.map(item => (
             <Card className="card">
             <Card.Header><a href={item.github}>
             <img className='git' src={ghIcon}/>
             </a>{item.title}
             </Card.Header>
             <a href={item.address}>
              <Card.Img variant="top" src={item.image}/>
             </a>
             </Card>
          ))}
        </ul>
      );
}
export default Project;