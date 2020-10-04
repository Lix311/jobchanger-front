import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';



const Job = (props) => {
    let paragraphs = props.job.description.split('</p>')
    let firstparagraph = paragraphs[0];
    
    return (  
        <div>
            <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{props.job.company}</Card.Header>
                <Card.Body>
                <Card.Title>{props.job.title}</Card.Title>
                <img className='movie-img' src={props.job.logo} />
                <Card.Text>
                    {props.job.location}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Job;