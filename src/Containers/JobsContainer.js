import React, { Component } from 'react';
import Job from '../Components/Job'
import JobDetails from '../Components/JobDetails'
import PageNumber from '../Components/PageNumber'
import SearchBar from '../Components/SearchBar'
import Jumbo from '../Components/Jumbo'


class JobsContainer extends Component {
    state = {  
        addModalShow: false,
        currentDetails: ''
    }
    
    fillInfo = () =>{
        this.setState({addModalShow : true})
    }

    

    changeDetailsHandler = (job,event) => {
        event.preventDefault();
        this.setState({currentDetails: job})
        this.setState({addModalShow: true})
        // DONT RESET ON CLICKKKKKK
    }
    // show={show} onHide={onHide} animation={false}
    render() { 
        let totalGitJobs = this.props.totalGitJobs.length 
        return (  
            
            <div>
                <SearchBar 
                    searchGit = {this.props.searchGit}
                />
                <div className='jobpage'>
                    <div className='jobs'>
                       
                            {this.props.currentGitJobs ? this.props.currentGitJobs.map(job => 
                                <Job 
                                    job={job}
                                    key={job.id}
                                    change={this.changeDetailsHandler} //link will send that job as current Details and pass that job to job details
                                />
                            ) : ''}
                        
                            <br/>
                            <PageNumber
                                    postPerPage={this.props.postsPerPage} 
                                    totalPosts={totalGitJobs} 
                                    paginate={this.props.paginate}
                                    prevPage = {this.props.prevPage}
                                    nextPage = {this.props.nextPage}
                                    />
                    </div>
                    {<JobDetails currentDetails={this.state.currentDetails} show={this.state.addModalShow}/>}
                </div>
            </div>
        );
    }
}
 
export default JobsContainer;

