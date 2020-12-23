import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  mapList: [],
  error: null
}
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_MAPS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_MAPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        mapList: action.mapList
      });
    case c.GET_MAPS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};