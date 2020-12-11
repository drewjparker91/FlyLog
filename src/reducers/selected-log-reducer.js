import * as a from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedLog } = action;
  switch (action.type) {
  case a.SELECTED_LOG:
    const newState = selectedPost;
    return newState;
  case a.UNSELECT_LOG:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};