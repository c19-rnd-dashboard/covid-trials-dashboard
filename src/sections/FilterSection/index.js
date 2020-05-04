import React, { useState, useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import Tile from '../../components/Tile/Tile'
import {
  sadBlue,
  magenta,
  yellow,
  tourquese,
  green,
} from '../../constants/colors'
import { useQueryParams, ArrayParam, withDefault } from 'use-query-params'

const FilterSection = () => {
  const [stages, setStageClicked] = useState([
    { label: 'Stage 1', color: sadBlue, filterBy: '1' },
    { label: 'Stage 2', color: magenta, filterBy: '2' },
    { label: 'Stage 3', color: yellow, filterBy: '3' },
    { label: 'Stage 4', color: tourquese, filterBy: '4' },
    { label: 'Stage 5', color: green, filterBy: '5' },
  ])
  const [stageParams, setStageParam] = useQueryParams({
    stages: withDefault(ArrayParam, []),
  })

  useEffect(() => {
    // Apply filters from URL on mounting
    const stagesCopy = [...stages]
    stagesCopy.forEach(stage => {
      if (stageParams.stages.includes(stage.filterBy)) {
        stage.selected = true
      }
    })
    setStageClicked(stagesCopy)
  }, [])

  const onFilterClick = element => {
    const stagesCopy = [...stages]
    const clickedFilter = stagesCopy.filter(
      filterObj => filterObj.label === element
    )[0]
    clickedFilter.selected = !clickedFilter.selected
    setStageClicked(stagesCopy)
    const newStageParamFilter = [...stageParams.stages]

    const index = newStageParamFilter.indexOf(clickedFilter.filterBy)
    if (index > -1) {
      newStageParamFilter.splice(index, 1)
    } else {
      newStageParamFilter.push(clickedFilter.filterBy)
    }
    setStageParam({ stages: newStageParamFilter })
  }

  return (
    <Tile>
      <div style={{ position: 'relative', left: '30px' }}>
        <Filter items={stages} heading='Stages' onFilterClick={onFilterClick} />
      </div>
    </Tile>
  )
}

export default FilterSection
