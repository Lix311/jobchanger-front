import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

class Jumbo extends Component {
    state = {  }
    render() { 
        return (  
            <Jumbotron>
                <h1>Welcome to JobChanger!</h1>
                <p>
                    A Job hunting app where you can search for jobs, organize your applications, and keep track of appointment dates!
                </p>
                <p>
                
                </p>
            </Jumbotron>
        );
    }
}
 
export default Jumbo;