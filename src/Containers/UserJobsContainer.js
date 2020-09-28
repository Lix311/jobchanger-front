import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap'
import AddJobForm from '../Components/AddJobForm';
import JobRow from '../Components/JobRow'
import PageNumber from '../Components/PageNumber'
import '../App.css'
import TableBar from '../Components/TableBar'


class UserJobsContainer extends Component {
    state = {  }

    
    
    render() { 
        
        let totalPosts = this.props.totalJobs.length 
        
        return (  

            <div className='userjobstable'>

                <TableBar addJob={this.props.addJob} searchJob={this.props.searchJob}/>  
                <Table striped bordered hover size="sm">
                    
                    <thead>
                        <tr>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Contact</th>
                        <th>Action</th>
                        <th>Job Title</th>
                        <th>Notes</th>
                        <th>Next Step</th>
                        </tr>
                        </thead>
                       
                        {this.props.currentJobs ? this.props.currentJobs.sort((a,b) => a.id - b.id).map(job => 
                                <tbody>
                                <JobRow key={job.id} job={job} editJob={this.props.editJob} deleteJob={this.props.deleteJob}/> 
                                </tbody>
                            ) : ''}
                     
                    </Table>
                     {/* <AddJobForm addJob={this.props.addJob}/>   */}
                    <PageNumber 
                        postPerPage={this.props.postsPerPage} 
                        totalPosts={totalPosts} 
                        paginate={this.props.paginate}
                        prevPage = {this.props.prevPage}
                        nextPage = {this.props.nextPage}
                        />

                    
            </div>
                
            );
        }
        
    }

 
export default UserJobsContainer;

    
 
