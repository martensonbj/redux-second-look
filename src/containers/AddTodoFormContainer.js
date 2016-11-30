import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import AddTodoForm from '../components/AddTodoForm'

const mapDispatchToProps=(dispatch) => {
  return {
    handleSubmit: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodoForm)
