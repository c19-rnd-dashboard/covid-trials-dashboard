import React from 'react'
import Map from './index'
import Tile from '../../Tile/Tile'
import mocks from '../../mocks/assets'

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
