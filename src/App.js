import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  
  
  state = {  
    currentUser: '',
    jobs: [],
    userJobs: [],
    staticJobs: [],
    userCurrentJobs: [], // pass this to userjobscontainer
    currentPage: 1,
    postsPerPage: 5
  }

  componentDidMount(){
    fetch('http://localhost:3001/jobs')
    .then(res => res.json())
    .then(data => this.setState({jobs: data}))
    fetch('http://localhost:3001/static_jobs')
    .then(res => res.json())
    .then(data => this.setState({staticJobs: data}))
  }

  editJob = (state) => {
    let target = this.state.userCurrentJobs.find(currentjob => currentjob.id === state.userjobId)

    if (target === undefined){
      return 
    }
  
  fetch(`http://localhost:3001/userjobs/${state.userjobId}`, {
      method:'PATCH',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
      status: state.status,
      contact: state.contact,
      action: state.action,
      notes: state.notes,
      next_step: state.next_step
      })
    })
    .then(res => res.json())
    .then(data => {
      let target = this.state.userCurrentJobs.find(currentgame => currentgame.id === state.userjobId)
      let index = this.state.userCurrentJobs.indexOf(target)
      let updatedJobs = [...this.state.userCurrentJobs]
  
      updatedJobs[index].status = state.status
      updatedJobs[index].contact = state.contact
      updatedJobs[index].action = state.action
      updatedJobs[index].notes = state.notes
      updatedJobs[index].next_step = state.next_step
      
      this.setState({userCurrentJobs: updatedJobs})


    })


    // take state and patch backend 
}

deleteJob = (job) => {
  console.log(job) // use this to filter userjobs

  fetch(`http://localhost:3001/userjobs/${job.id}`, {
      method:'DELETE',
      headers: {"Content-Type": "application/json"}
    }).then(data => {
      const filteredUserJobs = this.state.userCurrentJobs.filter(filteredjob => filteredjob != job)
      this.setState({userCurrentJobs: filteredUserJobs})
    })
    // I needed to change email
}

  addJob = (event) => {
    event.preventDefault()
    let newJob = {
      user_id: this.state.currentUser.id,
      job_id: this.state.staticJobs.length + 1, 
      company: event.target['formGroupCompany'].value,
      title: event.target['formGroupTitle'].value,
      status: event.target['formGroupStatus'].value,
      action: event.target['formGroupAction'].value,
      notes: event.target['formGroupNotes'].value,
      next_step: event.target['formGroupNextStep'].value, // this goes to userjobs
      contact: event.target['formGroupContact'].value
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
    this.setState({userCurrentJobs: [...this.state.userCurrentJobs, newJob]})
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
    fetch('http://localhost:3001/userjobs')
    .then(res => res.json())
    .then(data => { 
      this.setState({userJobs: data})
      const currentUserJobs = this.state.userJobs.filter(job => job.user_id === this.state.currentUser.id)
      this.setState({userCurrentJobs: currentUserJobs}) 
    })
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

paginate = (num) => {
  this.setState({currentPage: num}) 
} 

prevPage = () => {
  if (this.state.currentPage >= 2){   
    this.setState({currentPage: this.state.currentPage - 1})
  }
}

nextPage = () => {
  let numOfPages = this.state.userCurrentJobs.length / this.state.postsPerPage
  
  if (this.state.currentPage <= numOfPages){
    this.setState({currentPage: this.state.currentPage + 1})
  }
  
}
// put this in app to change the slice values 
  
  render() { 
    const {currentPage, postsPerPage, userCurrentJobs} = this.state;

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = userCurrentJobs.slice(indexOfFirstPost, indexOfLastPost)
    return (  
      <div className="App">
        <MainContainer 
          jobs = {this.state.jobs}
          login = {this.loginHandler}
          signup = {this.signUpHandler}
          addJob = {this.addJob}
          editJob = {this.editJob}
          deleteJob = {this.deleteJob}
          currentJobs ={currentPosts}
          totalJobs = {this.state.userCurrentJobs}
          paginate = {this.paginate}
          postsPerPage = {this.state.postsPerPage}
          prevPage = {this.prevPage}
          nextPage = {this.nextPage}
        />
    </div>
    );
  }
}
 
export default App;


