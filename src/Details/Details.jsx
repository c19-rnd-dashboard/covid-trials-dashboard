import React from 'react'
import * as S from './styles'

const Details = () => {
  const vaccineData = [
    {
      category: 'Asset Name',
      data: 'Covidlitin',
    },
    {
      category: 'Sponsor',
      data: 'Gov',
    },
    {
      category: 'Partners',
      data: 'WHO',
    },
    {
      category: 'Country',
      data: 'UK',
    },
    {
      category: 'Drug Type',
      data: 'A-B',
    },
    {
      category: 'Molecule Type',
      data: 'A-B',
    },
  ]
  return (
    <S.Wrapper>
      {vaccineData.map((vaccine, i) => {
        return (
          <S.Container key={i}>
            <div>{vaccine.category}</div>
            <S.Data>{vaccine.data}</S.Data>
          </S.Container>
        )
      })}
    </S.Wrapper>
  )
}

export default Details
