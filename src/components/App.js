import React, {Component} from 'react'
import AddTodo from './AddTodo';
import VisibleFilterList from './VisibleFilterList';
import Footer from './Footer';
const App = () => (
  <div>
    <AddTodo />
    <VisibleFilterList />
    <Footer />
  </div>
);
export default App;