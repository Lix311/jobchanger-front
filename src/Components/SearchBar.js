import React, { Component } from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap'

class SearchBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className='searchbar'>
            <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder='Title' /> 
                <input type="text" class="form-control" placeholder='Location' /> 
                <span class="input-group-btn">
                <Button variant="primary">Find Jobs</Button>
                </span>
            </div>
        </div>
        <div class="col-lg-4"></div>
    </div>
    </div>
        );
    }
}
 
export default SearchBar;