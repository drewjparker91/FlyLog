import React from "react";
import PropTypes from "prop-types";
import LogDetail from "./LogDetail";
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function CommentList(props){
  const {comments} = props;

  // useFirestoreConnect([
  //   { collection: 'comments' }
  // ]);

  // const comments = useSelector(state => state.firestore.ordered.comments);
  console.log(comments)
  if(isLoaded(comments)) {
    
    return (
      <React.Fragment>
        {/* <div className='topListStyle'> */}
          <h1>Comments</h1>
        {/* </div> */}
        <Col>
          <div class='card'>
            {comments.map((comment) => { 
              return (
                <p>{comment.body}</p>
              )       
            })}
          </div>
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


