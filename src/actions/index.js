export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: Date.now()
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
    type: "SET_FILTER",
    filter
  }
}
