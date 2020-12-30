import React, { Component } from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap'

class SearchBar extends Component {
    state = {  
        gitsearch: ''
    }

    changeHandler = (event) => {
        this.setState({gitsearch: event.target.value})
        
    }
    render() { 
        return (  
            <div className='searchbar'>
                <div class="row">
                    <div class="col-lg-3"></div>
                        <div class="col-lg-5" >
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder='Search Jobs' value = {this.state.gitsearch} onChange={this.changeHandler} /> 
                                {/* <input type="text" class="form-control" placeholder='Location' />  */}
                                <span class="input-group-btn">
                                
                            
                                </span>
                            </div>
                        </div>
                    <Button onClick = {() => this.props.searchGit(this.state.gitsearch)} variant="primary">Find Jobs</Button>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;