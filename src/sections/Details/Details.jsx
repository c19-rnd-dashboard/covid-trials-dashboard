import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Tile from '../../components/Tile/Tile'
import { phases } from 'components/MilestonesGraph/constants'

const getCurrentMilestoneStage = milestones => {
  const completed = milestones.filter(({ status }) => status === 'COMPLETED')
  const [last] = completed.slice(-1)
  return last ? phases[last.name] : null
}

const Details = ({ selectedAsset }) => {
  const asset = selectedAsset || {
    preferredName: 'Selected Product Details',
    chemicalName: '...',
    brandName: '...',
    indication: '...',
    moleculeType: '...',
    therapeuticApproach: '...',
    repurposed: '...',
    otherPartners: '...',
    countries: [],
    status: '...',
    currentStatus: '...',
    milestones: [],
  }
  const {
    preferredName,
    chemicalName,
    brandName,
    indication,
    moleculeType,
    therapeuticApproach,
    repurposed,
    otherPartners,
    countries,
    status,
    milestones,
  } = asset
  const vaccineData = [
    {
      category: 'Chemical Name',
      data: chemicalName,
    },
    {
      category: 'Brand Name',
      data: brandName,
    },
    {
      category: 'Indication',
      data: indication,
    },
    {
      category: 'Molecule Type',
      data: moleculeType,
    },
    {
      category: 'Therapeutic Approach',
      data: therapeuticApproach,
    },
    {
      category: 'New/Repurposed',
      data: repurposed,
    },
    {
      category: 'Partners',
      data: otherPartners,
    },
    {
      category: 'Country(s)',
      data: countries.join(', '),
    },
    {
      category: 'Status',
      data: status,
    },
    {
      category: 'Current Milestone Stage',
      data: getCurrentMilestoneStage(milestones),
    },
  ]
  return (
    <Tile header={<b>{preferredName}</b>}>
      <S.Wrapper>
        {vaccineData.map(({ category, data }, i) => {
          return (
            <S.Container key={i}>
              <div>{category}</div>
              <S.Data>{data || '-'}</S.Data>
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
