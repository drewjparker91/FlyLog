import React from 'react';
import PropTypes from 'prop-types';

function CommentForm(props){
  const {log} = props;
  return (
    <React.Fragment>
      <div className='container'>
        <form onSubmit = {props.commentSubmissionHandler}>
          <h3>Leave a Comment!</h3> 
          
        </form>
      </div>
    </React.Fragment>
  )
}