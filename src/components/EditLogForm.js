import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import LogList from "./LogList";

function EditLogForm(props) {
  const { log } = props;

  function handleEditLogFormSubmission(event) {
    event.preventDefault();
    props.onEditLog({
      author: event.target.author.value,
      location: event.target.location.value,
      species: event.target.species.value,
      length: event.target.length.value,
      weight: event.target.weight.value,
      fly: event.target.fly.value,
      waterCond: event.target.waterCond.value,
      weather: event.target.weather.value,
      id: log.id
    });
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
        weather={log.weather}
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