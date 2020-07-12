import React from 'react'
import { CountryChart } from 'components/CountryPieChart'
import PropTypes from 'prop-types'

export const Charts = ({ pins: assets }) => (
  <div style={{ height: '400px', color: 'black' }}>
    <CountryChart assets={assets} />
  </div>
)

Charts.propTypes = {
  pins: PropTypes.array.isRequired,
}
