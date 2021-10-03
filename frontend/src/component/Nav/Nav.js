import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import navElements from "./navElements";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";




function NavBars () {
  
  return(

 <>
 <navElements />
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed='top' variant="dark">
    <Container>
    <Navbar.Brand href="#home">More kombucha</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="../Pages/About" >About</Nav.Link>
        <Nav.Link href="/Products">Products</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/form1">Form</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</>


  
 

  
  );
  
}




export default NavBars;



