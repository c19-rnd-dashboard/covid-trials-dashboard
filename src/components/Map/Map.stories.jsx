import React from 'react'
import Map from './index'
import Tile from '../../Tile/Tile'
import mocks from '../../mocks/assets'
import { mapboxApiKey } from '../../constants/config'

export default {
  title: 'Map',
}

export const DefaultMap = () => (
  <Tile header='Map'>
    <div style={{ height: '88vh', width: '98vw' }}>
      <Map pins={mocks} />
    </div>
  </Tile>
)

export const ApiKeyExample = () => (
  <div>Map Key: {mapboxApiKey.substring(0, 10)}</div>
)
