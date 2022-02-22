import React, { useState, useContext } from 'react'

import { TodoContext } from '../Contexts/TodoContext'

const AddTodo = () => {

  const todoContext = useContext(TodoContext)
  // Poderia desconstruir o 'todoContext' em apenas o método necessário, como:
  // const {saveTodo} = ... Onde 'saveTodo' é uma função declarada no contexto

  const [todo, setTodo] = useState()

  const handleFormSubmit = (e) => {
    e.preventDefault()

    todoContext.saveTodo(todo)
  }

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value
    })
  }

  return (
    <div>
      <form>
        <input 
          type='text' 
          placeholder='Título da tarefa' 
          onChange={handleInputChange}
        />
        <button onClick={handleFormSubmit}>Adicionar</button>
      </form>
    </div>
  )
}

export default AddTodo