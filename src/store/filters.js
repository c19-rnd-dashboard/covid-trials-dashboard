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
      return {
        ...state,
        [field]: selectedValues.includes(data)
          ? selectedValues.filter(a => a !== data)
          : selectedValues.concat(data),
      }
    })(),
  }[type] || state)
