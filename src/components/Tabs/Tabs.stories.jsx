import React from 'react'
import Tabs from './Tabs'
import Tile from '../Tile/Tile'

export default {
  title: 'Tabs',
}

const tabs = [
  {
    title: 'First Tab',
    content: (
      <Tile header='Tile component'>
        First Tab. Any component will work here
      </Tile>
    ),
  },
  {
    title: 'Second',
    content: <Tile header='Tile component 2'>2</Tile>,
  },
  {
    title: 'Third',
    content: <Tile header='Tile component 3'>Three</Tile>,
  },
]

export const TabComponent = () => <Tabs tabs={tabs} />
