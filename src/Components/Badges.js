import React, { Component } from 'react';
import {ListGroup,Button,Badge} from 'react-bootstrap'

class Badges extends Component {
    state = {  }
    render() { 
        return (  
            <div className='badges'>
            <ListGroup border="primary">
            <ListGroup.Item>
                <Button variant="success">
                    Tasks <Badge variant="light">9</Badge>
                    <span className="sr-only">unread messages</span>
                </Button>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button variant="success">
                    Next Meeting <Badge variant="light">9</Badge>
                    <span className="sr-only">unread messages</span>
                </Button>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button variant="success">
                    Next Interview <Badge variant="light">9</Badge>
                    <span className="sr-only">unread messages</span>
                </Button>
            </ListGroup.Item>
            </ListGroup>
            </div>
        );
    }
}
 
export default Badges;