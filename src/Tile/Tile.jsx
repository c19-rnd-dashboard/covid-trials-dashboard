import React from 'react'
import PropTypes from 'prop-types';
import './Tile.css'

const Tile = props => {
  const { header, children } = props
  return (
    <div className='tile'>
      <div className='tileHeader'>{header}</div>
      <div className='tileContent'>{children}</div>
    </div>
  )
}

Tile.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node,
}

export default Tile
