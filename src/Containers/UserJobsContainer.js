import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap'
import styled from 'styled-components'
import AddJobForm from '../Components/AddJobForm';

const StyledTable = styled.div`
display: flex;
width: 100%;
padding: 10px;
`
// const StyledForm = styled.div`
// float: right;
// border: solid;
// width: 400px;
// height: 100%;
// padding: 50px;
// text-align: center;
// margin: 15px;
// `

class UserJobsContainer extends Component {
    state = {  }
    
   
    
    render() { 
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
                        
                        {this.props.userJobs ? this.props.userJobs.map(job => 
                                <tbody>
                                    {console.log(this.props.userJobs)}
                                <tr>
                                <td>{job.id}</td>
                                <td>{job.company}</td>
                                <td>{job.status}</td>
                                <td>{job.contact}</td>
                                <td>{job.action}</td>
                                <td>{job.title}</td>
                                <td>{job.notes}</td>
                                <td>{job.next_step}</td>
                                <td><Button variant="warning">Edit</Button>{' '}</td>
                                </tr>
                                </tbody>
                            ) : ''}
                        
                    </Table>
                    
                    {/* <StyledForm> */}
                        <AddJobForm addJob={this.props.addJob}/> 
                    {/* </StyledForm>  */}
                    
                    
                    </StyledTable>
                    
                      
                </div>
                
            );
        }
        
    }

 
export default UserJobsContainer;

    
 
