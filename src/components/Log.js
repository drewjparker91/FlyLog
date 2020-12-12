import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

function Log(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenLogClicked(props.id)}>
        <h3>{props.author}</h3>
        <p>Caught On: {props.createdAt}</p>
      </div>
    </React.Fragment>
  );
}

Log.propTypes = {
author: PropTypes.string,
location: propTypes.string,
species: propTypes.string,
length: propTypes.string,
weight: propTypes.string,
fly: propTypes.string,
waterCond: propTypes.string,
weather: propTypes.string,
createdAt: PropTypes.string,
// image: PropTypes.symbol,
id: PropTypes.string,
whenLogClicked: PropTypes.func
};

export default Log;