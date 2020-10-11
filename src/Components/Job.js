import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';



const Job = (props) => {
    let paragraphs = props.job.description.split('</p>')
    let firstparagraph = paragraphs[0];
    
    return (  
        <div className='job'>
            <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>
    <img className='movie-img' src={props.job.logo} />
    <Card.Link target='_blank' href={`${props.job.url}`}>{props.job.company}</Card.Link> 
    {/* add url to backend */}
    
    </Card.Header>
    
                <Card.Body>
                <Card.Title>{props.job.title}</Card.Title>
               
                <Card.Text>
                    {props.job.location}
                </Card.Text>
                </Card.Body>
                <small></small>
            </Card>
        </div>
    );
}
 
export default Job;