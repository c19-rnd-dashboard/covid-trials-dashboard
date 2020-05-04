import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Filter = props => {
  const { items, heading, onFilterClick } = props
  return (
    <S.Filter>
      <S.Heading>{heading}</S.Heading>
      {items.map(item => (
        <S.Item onClick={() => onFilterClick(item.label)} key={item.label}>
          <S.Box
            style={
              item.selected ? { backgroundColor: item.color || 'blue' } : {}
            }
          />
          <S.Label>{item.label}</S.Label>
          <S.Square style={{ backgroundColor: item.color }}></S.Square>
        </S.Item>
      ))}
    </S.Filter>
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
