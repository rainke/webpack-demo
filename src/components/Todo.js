import React, {Component} from 'react';

class Todo extends Component {

  render() {
    let { complete, onClick, name} = this.props;
    return (
      <li
        style={{ textDecoration: complete ? 'line-through' : 'none'}}
      >
        <span onClick={onClick}>{name}</span>
      </li>
    );
  }
}

export default Todo;