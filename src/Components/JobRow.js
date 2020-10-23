import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap'
import '../App.css'
import {Form} from 'react-bootstrap'

class JobRow extends Component {
    state = {  
        userjobId: null,
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
        this.setState({userjobId: this.props.job.id}) // might want to change to key 
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
        console.log('editing in JobRow')
        
    }

    saveHandler = () => {
        this.setState({editing: !this.state.editing})
        this.props.editJob(this.state)
        // call editJob in app.js
    }

    handleChange = event => {
       this.setState({[event.target.name]: event.target.value})

    }
    
    
    render() { 
        return (  

            // add onChange to each <td><input>
            // also have to persist to backend, update userjob in app.js when clicking save button  
            
            <tr>
            <td> {this.state.company}</td> 
            <td>{this.state.editing ? <input name='status'onChange={event => this.handleChange(event)} value={this.state.status}/> : this.state.status}</td>
            <td>{this.state.editing ? <input name='contact' onChange={event => this.handleChange(event)} value={this.state.contact}/> : this.state.contact}</td>
            <td>{this.state.editing ? <input name='action' onChange={event => this.handleChange(event)} value={this.state.action}/> : this.state.action}</td>
            <td>{this.state.title}</td>
            <td>{this.state.editing ? <input name='notes' onChange={event => this.handleChange(event)} value={this.state.notes}/> : this.state.notes}</td>
            <td>{this.state.editing ? <input name='next_step' onChange={event => this.handleChange(event)} value={this.state.next_step}/> : this.state.next_step}</td>
            <td>{this.state.editing ? <Button onClick={this.saveHandler} variant="success">Save</Button> : <Button onClick={this.editHandler} variant="warning">✏️</Button>}</td>
            <td><Button onClick={(event) => this.props.deleteJob(this.props.job)} variant="dark">🗑️</Button></td>
            </tr>
            
            
            );
    }
}
 
export default JobRow;