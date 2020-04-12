import React from 'react'
import PropTypes from 'prop-types'
import './Legend.css'

const Legend = props => {
  const { items } = props
  return (
    <div className='legend'>
      {items.map(item => (
        <div key={item.label}>
          <span
            className='square'
            style={{ backgroundColor: item.color }}
          ></span>
          <span className='legendLabel'>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

Legend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
    })
  ),
}

export default Legend
