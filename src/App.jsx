import React, { useState } from 'react'
import * as S from './styles'
import Navbar from './components/Navbar/Navbar'
import Tile from './Tile/Tile'
import Graph from './Graph/Graph'
import Details from './Details/Details'
import Filter from './components/Filter/Filter'
import FilterList from '@material-ui/icons/FilterList'
import SortDropdown from './SortDropdown/SortDropdown'
import VolunteerLocations from './VolunteerLocations/VolunteerLocations'
import Legend from './Legend/Legend'
import { sadBlue, magenta, yellow, tourquese, green } from './constants/colors'
import { HydrateDataWrapper } from './components/wrappers/HydrateDataWrapper'
import { StateProvider } from './store'

const stages = [
  { label: 'Stage 1', color: sadBlue },
  { label: 'Stage 2', color: magenta },
  { label: 'Stage 3', color: yellow },
  { label: 'Stage 4', color: tourquese },
  { label: 'Stage 5', color: green },
]

function App() {
  const getTrialData = () => [
    {
      country: 'Italy',
      number: Math.random(),
    },
    {
      country: 'France',
      number: Math.random(),
    },
    {
      country: 'Romania',
      number: Math.random(),
    },
  ]
  const [trialData, setTrialData] = useState(getTrialData())
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

  const updatedDate = () => {
    const date = new Date()
    return (
      'Last updated at (' +
      date.getMonth() +
      '/' +
      1 +
      date.getDay() +
      '/' +
      date.getFullYear() +
      ')'
    )
  }
  return (
    <StateProvider>
      <HydrateDataWrapper>
        <div className='App'>
          <Navbar />
          <S.Content>
            <div style={{ flex: '1' }}>
              <Tile header='Total Vaccine Products'>23</Tile>
              <Tile header='Vaccine Trials by Country'>
                {trialData.map((trial, i) => {
                  return (
                    <S.TrialContainer key={i}>
                      <div>{trial.number}</div>
                      <S.TrialCountry>{trial.country}</S.TrialCountry>
                    </S.TrialContainer>
                  )
                })}
              </Tile>
              <Tile header={updatedDate()} />
            </div>
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
                    setTrialData(getTrialData())
                  }}
                />
              </S.ActionItems>
              <Graph />
              <Legend items={stages} />
            </Tile>
            <S.RightColumn>
              <Tile header='Vaccine Details'>
                <Details />
              </Tile>
              <Tile header='Vaccine Volunteer Locations'>
                <VolunteerLocations />
              </Tile>
            </S.RightColumn>
          </S.Content>
        </div>
      </HydrateDataWrapper>
    </StateProvider>
  )
}

export default App
