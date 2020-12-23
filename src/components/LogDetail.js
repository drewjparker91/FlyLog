import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"
import CommentList from './CommentList'
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from '../firebase';
import {isLoaded} from "react-redux-firebase"


function LogDetail(props){

  
  const firestore = firebase.firestore()
  const {log, onClickingDelete} = props;
const commentsRef = firestore.collection('comments').where('logId', '==', log.id)


const [comments] = useCollectionData(commentsRef)

  if (isLoaded(comments)) {
  console.log(log.id)
  console.log(comments)

    return (
      <div className='card'>
        <React.Fragment>
          <h1>Fish Log</h1>
          <h3>Author: {log.author}</h3>
          <h4>Location of Catch: {log.location}</h4>
          <h5>Species: {log.species}</h5>
          <h5>Length: {log.length} Weight: {log.weight}</h5>
          <h5>Fly Used: {log.fly}</h5>
          <h5>Water Condition: {log.waterCond}</h5>
          <h5>Date Caught: {log.createdAt}</h5>
          {/* <Button variant="warning" onClick={props.onClickingEdit}>Edit Post</Button>
          <Button variant="danger" onClick={() => onClickingDelete(log.id)}>Delete Post</Button>
          <Button variant="success" onClick={props.onClickingComment}>Comment on the post!</Button> */}
        
            <button onClick={props.onClickingEdit}>Edit Post</button>
            <button onClick={() => onClickingDelete(log.id)}>Delete Post</button>
            <button onClick={props.onClickingComment}>Comment on the post!</button>
          
          <div className='commentss'>
            <CommentList
            comments={comments}
            />
          </div>
          
        </React.Fragment>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

LogDetail.propTypes = {
  log: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingComment: PropTypes.func
}

export default LogDetail;