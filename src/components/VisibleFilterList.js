import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {toggleTodo} from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.complete);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.complete);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

@connect(
  state => ({ todos: getVisibleTodos(state.todos, state.visibilityFilter)}), 
  dispatch => ({onTodoClick: (id) => dispatch(toggleTodo(id))})
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

