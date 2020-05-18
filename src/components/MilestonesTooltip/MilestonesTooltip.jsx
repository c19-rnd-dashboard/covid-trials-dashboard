import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './MilestonesTooltip.css'

const propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.oneOf(['COMPLETED']),
}

const defaultProps = {
  className: '',
  start: null,
  end: null,
  status: 'COMPLETED',
}

const dateFormat = 'MMM Do, Y'

export const MilestonesTooltip = ({
  className,
  startDate,
  endDate,
  status,
}) => {
  let renderStr = ''
  if (startDate && endDate) {
    renderStr = `${moment(startDate).format(dateFormat)} - ${moment(
      endDate
    ).format(dateFormat)}`
  } else if (startDate) {
    renderStr = `Started: ${moment(startDate).format(dateFormat)}`
  } else if (endDate) {
    renderStr = `Ended: ${moment(endDate).format(dateFormat)}`
  } else {
    renderStr = status
  }
  return (
    <div className={`tooltip milestones ${className}`}>
      <span className='pointer'></span>
      {renderStr}
    </div>
  )
}

MilestonesTooltip.propTypes = propTypes
MilestonesTooltip.defaultProps = defaultProps
