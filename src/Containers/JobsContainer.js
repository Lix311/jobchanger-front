import React from 'react';
import Job from '../Components/Job'

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
        </div>
    );
}
 
export default JobsContainer;