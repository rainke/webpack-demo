import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button, Input } from 'antd';

@connect()
class AddTodo extends Component{
  render() {
    let 
      input,
      dispatch = this.props.dispatch;
    return (
      <div>
        <Input onChange={ e => input = e.target } style={{width: 'auto'}}/>
        <Button 
          type="primary"
          size="small"
          onClick={() => {
            if(!input.value) return;
            dispatch(addTodo(input.value));
            input.value = '';
          }}
        > 添加 </Button>
      </div>
    );
  }
}


export default AddTodo;