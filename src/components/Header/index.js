import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({setCurrentPage}){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Sandy Hung</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => {setCurrentPage("About")}}>About Me</Nav.Link>
            <Nav.Link href="#" onClick={() => {setCurrentPage("Portfolio")}}>Portfolio</Nav.Link>
            <Nav.Link href="#" onClick={() => {setCurrentPage("Contact")}}>Contact</Nav.Link>
            <Nav.Link href="#" onClick={() => {setCurrentPage("Resume")}}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;