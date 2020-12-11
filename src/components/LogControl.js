import React from 'react';
import NewLogForm from './NewLogForm';
import LogList from './LogList';
import LogDetail from './LogDetail';
import EditLogForm from './EditLogForm';
import Button from 'react-bootstrap/button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class LogControl extends React.Component {

  handleClick = () => {
    const {dispatch} = this.props
    if (this.props.selectedLog != null) {
      const action = a.unselectLog
      // const action2 = a.toggleEditForm
      dispatch(action);
    } else {
      const action = a.toggleNewForm
      dispatch(action);
    }
  }

  handleAddingNewLogToList = (newLog) => {
    const {dispatch} = this.props;
    const action = a.addLog(newLog);
    const action2 = a.toggleNewForm;
    dispatch(action);
    dispatch(action2);
  }

  handleChangingSelectedLog = (id) => {
    const {dispatch} = this.props;
    const log = this.props.masterLogList[id];
    const action = a.selectedLog(log);
    dispatch(action);
  }

  handleDeletingLog = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteLog(id)
    const action2 = a.unselectLog
    dispatch(action);
    dispatch(action2);
  }

  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = a.toggleEditForm;
    dispatch(action);
  }

  handleEditingLogInList = (logToEdit) => {
    const {dispatch} = this.props;
    const action = a.addLog(logToEdit);
    const action2 = a.unselectLog;
    const action3 = a.toggleEditForm;
    dispatch(action);
    dispatch(action2);
    dispatch(action3);
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
        <Button variant="success" onClick={this.handleClick}>{buttonText}</Button>
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
    masterLogList: state.masterLogList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedLog: state.selectedLog,
    editing: state.editing
  }
}

LogControl = connect(mapStateToProps)(LogControl)

export default LogControl;