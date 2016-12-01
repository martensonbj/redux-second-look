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

  const Component = wrapper.find(AddTodoFormContainer)

  return {
    props,
    wrapper,
    Component
  }
}

describe('components', () => {
  describe('AddTodoForm', () => {

    it('should render a form', () => {
      const { wrapper } = setup()

      expect(wrapper.find('form').length).toEqual(1)

      expect(wrapper.length).toEqual(1)
    })

    it('should call addTodo when Add Todo button is clicked', () => {
      const { props, wrapper, Component } = setup()

      Component.find('form').simulate('submit')

      expect(props.handleSubmit).toBeCalled()

    // Or to verify how many times a function has been called
      expect(props.handleSubmit.mock.calls.length).toBe(1)
  })
  })
})
