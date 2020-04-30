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

const Vaccines = ({ vaccines }) => {
  return (
    <>
      <div style={{ flex: '1' }}>
        <Tile header='Total Vaccine Products'>23</Tile>
        <TrialByCountry />
      </div>
      <TabbedSection>
        <MapAndMilestones vaccines={vaccines} />
      </TabbedSection>
      <S.RightColumn>
        <Details />
        <VolunteerLocations />
      </S.RightColumn>
    </>
  )
}

export default Vaccines
