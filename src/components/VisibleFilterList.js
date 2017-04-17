import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos, getIsFetching } from '../reducer';
import Todo from './Todo';
import { toggleTodo, fetchTodos } from '../actions';

@withRouter
@connect(
  (state, { match }) => {
    const filter = match.params.filter || 'all';
    return { 
      todos: getVisibleTodos(state, filter),
      filter,
      isFetching: getIsFetching(state, filter)
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
    let { todos, onTodoClick, isFetching } = this.props;
    if(isFetching && !todos.length) {
      return <div>loading</div>
    }
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

