import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = "Go to the Vault"
    const id = 1
    const expectedAction = {
      type: 'ADD_TODO',
      text: "Go to the Vault",
      id: 1
    }
    expect(actions.addTodo(text, id)).toEqual(expectedAction)
  })
})
