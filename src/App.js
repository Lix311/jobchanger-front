import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  state = {  }
  
  loginHandler = (username,password) => {
    console.log(username,password,'...signed in')
  }
  
  
  
  signUpHandler = (username, password) => {
    console.log(username,password,'logging in...')

    fetch('http://localhost:3001/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: "sylviawoods",
      password: "whatscooking",
      email: "woods@woods.com",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
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


