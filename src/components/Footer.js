import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibleTodo } from '../actions';
@connect(
)
class Footer extends Component {

  render() {
    const { dispatch } = this.props; 
    return (
      <div>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          dispatch(setVisibleTodo('SHOW_ALL'));
        }}>all</a>,
        <a href="#" onClick={(e) => {
          e.preventDefault();
          dispatch(setVisibleTodo('SHOW_COMPLETED'));
        }}>completed</a>,
        <a href="#" onClick={(e) => {
          e.preventDefault();
          dispatch(setVisibleTodo('SHOW_ACTIVE'));
        }}>active</a>
      </div>
    );
  }
};

export default Footer;

