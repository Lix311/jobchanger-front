import React from 'react';
import JobsContainer from './JobsContainer'


const JobSearchContainer = (props) => {
    return (  
        <div>
            
           <h2>JobSearchContainer</h2>
           <JobsContainer
            jobs = {props.jobs}
            addJob = {props.addJob}
           />
           
        </div>
    );
}
 
export default JobSearchContainer;