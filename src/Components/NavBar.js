import React from 'react';
import styled from 'styled-components'
import {Navbar as BootstrapNav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const StyledLinks = styled.div`

line-height: 1em;
    display: flex;
    text-decoration: none;
    justify-content: space-evenly;
    width: 250px;

`




const NavBar = (props) => {
    return (  
        <BootstrapNav fixed='top' bg="light" variant="light">
            <BootstrapNav.Brand href="/login">JobChanger</BootstrapNav.Brand>
            {/* <Nav className="mr-auto"> */}
            <StyledLinks>
              <Link to="/jobsearch">Jobs</Link>
              {/* <Link to="/tasks">Tasks</Link> */}
              <Link to="/jobs">Planner</Link>
            </StyledLinks>
            {/* </Nav> */}
        </BootstrapNav>
    );
}
 
export default NavBar;