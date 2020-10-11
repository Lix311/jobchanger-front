import React, { Component } from 'react';
import Job from '../Components/Job'
import JobDetails from '../Components/JobDetails'


class JobsContainer extends Component {
    state = {  
        addModalShow: true
    }
    
    formPopUp = () =>{
        this.setState({addModalShow : true})
    }

    addModalClose = () => {
        this.setState({addModalShow: false})
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
                    />
                )}
                </div>
                <JobDetails show={this.state.addModalShow} onHide={this.addModalClose}/> 
            </div>
        );
    }
}
 
export default JobsContainer;

