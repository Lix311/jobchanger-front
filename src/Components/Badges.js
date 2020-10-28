import React, { Component } from 'react';
import {ListGroup,Button,Badge} from 'react-bootstrap'

class Badges extends Component {
    state = {  
        nextinterviewclose: false,
        jobsthisweek: '',
        upcoming: []
    }

   
    // goals button gonna need a function to look at all the timestamps and see which fall after monday
    // if time now < jobdate + 2 days then button stays red

    checkinterviews = () => {
        // got thro all userjobs dates and see if they are within 2 days

        if(this.props.currentJobs === ''){
            return 
        }
        
        this.props.currentJobs.map(job => {
            let today = new Date()
            let todaysdateplus = new Date()
            todaysdateplus.setDate(todaysdateplus.getDate() + 2)
            let interviewdate = new Date(job.job_date)

            if((today <= interviewdate) && (interviewdate < todaysdateplus)){
                
                 this.setState({nextinterviewclose: true})
                 this.setState({upcoming: [...this.state.upcoming, job.job_date]})
            }
        })
    }
    
    render() { 
        // call checkinteviews here 
       // this.checkinterviews()
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
                <Button variant = {this.state.nextinterviewclose ? 'success' : 'warning'}>
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