import React from 'react';
import Job from '../Components/Job'
import JobDetails from '../Components/JobDetails'

const JobsContainer = (props) => {
    return (  
        <div>
            <small>jobs container</small>
            {props.jobs.map(job => 
                <Job 
                    job={job}
                    key={job.id}
                />
            )}
            <JobDetails show={this.state.addModalShow} onHide={this.addModalClose}/> 
                {/* change to smart component */}
        </div>
    );
}
 
export default JobsContainer;