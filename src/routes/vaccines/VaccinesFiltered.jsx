import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Tile from '../../components/Tile/Tile'
import Details from '../../sections/Details/Details'
import VolunteerLocations from '../../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../../sections/MapAndMilestones'
import * as S from '../../styles'
import styled from 'styled-components'
import { useQueryParams, ArrayParam, withDefault } from 'use-query-params'
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
  const [sponsorsSelected, setSponsorsSelected] = useQueryParams({
    s: withDefault(ArrayParam, []),
    n: withDefault(ArrayParam, []),
  })
  useEffect(() => {
    let filteredResults = [...vaccines]
    if (sponsorsSelected.s.length > 0) {
      filteredResults = vaccines.filter(vac =>
        vac.sponsors.some(
          sponsor => sponsorsSelected.s.indexOf(sponsor.sponsorName) > -1
        )
      )
    }
    if (sponsorsSelected.n.length > 0) {
      filteredResults = filteredResults.filter(
        vac => sponsorsSelected.n.indexOf(vac.preferredName) > -1
      )
    }
    if (filteredResults.length !== filteredVacs.length) {
      setFilteredVacs(filteredResults)
    }
  }, [vaccines, sponsorsSelected.s, sponsorsSelected.n, filteredVacs.length])

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
    const { name, checked } = e.target
    const sponsorsCopy = [...sponsorsSelected.s]
    if (checked === true) {
      sponsorsCopy.push(name)
    } else {
      const index = sponsorsSelected.s.indexOf(name)
      sponsorsCopy.splice(index, 1)
    }
    setSponsorsSelected({ ...sponsorsSelected, s: sponsorsCopy })
  }

  const handleSelectedName = e => {
    const { name, checked } = e.target
    const namesCopy = [...sponsorsSelected.n]
    if (checked === true) {
      namesCopy.push(name)
    } else {
      const index = sponsorsSelected.n.indexOf(name)
      namesCopy.splice(index, 1)
    }
    setSponsorsSelected({ ...sponsorsSelected, n: namesCopy })
  }

  return (
    <>
      <Flex1>
        <Tile header='Total Vaccine Products'>{vaccines.length || '...'}</Tile>
        <Tile>
          <FilterDropdown
            filters={uniqueSponsors}
            selected={sponsorsSelected.s}
            handleSelected={handleSelectedSponsor}
          />
          <FilterDropdown
            label='name'
            filters={uniqueNames}
            selected={sponsorsSelected.n}
            handleSelected={handleSelectedName}
          />
        </Tile>
      </Flex1>
      <TabbedSection>
        <MapAndMilestones pins={filteredVacs} type='vaccine' />
      </TabbedSection>
      <S.RightColumn>
        <Details />
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
