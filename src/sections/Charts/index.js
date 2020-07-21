import React from 'react'
import PropTypes from 'prop-types'
import { prop, pipe } from 'sanctuary'
import { ChartWrapper } from 'components/ChartWrapper'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { converCountIntoChartData, countBy } from 'utils/utils'

const getChartData = mapper => pipe([countBy(mapper), converCountIntoChartData])

const chartList = [
  {
    title: 'by Stage',
    mapper: prop('currentStage'),
    mapChartData: a => a,
  },
  {
    title: 'by Molecule Type',
    mapper: prop('moleculeType'),
  },
  {
    title: 'by Therapeutic Approach',
    mapper: prop('therapeuticApproach'),
  },
  {
    title: 'by Indication',
    mapper: ({ indication }) => indication || 'Unknown',
  },
  {
    title: 'by New/Repurposed',
    mapper: ({ repurposed }) => repurposed || 'Unknown',
  },
]

export const Charts = ({ pins: assets }) =>
  chartList.map(({ title, mapper }) => {
    const data = getChartData(mapper)(assets)
    const ChartComponent = data.length > 4 ? ResponsiveBar : ResponsivePie
    return (
      <ChartWrapper key={title} title={title}>
        <ChartComponent data={data} />
      </ChartWrapper>
    )
  })

Charts.propTypes = {
  pins: PropTypes.array.isRequired,
}
