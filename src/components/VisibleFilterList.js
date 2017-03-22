import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {toggleTodo} from '../actions';

@connect(
  state => ({todos: state.todos}), 
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

