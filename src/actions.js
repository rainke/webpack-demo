import { v4 } from 'node-uuid';
import * as api from './api'

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  payload: { filter, response }
});

export const fetchTodos = filter => 
  api.fetchTodos(filter).then(response => 
    receiveTodos(filter, response)
  );

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

