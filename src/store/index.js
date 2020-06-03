import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { get } from 'axios'
import { apiUrl } from '../constants/config'
import assets from '../mocks/assets.json'
import { isVaccine } from 'utils/utils'
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
}
const store = createContext()
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case 'fetchData':
      return { ...state, loading: true }
    case 'fetchDataSuccess':
      return {
        ...state,
        treatments: action.payload.treatments,
        vaccines: action.payload.vaccines,
        loading: false,
      }
    case 'fetchDataFailure':
      return { ...state, error: action.payload, loading: false }
    default:
      throw new Error()
    }
  }, initialState)

  const splitVaccinesAndTreatments = data => {
    const vaccines = data.filter(isVaccine)
    const treatments = data.filter(a => !isVaccine(a))
    return { treatments, vaccines }
  }

  useEffect(() => {
    dispatch({
      type: 'fetchData',
    })
    if (process.env.NODE_ENV !== 'production') {
      const splitData = splitVaccinesAndTreatments(assets)
      dispatch({ type: 'fetchDataSuccess', payload: splitData })
    } else {
      get(`${apiUrl}/assets`)
        .then(({ data }) => {
          const splitData = splitVaccinesAndTreatments(data)
          dispatch({ type: 'fetchDataSuccess', payload: splitData })
        })
        .catch(e => {
          console.error(e)
          //TODO: handle errors
          dispatch({ type: 'fetchDataFailure', payload: e })
        })
    }
  }, [dispatch])
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, StateProvider }
