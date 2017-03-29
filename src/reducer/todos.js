const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload];
    }
    case 'TOGGLE_TODO': {
      return state.map(item => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
          return item;
        } else {
          return item;
        }
      });
    }
    default:
      return state;
  }
};

export default todos;

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'complete':
      return state.filter(t => t.complete);
    case 'active':
      return state.filter(t => !t.complete);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};