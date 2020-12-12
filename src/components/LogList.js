import React from "react";
import PropTypes from "prop-types";
import Log from "./Log";
import Col from 'react-bootstrap/Col'

function LogList(props){

  return (
    <React.Fragment>
      <h1>Recent Catches</h1>
      <hr/>
      <Col>
        {Object.values(props.logList).map((log) =>
        <div className="card">
          <Log
          whenLogClicked={props.onLogSelection}
          author={log.author}
          location={log.location}
          date={log.author}
          species={log.species}
          length={log.length}
          weight={log.weight}
          fly={log.fly}
          waterCond={log.waterCond}
          createdAt={log.createdAt}
          id={log.id}
          key={log.id}
          />
        </div>
        )}
      </Col>
    </React.Fragment>
  );
}

LogList.propTypes = {
  logList: PropTypes.object,
  onLogSelection: PropTypes.func
}

export default LogList;