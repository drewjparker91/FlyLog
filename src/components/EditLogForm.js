import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';


function EditLogForm(props) {
  const firestore = useFirestore();
  const { log } = props;

  function handleEditLogFormSubmission(event) {
    event.preventDefault();
    props.onEditLog();
    const propertiesToUpdate = {
      author: event.target.author.value,
      location: event.target.location.value,
      species: event.target.species.value,
      length: event.target.length.value,
      weight: event.target.weight.value,
      fly: event.target.fly.value,
      waterCond: event.target.waterCond.value,
      // createdAt: log.createdAt,
      // id: log.id
    }
    return firestore.update({collection: 'logs', doc: log.id},propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditLogFormSubmission}
        auther={log.author}
        location={log.location}
        species={log.species}
        length={log.length}
        weight={log.weight}
        fly={log.fly}
        waterCond={log.waterCond}
        buttonText="Save Changes"
      />
    </React.Fragment>
  );
}

EditLogForm.propTypes = {
  log: PropTypes.object,
  onEditLog: PropTypes.func
}

export default EditLogForm;