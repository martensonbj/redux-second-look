let lastTodoId = 0

export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    id: lastTodoId++,
    text,
    completed: false
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}
