import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button, Input } from 'antd';

const dispatchData = (dispatch, input) => {
  dispatch(addTodo(input.value));
  input.value = ''
};

@connect()
class AddTodo extends Component{
  render() {
    let 
      input,
      dispatch = this.props.dispatch;
    return (
      <div>
        <Input onChange={ e => input = e.target } style={{width: 'auto'}} onKeyUp = { e => {
          if (e.key == 'Enter' && input.value) {
            dispatchData(dispatch, input);
          }
        }}/>
        <Button 
          type="primary"
          size="small"
          onClick={() => {
            if(!input.value) return;
            dispatchData(dispatch, input);
          }}
        > 添加 </Button>
      </div>
    );
  }
}


export default AddTodo;