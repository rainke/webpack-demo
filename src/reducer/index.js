import { combineReducers } from 'redux';
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload];
    }
    case 'TOGGLE_TODO': {
      return state.map( item => {
        if(item.id === action.payload) {
          item.complete = !item.complete;
          return item;
        } else  {
          return item;
        }
      });
    }
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBLE_TODO':
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({ todos, visibilityFilter })