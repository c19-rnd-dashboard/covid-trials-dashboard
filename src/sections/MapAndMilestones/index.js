import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '../../components/Tabs'
import Map from '../../components/Map'
import Tile from '../../components/Tile/Tile'
import styled from 'styled-components'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
const MapDiv = styled.div`
  width: 100%;
  height: 65vh;
`

const MapAndMilestones = ({ pins, type, handleSelectedId, selectedAsset }) => {
  const title = type === 'vaccine' ? 'Vaccine Map' : 'Treatment Map'

  const tabs = [
    {
      title: 'Milestones',
      content: (
        <MilestonesGraphContainer
          selectedAsset={selectedAsset}
          pins={pins}
          handleSelectedId={handleSelectedId}
        />
      ),
    },
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
  ]

  return <Tabs tabs={tabs} />
}

MapAndMilestones.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  handleSelectedId: PropTypes.func,
  selectedAsset: PropTypes.shape({}),
  type: PropTypes.string,
}

MapAndMilestones.defaultProps = {
  pins: [],
  type: 'vaccine',
  selectedAsset: null,
}

export default MapAndMilestones
