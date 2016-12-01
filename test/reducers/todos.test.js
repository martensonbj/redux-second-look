import reducer from '../../src/reducers/todos'

describe('todos reducer', () => {
  it('should return default state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })

  it('should return a new todo when given the ADD_TODO action type', () => {

    let action = {
      type: 'ADD_TODO',
      text: 'Whatever',
      id: 1
    }

    let expectedTodo = {
      id: 1,
      text: 'Whatever',
      completed: false
    }

    expect(reducer(undefined, action)).toEqual([expectedTodo])
  })

  it('should toggle the completed status when given the TOGGLE_TODO action type', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    let initialTodo = {
      id: 1,
      text: 'Whatever',
      completed: false
    }

    let afterTodo = {
      id: 1,
      text: 'Whatever',
      completed: true
    }

    expect(reducer([initialTodo], action)).toEqual([afterTodo])
  })
})
