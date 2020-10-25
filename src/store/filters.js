import { isEmpty } from 'utils/utils'

export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export const toggleFilter = field => value => ({
  type: TOGGLE_FILTER,
  payload: {
    field,
    data: value,
  },
})

export const toggleFilterReducer = (
  state = {},
  { type, payload: { field, data } }
) =>
  ({
    [TOGGLE_FILTER]: (() => {
      const selectedValues = state[field] || []
      const newValues = selectedValues.includes(data)
        ? selectedValues.filter(a => a !== data)
        : selectedValues.concat(data)
      if (isEmpty(newValues)) {
        const newState = { ...state }
        delete newState[field]
        return newState
      } else {
        return {
          ...state,
          [field]: newValues,
        }
      }
    })(),
  }[type] || state)
