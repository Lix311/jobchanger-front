import React from 'react';
import Job from '../Components/Job'

const JobsContainer = (props) => {
    return (  
        <div>
            <h3>jobs container</h3>
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