import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Legend = props => {
  const { items } = props
  return (
    <S.Wrapper>
      {items.map((item, i) => (
        <div key={i}>
          <S.Square style={{ backgroundColor: item.color }} />
          <S.Label>{item.label}</S.Label>
        </div>
      ))}
    </S.Wrapper>
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
