import React from 'react'
import PropTypes from 'prop-types'
import { ChartCard, Title } from './CharWrapper.styles'

export const ChartWrapper = ({ title, children }) => (
  <ChartCard>
    <Title>{title}</Title>
    {children}
  </ChartCard>
)

ChartWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ChartWrapper.defaultProps = {
  title: '',
}
