import formVisibleReducer from './form-visible-reducer'
import logListReducer from './log-list-reducer';
import selectedLogReducer from './selected-log-reducer';
import editLogReducer from './edit-log-reducer';
import toggleLogList from './toggle-log-lists';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import toggleLogLists from './toggle-log-lists';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterLogList: logListReducer,
  selectedLog: selectedLogReducer,
  editing: editLogReducer,
  index: toggleLogLists,
  firestore: firestoreReducer
  
});

export default rootReducer;