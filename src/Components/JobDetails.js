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

           
           {/* <Modal show={this.props.show} onHide={this.props.onHide} animation={false}> */}
           
        { this.props.show === false ? <h1>Sliding Modal</h1> : <Modal.Dialog>
  <Modal.Header>
  {console.log(this.props.show)}
  {this.props.currentDetails.logo ? <img className='movie-img' src={this.props.currentDetails.logo}/> : ''}
      <Modal.Title>{this.props.currentDetails.title}</Modal.Title>
        <small>{this.props.currentDetails.company} </small>
        <small>{this.props.currentDetails.location} </small>
    </Modal.Header>
    
  <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
       {<Markup content={this.props.currentDetails.description}/>}
  </Modal.Body>

  <Modal.Footer >
  </Modal.Footer>
</Modal.Dialog> }
</div>
    );
  }
}
 
export default JobDetails;
