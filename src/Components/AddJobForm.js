import React from 'react';
import {Form, Button} from 'react-bootstrap'




const AddJobForm = (props) => {
    return (  
      <div>
      <h1>Add a Job</h1>
      <Form onSubmit = {(event => props.addJob(event))}>
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
 
export default AddJobForm;