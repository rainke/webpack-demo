import { combineReducers } from 'redux';

const createList = (filter) => {
  return (state = [], action) => {
    if (action.payload && action.payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.payload.response.map(todo => todo.id);

      default:
        return state;
    }
  }
};

const idByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  complete: createList('complete')
});

export default idByFilter;

export const getIds = state => state;