import React, { useContext } from 'react'

import { TodoContext } from '../Contexts/TodoContext'

import TodoListItem from './TodoListItem'

const TodoList = () => {

  const todoContext = useContext(TodoContext)
  const data = todoContext.todos.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ))

  return (
    <div>
      {data}
    </div>
  )
}

export default TodoList