import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {author, species, length, weight, fly, waterCond, weather, id} = action;
  switch (action.type) {
  case c.ADD_LOG:
    return Object.assign({}, state, {
      [id]: {
        author: author,
        species: species,
        length: length, 
        weight: weight,
        fly: fly,
        waterCond: waterCond,
        weather, Weather,
        createdAt: createdAt,
        id: id
      }
    });
  case c.DELETE_LOG:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};