let id = 1;
export const addTodo = (name) => ({
  type: 'ADD_TODO',
  payload:{
    name,
    id: id++,
    complete: false
  }
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id
});

export const setVisibleTodo = (filter) => ({
  type: 'SET_VISIBLE_TODO',
  payload: filter
});