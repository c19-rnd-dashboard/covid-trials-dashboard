import React from 'react'
import Tabs from '../../components/Tabs'
import Map from '../../components/Map'
import Tile from '../../components/Tile/Tile'
import { MilestonesGraph } from '../../components/MilestonesGraph/MilestonesGraph'
import { milestones } from '../../components/MilestonesGraph/mocks/milestones'
import styled from 'styled-components'

const MapDiv = styled.div`
  width: 100%;
  height: 65vh;
`

const MapAndMilestones = ({ vaccines }) => {
  const tabs = [
    {
      title: 'Vaccine Map',
      content: (
        <Tile>
          <MapDiv>
            <Map pins={vaccines} />
          </MapDiv>
        </Tile>
      )
    },
    {title: 'Milestones', content: <MilestonesGraph milestones={milestones} />},
  ]

  return <Tabs tabs={tabs} />
}

export default MapAndMilestones;
