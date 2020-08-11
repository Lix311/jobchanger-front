import React from 'react';
import {Table,Button} from 'react-bootstrap'
import styled from 'styled-components'
import AddJobForm from '../Components/AddJobForm';

const StyledTable = styled.div`
display: flex;
width: 100%;
padding: 10px;
`
const StyledForm = styled.div`
float: right;
border: solid;
width: 400px;
height: 275px;
padding: 50px;
text-align: center;
margin: 15px;



`


const UserJobsContainer = (props) => {
    return (  
        <div>
           <StyledTable>
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Contact</th>
                    <th>Action</th>
                    <th>Job Title</th>
                    <th>Notes</th>
                    <th>Next Step</th>
                    
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Google</td>
                    <td>Applied</td>
                    <td>John.Smith@google.com</td>
                    <td>Phone Screening</td>
                    <td>FullStack Developer </td>
                    <td>They havent answered, need to follow up.</td>
                    <td>Contact John to schedule phone screening</td>
                    <td><Button variant="warning">Edit</Button>{' '}</td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                    <td>1</td>
                    <td>Google</td>
                    <td>Applied</td>
                    <td>John.Smith@google.com</td>
                    <td>Phone Screening</td>
                    <td>FullStack Developer </td>
                    <td>They havent answered, need to follow up.</td>
                    <td>Contact John to schedule phone screening</td>
                    <td><Button variant="success">Edit</Button>{' '}</td>
                    </tr>
                    </tbody>
            </Table>
            
            <StyledForm>
                <AddJobForm/> 
            </StyledForm> 
            
            
            </StyledTable>
            
              
        </div>
        
    );
}
 
export default UserJobsContainer;