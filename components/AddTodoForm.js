import React from 'react'

let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <section>
      <form onSubmit={ (e) => {
          e.preventDefault()
          {onSubmit(input.value)}
      }}
      >
        <input ref={ node => { input = node }} />
        <button>Add Todo</button>
      </form>
    </section>
  )
}

export default AddTodoForm
