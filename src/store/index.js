import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

/*
Example usage:
import {useContext} from 'react'
import { store } from '../store'

const globalState = useContext(store)
const { dispatch, state } = globalState
const { tabViewing } = state

return(
  <button onClick={() => dispatch({ type: 'tabViewing', data: 'idk'})}>Name of tab: {tabViewing}</button>
)
*/

/* We may want to consider using 'immer' and 'useImmer' */

const initialState = {
  color: 'green',
  tabViewing: 'hello',
  loading: false,
  data: [],
}
const store = createContext()
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case 'tabViewing':
      return { ...state, tabViewing: action.data }
    case 'fetchData':
      return { ...state, loading: true }
    case 'fetchDataSuccess':
      return { ...state, data: action.payload }
    case 'fetchDataFailure':
      return { ...state, error: action.payload }
    default:
      throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, StateProvider }
