import React from 'react'
import PropTypes from 'prop-types'
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

const MapAndMilestones = ({ vaccines, treatments }) => {
  const title = vaccines ? 'Vaccine Map' : 'Treatment Map'
  const tabs = [
    {
      title,
      content: (
        <Tile>
          <MapDiv>
            <Map pins={vaccines || treatments} />
          </MapDiv>
        </Tile>
      ),
    },
    {
      title: 'Milestones',
      content: <MilestonesGraph milestones={milestones} />,
    },
  ]

  return <Tabs tabs={tabs} />
}

MapAndMilestones.propTypes = {
  vaccines: PropTypes.arrayOf(PropTypes.shape({})),
  treatments: PropTypes.arrayOf(PropTypes.shape({}))
}

MapAndMilestones.defaultProps = {
  vaccines: [],
  treatments: [],
}

export default MapAndMilestones
