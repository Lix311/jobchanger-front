import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'


// make this have state to hold values?

class AddJobForm extends Component {
  state = {  
  }
  
  render() { 
    return (  
      <div>
            <h1>Add a Job</h1>
            <Form onSubmit={(event) => this.props.addJob(event)}> 
            <Form.Group controlId="formGroupCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="company" placeholder="Enter company" />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="title" placeholder="Enter Job Title" />
            </Form.Group>
            <Form.Group controlId="formGroupStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control type="status" placeholder="Enter status" />
            </Form.Group>
            <Form.Group controlId="formGroupAction">
              <Form.Label>Action</Form.Label>
              <Form.Control type="action" placeholder="Enter current action" />
            </Form.Group>
            <Form.Group controlId="formGroupNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="formGroupNextStep">
              <Form.Label>Next Step</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </div>
    );
  }
}
 
export default AddJobForm;
