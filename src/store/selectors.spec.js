import { selectorReducer } from './selectors'

describe('Selectors', () => {
  it('should set selected asset', () => {
    const action = {
      type: 'SET_SELECTED_ASSET',
      payload: 'id1',
    }
    expect(selectorReducer({ selected: null }, action)).toEqual({
      selected: 'id1',
    })
  })
})
