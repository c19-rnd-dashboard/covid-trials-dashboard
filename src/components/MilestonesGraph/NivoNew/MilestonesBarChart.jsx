import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const keys = ['discovery', 'medicalBatch', 'onMarket']
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: [
    {
      case: 'actual',
      discovery: 20,
      discoveryDate: new Date('2020/10/21'),
      medicalBatch: 25,
      onMarket: 20,
    },
    {
      case: 'optimistic',
      discovery: 15,
      medicalBatch: 10,
      onMarket: 20,
    },
    {
      case: 'pessimistic',
      discovery: 50,
      medicalBatch: 40,
      onMarket: 60,
    },
  ],
  indexBy: 'case',
  keys,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

export const MilestonesBarChart = () => {
  // console.log(commonProps.data)
  return (
    <div style={{ height: 350 }}>
      <ResponsiveBar
        {...commonProps}
        layout='horizontal'
        enableGridY={false}
        enableGridX={true}
      />
      )
    </div>
  )
}
