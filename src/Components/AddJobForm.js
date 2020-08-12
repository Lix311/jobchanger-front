import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const handleSubmit = event => {
  event.preventDefault()
  let company = event.target['formGroupCompany'].value // you can prob refactor this
  let title = event.target['formGroupTitle'].value
  
  return {company, title}
}

const AddJobForm = (props) => {
    return (  
      <div>
      <h1>Add a Job</h1>
      <Form onSubmit = {(event) => props.addJob(event)}>
<Form.Group controlId="formGroupCompany">
<Form.Label>Company</Form.Label>
<Form.Control type="company" placeholder="Enter company" />
</Form.Group>
<Form.Group controlId="formGroupTitle">
<Form.Label>Job Title</Form.Label>
<Form.Control type="title" placeholder="Enter Job Title" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
  </div>
    );
}

const mdp = dispatch => {
  return {
    addJob: (event) => dispatch({type: 'ADD_JOB', payload: {event}})
  }
}
export default connect (null, mdp)(AddJobForm);
 