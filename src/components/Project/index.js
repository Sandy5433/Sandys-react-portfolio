import React from 'react';
import Card from "react-bootstrap/Card";


function Project ({title, description, image}) {
    return (
        <Card>
            <Card.Header>{title}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>
           {description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Project;