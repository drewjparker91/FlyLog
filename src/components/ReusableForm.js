import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function ReusableForm(props){

  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit = {props.formSubmissionHandler}>
          <h5> Name </h5>
          <input
          type="text"
          name="author"
          defaultValue = {props.author ? props.author : ''}
          placeholder = "Your Name"
          />
          <h5> Location </h5>
          <input
          type="text"
          name="location"
          defaultValue = {props.location ? props.location : ''}
          placeholder = "Location of Catch"
          />
          <h5> Species </h5>
          <input
          type="text"
          name="species"
          defaultValue = {props.species ? props.species : ''}
          placeholder = "Species of fish"
          />
          <h5> Length </h5>
          <input
          type="text"
          name="length"
          defaultValue = {props.length ? props.length : ''}
          placeholder = "Fish Length"
          />
          <h5> Weight </h5>
          <input
          type="text"
          name="weight"
          defaultValue = {props.weight ? props.weight : ''}
          placeholder = "Fish weight"
          />
          <h5> Fly Used </h5>
          <input
          type="text"
          name="fly"
          defaultValue = {props.fly ? props.fly : ''}
          placeholder = "Fly Used"
          />
          <h5> Water Conditions </h5>
          <input
          type="text"
          name="waterCond"
          defaultValue = {props.waterCond ? props.waterCond : ''}
          placeholder = "Water Conditions"
          />
          <h5> Weather Conditions </h5>
          <input
          type="text"
          name="weather"
          defaultValue = {props.weather ? props.weather : ''}
          placeholder = "Weather Conditions"
          />
        </form>
      </div>
    </React.Fragment>
  )
}





waterCond: propTypes.string,
weather: propTypes.string,
