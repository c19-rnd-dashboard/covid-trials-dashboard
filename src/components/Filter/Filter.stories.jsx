import React, { useState } from 'react'
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

export const Main = () => {
  const [stages, setStageClicked] = useState([
    { label: 'Stage 1', color: sadBlue, filterBy: 'stage1' },
    { label: 'Stage 2', color: magenta, filterBy: 'stage2' },
    { label: 'Stage 3', color: yellow, filterBy: 'stage3' },
    { label: 'Stage 4', color: tourquese, filterBy: 'stage4' },
    { label: 'Stage 5', color: green, filterBy: 'stage5' },
  ])

  const onFilterClick = element => {
    const stagesCopy = [...stages]
    const clickedFilter = stagesCopy.filter(
      filterObj => filterObj.label === element
    )[0]
    clickedFilter.selected = !clickedFilter.selected
    // TODO: apply filter here
    setStageClicked(stagesCopy)
  }

  return (
    <div style={{ position: 'relative', left: '30px' }}>
      <Filter items={stages} heading='Stages' onFilterClick={onFilterClick} />
    </div>
  )
}
