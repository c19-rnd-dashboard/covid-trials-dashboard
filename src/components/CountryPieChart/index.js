import React from 'react'
import PropTypes from 'prop-types'
import { pipe, map } from 'sanctuary'
import { count } from 'utils/utils'
import { ResponsivePie } from '@nivo/pie'

const countCountries = pipe([
  map(({ countryCodes }) => countryCodes),
  (ls = []) => ls.flat(),
  count,
])

const mapCountObjToData = pipe([
  Object.entries,
  map(([countryCode, value]) => ({
    id: countryCode,
    label: countryCode,
    value,
  })),
])

export const CountryChart = ({ assets }) => {
  const countsOfCountries = countCountries(assets)
  const data = mapCountObjToData(countsOfCountries)
  return <ResponsivePie data={data} animate={true} />
}

CountryChart.propTypes = {
  assets: PropTypes.array.isRequired,
}
