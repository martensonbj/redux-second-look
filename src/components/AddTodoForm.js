import React from 'react'

const AddTodoForm = ({handleSubmit}) => {
  let input

  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(input.value)
      }}>
        <input ref={ node => { input = node}} />
        <button>Add todo</button>
      </form>
    </section>
  )
}

export default AddTodoForm
