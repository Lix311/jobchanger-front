import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import styled from 'styled-components'

// make this have state to hold values?

const StyledForm = styled.div`
float: right;
border: solid;
width: 400px;
height: 100%;
padding: 50px;
text-align: center;
margin: 15px;
`


class AddJobForm extends Component {
  state = {  
    formDisplay: false 
  }


  toggleForm = (event) => {
    this.setState({formDisplay: !this.state.formDisplay})
}
  
  render() { 
    return (  
      <div>
            
            <StyledForm>
            <h1>Add a Job</h1>
            <Form onClick={event => this.toggleForm(event)} onSubmit={(event) => this.props.addJob(event)}> 
           
           
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
            <Form.Group controlId="formGroupContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
           
          </Form>
          </StyledForm>
        </div>
    );
  }
}
 
export default AddJobForm;
