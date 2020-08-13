import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  
  
  state = {  
    currentUser: '',
    jobs: [],
    userJobs: [], // pass this to userjobscontainer 
    staticJobs: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/jobs')
    .then(res => res.json())
    .then(data => this.setState({jobs: data}))
    fetch('http://localhost:3001/static_jobs')
    .then(res => res.json())
    .then(data => this.setState({staticJobs: data}))
  }

  addJob = (event) => {
    event.preventDefault()
    let newJob = {
      
      user_id: this.state.currentUser.id,
      job_id: parseInt(this.state.staticJobs.length + 1), 
      company: event.target['formGroupCompany'].value,
      title: event.target['formGroupTitle'].value,
      status: event.target['formGroupStatus'].value,
      action: event.target['formGroupAction'].value,
      notes: event.target['formGroupNotes'].value,
      next_step: event.target['formGroupNextStep'].value // this goes to userjobs
    } 

    let staticnewJob = {
      api_id: parseInt(`500${this.state.staticJobs.length + 1}`),
      company: event.target['formGroupCompany'].value,
      title: event.target['formGroupTitle'].value, 
      logo: 'custom logo', 
      description: 'custom description', 
      date: 'todays date' // this goes to static jobs
    }

    this.setState({staticJobs: [...this.state.staticJobs, staticnewJob]})
    this.setState({userJobs: [...this.state.userJobs, newJob]})
    //set state to add newJob to static jobs and post to static jobs
    //set state to userjobs and post to userjobs

    console.log(newJob)

    fetch('http://localhost:3001/static_jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({staticjob: staticnewJob})
    })
    .then(r => r.json())
    .then(json => {

      fetch('http://localhost:3001/userjobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({userjob: newJob})
      })
      .then(r => r.json())

    })
    
}

  setUser = (user) => {
    this.setState({currentUser: user})
  }
  
  loginHandler = (username,password) => {
    console.log(username,password,'...logged in')

    fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    .then(r => r.json())
.then(data => {
  if(data.errors){
    alert(data.errors)
  } else {
    console.log(data)
    this.setState({currentUser: data})
  }
})
} 
  
  
signUpHandler = (username, password, email, avatar) => {
  console.log(username,password,'signing in...')

  fetch('http://localhost:3001/api/v1/signup', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
},
body: JSON.stringify({
  user: {
    username: username,
    password: password,
    email: email,
    avatar: avatar
  }
})
})
.then(r => r.json())
.then(response => {
  if(response.errors){
    alert(response.errors)
  } else {
    console.log(response)
    this.setState({currentUser: response})

  }
})
} 
  
  render() { 
    return (  
      <div className="App">
        <MainContainer 
          jobs = {this.state.jobs}
          login = {this.loginHandler}
          signup = {this.signUpHandler}
          addJob = {this.addJob}
        />
    </div>
    );
  }
}
 
export default App;


