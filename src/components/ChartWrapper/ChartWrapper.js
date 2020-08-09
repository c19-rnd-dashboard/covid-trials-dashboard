import React from 'react'
import PropTypes from 'prop-types'
import { ChartCard, Title } from './CharWrapper.styles'
import { CardContent } from '@material-ui/core'

export const ChartWrapper = ({ title, children }) => (
  <ChartCard>
    <CardContent style={{ height: '100%' }}>
      <Title color='textSecondary'>{title}</Title>
      {children}
    </CardContent>
  </ChartCard>
)

ChartWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ChartWrapper.defaultProps = {
  title: '',
}
