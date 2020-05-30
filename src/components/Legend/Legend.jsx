import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import * as S from './styles'
import {
  phasesInOrder,
  phaseColor,
  phaseDisplayName,
} from 'components/MilestonesGraph/constants'

const legendProps = phasesInOrder.map(phase => ({
  color: phaseColor[phase],
  label: phaseDisplayName[phase].label,
  info: phaseDisplayName[phase].info,
}))

const BigFontTooltip = withStyles(() => ({
  tooltip: {
    fontSize: '1rem',
  },
}))(Tooltip)

const Legend = props => {
  const { items = legendProps } = props
  return (
    <S.Wrapper>
      {items.map(item => (
        <BigFontTooltip key={item.label} title={item.info}>
          <S.Item>
            <S.Square style={{ backgroundColor: item.color }} />
            <S.Label>{item.label}</S.Label>
          </S.Item>
        </BigFontTooltip>
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
