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

const MapAndMilestones = ({ pins, type, handleSelectedId }) => {
  const title = type === 'vaccine' ? 'Vaccine Map' : 'Treatment Map'
  const tabs = [
    {
      title,
      content: (
        <Tile>
          <MapDiv>
            <Map pins={pins} handleSelectedId={handleSelectedId} />
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
  pins: PropTypes.arrayOf(PropTypes.shape({})),
  type: PropTypes.string,
  handleSelectedId: PropTypes.func,
}

MapAndMilestones.defaultProps = {
  pins: [],
  type: 'vaccine',
}

export default MapAndMilestones
