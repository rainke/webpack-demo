import { v4 } from 'node-uuid';
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