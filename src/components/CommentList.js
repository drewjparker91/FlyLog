import React from "react";
import PropTypes from "prop-types";
import LogDetail from "./LogDetail";
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function CommentList(props){
  const {comments} = props;
  
  if(isLoaded(comments)) {
    
    return (
      <React.Fragment>
          <h1>Comments</h1>
        <Col>
          
            {comments.map((comment) => { 
              return (
                <div class='card'>
                  <p>{comment.body}</p>
                </div>
              )       
            })}
         
        </Col>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default CommentList;


