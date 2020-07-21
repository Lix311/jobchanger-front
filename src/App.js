import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  state = {  }
  
  loginHandler = (username,password) => {
    console.log(username,password,'...signed in')
  }
  
  
  
  signUpHandler = (username, password, email, avatar) => {
    console.log(username,password,'logging in...')

    fetch('http://localhost:3001/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
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
  .then(console.log)
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


