import React from 'react';
import styled from 'styled-components'
import {Navbar as BootstrapNav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const StyledLinks = styled.div`

line-height: 1em;
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    width: 250px;

`




const NavBar = (props) => {
    return (  
        <BootstrapNav bg="light" variant="light">
            <BootstrapNav.Brand href="/login">JobChanger</BootstrapNav.Brand>
            {/* <Nav className="mr-auto"> */}
            <StyledLinks>
              <Link to="/jobsearch">Jobs</Link>
              <Link to="/tasks">Tasks</Link>
              <Link to="/jobs">Organize</Link>
            </StyledLinks>
            {/* </Nav> */}
        </BootstrapNav>
    );
}
 
export default NavBar;