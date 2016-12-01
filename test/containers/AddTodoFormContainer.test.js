import React from 'react'
import { mount  } from 'enzyme'

import AddTodoFormContainer from '../../src/containers/AddTodoFormContainer'
import AddTodoForm from '../../src/components/AddTodoForm'

import { Provider } from 'react-redux'
import { fakeStore } from './fakeStore'


const setup = () => {
  const props = {
    handleSubmit: jest.fn()
  }

  const store = fakeStore({ todos: [] })


  const wrapper = mount(
    <Provider store={store}>
      <AddTodoFormContainer {...props}/>
    </Provider>
  )

  const Component = wrapper.find(AddTodoForm)
  const Container = wrapper.find(AddTodoFormContainer)

  return {
    props,
    Component,
    Container
  }
}

describe('components', () => {
  describe('AddTodoForm', () => {

    it('should render a form', () => {
      const { Component, Container } = setup()



      expect(Component.length).toEqual(1)
      expect(Component.find('form').length).toEqual(1)

      expect(Container.length).toEqual(1)
    })

    it('should call addTodo when Add Todo button is clicked', () => {
    const { props, Container, Component } = setup()

    Component.find('button').simulate('click')

    expect(props.handleSubmit).toBeCalled()

    // Or to verify how many times a function has been called
    expect(props.handleSubmit.mock.calls.length).toBe(1)
  })
  })
})
