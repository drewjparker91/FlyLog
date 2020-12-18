import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button"

function LogDetail(props){
  const {log, onClickingDelete} = props;

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
        <Button variant="warning" onClick={props.onClickingEdit}>Edit Post</Button>
        <Button variant="danger" onClick={() => onClickingDelete(log.id)}>Delete Post</Button>
      </React.Fragment>
    </div>
  );
}

LogDetail.propTypes = {
  log: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default LogDetail;