import React from 'react';

import TodoProvider from './Contexts/TodoContext';

import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <TodoProvider>

      <TodoList />
      <br/>
      <br/>
      <AddTodo />

    </TodoProvider>
  );
}

export default App;
