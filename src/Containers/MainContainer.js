import React, {Component} from 'react';
import JobsContainer from './JobsContainer'
import TaskContainer from './TaskContainer'
import UserJobsContainer from './UserJobsContainer'
import NavBar from '../Components/NavBar'
import Login from '../Components/Login'
import { Route, Switch } from 'react-router-dom';
import Signup from '../Components/Signup'

class MainContainer extends Component {
    render() {
        
    return (  
        <div>
            <NavBar />
            <Switch>
                <Route
                
                    exact path="/jobsearch"
                    render={()=>
                        <JobsContainer
                        totalGitJobs = {this.props.totalGitJobs}
                        currentGitJobs = {this.props.currentGitJobs}
                        postsPerPage={this.props.postsPerPage} 
                        paginate={this.props.paginate}
                        prevPage = {this.props.prevPage}
                        nextPage = {this.props.nextPage}
                        searchGit = {this.props.searchGit}
                        
                        />
                    }
                /> 
                
                <Route
                    exact path="/tasks"
                    render={()=>
                        <TaskContainer 
                        currentJobs={this.props.currentJobs}
                        />
                    }
                /> 
            
                <Route
                    exact path="/jobs"
                    render={()=>
                        <UserJobsContainer 
                        totalJobs={this.props.totalJobs}
                        addJob={this.props.addJob}
                        currentJobs={this.props.currentJobs}
                        editJob={this.props.editJob}
                        deleteJob={this.props.deleteJob}
                        paginate={this.props.paginate}
                        postsPerPage={this.props.postsPerPage}
                        prevPage = {this.props.prevPage}
                        nextPage = {this.props.nextPage}
                        searchJob={this.props.searchJob}
                        search = {this.props.search}
                        />
                    }
                />

                <Route
                    exact path="/login"
                    render={()=>
                        <Login 
                        login = {this.props.login}
                        signup ={this.props.signup}
                        />
                    }
                />

                <Route
                    exact path="/signup"
                    render={()=>
                        <Signup 
                        login = {this.props.login}
                        signup ={this.props.signup}
                        />
                    }
                />

            </Switch>
        </div>
    );
}
}
export default MainContainer;