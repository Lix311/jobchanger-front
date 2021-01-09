import React, { Component } from 'react';
import { withRouter,Link } from "react-router-dom";
import {Form,Button,InputGroup,FormControl} from 'react-bootstrap'
import '../App.css'


class Login extends Component {
    
    state = {  
        username: '',
        password: '',
        newusername: '',
        newpassword: '',
        newavatar: '',
        newemail:''
       
        
    }

    
    handleInput = (event) => {
        let {name,value} = event.target
        this.setState({
            [name]:value 
        })
    }

    handleNewUser = (event) => {
       
        event.preventDefault();
        let {newusername,newpassword,newemail,newavatar} = event.target
        this.props.signup(newusername.value, newpassword.value, newemail.value, newavatar.value)

        this.props.history.push('/jobsearch')
}



    handleLogin = (event) => {
        event.preventDefault();
        let {username,password} = event.target
        this.props.login(username.value, password.value)
        
        this.props.history.push('/jobsearch')
    }

    signOut = (event) => {
        event.preventDefault();
        this.props.history.push('/')
       window.location.reload();
        
    }

    signUp = (event) => {
        event.preventDefault();
        this.props.history.push('/sign-up')
    }

    

    
    
render() { 
        return (  
            <div className='login-div'>
                    
                    <Form className='login-form' onSubmit={(event) => this.handleLogin(event)}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type='username' 
                                    placeholder='Please enter your username' 
                                    id='username' 
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.handleInput} />
                                
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type='password' 
                                    placeholder='Please enter your password' 
                                    id='password' 
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleInput} />
                                
                            </InputGroup>
                        </Form.Group>
                        <br/>
                        <Button className='btn-lg btn-dark btn-block' variant="primary" type="submit">
                            Login
                        </Button>
                        <br/>
                        <div className='text-center'> Dont Have Account?
                        <br/>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </Form>
        </div>
        );
    }
}
 
export default withRouter(Login);



