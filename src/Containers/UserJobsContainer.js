import React from 'react';
import {Table} from 'react-bootstrap'
import styled from 'styled-components'
import AddJobForm from '../Components/AddJobForm';

const StyledTable = styled.div`
max-width: 75%;
display: flex;
flex-wrap: wrap;

`
const StyledForm = styled.div`
display: flex;
float: right;

`


const UserJobsContainer = (props) => {
    return (  
        <div>
           <h2>UserJobsContainer</h2>
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
                    </tr>
                    </tbody>
            </Table>
            </StyledTable>
            
            <StyledForm>
                <AddJobForm/> 
            </StyledForm> 
            
              
        </div>
        
    );
}
 
export default UserJobsContainer;