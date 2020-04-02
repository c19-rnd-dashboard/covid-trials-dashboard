import React from 'react'
import { MilestonesGraph } from './MilestonesGraph'

export default {
  title: 'Milestones Graph',
}

const milestones = [
  {
    name: 'Optimistic',
    values: ['20%', '25%', '30%', '10%', '15%'],
  },
  {
    name: 'Pesimistic',
    values: ['20%', '25%', '30%', '10%', '15%'],
  },
  {
    name: 'Actual',
    values: ['20%', '25%', '30%'],
  },
]

export const Milestones = () => <MilestonesGraph milestones={milestones} />
