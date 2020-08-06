import React from 'react';
import {Form} from 'react-bootstrap'




const AddJobForm = () => {
    return (  
        <div>
            <h1>Add a Job</h1>
            <Form>
  <Form.Group controlId="formGroupCompany">
    <Form.Label>Company</Form.Label>
    <Form.Control type="company" placeholder="Enter company" />
  </Form.Group>
  <Form.Group controlId="formGroupTitle">
    <Form.Label>Job Title</Form.Label>
    <Form.Control type="title" placeholder="Enter Job Title" />
  </Form.Group>
</Form>
        </div>
    );
}
 
export default AddJobForm;