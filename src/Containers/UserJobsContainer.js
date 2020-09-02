import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap'
import AddJobForm from '../Components/AddJobForm';
import JobRow from '../Components/JobRow'
import '../App.css'

class UserJobsContainer extends Component {
    state = {  }
    render() { 
        return (  

            <div className='userjobstable'>
                   {/* <StyledTable> */}
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
                                <JobRow key={job.id} job={job} editJob={this.props.editJob} deleteJob={this.props.deleteJob}/> 
                                </tbody>
                            ) : ''}
                        
                    </Table>
                    
                        <AddJobForm addJob={this.props.addJob}/> 
            </div>
                
            );
        }
        
    }

 
export default UserJobsContainer;

    
 
