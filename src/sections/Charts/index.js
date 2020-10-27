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
import { snake, sentence } from 'case'
import { filterAndSortMilestones } from 'components/MilestonesGraph/mapAssetToMilestones'
import { fontColor } from 'constants/colors'
import MaxWidth from 'components/MaxWidth'

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
      colors: ({ data: { id } = {} } = {}) => {
        const color = phaseColor[id] || 'white'
        return color
      },
      tooltip: ({ data: { id } = {}, value }) => `${sentence(id)}: ${value}`,
    },
  },
  {
    title: 'Molecule Type',
    mapper: prop('moleculeType'),
  },
  {
    title: 'Therapeutic Approach',
    mapper: prop('therapeuticApproach'),
  },
  {
    title: 'Indication',
    mapper: ({ indication }) => indication || 'Unknown',
  },
  {
    title: 'New/Repurposed',
    mapper: ({ repurposed }) => repurposed || 'Unknown',
  },
]

const BarConfig = props => ({
  margin: { top: 0, right: 100, bottom: 160, left: 60 },
  enableGridY: false,
  borderColor: fontColor,
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 30,
    legend: props.title,
    legendPosition: 'middle',
    legendOffset: 100,
  },
})

const PieConfig = () => ({
  innerRadius: 0.5,
  padAngle: 1,
  cornerRadius: 4,
  radialLabelsTextColor: fontColor,
  margin: { top: 30, bottom: 30 },
})

export const Charts = ({ pins: assets }) => (
  <MaxWidth>
    <h1 style={{ fontSize: '48px' }}>
      {' '}
      Coronavirus (COVID-19) Vaccination Candidate Trials Tracker{' '}
    </h1>
    <h2 style={{ fontSize: '24px', fontWeight: 'normal' }}>
      {' '}
      When will a Coronavirus (COVID-19) Vaccine be available? Use this
      dashboard to view COVID Vaccine progress by stage, molecule type,
      therapeutic approach, and more.{' '}
    </h2>
    {chartList.map(
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
        const ChartComponent = data.length > 4 ? ResponsiveBar : ResponsivePie
        const config =
          ChartComponent === ResponsiveBar ? BarConfig({ title }) : PieConfig()
        return (
          <>
            <h1 style={{ fontSize: '36px' }}>
              {' '}
              Coronavirus (COVID-19) Vaccinations by {title}{' '}
            </h1>
            <ChartWrapper key={title} title={`By ${title}`}>
              <ChartComponent
                data={data}
                theme={{
                  axis: {
                    ticks: {
                      line: {
                        stroke: fontColor,
                      },
                      text: {
                        fill: fontColor,
                      },
                    },
                    legend: {
                      text: {
                        fill: fontColor,
                      },
                    },
                  },
                  label: {
                    text: {
                      fill: fontColor,
                    },
                  },
                }}
                colorBy='index'
                {...config}
                {...chartAttribites}
              />
            </ChartWrapper>
          </>
        )
      }
    )}
  </MaxWidth>
)

Charts.propTypes = {
  pins: PropTypes.array.isRequired,
}
