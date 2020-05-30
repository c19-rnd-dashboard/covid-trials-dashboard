import React from 'react'
import PropTypes from 'prop-types'
import { Indicator, Dot, Label } from './styles'

const propTypes = {
  children: PropTypes.element,
  length: PropTypes.number,
}

const defaultProps = {
  length: 3,
  children: '',
}

export const BarIndicator = ({ children, length }) => (
  <Indicator length={length}>
    <Dot />
    <Label>{children}</Label>
  </Indicator>
)

BarIndicator.propTypes = propTypes
BarIndicator.defaultProps = defaultProps
