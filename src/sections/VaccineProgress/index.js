import React, { useState } from 'react'
import * as S from '../../styles'
import Tile from '../../components/Tile/Tile'
import Filter from '../../components/Filter/Filter'
import FilterList from '@material-ui/icons/FilterList'
import Graph from '../../components/Graph/Graph'
import SortDropdown from '../../components/SortDropdown/SortDropdown'
import Legend from '../../components/Legend/Legend'
import {
  sadBlue,
  magenta,
  yellow,
  tourquese,
  green,
} from '../../constants/colors'

const VaccineProgress = () => {
  // const getTrialData = () => [
  //   {
  //     country: 'Italy',
  //     number: Math.random(),
  //   },
  //   {
  //     country: 'France',
  //     number: Math.random(),
  //   },
  //   {
  //     country: 'Romania',
  //     number: Math.random(),
  //   },
  // ]
  const stages = [
    { label: 'Stage 1', color: sadBlue },
    { label: 'Stage 2', color: magenta },
    { label: 'Stage 3', color: yellow },
    { label: 'Stage 4', color: tourquese },
    { label: 'Stage 5', color: green },
  ]
  // const [trialData, setTrialData] = useState(getTrialData())
  const [showFilters, setShowFilters] = useState(false)
  const [filterItems, setFilterItems] = useState(
    [...stages].map(stage => ({ ...stage, selected: false }))
  )
  const toggleFilter = label => {
    const modifiedFilters = filterItems.map(item => ({
      ...item,
      selected: item.label === label ? !item.selected : item.selected,
    }))
    setFilterItems(modifiedFilters)
  }

  return (
    <Tile header='Vaccine Progress'>
      <S.ActionItems>
        <S.FilterContainer>
          <S.FilterTitle onClick={() => setShowFilters(!showFilters)}>
            <FilterList /> Filters
          </S.FilterTitle>
          {showFilters && (
            <Filter
              items={filterItems}
              heading='Stages'
              onFilterClick={toggleFilter}
            />
          )}
        </S.FilterContainer>
        <S.SortTitle>Sort: </S.SortTitle>
        <SortDropdown
          onChange={selection => {
            // TODO: hook this up to real data when we have it
            // For now, this just regenerates the data whenever the sort is changed
            console.log('Selected to sort by: ' + selection.label)
            // setTrialData(getTrialData())
          }}
        />
      </S.ActionItems>
      <Graph />
      <Legend items={stages} />
    </Tile>
  )
}

export default VaccineProgress
