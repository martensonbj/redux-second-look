import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilteredTodoList from '../containers/FilteredTodoList'
import Footer from '../components/Footer'

class App extends React.Component {
  debugger;
  render(){
    return(
      <section>
        <AddTodo />
        <FilteredTodoList />
        <Footer />
      </section>
    )
  }
}

export default App
