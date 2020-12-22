import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import { useFirestore } from 'react-redux-firebase';


function Comment(props){
  const { log } = props;
  const firestore = useFirestore();

  function addCommentsToFirestore(event){
    event.preventDefault();

    props.onSubmitComment();

    return firestore.collection('comments').add(
      {
        logId: log.id,
        body: event.target.body.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <React.Fragment>
      <CommentForm
        commentSubmissionHandler={addCommentsToFirestore}
        log = {log}
        buttonText="Add Comment"
      />
    </React.Fragment>
  );
}

Comment.propTypes = {
  onSubmitComment: PropTypes.func,
  body: PropTypes.string
};

export default Comment;
