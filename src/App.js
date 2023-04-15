import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { useState } from "react";
import Portfolio from "./components/Portfolio";

function App() {
  // var currentPage = "Resume";
  const [currentPage, setCurrentPage] = useState("About")

  function renderPage () {
    if(currentPage == "About") {
      return <About />
    } else if(currentPage == "Contact") {
      return <Contact />
    } else if(currentPage == "Resume") {
      return <Resume />
    } else if(currentPage == "Portfolio") {
      return <Portfolio />
    }
  }

  return (
    <div>
      <Header setCurrentPage={setCurrentPage}/>
      <Container>
        {renderPage()}
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
