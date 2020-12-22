import React from 'react';
import PropTypes from 'prop-types';
import Log from './Log';
import LogListStyle from './LogListStyle.css'
import { useSelector } from 'react-redux';
import { useFirebase, useFirestore, withFirestore, useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LogList from './LogList';
import Col from 'react-bootstrap/Col';

function LogListPersonal(props){
  const { uid } = props;

  useFirestoreConnect([
    { collection: 'logs' }
  ])

  const logs = useSelector(state => state.firestore.ordered.logs);

  if (isLoaded(logs)) {
    let myLogs = logs.filter(a => a.uid === uid)

    return (
      <React.Fragment>
        <div className='topList'>
          <h1>Your Catches</h1>
        </div>
        <Col>
          <div class='card'>
              {myLogs.map((log) => {
                  return <Log
                    whenLogClicked = { props.onLogSelection }
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
                    key={log.id}/>             
              })}
          </div>
        </Col>
        <button id='fart' onClick={props.handleLogListToggle}>See Everyone's Catches</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

LogListPersonal.propTypes = {
  onQuizSelection: PropTypes.func
}

export default LogListPersonal;