import React from 'react'
import PropTypes from 'prop-types'
import './BarIndicator.css'

const propTypes = {
  children: PropTypes.element,
}

export const BarIndicator = ({ children }) => (
  <div className='bar-indicator'>
    <span className='dot'></span>
    <div className='label'>{children}</div>
  </div>
)

BarIndicator.propTypes = propTypes
