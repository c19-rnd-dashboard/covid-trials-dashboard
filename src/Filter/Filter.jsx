import React from 'react'
import PropTypes from 'prop-types'
import './Filter.css'

const Filter = props => {
  const { items, heading, onFilterClick } = props
  return (
    <div className='filter'>
      <div className='heading'>{heading}</div>
      {items.map(item => (
        <div
          onClick={() => onFilterClick(item.label)}
          className='item'
          key={item.label}
        >
          <span className={`box ${item.selected ? 'selected' : ''}`}></span>
          <span className='label'>{item.label}</span>
          <span
            className='square'
            style={{ backgroundColor: item.color }}
          ></span>
        </div>
      ))}
    </div>
  )
}

Filter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      selected: PropTypes.bool,
      color: PropTypes.string,
    })
  ),
  heading: PropTypes.string,
  onFilterClick: PropTypes.func,
}

export default Filter
