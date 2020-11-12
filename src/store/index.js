import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import assets from '../mocks/assets.json'
import ReactGA from 'react-ga'
import { useMediaQuery } from '@material-ui/core'
import { TOGGLE_FILTER, toggleFilterReducer } from './filters'
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
  loading: false,
  assets: assets,
  selectedFilters: {},
  prefersDarkMode: false,
}
const store = createContext()
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    ReactGA.event({
      category: 'reducer',
      action: action.type,
    })
    switch (action.type) {
    case 'fetchData':
      return { ...state, loading: true }
    case 'fetchDataSuccess':
      return {
        ...state,
        assets: action.payload,
        loading: false,
      }
    case 'fetchDataFailure':
      return { ...state, error: action.payload, loading: false }
    case 'tooglePrefersDarkMode':
      return { ...state, prefersDarkMode: !state.prefersDarkMode }
    case TOGGLE_FILTER:
      return {
        ...state,
        selectedFilters: toggleFilterReducer(state.selectedFilters, action),
      }
    default:
      throw new Error()
    }
  }, initialState)

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    if (prefersDarkMode !== initialState.prefersDarkMode) {
      dispatch({ type: 'tooglePrefersDarkMode' })
    }
    dispatch({
      type: 'fetchData',
    })
    dispatch({ type: 'fetchDataSuccess', payload: [] })
  }, [dispatch, prefersDarkMode])
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, StateProvider }
