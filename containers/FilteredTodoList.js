import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Based on what filter the user has clicked, what todos do we need to manipulate?
const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// What part(s) of state does the component care about?

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.setFilter)
})

// What are we handing down via props as an event listener, and what reducer is organizing what that action needs?

const mapDispatchToProps = ({
  onTodoClick: toggleTodo
})

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default FilteredTodoList
