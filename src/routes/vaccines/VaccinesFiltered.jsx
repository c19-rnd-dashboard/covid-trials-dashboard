import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Tile from '../../components/Tile/Tile'
import Details from '../../sections/Details/Details'
import VolunteerLocations from '../../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../../sections/MapAndMilestones'
import TrialByCountry from '../../sections/VaccinesByCountry'
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
    sp: withDefault(ArrayParam, []),
  })
  useEffect(() => {
    let filteredResults = vaccines
    if (sponsorsSelected.sp.length > 0) {
      filteredResults = vaccines.filter(vac =>
        vac.sponsors.some(
          sponsor => sponsorsSelected.sp.indexOf(sponsor.sponsorName) > -1
        )
      )
    }
    setFilteredVacs(filteredResults)
  }, [vaccines, sponsorsSelected.sp])

  const uniqueSponsors = [
    ...new Set(
      vaccines
        .map(vac => vac.sponsors.map(sponsor => sponsor.sponsorName))
        .flat(1)
    ),
  ]
  const handleSelectedSponsor = e => {
    const { name, checked } = e.target
    const sponsorsCopy = [...sponsorsSelected.sp]
    if (checked === true) {
      sponsorsCopy.push(name)
    } else {
      const index = sponsorsSelected.sp.indexOf(name)
      sponsorsCopy.splice(index, 1)
    }
    setSponsorsSelected({ sp: sponsorsCopy })
  }

  return (
    <>
      <Flex1>
        <Tile header='Total Vaccine Products'>23</Tile>
        <TrialByCountry />
        <FilterDropdown
          filters={uniqueSponsors}
          selected={sponsorsSelected.sp}
          handleSelected={handleSelectedSponsor}
        />
      </Flex1>
      <TabbedSection>
        <MapAndMilestones vaccines={filteredVacs} />
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
