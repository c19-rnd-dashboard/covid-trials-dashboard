import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Tile from '../../components/Tile/Tile'

const Details = ({ selectedAsset }) => {
  const asset = selectedAsset || {
    brandName: '...',
    chemicalName: '...',
    conditionOrDisease: '...',
    countries: '...',
    countryCodes: '...',
    currentStatus: '...',
    indication: '...',
    interventionType: '...',
    moleculeType: '...',
    notes: '...',
    numSites: '...',
    otherPartners: '...',
    phase: '...',
    preferredName: 'Selected Product Details',
    productId: '...',
    productType: '...',
    repurposed: '...',
    sources: ['...'],
    sponsors: [{ sponsorId: '...', sponsorName: '...' }],
    status: '...',
    therapeuticApproach: '...',
    trialId: '...',
  }
  const {
    preferredName,
    sponsors,
    otherPartners,
    countries,
    interventionType,
    moleculeType,
    currentStatus,
  } = asset
  const vaccineData = [
    {
      category: 'Current Status',
      data: currentStatus,
    },
    {
      category: 'Sponsor',
      data: sponsors.map(sponsor => sponsor.sponsorName).join(', '),
    },
    {
      category: 'Partners',
      data: otherPartners,
    },
    {
      category: 'Country',
      data: countries,
    },
    {
      category: 'Drug Type',
      data: interventionType,
    },
    {
      category: 'Molecule Type',
      data: moleculeType,
    },
  ]
  return (
    <Tile header={<b>{preferredName}</b>}>
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
    </Tile>
  )
}

Details.propTypes = {
  selectedAsset: PropTypes.shape({}),
}

export default Details
