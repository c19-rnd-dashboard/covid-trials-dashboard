import React from 'react'
import Map from './index'
import Tile from '../../Tile/Tile'

const mocks = [
  {
    brandName: '',
    chemicalName: 'mrna-1273',
    conditionOrDisease: 'covid-19',
    countries: 'united states',
    countryCodes: 'usa',
    currentStatus: 'phase 1',
    indication: 'covid-19',
    interventionType: 'vaccine - prophylactic',
    moleculeType: 'nucleic acid based therapies/vaccines',
    notes: 'mrna-based vaccine',
    numSites: '2',
    otherPartners: 'cepi',
    phase: '1',
    preferredName: 'mrna-1273',
    productId: 1,
    productType: '',
    repurposed: 'new',
    sponsors: 'moderna,national institute of allergy and infectious diseases',
    status: 'ongoing',
    therapeuticApproach: 'unknown',
    trialId: 'nct04283461',
    siteLocations: [
      {
        name: 'Hospital Pkwy',
        city: 'San Jose',
        state: 'California',
        country: 'USA',
        lat: 37.239746,
        lon: -121.802344,
      },
    ],
  },
  {
    brandName: 'test',
    chemicalName: 'mrna-1272',
    conditionOrDisease: 'covid-19',
    countries: 'united states',
    countryCodes: 'usa',
    currentStatus: 'phase 1',
    indication: 'covid-19',
    interventionType: 'treatment',
    moleculeType: 'nucleic acid based therapies/vaccines',
    notes: 'mrna-based vaccine',
    numSites: '2',
    otherPartners: 'cepi',
    phase: '1',
    preferredName: 'mrna-1273',
    productId: 1,
    productType: '',
    repurposed: 'new',
    sponsors: 'moderna,national institute of allergy and infectious diseases',
    status: 'ongoing',
    therapeuticApproach: 'unknown',
    trialId: 'nct04283461',
    siteLocations: [
      {
        name: 'Test',
        city: 'Test2',
        state: 'NY',
        country: 'USA',
        lat: 40.6643,
        lon: -73.9385,
      },
    ],
  },
]

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
