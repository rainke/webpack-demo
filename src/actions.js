import { v4 } from 'node-uuid';
import { getIsFetching } from './reducer';
import * as api from './api'

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  payload: { filter, response }
});

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  payload: {filter}
});

export const fetchTodos = filter => (dispatch, getState) =>{
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch(requestTodos(filter))
  api.fetchTodos(filter).then(response => 
    dispatch(receiveTodos(filter, response))
  );
};


export const addTodo = (name) => ({
  type: 'ADD_TODO',
  payload:{
    name,
    id: v4(),
    complete: false
  }
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {id}
});

