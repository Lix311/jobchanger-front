import React, {Component} from 'react';
import JobSearchContainer from './JobSearchContainer'
import TaskContainer from './TaskContainer'
import UserJobsContainer from './UserJobsContainer'
import NavBar from '../Components/NavBar'
import Login from '../Components/Login'
import { Route, Switch } from 'react-router-dom';

class MainContainer extends Component {
    render() {
    return (  
        <div>
            <NavBar />
            <Switch>
                <Route
                
                    exact path="/jobsearch"
                    render={()=>
                        <JobSearchContainer 
                        jobs = {this.props.jobs}
                        
                        />
                    }
                /> 
                
                <Route
                    exact path="/tasks"
                    render={()=>
                        <TaskContainer />
                    }
                /> 
            
                <Route
                    exact path="/jobs"
                    render={()=>
                        <UserJobsContainer 
                        addJob = {this.props.addJob}
                        userJobs ={this.props.userJobs}
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

            </Switch>
        </div>
    );
}
}
export default MainContainer;