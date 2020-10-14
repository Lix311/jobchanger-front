import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap'
import '../App.css'


class PageNumber extends Component {
    // postPerPage={postPerPage} totalPosts={totalPosts} paginate={this.paginate}
    render(){
         debugger 
        const {postPerPage, totalPosts, paginate, prevPage, nextPage } = this.props

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
            pageNumbers.push(i)
        }
        
        return (  
        <nav>
            
            <ul className='pagination justify-content-center'>
                <li className='page-item'>
                    <a onClick={() => prevPage()} className='page-link' href='#'>Previous</a>
                </li>
                {pageNumbers.map(num => (
                    <li className='page-item' key={num}>
                         <a onClick={() => paginate(num)} href='#' className='page-link'>{num}</a>
                    </li>
                ))}
                <li className='page-item'>
                    <a onClick={() => nextPage()} className='page-link' href='#'>Next</a>
                </li>
            
            </ul> 
        </nav>
    );
}
}
 
export default PageNumber;