import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import SignOut from './SignOut'

function Header () {
  const fh = {
    color: 'black'
  }
  return (
    // <div style={fh}>
    //   <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    //     {/* <SignOut /> */}
    //     <ReactBootStrap.Navbar.Brand href="#home">Fly Log</ReactBootStrap.Navbar.Brand>
    //     <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    //       <ReactBootStrap.Nav className="mr-auto"> 
      
    //         <ReactBootStrap.Nav.Link href="#NewItem"><SignOut/></ReactBootStrap.Nav.Link>  
    //         <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link> 
    //       </ReactBootStrap.Nav>
    //     </ReactBootStrap.Navbar.Collapse>  
    //   </ReactBootStrap.Navbar>
    // </div>
    <Navbar>
      <Navbar.Brand href="#home">FlyLog</Navbar.Brand>
      <Navbar.Brand href="#home"><SignOut/></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Signed in as: <a href="#login">drewjparker91@gmail.com</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
    
}

export default Header;