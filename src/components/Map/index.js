import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pins from './Pins'
import PopUpDisplay from './Popup'
import ReactMapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl'
import { mapboxApiKey } from '../../constants/config'
import { FullscreenControlDiv, NavDiv, ScaleControlDiv } from './styles'

const mock = {
  brandName: '',
  chemicalName: 'mrna-1273',
  conditionOrDisease: 'covid-19',
  countries: 'united states',
  countryCodes: 'usa',
  currentStatus: 'phase 1',
  indication: 'covid-19',
  interventionType: 'vaccine - prophylactic',
  milestones: [],
  moleculeType: 'nucleic acid based therapies/vaccines',
  notes: 'mrna-based vaccine',
  numSites: '2',
  otherPartners: 'cepi',
  phase: '1',
  preferredName: 'mrna-1273',
  productId: 1,
  productType: '',
  repurposed: 'new',
  // siteLocations: (2) [{…}, {…}],
  sources: [
    'https://www.nih.gov/news-events/news-releases/nih-…cal-trial-investigational-vaccine-covid-19-begins',
    'https://www.modernatx.com/modernas-work-potential-vaccine-against-covid-19',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=2',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=1',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=3',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=4',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=5',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=6',
    'https://clinicaltrials.gov/ct2/show/nct04283461?term=coronavirus+vaccine&draw=7',
    'https://corona.kpwashingtonresearch.org/',
  ],
  sponsors: [
    {
      sponsorId: '375ad6c4b12a03acefcf5e9b052423279351910a',
      sponsorName: 'Moderna',
    },
    {
      sponsorId: '69301ed353817a1eb80b77b32f82e5809965a871',
      sponsorName: 'National Institute of Allergy and Infectious Disease',
    },
  ],
  status: 'ongoing',
  therapeuticApproach: 'unknown',
  trialId: 'nct04283461',
  clickedLocation: {
    city: 'Seattle',
    country: 'US',
    lat: 47.6169397,
    lng: -122.329572,
    locationId: 'a6018262eeb2425434539c72bd2bc1cf527bca54',
    name: '1730 Minor Ave, Seattle, WA 98101, USA',
    state: 'WA',
  },
}

const Map = ({ pins, handleSelectedId }) => {
  const [popUp, setPopUp] = useState(mock)
  console.log(popUp, 'popUp')
  const [viewport, setViewport] = useState({
    latitude: 40.67,
    longitude: -73.94,
    zoom: 0.3,
    bearing: 0,
    pitch: 0,
  })

  const onClose = () => {
    setPopUp(null)
    handleSelectedId('clear')
  }

  const onClick = popupInfo => {
    setPopUp(popupInfo)
    handleSelectedId(popupInfo.productId)
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle='mapbox://styles/mapbox/dark-v10?optimize=true'
      mapboxApiAccessToken={mapboxApiKey}
      width='100%'
      height='100%'
    >
      <Pins data={pins} onClick={onClick} handleSelectedId={handleSelectedId} />
      <PopUpDisplay popupInfo={popUp} onClose={onClose} />
      <FullscreenControlDiv>
        <FullscreenControl />
      </FullscreenControlDiv>
      <NavDiv>
        <NavigationControl />
      </NavDiv>
      <ScaleControlDiv>
        <ScaleControl />
      </ScaleControlDiv>
    </ReactMapGL>
  )
}

Map.propTypes = {
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  ),
  handleSelectedId: PropTypes.func,
}

Map.defaultProps = {
  pins: null,
  handleSelectedId: () => {},
}

export default Map
