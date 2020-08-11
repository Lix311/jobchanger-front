import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'
import { connect } from 'react-redux'
import { fetchCreator } from './reducer'

class App extends Component {
  
  
  state = {  
    currentUser: '',
    jobs: [],
  }

  addJob = (event) => {
     
    let company = event.target['formGroupCompany'].value // you can prob refactor this
    let title = event.target['formGroupTitle'].value
    
    console.log(company,title)
  }
  
  componentDidMount(){
    // fetch('http://localhost:3001/jobs')
    // .then(res => res.json())
    // .then(data => this.setState({jobs: data}))
    // .then(console.log(this.state.jobs))
    this.props.fetchJobs()
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

const mdp = dispatch => {
  return {
    fetchJobs: () => dispatch(fetchCreator())
  }
}
export default connect (null, mdp)(App);


