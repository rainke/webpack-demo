import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducer';
import Todo from './Todo';
import {toggleTodo} from '../actions';

@withRouter
@connect(
  (state, { match }) => ({ todos: getVisibleTodos(state, match.params.filter || 'all') }), 
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

