import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap'
import styled, {css, keyframes} from 'styled-components'

// make this have state to hold values?

const expand = keyframes`
from {
  transform: translateY(-100%);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`
const animationRule = css`
${expand} 2s 0s both
`

const StyledForm = styled.div`
float: right;
border: solid;
width: 400px;
height: ${(props) => props.primary ? '100%' : '200px'};
padding: 50px;
text-align: center;
margin: 15px;
`



class AddJobForm extends Component {
  state = {  
    formDisplay: false
  }


  toggleForm = () => {
    this.setState({formDisplay: !this.state.formDisplay})
    console.log('click')

}
  
  render() { 
    return (  
      <div>
            <StyledForm primary={this.state.formDisplay}>

            <h2>Add Custom Job</h2>
            <br/>
            <Button onClick={this.toggleForm}>Add Job</Button>
            
            <Form onSubmit={(event) => this.props.addJob(event)}> 
           
           { this.state.formDisplay ? 
           
           <div>
            <br/>
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
              <Form.Control type="status" placeholder="Enter Status" />
            </Form.Group>
            <Form.Group controlId="formGroupAction">
              <Form.Label>Action</Form.Label>
              <Form.Control type="action" placeholder="Enter Current Action" />
            </Form.Group>
            <Form.Group controlId="formGroupNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter a Note" />
            </Form.Group>
            <Form.Group controlId="formGroupNextStep">
              <Form.Label>Next Step</Form.Label>
              <Form.Control as="textarea" rows="2" placeholder="Enter Next Step" />
            </Form.Group>
            <Form.Group controlId="formGroupContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control as="textarea" rows="2" placeholder="Enter Contact Info"/>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
            </div> : ''}
          </Form>
          </StyledForm>
        </div>
    );
  }
}
 
export default AddJobForm;
