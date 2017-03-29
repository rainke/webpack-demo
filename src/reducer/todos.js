import { combineReducers } from 'redux';
import todo from './todo';
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
    let {id } = action.payload;
      return {
        ...state,
        [id]: todo(state[id], action)
      }
    default:
      return state;
  }
}
const allIds = (state = [], action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload.id
      ];
  
    default:
      return state;
  }
}
const todos = combineReducers({byId, allIds});

export default todos;

const getAllIds = state => 
  state.allIds.map(id => state.byId[id]);


export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllIds(state);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'complete':
      return allTodos.filter(t => t.complete);
    case 'active':
      return allTodos.filter(t => !t.complete);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};