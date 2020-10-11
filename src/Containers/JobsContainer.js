import React, { Component } from 'react';
import Job from '../Components/Job'
import JobDetails from '../Components/JobDetails'


class JobsContainer extends Component {
    state = {  
        addModalShow: true,
        currentDetails: ''
    }
    
    formPopUp = () =>{
        this.setState({addModalShow : true})
    }

    addModalClose = () => {
        this.setState({addModalShow: false})
    }

    changeDetailsHandler = (job) => {
        this.setState({currentDetails: job})
    }
    // show={show} onHide={onHide} animation={false}
    render() { 
        return (  
            <div className='jobpage'>
                
                
                <div className='jobs'>
                {this.props.jobs.map(job => 
                    <Job 
                        job={job}
                        key={job.id}
                        change={this.changeDetailsHandler} //link will send that job as current Details and pass that job to job details
                    />
                )}
                </div>
                <JobDetails currentDetails={this.state.currentDetails} show={this.state.addModalShow} onHide={this.addModalClose}/> 
            </div>
        );
    }
}
 
export default JobsContainer;

