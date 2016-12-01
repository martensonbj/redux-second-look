import React from 'react'
import { mount  } from 'enzyme'

import AddTodoFormContainer from '../../src/containers/AddTodoFormContainer'
import AddTodoForm from '../../src/components/AddTodoForm'

import { Provider } from 'react-redux'
// import { fakeStore } from './fakeStore'
import configureMockStore from 'redux-mock-store'
const store = configureMockStore()({todos: []})

const setup = () => {
  const props = {
    handleSubmit: jest.fn(),
    todos: []
  }

  const wrapper = mount(
    // <Provider store={store}>
    //   <AddTodoFormContainer {...props}/>
    // </Provider>

    <AddTodoForm handleSubmit={props.handleSubmit} todos={props.todos} />
  )

  const Container = wrapper.find(AddTodoFormContainer)
  const Component = wrapper.find(AddTodoForm)

  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('AddTodoForm', () => {

  it('should render a form', () => {
      const { Component } = setup()

      expect(Component.find('form').length).toEqual(1)

      expect(Component.length).toEqual(1)
    })

    it('should call addTodo when Add Todo button is clicked', () => {
      const { props, Component } = setup()

      let form = Component.find('form')

      form.simulate('submit')
      console.log(props);
      expect(props.handleSubmit).toBeCalled()

    // Or to verify how many times a function has been called
      expect(props.handleSubmit.mock.calls.length).toBe(1)
  })
  })
})
