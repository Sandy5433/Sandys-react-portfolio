import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../Project";
import "./style.css";
import img1 from "../../images/img1.webp"

function Portfolio() {
  return (
    <>
      <Row className="m-5">
        <Col className="project">
          <Project
            title={"Project 1"}
            description={"This is the description"}
            image={img1}
          />
        </Col>
        <Col className="project">
         <Project
            title={"Project 2"}
            description={"This is the description"}
          />
        </Col>
      </Row>
      <Row className="m-5">
        <Col className="project">
         <Project
            title={"Project 3"}
            description={"This is the description"}
          />
        </Col>
        <Col className="project">
         <Project
            title={"Project 1"}
            description={"This is the description"}
          />
        </Col>
      </Row>
      <Row className="m-5">
        <Col className="project">
         <Project
            title={"Project 1"}
            description={"This is the description"}
          />
        </Col>
        <Col className="project">
         <Project
            title={"Project 1"}
            description={"This is the description"}
          />
        </Col>
      </Row>
    </>
  );
}

export default Portfolio;
