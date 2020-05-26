import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import { phasesInOrder, phaseColor } from 'components/MilestonesGraph/constants'

const legendProps = phasesInOrder.map(phase => ({
  color: phaseColor[phase],
  label: phase,
}))

const Legend = props => {
  const { items = legendProps } = props
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
