import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Todo from './Todo';
import {toggleTodo} from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'complete':
      return todos.filter(t => t.complete);
    case 'active':
      return todos.filter(t => !t.complete);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

@withRouter
@connect(
  (state, { match }) => ({ todos: getVisibleTodos(state.todos, match.params.filter || 'all') }), 
  // dispatch => ({onTodoClick: (id) => dispatch(toggleTodo(id))})
  { onTodoClick: toggleTodo }
)
class VisibleFilterList extends Component {
  render() {
    let { todos, onTodoClick } = this.props;
    return (
      <ul>
        {todos.map( todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id) }
          />
        ))}
      </ul>
    );
  }
};

export default VisibleFilterList;

