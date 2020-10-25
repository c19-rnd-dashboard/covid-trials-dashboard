export const SET_SELECTED_ASSET = 'SET_SELECTED_ASSET'

export const selectAsset = asset => ({
  type: SET_SELECTED_ASSET,
  payload: asset,
})

export const clearSelectedAsset = () => selectAsset(null)

export const selectorReducer = (
  state = { selected: null },
  { type, payload }
) =>
  ({
    [SET_SELECTED_ASSET]: {
      selected: payload,
    },
  }[type] || state)
