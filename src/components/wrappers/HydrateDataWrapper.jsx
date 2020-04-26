import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { get } from 'axios'
import { store } from '../../store'
import { apiUrl } from '../../constants/config'

export const HydrateDataWrapper = ({ children }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  useEffect(() => {
    dispatch({
      type: 'fetchData',
    })
    get(`${apiUrl}/assets`)
      .then(({ data }) => dispatch({ type: 'fetchDataSuccess', payload: data }))
      .catch(e => {
        console.error(e)
        //TODO: handle errors
        dispatch({ type: 'fetchDataFailure', payload: e })
      })
  }, [dispatch])
  return <>{children}</>
}

HydrateDataWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
