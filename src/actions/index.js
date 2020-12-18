import * as a from './ActionTypes';

// export const addLog = (log) => {
//   const{author, location, species, length, weight, fly, waterCond, createdAt, id} = log;
//   return {
//     type: a.ADD_LOG,
//     author: author,
//     location: location,
//     species: species, 
//     length: length,
//     weight: weight,
//     fly: fly,
//     waterCond: waterCond,
//     createdAt: createdAt,
//     id: id
//   }
// }

// export const deleteLog = id => ({
//   type: a.DELETE_LOG,
//   id
// })

export const toggleEditForm = ({
  type: a.TOGGLE_EDIT_FORM
});

export const toggleNewForm = ({
  type: a.TOGGLE_NEW_FORM
});

export const selectedLog = (log) => {
  return {
    type: a.SELECTED_LOG,
    selectedLog: log
  }
}

export const unselectLog = ({
  type: a.UNSELECT_LOG
})


