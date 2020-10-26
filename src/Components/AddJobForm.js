import React, { Component } from 'react';
import {Modal, Form, Button, Card} from 'react-bootstrap'
import '../App.css'

// make this have state to hold values?

class AddJobForm extends Component {
  state = {  
    formDisplay: false
    // if status is past interviewing let the interview dates pop up
  }


  toggleForm = () => {
    this.setState({formDisplay: !this.state.formDisplay})
    console.log('click')

}


clickSubmit = (event, onHide) => {
  {/* <Form onSubmit={(event) => this.props.addJob(event)}> */}
  this.props.addJob(event);
  onHide();
}
  
  render() { 
    return (  
      <div>
            {/* <StyledForm primary={this.state.formDisplay}> */}
            {/* <Form className={this.state.formDisplay ? 'jobformopen'} onSubmit={(event) => this.props.addJob(event)}> */}

            {/* <Form>
            <h2>Add Custom Job</h2>
            <br/>
            <Button onClick={this.toggleForm}>Add Job</Button> */}
           
           
           {/* <div> */}
           <Modal
      {...this.props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
        {/* <Form onSubmit={(event) => this.props.addJob(event)}> */}
        <Form onSubmit={(event) => this.clickSubmit(event,this.props.onHide)}>
           <Form.Group controlId="formGroupCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="company" placeholder="Enter Company" />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="title" placeholder="Enter Job Title" />
            </Form.Group>
            <Form.Group controlId="formGroupStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select">
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Closed</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formGroupNextStep">
            <Form.Label>Next Step</Form.Label>
            <Form.Control as="select">
              <option>Waiting</option>
              <option>Phone Screen</option>
              <option>Cultural Interview</option>
              <option>Tech Interview</option>
            </Form.Control>
          </Form.Group>
            <Form.Group controlId="formGroupDate">
              <Form.Label>Interview Date</Form.Label>
              <Form.Control type="date" placeholder="Enter Current Action" />
            </Form.Group>
            <Form.Group controlId="formGroupTime">
              <Form.Label>Interview Time</Form.Label>
              <Form.Control type="time" placeholder="Enter Current Action" />
            </Form.Group>
            <Form.Group controlId="formGroupNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter a Note" />
            </Form.Group>
            <Form.Group controlId="formGroupContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control as="textarea" rows="2" placeholder="Enter Contact Info"/>
            </Form.Group>
            <br/>
            <div class='col text-center'>
              <Button variant='primary' type='submit'>Submit</Button>
            </div>
          </Form> 
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
          
          {/* </StyledForm> */}
        </div>
    );
  }
}
 
export default AddJobForm;
