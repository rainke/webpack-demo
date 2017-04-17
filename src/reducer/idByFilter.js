import { combineReducers } from 'redux';

const createList = (filter) => {
  const ids = (state = [], action) => {
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
  const isFetching = (state = false, action) => {
    if (action.payload && action.payload.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'REQUEST_TODOS':
        return true;
      case 'RECEIVE_TODOS':
        return false;
      default:
        return state;
    }
  }
  return combineReducers({ids, isFetching});
};

const idByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  complete: createList('complete')
});

export default idByFilter;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;