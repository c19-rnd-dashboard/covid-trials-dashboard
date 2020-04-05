import React from 'react'
import { MilestonesGraph } from './MilestonesGraph'
import { milestones } from './mocks/milestones'

export default {
  title: 'Milestones Graph',
}

export const Milestones = () => <MilestonesGraph milestones={milestones} />
