import React from 'react'
import Tile from '../../components/Tile/Tile'
import Details from '../../sections/Details/Details'
import VolunteerLocations from '../../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../../sections/MapAndMilestones'
import TrialByCountry from '../../sections/VaccinesByCountry'
import * as S from '../../styles'
import styled from 'styled-components'

const TabbedSection = styled.div`
  min-width: 40%;
`
const Flex1 = styled.div`
  flex: 1;
`

const Treatments = ({ treatments }) => {
  return (
    <>
      <Flex1>
        <Tile header='Total Vaccine Products'>23</Tile>
        <TrialByCountry />
      </Flex1>
      <TabbedSection>
        <MapAndMilestones treatments={treatments} />
      </TabbedSection>
      <S.RightColumn>
        <Details />
        <VolunteerLocations />
      </S.RightColumn>
    </>
  )
}

export default Treatments
