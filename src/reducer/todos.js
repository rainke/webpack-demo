import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import idByFilter, * as fromByFilter from './idByFilter';

const todos = combineReducers({ byId, idByFilter});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromByFilter.getIds(state.idByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
export const getIsFetching = (state, filter) => {
 return fromByFilter.getIsFetching(state.idByFilter[filter])
};
