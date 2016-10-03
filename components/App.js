import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilteredTodoList from '../containers/FilteredTodoList'
import Footer from '../components/Footer'

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Pumpkin List</h1>
        <section id="todo-list">
          <AddTodo />
          <FilteredTodoList />
          <Footer />
        </section>
      </div>
    )
  }
}

export default App
