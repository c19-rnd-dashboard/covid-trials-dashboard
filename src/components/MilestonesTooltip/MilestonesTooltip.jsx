import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './MilestonesTooltip.css'

const propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  className: PropTypes.string,
}

const defaultProps = {
  className: '',
}

const dateFormat = 'MMM Do, YY'

export const MilestonesTooltip = ({ className, startDate, endDate }) => {
  const _startDate = moment(startDate)
  const _endDate = moment(endDate)
  return (
    <div className={`tooltip milestones ${className}`}>
      <span className='pointer'></span>
      {`${_startDate.format(dateFormat)} - ${_endDate.format(dateFormat)}`}
    </div>
  )
}

MilestonesTooltip.propTypes = propTypes
MilestonesTooltip.defaultProps = defaultProps
