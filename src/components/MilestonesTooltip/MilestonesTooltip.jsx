import React from 'react'
import PropTypes from 'prop-types'
import './MilestonesTooltip.css'

const propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  className: PropTypes.string,
}

const defaultProps = {
  className: '',
}

export const MilestonesTooltip = ({ className, startDate, endDate }) => {
  const _startDate = new Date(startDate)
  const _endDate = new Date(endDate)
  return (
    <div className={`tooltip milestones ${className}`}>
      {`${_startDate.toLocaleDateString()} - ${_endDate.toLocaleDateString()}`}
    </div>
  )
}

MilestonesTooltip.propTypes = propTypes
MilestonesTooltip.defaultProps = defaultProps
