import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap'

class JobRow extends Component {
    state = {  
        job_id: null,
        company: '', //make this
        status: '',
        contact: '',
        action: '',
        title: '',
        notes: '',
        next_step: '',
        editing: false // toggle this with button to make input tag appear
    }

    componentDidMount(){
        this.setState({job_id: this.props.job.job_id})
        this.setState({company: this.props.job.company})
        this.setState({status: this.props.job.status})
        this.setState({contact: this.props.job.contact})
        this.setState({action: this.props.job.action})
        this.setState({title: this.props.job.title})
        this.setState({notes: this.props.job.notes})
        this.setState({next_step: this.props.job.next_step})
      }
    
    editHandler = () => {
        this.setState({editing: !this.state.editing})
    }
    
    
    render() { 
        return (  

            
            <tr>
            <td>{this.props.job.job_id}</td>
            <td> {this.state.editing ? <input value={this.state.company}/> : this.state.company}</td>
            <td>{this.state.editing ? <input value={this.state.status}/> : this.state.status}</td>
            <td>{this.state.editing ? <input value={this.state.contact}/> : this.state.contact}</td>
            <td>{this.state.editing ? <input value={this.state.action}/> : this.state.action}</td>
            <td>{this.state.editing ? <input value={this.state.title}/> : this.state.title}</td>
            <td>{this.state.editing ? <input value={this.state.notes}/> : this.state.notes}</td>
            <td>{this.state.editing ? <input value={this.state.next_step}/> : this.state.next_step}</td>
            <td>{this.state.editing ? <Button onClick={this.editHandler} variant="success">Save</Button> : <Button onClick={this.editHandler} variant="warning">Edit</Button>}</td>
            </tr>
            
            );
    }
}
 
export default JobRow;