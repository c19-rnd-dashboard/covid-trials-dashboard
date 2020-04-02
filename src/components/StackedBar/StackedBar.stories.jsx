import React from 'react'
import { StackedBar } from './StackedBar'

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
  <StackedBar
    // eslint-disable-next-line react/prop-types
    tooltip={props => <span className='tooltip'>{props.value}</span>}
    items={items}
    colorBgStyles={colorBgStyles}
  />
)
