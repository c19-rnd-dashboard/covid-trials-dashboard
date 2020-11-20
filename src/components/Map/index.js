import React, { useState, useEffect, useContext, useMemo } from 'react'
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
import { store } from '../../store'

const Map = ({ pins, handleSelectedId }) => {
  const {
    state: { prefersDarkMode },
  } = useContext(store) || { state: { prefersDarkMode: false } }
  const [popUp, setPopUp] = useState()
  const [viewport, setViewport] = useState({
    latitude: 40.67,
    longitude: -73.94,
    zoom: 0.8,
    bearing: 0,
    pitch: 0,
  })

  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        location => {
          setViewport({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            altitude: location.coords.altitude,
            zoom: 9,
          })
        },
        error => {
          console.log('User did not allow location', error)
        }
      )
    }
  }, [])

  const PinComponent = useMemo(() => {
    const onClick = popupInfo => {
      setPopUp(popupInfo)
      handleSelectedId(popupInfo.productId)
    }
    return (
      <Pins data={pins} onClick={onClick} handleSelectedId={handleSelectedId} />
    )
  }, [pins, handleSelectedId])

  const PopUpComponent = useMemo(() => {
    const onClose = () => {
      setPopUp(null)
      handleSelectedId('clear')
    }
    return (
      <>
        <PopUpDisplay popupInfo={popUp} onClose={onClose} />
      </>
    )
  }, [popUp, handleSelectedId])

  const Controls = useMemo(() => {
    return (
      <>
        <FullscreenControlDiv>
          <FullscreenControl />
        </FullscreenControlDiv>
        <NavDiv>
          <NavigationControl />
        </NavDiv>
        <ScaleControlDiv>
          <ScaleControl />
        </ScaleControlDiv>
      </>
    )
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle={
        prefersDarkMode
          ? 'mapbox://styles/mapbox/dark-v10?optimize=true'
          : 'mapbox://styles/adibi2011/ckgtx36fp09lk19n2csgrxnu4'
      }
      mapboxApiAccessToken={mapboxApiKey}
      width='100%'
      height='100%'
    >
      {PinComponent}
      {PopUpComponent}
      {Controls}
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
