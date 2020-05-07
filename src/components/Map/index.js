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

const Map = ({ pins, handleSelectedId }) => {
  const [popUp, setPopUp] = useState(null)
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
