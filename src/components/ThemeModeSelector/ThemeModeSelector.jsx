/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { store } from '../../store'

export const ThemeModeSelector = Component => () => {
  const globalStore = useContext(store)
  const { dispatch, state: { prefersDarkMode } = {} } = globalStore || {}
  const toogleDarkMode = () =>
    dispatch({
      type: 'tooglePrefersDarkMode',
    })
  return (
    <Component onChange={toogleDarkMode} prefersDarkMode={prefersDarkMode} />
  )
}

export const ThemeModeSelectorConsumerPropTypes = {
  onChange: PropTypes.func,
  prefersDarkMode: PropTypes.bool,
}
