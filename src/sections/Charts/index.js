import React from 'react'
import PropTypes from 'prop-types'
import { prop, pipe, map } from 'sanctuary'
import { ChartWrapper } from 'components/ChartWrapper'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { converCountIntoChartData, countBy } from 'utils/utils'
import {
  phaseColor,
  phasesInOrder,
  phases,
} from 'components/MilestonesGraph/constants'
import { snake } from 'case'
import { filterAndSortMilestones } from 'components/MilestonesGraph/mapAssetToMilestones'

const getChartData = mapper => pipe([countBy(mapper), converCountIntoChartData])

const chartList = [
  {
    title: 'Stage',
    mapper: ({ currentStage, milestones }) => {
      const [latestKnownMilestone = {}] = filterAndSortMilestones(
        milestones
      ).slice(-1)
      const result =
        phases[snake(currentStage)] || latestKnownMilestone.name || 'unknown'
      console.log(result)
      return result
    },
    mapEntireData: data => {
      return [...data].sort(({ id: idA }, { id: idB }) => {
        const [a, b] = [idA, idB].map(a => phasesInOrder.indexOf(a))
        if (a === -1) {
          return 1
        } else if (b === -1) {
          return -1
        } else {
          return a - b
        }
      })
    },
    chartAttribites: {
      colors: ({ data: { id } }) => {
        const color = phaseColor[id] || 'white'
        return color
      },
    },
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
  chartList.map(
    ({
      title,
      mapper,
      mapChartData = a => a,
      mapEntireData = a => a,
      chartAttribites = {},
    }) => {
      const data = pipe([
        getChartData(mapper),
        map(mapChartData),
        mapEntireData,
      ])(assets)
      console.log(data)
      const ChartComponent = data.length > 4 ? ResponsiveBar : ResponsivePie
      return (
        <ChartWrapper key={title} title={title}>
          <ChartComponent
            data={data}
            {...chartAttribites}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </ChartWrapper>
      )
    }
  )

Charts.propTypes = {
  pins: PropTypes.array.isRequired,
}
