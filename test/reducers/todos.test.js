import reducer from '../../src/reducers/todos'

describe('todos reducer', () => {
  it('should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it("should return a state with a new todo", () => {
    let action = {
      type: 'ADD_TODO',
      text: 'hello world',
      id: 1
    }

    let expected = [{id: 1, text: 'hello world', completed: false}]

    expect(reducer(undefined, action)).toEqual(expected)
  })

  it('should toggle the completed status of a new todo', () => {

  })
})
