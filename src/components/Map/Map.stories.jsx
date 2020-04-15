import React from 'react'
import Map from './index'
import Tile from '../../Tile/Tile'

const mockCities = [
  {
    city: 'New York',
    state: 'New York',
    latitude: 40.6643,
    longitude: -73.9385,
  },
  { city: 'Los Angeles', latitude: 34.0194, longitude: -118.4108 },
  { city: 'Chicago', latitude: 41.8376, longitude: -87.6818 },
  { city: 'Houston', state: 'Texas', latitude: 29.7805, longitude: -95.3863 },
  { city: 'Phoenix', state: 'Arizona', latitude: 33.5722, longitude: -112.088 },
  {
    city: 'San Antonio',
    state: 'Texas',
    latitude: 29.4724,
    longitude: -98.5251,
  },
  {
    city: 'San Diego',
    state: 'California',
    latitude: 32.8153,
    longitude: -117.135,
  },
  {
    city: 'San Francisco',
    state: 'California',
    latitude: 37.7751,
    longitude: -122.4193,
  },
  { city: 'Columbus', state: 'Ohio', latitude: 39.9848, longitude: -82.985 },
  {
    city: 'Seattle',
    state: 'Washington',
    latitude: 47.6205,
    longitude: -122.3509,
  },
]

export default {
  title: 'Map',
}

export const DefaultMap = () => (
  <Tile header='Map'>
    <div style={{ height: '88vh', width: '98vw' }}>
      <Map pins={mockCities} />
    </div>
  </Tile>
)
