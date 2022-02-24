import React, { useState, createContext } from 'react';

export const TodoContext = createContext()

function TodoProvider({ children }) {

  const [todos, setTodos] = useState([
    {id: 1, title: 'Primeiro item do TODO', done: false},
    {id: 2, title: 'Segundo item do TODO', done: false}
  ])

  const saveTodo = (todo) => {
    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <TodoContext.Provider value={{
      todos,
      saveTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider