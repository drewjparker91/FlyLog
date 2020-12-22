import React from "react";

function Header(){
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fly Log</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;






    {/* // <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    //   <ReactBootStrap.Navbar.Brand href="#home">The Holy Spirits</ReactBootStrap.Navbar.Brand>
    //   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    //     <ReactBootStrap.Nav className="mr-auto">      
    //       <ReactBootStrap.Nav.Link href="#NewItem">Home</ReactBootStrap.Nav.Link>  
    //       <ReactBootStrap.Nav.Link href="#pricing">Sign In</ReactBootStrap.Nav.Link> 
    //     </ReactBootStrap.Nav>
    //     <ReactBootStrap.Nav>
    //       <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
    //     </ReactBootStrap.Nav>
    //   </ReactBootStrap.Navbar.Collapse>  
    // </ReactBootStrap.Navbar> */}
    
    
    
    {/* // <React.Fragment>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/signin">Sign In</Link>
    //     </li>
    //   </ul>
    //   <hr/>
    // </React.Fragment> */}
    
 

{/* export default Header; */}

{/* // <React.Fragment>
//   <Navbar bg="dark">
//     <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
//     <Link to="/signin"><Navbar.Brand>Sign In</Navbar.Brand></Link>
//   </Navbar>
// </React.Fragment> */}