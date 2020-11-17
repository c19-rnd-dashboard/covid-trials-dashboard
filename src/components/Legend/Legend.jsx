import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Breadcrumbs, Typography, useTheme } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  phasesInOrder,
  phaseColor,
  phaseDisplayName,
} from 'components/MilestonesGraph/constants'
import { legendStyles } from './styles'

const legendProps = phasesInOrder.map(phase => ({
  id: phaseDisplayName[phase].label,
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
  const { items = legendProps, onChange, selected } = props
  const classes = legendStyles(props)
  const theme = useTheme()
  const selectedStyles = {
    textDecoration: 'underline',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  }
  return (
    <div className={classes.root}>
      <Breadcrumbs
        itemsBeforeCollapse={Infinity}
        separator='>'
        aria-label='breadcrumb'
      >
        {items.map(item => (
          <BigFontTooltip
            onClick={() => onChange(item)}
            key={item.id}
            title={item.info}
          >
            <div
              className={classes.item}
              style={
                selected && item.id === selected.id ? selectedStyles : null
              }
            >
              <div
                className={classes.square}
                style={{ backgroundColor: item.color }}
              />
              <Typography color='inherit'>{item.label}</Typography>
            </div>
          </BigFontTooltip>
        ))}
      </Breadcrumbs>
    </div>
  )
}

Legend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
  selected: PropTypes.shape({
    id: PropTypes.string,
  }),
}

Legend.defaultProps = {
  items: legendProps,
  onChange: () => {},
  selected: null,
}

export default Legend
