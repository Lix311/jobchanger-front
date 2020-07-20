import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  state = {  }
  
  
  loginHandler = (username, password) => {
    console.log(username, password)
  }
  
  render() { 
    return (  
      <div className="App">
        <MainContainer 
          login = {this.loginHandler}
        />
    </div>
    );
  }
}
 
export default App;


