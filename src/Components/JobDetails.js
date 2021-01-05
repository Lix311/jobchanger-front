import React, { Component } from 'react';
import {Modal, Form, Button, Card, Row, Carousel} from 'react-bootstrap'
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
           
        { this.props.show === false ? <Carousel>
  
  <Carousel.Item>
    
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5408915/pexels-photo-5408915.jpeg?cs=srgb&dl=pexels-olya-kobruseva-5408915.jpg&fm=jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <div class="car-text">
        <h3>Schedule</h3>
        <p>Take a look at the JobChanger Calender to keep track of your next interview. </p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  


  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4491469/pexels-photo-4491469.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4491469.jpg&fm=jpg"

      alt="Second slide"
    />
<Carousel.Caption>
      <div class="car-text">
        <h3>Organize</h3>
        <p>Add, Delete, and Edit jobs in the JobChanger Planner. Keep up-to-date on times, dates, and other valuable information.  </p>
      </div>

    </Carousel.Caption>
  </Carousel.Item>
  
  
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5424647/pexels-photo-5424647.jpeg?cs=srgb&dl=pexels-amina-filkins-5424647.jpg&fm=jpg"

      alt="Third slide"
    />

    <Carousel.Caption>
      <div class="car-text">
        <h3>Make a Change</h3>
        <p>Start your job search using JobChanger today and land the job you've always dreamed of.</p>
      </div>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel> : <Modal.Dialog>
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
