import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import * as ReactBootStrap from "react-bootstrap";

function Header(){
  return (
    <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">The Holy Spirits</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">      
          <ReactBootStrap.Nav.Link href="#NewItem">Home</ReactBootStrap.Nav.Link>  
          <ReactBootStrap.Nav.Link href="#pricing">Sign In</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
    
    
    
    
    
    
  );
}

export default Header;

// <React.Fragment>
//   <Navbar bg="dark">
//     <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
//     <Link to="/signin"><Navbar.Brand>Sign In</Navbar.Brand></Link>
//   </Navbar>
// </React.Fragment>