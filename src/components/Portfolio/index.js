import React from "react";
import Project from "../Project";
import img1 from "../../images/img0.png";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.png";

const projects = [
    {
      id: 1,
      title: "React Portfolio",
      image: img1,
      address: "https://sandy5433.github.io/Sandys-react-portfolio/",
      github: "https://github.com/Sandy5433/Sandys-react-portfolio.git"
    },
    {
      id: 2,
      title: "Furry Foster Home",
      image: img2,
      address: "https://furryfosterhome.herokuapp.com/",
      github: "https://github.com/NikTern/Furry-Foster-Home.git"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: img3,
      address: "https://sandy5433.github.io/Weather-dashboard/",
      github: "https://github.com/Sandy5433/Weather-dashboard.git"
    },
    {
      id: 4,
      title: "Tech blog",
      image: img4,
      address: "https://boiling-savannah-84115.herokuapp.com/",
      github: "https://github.com/Sandy5433/Tech-blog.git"
    },
    {
      id: 5,
      title: "Note Taker",
      image: img5,
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
