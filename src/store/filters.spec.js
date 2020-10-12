import { toggleFilter, TOGGLE_FILTER } from './filters'

describe('Filters', () => {
  const action = {
    type: TOGGLE_FILTER,
    payload: {
      field: 'sponsor',
      data: 'bmw',
    },
  }

  it('should add a sponsor to the selection', () => {
    const initialState = {
      sponsor: [],
    }

    expect(toggleFilter(initialState, action)).toEqual({
      sponsor: ['bmw'],
    })
  })

  it('should remove a selected filtered value', () => {
    const initialState = {
      sponsor: ['bmw'],
    }

    expect(toggleFilter(initialState, action)).toEqual({
      sponsor: [],
    })
  })
})
