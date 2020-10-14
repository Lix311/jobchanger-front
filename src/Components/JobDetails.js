import React, { Component } from 'react';
import {Modal, Form, Button, Card, Row} from 'react-bootstrap'
import '../App.css'
import {Markup} from 'interweave'

// make this have state to hold values?

class JobDetails extends Component {
  state = {  
  }


    render() { 
    // if not true show static modal
        return (  
            
      <div class='jobdetails'>
           {console.log(this.props.currentDetails)}
           {/* <Modal show={this.props.show} onHide={this.props.onHide} animation={false}> */}
           
           <Modal.Dialog>
  <Modal.Header>
  {this.props.currentDetails.logo ? <img className='movie-img' src={this.props.currentDetails.logo}/> : ''}
      <Modal.Title>{this.props.currentDetails.title}</Modal.Title>
        <small>{this.props.currentDetails.company} </small>
        <small>{this.props.currentDetails.location} </small>
    </Modal.Header>
    
  <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
       <Markup content={this.props.currentDetails.description}/>
       
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>


{/* Try this again if you can ask for help with custom Modal Header */}

{/* <Card>
  <Card.Header>
      <h5>{this.props.currentDetails.title}</h5>
        <small>{this.props.currentDetails.company} {'|'} {this.props.currentDetails.location}</small>
       
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
          
          {/* </StyledForm> */}
        </div>
    );
  }
}
 
export default JobDetails;
