import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Header () {
  return (
    
    <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">Fly Log</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">      
          <ReactBootStrap.Nav.Link href="#NewItem">Menu</ReactBootStrap.Nav.Link>  
          <ReactBootStrap.Nav.Link href="#pricing">See Your Fish</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
    );
  }

export default Header;