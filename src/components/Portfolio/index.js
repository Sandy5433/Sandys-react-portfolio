import React from "react";
import Project from "../Project";
import img1 from "../../images/img1.webp";
import img2 from "../../images/img1.webp";
import img3 from "../../images/img1.webp";
import img4 from "../../images/img1.webp";
import img5 from "../../images/img1.webp";
import img6 from "../../images/img1.webp";

const projects = [
    {
      id: 1,
      title: "React Portfolio",
      image: img1,
      address: "https://sandy5433.github.io/Weather-dashboard/"
    },
    {
      id: 2,
      title: "Note Taker",
      image: img2
    },
    {
      id: 3,
      title: "Tech blog",
      image: img3
    },
    {
      id: 4,
      title: "Weather Dashboard",
      image: img4
    },
    {
      id: 5,
      title: "Furry Foster Home",
      image: img5
    },
    {
      id: 6,
      title: "Personalised Diary",
      image: img6
    }
  ];

function Portfolio() {
    return <Project projects={projects}/>
}

export default Portfolio;
