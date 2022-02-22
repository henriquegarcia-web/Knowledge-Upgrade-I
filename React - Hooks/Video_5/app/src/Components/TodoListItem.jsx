import React from 'react'

const TodoListItem = ({ todo }) => {
  return (
    <div>
      {todo.id} - {todo.title} - {todo.done ? 'Concluído' : 'Pendente'}
    </div>
  )
}

export default TodoListItem