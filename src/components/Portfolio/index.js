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
      address: "https://github.com/Sandy5433/Sandys-react-portfolio.git",
      github: "https://github.com/Sandy5433/Sandys-react-portfolio.git"
    },
    {
      id: 2,
      title: "Furry Foster Home",
      image: img5,
      address: "https://furryfosterhome.herokuapp.com/",
      github: "https://github.com/NikTern/Furry-Foster-Home.git"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: img4,
      address: "https://sandy5433.github.io/Weather-dashboard/",
      github: "https://github.com/Sandy5433/Weather-dashboard.git"
    },
    {
      id: 4,
      title: "Tech blog",
      image: img3,
      address: "https://boiling-savannah-84115.herokuapp.com/",
      github: "https://github.com/Sandy5433/Tech-blog.git"
    },
    {
      id: 5,
      title: "Note Taker",
      image: img2,
      address: "https://note-list-app.herokuapp.com/",
      github: "https://github.com/Sandy5433/note-taker.git"
    },
    {
      id: 6,
      title: "Personalised Diary",
      image: img6,
      address: "https://abewd.github.io/MyPersonalisedDiary/",
      github: "https://github.com/Sandy5433/MyPersonalisedDiary.git"
    }
  ];

function Portfolio() {
    return <Project projects={projects}/>
}

export default Portfolio;
