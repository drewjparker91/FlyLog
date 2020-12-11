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
        <h5>Species: {log.species}</h5>
        <h5>Length: {log.length} Weight: {log.weight}</h5>
        <h5>Fly Used: {log.fly}</h5>
        <h5>Water Condition: {log.WaterCond}</h5>
        <h5>Weather Conditions: {log.weatherCond}</h5>
        <Button variant="warning" onClick={props.onClickingEdit}>Edit Post</Button>
        <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Post</Button>
      </React.Fragment>
    </div>
  )
}