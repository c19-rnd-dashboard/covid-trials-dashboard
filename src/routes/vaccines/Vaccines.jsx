import React from 'react'
import Tile from '../../components/Tile/Tile'
import Details from '../../sections/Details/Details'
import VolunteerLocations from '../../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../../sections/MapAndMilestones'
import TrialByCountry from '../../sections/VaccinesByCountry'
import * as S from '../../styles'

const Vaccines = ({ vaccines }) => {
  return (
    <>
      <div style={{ flex: '1' }}>
        <Tile header='Total Vaccine Products'>23</Tile>
        <TrialByCountry />
      </div>
      <div style={{ minWidth: '40%' }}>
        <MapAndMilestones vaccines={vaccines} />
      </div>
      <S.RightColumn>
        <Details />
        <VolunteerLocations />
      </S.RightColumn>
    </>
  )
}

export default Vaccines
