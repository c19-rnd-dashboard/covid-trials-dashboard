import React from 'react'
import Filter from './Filter'
import {
  sadBlue,
  magenta,
  yellow,
  tourquese,
  green,
} from '../../constants/colors'

export default {
  title: 'Filters',
}

const stages = [
  { label: 'Stage 1', color: sadBlue, selected: true },
  { label: 'Stage 2', color: magenta },
  { label: 'Stage 3', color: yellow },
  { label: 'Stage 4', color: tourquese },
  { label: 'Stage 5', color: green },
]

export const main = () => (
  <div style={{ position: 'relative', left: '30px' }}>
    <Filter items={stages} heading='Stages' />
  </div>
)
