import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  if (todos.length === 0) {
    return <h3>You have nothing to do!</h3>
  }

  <ul>
    { todos.map(todo => {
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    })}
  </ul>
)

export default TodoList
