import React, { Component } from 'react';
import {Modal, Form, Button, Card} from 'react-bootstrap'
import '../App.css'

// make this have state to hold values?

class JobDetails extends Component {
  state = {  
    
  }

    render() { 
    // if not true show static modal
        return (  
            
      <div class='jobdetails'>
           
           {/* <Modal show={this.props.show} onHide={this.props.onHide} animation={false}> */}
           <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
          
          {/* </StyledForm> */}
        </div>
    );
  }
}
 
export default JobDetails;
