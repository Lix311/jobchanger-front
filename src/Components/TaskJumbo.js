import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

class TaskJumbo extends Component {
    state = {  }
    render() { 
        return (  
            <Jumbotron>
                <h1>Complete Your Tasks!</h1>
                <p>
                    This is where you will keep track of all your meetings, interviews, and goals for the week.
                    You're doing great. Keep it up!
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}
 
export default TaskJumbo;