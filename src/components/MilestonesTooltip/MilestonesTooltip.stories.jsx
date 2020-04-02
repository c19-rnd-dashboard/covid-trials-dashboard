import React from 'react'
import { MilestonesTooltip } from './MilestonesTooltip'

export default {
  title: 'Tooltips',
}

export const Milestones = () => (
  <MilestonesTooltip
    startDate={new Date('2020/02/10').toISOString()}
    endDate={new Date('2020/03/05').toISOString()}
  />
)
