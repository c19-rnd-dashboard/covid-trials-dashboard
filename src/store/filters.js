export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export const toggleFilter = (state, { type, payload: { field, data } }) =>
  ({
    [TOGGLE_FILTER]: {
      ...state,
      [field]: state[field].includes(data)
        ? state[field].filter(a => a !== data)
        : state[field].concat(data),
    },
  }[type] || state)
