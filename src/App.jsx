import React, { useState } from 'react'
import * as S from './styles'
import Tile from './Tile/Tile'
import Graph from './Graph/Graph'
import Details from './Details/Details'
import SortDropdown from './SortDropdown/SortDropdown'
import VolunteerLocations from './VolunteerLocations/VolunteerLocations'
import Legend from './Legend/Legend'
import { sadBlue, magenta, yellow, tourquese, green } from './constants.js'

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
    <div className='App'>
      <S.HeaderBanner>
        Coronavirus (COVID-19) Research and Development Dashboard
      </S.HeaderBanner>
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
          <Legend
            items={[
              { label: 'Stage 1', color: sadBlue },
              { label: 'Stage 2', color: magenta },
              { label: 'Stage 3', color: yellow },
              { label: 'Stage 4', color: tourquese },
              { label: 'Stage 5', color: green },
            ]}
          />
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
  )
}

export default App
