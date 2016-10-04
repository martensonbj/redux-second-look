import React from 'react'

let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <section>
      <form onSubmit={ (e) => {
          e.preventDefault()
          onSubmit(input.value)
      }}>
        <input ref={ node => { input = node }} />
        {console.log}
        <button>Add Todo</button>
      </form>
    </section>
  )
}

export default AddTodoForm
