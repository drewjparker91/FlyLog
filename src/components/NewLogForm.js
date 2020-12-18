import React from 'react';

import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'


function NewLogForm(props){

  const newFormTitle = {
    textAlign: 'center',
    fontFamily: 'Berkshire Swash',
    color: 'rgba(42,82,66)'
  }

  const newFormStyle = {
    textAlign: 'center'
  }
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const firestore = useFirestore();

  function addLogToFirestore(event) {
    event.preventDefault();
  

    props.onNewLogCreation();

    return firestore.collection('logs').add(
      {
        author: event.target.author.value,
        location: event.target.location.value,
        species: event.target.species.value,
        length: event.target.length.value,
        weight: event.target.weight.value,
        fly: event.target.fly.value,
        waterCond: event.target.waterCond.value,
        createdAt: date,
        timeOpen:firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <div style = {newFormStyle}>
        <div style={newFormTitle}>
          <h2>Add a new log</h2>
        </div>
        <ReusableForm
        formSubmissionHandler={addLogToFirestore}
        buttonText="Add Post"
        />
      </div>
    </React.Fragment>
  );
}


NewLogForm.propTypes = {
  onNewLogCreation: PropTypes.func
};

export default NewLogForm;