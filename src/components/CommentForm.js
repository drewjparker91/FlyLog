import React from 'react';
import PropTypes from 'prop-types';

function CommentForm(props){
  const {log} = props;
  return (
    <React.Fragment>
      <div className='container'>
        <form onSubmit = {props.commentSubmissionHandler}>
          <h3>Leave a Comment!</h3> 
          <textarea
            type='text'
            name='body'
            placeholder='Enter your comment here!'
          />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  )
}

CommentForm.propTypes = {
  commentSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default CommentForm;
