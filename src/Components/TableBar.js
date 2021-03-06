import React, { Component } from 'react';
import '../App.js'
import {Nav, Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import AddJobForm from '../Components/AddJobForm'

class TableBar extends Component {
    state = {  
        addModalShow: false
    }
    
    formPopUp = () =>{
        this.setState({addModalShow : true})
    }

    addModalClose = () => {
        this.setState({addModalShow: false})
    }
    
    
    render() { 
        return (  
            <div>
           <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">My Jobs</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="mr-auto">
                    <Button onClick={this.formPopUp} variant="primary">Add job</Button>
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Form inline>
                    <FormControl onChange={(event) => this.props.searchJob(event)} type="text" placeholder="Search Jobs" className="mr-sm-2" />
                    </Form>
                {/* </Navbar.Collapse> */}
            </Navbar>
            <AddJobForm addJob={this.props.addJob} show={this.state.addModalShow} onHide={this.addModalClose}/>
            </div>
        );
    }
}
 
export default TableBar;