import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap'
import styled from 'styled-components'
import AddJobForm from '../Components/AddJobForm';
import JobRow from '../Components/JobRow'

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
                        {console.log('sortedjobs', this.props.userJobs)}
                        {this.props.userJobs ? this.props.userJobs.sort((a,b) => a.id - b.id).map(job => 
                                <tbody>
                                <JobRow key={job.id} job={job} editJob = {this.props.editJob}/> 
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

    
 
