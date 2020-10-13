import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { get } from 'axios'
import { apiUrl, useHardcodeData } from '../constants/config'
import assets from '../mocks/assets.json'
import ReactGA from 'react-ga'
import { useMediaQuery } from '@material-ui/core'
import { TOGGLE_FILTER, toggleFilter } from './filters'
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
  treatments: [],
  vaccines: [],
  prefersDarkMode: true,
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
        return state // disabled until light theme is ready
      // return { ...state, prefersDarkMode: !state.prefersDarkMode }
      case TOGGLE_FILTER:
        return toggleFilter(state, action)
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
    if (process.env.NODE_ENV !== 'production' || useHardcodeData) {
      dispatch({ type: 'fetchDataSuccess', payload: assets })
    } else {
      get(`${apiUrl}/assets`)
        .then(({ data }) => {
          dispatch({ type: 'fetchDataSuccess', payload: data })
        })
        .catch(e => {
          console.error(e)
          //TODO: handle errors
          dispatch({ type: 'fetchDataFailure', payload: e })
        })
    }
  }, [dispatch, prefersDarkMode])
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, StateProvider }
