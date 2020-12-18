import formVisibleReducer from './form-visible-reducer'
import logListReducer from './log-list-reducer';
import selectedLogReducer from './selected-log-reducer';
import editLogReducer from './edit-log-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterLogList: logListReducer,
  selectedLog: selectedLogReducer,
  editing: editLogReducer,
  firestore: firestoreReducer
});

export default rootReducer;