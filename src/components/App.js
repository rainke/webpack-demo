import React, {Component} from 'react'
import AddTodo from './AddTodo';
import VisibleFilterList from './VisibleFilterList';
const App = () => (
  <div>
    <AddTodo />
    <VisibleFilterList />
    <div>
      <a href="#">all</a>, 
      <a href="#">completed</a>, 
      <a href="#">active</a>
    </div>
  </div>
);
export default App;