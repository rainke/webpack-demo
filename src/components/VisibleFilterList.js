import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducer';
import Todo from './Todo';
import { toggleTodo, fetchTodos } from '../actions';

@withRouter
@connect(
  (state, { match }) => {
    const filter = match.params.filter || 'all';
    return { 
      todos: getVisibleTodos(state, filter),
      filter
    }
  }, 
  // dispatch => ({onTodoClick: (id) => dispatch(toggleTodo(id))})
  { onTodoClick: toggleTodo, fetchTodos }
)
class VisibleFilterList extends Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const {filter} = this.props
    if(filter !== prevProps.filter)
      this.fetchData();
  }

  fetchData(){
    const { filter, fetchTodos} = this.props;
    fetchTodos(filter);
  }

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

