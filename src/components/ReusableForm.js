import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";

function ReusableForm(props){

  const formStyle = {
   align: 'center',
   backgroundColor: '#DEC0AA',
   fontFamily: 'times'
  }
  
  return (
    <React.Fragment>
      <Card style ={{ backgroundColor: '#D4916D', border: 'none', textAlign: 'center' }}>
      <div style={formStyle}>
        
          <div className="container">
            <form onSubmit = {props.formSubmissionHandler}>
              <h5> Name </h5>
              <input
              type="text"
              name="author"
              defaultValue = {props.author ? props.author : ''}
              // placeholder = "Your Name"
              />
              <h5> Location </h5>
              <input
              type="text"
              name="location"
              defaultValue = {props.location ? props.location : ''}
              // placeholder = "Location of Catch"
              />
              <h5> Species </h5>
              <input
              type="text"
              name="species"
              defaultValue = {props.species ? props.species : ''}
              // placeholder = "Species of fish"
              />
              <h5> Length </h5>
              <input
              type="text"
              name="length"
              defaultValue = {props.length ? props.length : ''}
              // placeholder = "Fish Length"
              />
              <h5> Weight </h5>
              <input
              type="text"
              name="weight"
              defaultValue = {props.weight ? props.weight : ''}
              // placeholder = "Fish weight"
              />
              <h5> Fly Used </h5>
              <input
              type="text"
              name="fly"
              defaultValue = {props.fly ? props.fly : ''}
              // placeholder = "Fly Used"
              />
              <h5> Water Conditions </h5>
              <input
              type="text"
              name="waterCond"
              defaultValue = {props.waterCond ? props.waterCond : ''}
              // placeholder = "Water Conditions"
              />
              <button type='submit'>{props.buttonText}</button>
            </form>
          </div>
        
      </div>
      </Card>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;
