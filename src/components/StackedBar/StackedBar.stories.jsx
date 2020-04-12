import React from 'react'
import { StackedBar } from './StackedBar'
import { MilestonesTooltip } from '../MilestonesTooltip'

export default {
  title: 'StackedBar',
}

const colorBgStyles = ['blue', 'red', 'yellow', 'purple']

const oneItem = [
  {
    value: '100%',
  },
]
const items = [
  {
    value: '30%',
  },
  {
    value: '20%',
  },
  {
    value: '15%',
  },
  {
    value: '35%',
  },
]

export const onlyOne = () => (
  <div style={{ width: '30em' }}>
    <StackedBar items={oneItem} colorBgStyles={colorBgStyles} />
  </div>
)

export const stacked = () => (
  <StackedBar items={items} colorBgStyles={colorBgStyles} />
)

export const withTooltip = () => (
  <div style={{ height: '10em', display: 'flex', alignItems: 'flex-end' }}>
    <StackedBar
      // eslint-disable-next-line react/prop-types
      tooltip={() => (
        <MilestonesTooltip startDate={'2020/02/20'} endDate={'2020/03/15'} />
      )}
      items={items}
      colorBgStyles={colorBgStyles}
    />
  </div>
)
