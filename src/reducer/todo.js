const todo = (state = {}, action) => {
  let { payload } = action;
  switch (action.type) {
    case 'ADD_TODO':
      return payload;
    case 'TOGGLE_TODO':
      if (state.id !== payload.id) {
        return state;
      }
      return {
        ...state,
        complete: !state.complete
      };

    default:
      return state;
  }
};

export default todo;