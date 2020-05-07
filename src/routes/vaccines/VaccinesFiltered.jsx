import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Tile from '../../components/Tile/Tile'
import Details from '../../sections/Details/Details'
import VolunteerLocations from '../../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../../sections/MapAndMilestones'
import * as S from '../../styles'
import styled from 'styled-components'
import {
  useQueryParams,
  ArrayParam,
  withDefault,
  StringParam,
} from 'use-query-params'
import FilterDropdown from 'components/FilterDropdown/FilterDropdown'
// import { ProdData } from '../../mocks/assets'

const TabbedSection = styled.div`
  min-width: 40%;
`
const Flex1 = styled.div`
  flex: 1;
`

const Vaccines = ({ vaccines }) => {
  const [filteredVacs, setFilteredVacs] = useState([])
  const [selectedAsset, setSelectedAsset] = useState()
  const [filtersSelected, setFiltersSelected] = useQueryParams({
    s: withDefault(ArrayParam, []), // s denotes sponsor
    n: withDefault(ArrayParam, []), // n denotes name
    i: StringParam, // i denotes individual asset id
  })
  useEffect(() => {
    let filteredResults = [...vaccines]
    if (filtersSelected.s.length > 0) {
      filteredResults = filteredResults.filter(vac =>
        vac.sponsors.some(
          sponsor => filtersSelected.s.indexOf(sponsor.sponsorName) > -1
        )
      )
    }
    if (filtersSelected.n.length > 0) {
      filteredResults = filteredResults.filter(
        vac => filtersSelected.n.indexOf(vac.preferredName) > -1
      )
    }
    if (filtersSelected.i !== undefined) {
      const asset = filteredResults.filter(
        vac => filtersSelected.i == vac.productId
      )
      setSelectedAsset(asset[0]) // we should assume only one asset per productId
    }
    if (filtersSelected.i === undefined && selectedAsset) {
      setSelectedAsset(null)
    }
    if (filteredResults.length !== filteredVacs.length) {
      setFilteredVacs(filteredResults)
    }
  }, [
    vaccines,
    filtersSelected.s,
    filtersSelected.n,
    filteredVacs.length,
    selectedAsset,
  ])

  const uniqueSponsors = [
    ...new Set(
      vaccines
        .map(vac => vac.sponsors.map(sponsor => sponsor.sponsorName))
        .flat(1)
    ),
  ]
  const uniqueNames = [
    ...new Set(vaccines.map(vac => vac.preferredName).flat(1)),
  ]
  const handleSelectedSponsor = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, s: [] })
    } else {
      const { name, checked } = e.target
      const sponsorsCopy = [...filtersSelected.s]
      if (checked === true) {
        sponsorsCopy.push(name)
      } else {
        const index = filtersSelected.s.indexOf(name)
        sponsorsCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, s: sponsorsCopy })
    }
  }

  const handleSelectedName = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, n: [] })
    } else {
      const { name, checked } = e.target
      const namesCopy = [...filtersSelected.n]
      if (checked === true) {
        namesCopy.push(name)
      } else {
        const index = filtersSelected.n.indexOf(name)
        namesCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, n: namesCopy })
    }
  }

  const handleSelectedId = assetId => {
    if (assetId === 'clear') {
      setFiltersSelected({ ...filtersSelected, i: undefined })
    } else {
      setFiltersSelected({ ...filtersSelected, i: assetId })
    }
  }

  return (
    <>
      <Flex1>
        <Tile header='Total Vaccine Products'>{vaccines.length || '...'}</Tile>
        <Tile>
          <FilterDropdown
            filters={uniqueSponsors}
            selected={filtersSelected.s}
            handleSelected={handleSelectedSponsor}
          />
          <FilterDropdown
            label='name'
            filters={uniqueNames}
            selected={filtersSelected.n}
            handleSelected={handleSelectedName}
          />
        </Tile>
      </Flex1>
      <TabbedSection>
        <MapAndMilestones
          pins={filteredVacs}
          type='vaccine'
          handleSelectedId={handleSelectedId}
        />
      </TabbedSection>
      <S.RightColumn>
        <Details selectedAsset={selectedAsset} />
        <VolunteerLocations />
      </S.RightColumn>
    </>
  )
}

Vaccines.propTypes = {
  vaccines: PropTypes.arrayOf(PropTypes.shape({})),
}

Vaccines.defaultProps = {
  vaccines: [],
}

export default Vaccines
