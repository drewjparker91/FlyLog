import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {author, location, species, length, weight, fly, waterCond, createdAt, id} = action;
  switch (action.type) {
  case a.ADD_LOG:
    return Object.assign({}, state, {
      [id]: {
        author: author,
        location: location,
        species: species,
        length: length, 
        weight: weight,
        fly: fly,
        waterCond: waterCond,
        createdAt: createdAt,
        id: id
      }
    });
  case a.DELETE_LOG:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};