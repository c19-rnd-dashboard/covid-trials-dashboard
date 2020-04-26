import React from 'react'
import Map from './index'
import Tile from '../../Tile/Tile'
import mocks from '../../mocks/assets'
import { mapboxApiKey, appName, environment } from '../../constants/config'

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
  <div style={{ color: 'white' }}>
    <div>Map Key: {mapboxApiKey.substring(0, 10)}</div>
    <div>App name: {appName}</div>
    <div>Environment: {environment}</div>
  </div>
)
