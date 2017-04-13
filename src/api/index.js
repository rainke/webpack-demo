
import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [{
    id: v4(),
    name: 'hey',
    complete: true,
  }, {
    id: v4(),
    name: 'ho',
    complete: true,
  }, {
    id: v4(),
    name: 'let’s go',
    complete: false,
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.complete);
      case 'complete':
        return fakeDatabase.todos.filter(t => t.complete);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });