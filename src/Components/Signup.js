import React, { Component } from 'react';
import { withRouter,Link } from "react-router-dom";
import {Form,Button,InputGroup,FormControl} from 'react-bootstrap'
import '../App.css'
import {Route} from 'react-router-dom';


class Signup extends Component {
    
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
        
        this.props.history.push('/login')
}



    handleLogin = (event) => {
       
        event.preventDefault();
        let {username,password} = event.target
        this.props.login(username.value, password.value)

        this.props.history.push('/tasks')
    }

    signOut = (event) => {
        event.preventDefault();
        this.props.history.push('/')
       window.location.reload();
        
    }

    

    
    
render() { 
        return (  
            <div className='signup-div'>
               {/* <h1>Login</h1>
                <Form className='login-form' onSubmit={(event) => this.handleLogin(event)}>
                    <label>Username</label>
                    <br/>
                    <input 
                        type='text' 
                        placeholder='Please enter your username' 
                        id='username' 
                        name='username'
                        value={this.state.username}
                        onChange={this.handleInput}
                    />
                    <br/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input 
                        type='password' 
                        placeholder='Please enter your password' 
                        id='password' 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInput}
                    />
                    <br/>
                    <br/>
                    <input type='submit' value='Login' />
                    </Form> 
               <button onClick={this.signOut}>Log Out</button> */}
                    
                    {/* <h1>Create New User</h1>
                <form onSubmit={(event) => this.handleNewUser(event)}>
                    <label>Username</label>
                    <br/>
                    <input 
                        type='text' 
                        placeholder='Please enter your username' 
                        id='newusername' 
                        name='newusername'
                        value={this.state.newusername}
                        onChange={this.handleInput}
                    />
                    <br/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input 
                        type='password' 
                        placeholder='Please enter your password' 
                        id='newpassword' 
                        name='newpassword'
                        value={this.state.newpassword}
                        onChange={this.handleInput}
                    />
                    <br/>
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input 
                        type='text' 
                        placeholder='Please enter your email address' 
                        id='newemail' 
                        name='newemail'
                        value={this.state.newemail}
                        onChange={this.handleInput}
                    />
                    <br/>
                    <br/>
                    <label>Avatar</label>
                    <br/>
                    <input 
                        type='text' 
                        placeholder='Please enter your picture' 
                        id='newavatar' 
                        name='newavatar'
                        value={this.state.newavatar}
                        onChange={this.handleInput}
                    />
                    <br/>
                    <br/>
                    <input type='submit' value='Login' />
                    </form>  */}


                    
                    
                    
                    
                    
                    {/* new form starts here */}

                    <Form className='login-form' onSubmit={(event) => this.handleNewUser(event)}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type='text' 
                                    placeholder='Enter new username' 
                                    id='newusername' 
                                    name='newusername'
                                    value={this.state.newusername}
                                    onChange={this.handleInput} />
                                
                            </InputGroup>
                            {/* <Form.Control type="email" placeholder="Enter email" /> */}
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type='password' 
                                    placeholder='Enter new password' 
                                    id='newpassword' 
                                    name='newpassword'
                                    value={this.state.newpassword}
                                    onChange={this.handleInput} />
                                
                            </InputGroup>
                            {/* <Form.Control type="password" placeholder="Password" /> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type='email' 
                                    placeholder='Enter new email' 
                                    id='newemail' 
                                    name='newemail'
                                    value={this.state.newemail}
                                    onChange={this.handleInput} />
                                
                            </InputGroup>
                            {/* <Form.Control type="email" placeholder="Enter email" /> */}
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Avatar</Form.Label>
                            <InputGroup>
                                <FormControl
                                    type='text' 
                                    placeholder='Enter new profile picture' 
                                    id='newavatar' 
                                    name='newavatar'
                                    value={this.state.newavatar}
                                    onChange={this.handleInput} />
                                
                            </InputGroup>
                            {/* <Form.Control type="email" placeholder="Enter email" /> */}
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Profile Picture" />
                        </Form.Group>
                        <br/>
                        <Button className='btn-lg btn-dark btn-block' variant="primary" type="submit">
                            Signup
                        </Button>
                        <br/>
                        {/* <div className='text-center'> Dont Have Account?
                        <br/>
                            <Link to='/signup'>Sign Up</Link>
                        </div> */}
                    </Form>

                    

            </div>
        );
    }
}
 
// export default Signup;
export default withRouter(Signup);
