import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Tile from '../../components/Tile/Tile'
import Details from '../../sections/Details/Details'
import VolunteerLocations from '../../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../../sections/MapAndMilestones'
import TrialByCountry from '../../sections/VaccinesByCountry'
import * as S from '../../styles'
import styled from 'styled-components'
import FilterDropdown from 'components/FilterDropdown/FilterDropdown'
import { useQueryParams, ArrayParam, withDefault } from 'use-query-params'

const TabbedSection = styled.div`
  min-width: 40%;
`
const Flex1 = styled.div`
  flex: 1;
`

const Treatments = ({ treatments }) => {
  const [filteredTms, setFilteredTms] = useState([])
  const [sponsorsSelected, setSponsorsSelected] = useQueryParams({
    s: withDefault(ArrayParam, []),
    n: withDefault(ArrayParam, []),
  })
  useEffect(() => {
    let filteredResults = [...treatments]
    if (sponsorsSelected.s.length > 0) {
      filteredResults = treatments.filter(tm =>
        tm.sponsors.some(
          sponsor => sponsorsSelected.s.indexOf(sponsor.sponsorName) > -1
        )
      )
    }
    if (sponsorsSelected.n.length > 0) {
      filteredResults = filteredResults.filter(
        tm => sponsorsSelected.n.indexOf(tm.preferredName) > -1
      )
    }
    if (filteredResults.length !== filteredTms.length) {
      setFilteredTms(filteredResults)
    }
  }, [treatments, sponsorsSelected.s, sponsorsSelected.n])

  const uniqueSponsors = [
    ...new Set(
      treatments
        .map(tm => tm.sponsors.map(sponsor => sponsor.sponsorName))
        .flat(1)
    ),
  ]
  const uniqueNames = [
    ...new Set(treatments.map(tm => tm.preferredName).flat(1)),
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
        <Tile header='Total Treatment Products'>
          {treatments.length || '...'}
        </Tile>
        <TrialByCountry />
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
        <MapAndMilestones pins={filteredTms} type='treatment' />
      </TabbedSection>
      <S.RightColumn>
        <Details />
        <VolunteerLocations />
      </S.RightColumn>
    </>
  )
}

Treatments.propTypes = {
  treatments: PropTypes.arrayOf(PropTypes.shape({})),
}

Treatments.defaultProps = {
  treatments: [],
}

export default Treatments
