import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  state = {  
    currentUser: null
  }

  setUser = (user) => {
    this.setState({currentUser: user})
  }
  
  loginHandler = (username,password) => {
    console.log(username,password,'...signed in')

    fetch('http://localhost:3001/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer <token>`
      }
    })
    .then(r => r.json())
    .then(console.log)
}
  
  
  
signUpHandler = (username, password, email, avatar) => {
  console.log(username,password,'logging in...')

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
          login = {this.loginHandler}
          signup = {this.signUpHandler}
        />
    </div>
    );
  }
}
 
export default App;


