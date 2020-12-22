import React from 'react';
import NewLogForm from './NewLogForm';
import LogList from './LogList';
import LogDetail from './LogDetail';
import EditLogForm from './EditLogForm';
import Button from 'react-bootstrap/button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'
import Log from './Log';

const buttonPosition = {
  position: 'fixed',
  bottom: 80,
  legft: 50
}

class LogControl extends React.Component {
  
  

  handleClick = () => {
    const { dispatch } = this.props
    if (this.props.selectedLog != null) {     
      const action = a.unselectLog
      dispatch(action);
    } else {
      const action3 = a.toggleNewForm
      dispatch(action3);
    }
  }

  handleAddingNewLogToList = (newLog) => {
    const {dispatch} = this.props;
    // const action = a.addLog(newLog);
    const action2 = a.toggleNewForm;
    // dispatch(action);
    dispatch(action2);
  }

  handleChangingSelectedLog = (id) => {
    const {dispatch} = this.props;
    this.props.firestore.get({collection: 'logs', doc: id}).then((log) => {
      const firestoreLog = {
        author: log.get("author"),
        location: log.get("location"),
        species: log.get("species"),
        length: log.get("length"),
        weight: log.get("weight"),
        fly: log.get("fly"),
        waterCond: log.get("waterCond"),
        createdAt: log.get("createdAt"),
        id: log.id
      }
      const action = a.selectedLog(firestoreLog);
      dispatch(action);
    })
   
  }

  handleDeletingLog = (id) => {
    this.props.firestore.delete({collection: 'logs', doc: id});
    const {dispatch} = this.props;
    const action = a.unselectLog
    dispatch(action);
  }

  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = a.toggleEditForm;
    dispatch(action);
  }

  handleEditingLogInList = (logToEdit) => {
    const {dispatch} = this.props;   
    const action = a.unselectLog;
    const action2 = a.toggleEditForm;  
    dispatch(action);
    dispatch(action2);
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState = 
      <EditLogForm
      log = {this.props.selectedLog}
      onEditLog = {this.handleEditingLogInList}
      />
      buttonText = "Return to Log List"
    } else if (this.props.selectedLog != null) {
      currentlyVisibleState = 
      <LogDetail
      log = {this.props.selectedLog}
      onClickingDelete = {this.handleDeletingLog}
      onClickingEdit = {this.handleEditClick}
      />
      buttonText = "Back to Log List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewLogForm
      onNewLogCreation = {this.handleAddingNewLogToList}
      />
      buttonText = "Back to Log List"
    } else {
      currentlyVisibleState = 
      <LogList
      logList = {this.props.masterLogList}
      onLogSelection = {this.handleChangingSelectedLog}
      />
      buttonText = "Add a new log"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div style={buttonPosition}>
          <button id="fart" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

LogControl.propTypes = {
  masterLogList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedLog: PropTypes.object,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    selectedLog: state.selectedLog,
    editing: state.editing
  }
}

LogControl = connect(mapStateToProps)(LogControl)

export default withFirestore(LogControl);