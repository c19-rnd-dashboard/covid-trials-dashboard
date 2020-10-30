import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from './styles'

const propTypes = {
  children: PropTypes.node,
  length: PropTypes.number,
}

const defaultProps = {
  length: 3,
  children: '',
}

export const BarIndicator = ({ children, length }) => {
  const classes = useStyles({ length })
  return (
    <div className={classes.indicator}>
      <div className={classes.dot} />
      <div className={classes.label}>{children}</div>
    </div>
  )
}

BarIndicator.propTypes = propTypes
BarIndicator.defaultProps = defaultProps
