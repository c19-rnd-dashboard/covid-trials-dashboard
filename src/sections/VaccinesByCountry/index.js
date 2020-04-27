import React from 'react'
import Tile from '../../components/Tile/Tile'
import * as S from '../../styles'

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

const trialData = [
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

const TrialByCountry = () => {
  return (
    <>
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
    </>
  )
}

export default TrialByCountry
