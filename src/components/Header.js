import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <Navbar bg="dark">
        <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
        <Link to="/signin"><Navbar.Brand>Sign In</Navbar.Brand></Link>
      </Navbar>
      </React.Fragment>
  );
}

export default Header;