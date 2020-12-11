import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

function Log(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenLogClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5></h5>
      </div>
    </React.Fragment>
  );
}

Log.propTypes = {
name: PropTypes.string,
location: propTypes.string,
date: propTypes.
species: propTypes.string,
length: propTypes.string,
weight: propTypes.string,
fly: propTypes.string,
waterCond: propTypes.string,
weather: propTypes.string,
createdAt: PropTypes.string,
id: PropTypes.string,
whenLogClicked: PropTypes.func
};

export default Log;