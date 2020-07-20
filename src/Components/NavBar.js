import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'

const NavBar = (props) => {
    return (  
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">JobChanger</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/jobsearch">Jobs</Nav.Link>
      <Nav.Link href="/tasks">Tasks</Nav.Link>
      <Nav.Link href="/jobs">Organize</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
    );
}
 
export default NavBar;