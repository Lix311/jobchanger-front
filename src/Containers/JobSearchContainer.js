import React from 'react';
import JobsContainer from './JobsContainer'
import { connect } from 'react-redux'



const JobSearchContainer = (props) => {
    return (  
        <div>
            
           <h2>JobSearchContainer</h2>
           <JobsContainer
            jobs = {props.jobs}
           />
           
        </div>
    );
}

const msp = state => {
    return {
        jobs: state.jobs
    }
}
 
export default connect(msp)(JobSearchContainer);